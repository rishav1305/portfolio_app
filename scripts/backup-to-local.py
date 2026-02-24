#!/usr/bin/env python3
"""Backup all Supabase portfolio data to a local PostgreSQL database on titan-pc."""

import json
import os
import subprocess
import sys
import urllib.request

SUPABASE_URL = os.environ.get("SUPABASE_URL", "")
SVC_KEY = os.environ.get("SUPABASE_SERVICE_ROLE_KEY", "")

if not SUPABASE_URL or not SVC_KEY:
    print("Error: Set SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY environment variables.")
    print("  export SUPABASE_URL='https://your-project.supabase.co'")
    print("  export SUPABASE_SERVICE_ROLE_KEY='your-service-role-key'")
    sys.exit(1)

TABLES = [
    "site_config",
    "experience",
    "education",
    "projects",
    "skill_categories",
    "services",
    "testimonials",
    "case_studies",
    "brands",
    "skill_radar_data",
    "stats_dashboard",
    "faqs",
    "chat_questions",
]


def fetch_table(table_name):
    """Fetch all rows from a Supabase table via REST API."""
    url = f"{SUPABASE_URL}/rest/v1/{table_name}?select=*"
    req = urllib.request.Request(url)
    req.add_header("apikey", SVC_KEY)
    req.add_header("Authorization", f"Bearer {SVC_KEY}")
    try:
        with urllib.request.urlopen(req, timeout=30) as resp:
            return json.loads(resp.read().decode())
    except Exception as e:
        print(f"  WARN: Could not fetch {table_name}: {e}")
        return None


def pg_type(value, col_name=""):
    """Infer PostgreSQL column type from a Python value."""
    if value is None:
        return "TEXT"
    if isinstance(value, bool):
        return "BOOLEAN"
    if isinstance(value, int):
        return "INTEGER"
    if isinstance(value, float):
        return "DOUBLE PRECISION"
    if isinstance(value, (list, dict)):
        return "JSONB"
    s = str(value)
    # UUID pattern — exactly 36 chars with 4 hyphens in right positions
    if len(s) == 36 and s.count("-") == 4 and s[8] == "-" and s[13] == "-" and s[18] == "-" and s[23] == "-":
        return "UUID"
    # Timestamp pattern — strict: must match ISO 8601 datetime with timezone
    # e.g. 2026-02-22T06:01:59.516392+00:00
    if len(s) < 100 and s[:4].isdigit() and len(s) >= 20:
        import re
        if re.match(r'^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}', s):
            return "TIMESTAMPTZ"
    return "TEXT"


def escape_sql(value):
    """Escape a value for SQL insertion."""
    if value is None:
        return "NULL"
    if isinstance(value, bool):
        return "TRUE" if value else "FALSE"
    if isinstance(value, (int, float)):
        return str(value)
    if isinstance(value, (list, dict)):
        return "'" + json.dumps(value).replace("'", "''") + "'::jsonb"
    s = str(value).replace("'", "''")
    return f"'{s}'"


def generate_sql(table_name, rows):
    """Generate CREATE TABLE + INSERT statements for a table."""
    if not rows:
        return f"-- Table {table_name}: no data\n"

    # Infer columns and types from all rows
    col_types = {}
    for row in rows:
        for col, val in row.items():
            if col not in col_types or col_types[col] == "TEXT":
                inferred = pg_type(val, col)
                if inferred != "TEXT" or col not in col_types:
                    col_types[col] = inferred

    # Build CREATE TABLE
    sql_parts = [f"-- Table: {table_name} ({len(rows)} rows)"]
    sql_parts.append(f"DROP TABLE IF EXISTS {table_name} CASCADE;")
    cols_def = ",\n  ".join(f'"{col}" {typ}' for col, typ in col_types.items())
    sql_parts.append(f"CREATE TABLE {table_name} (\n  {cols_def}\n);")

    # Build INSERTs
    columns = list(col_types.keys())
    col_list = ", ".join(f'"{c}"' for c in columns)
    for row in rows:
        values = ", ".join(escape_sql(row.get(c)) for c in columns)
        sql_parts.append(f"INSERT INTO {table_name} ({col_list}) VALUES ({values});")

    sql_parts.append("")
    return "\n".join(sql_parts)


def main():
    all_sql = ["-- Supabase Portfolio Backup", "-- Auto-generated backup script", ""]

    for table in TABLES:
        print(f"Fetching {table}...", end=" ", flush=True)
        rows = fetch_table(table)
        if rows is None:
            print("SKIPPED")
            all_sql.append(f"-- Table {table}: fetch failed\n")
            continue
        print(f"{len(rows)} rows")
        all_sql.append(generate_sql(table, rows))

    sql_content = "\n".join(all_sql)

    # Write SQL to file
    sql_path = "/tmp/supabase_backup.sql"
    with open(sql_path, "w") as f:
        f.write(sql_content)
    print(f"\nSQL written to {sql_path}")
    print(f"Total size: {len(sql_content)} bytes")

    # Copy to titan-pc and execute
    print("\nCopying to titan-pc...")
    subprocess.run(["scp", "-o", "ConnectTimeout=10", sql_path, "titan-pc:/tmp/supabase_backup.sql"], check=True)

    print("Executing on titan-pc...")
    result = subprocess.run(
        ["ssh", "-o", "ConnectTimeout=10", "titan-pc",
         "docker exec -i titan-gitea-db psql -U gitea -d portfolio_backup -f /dev/stdin < /tmp/supabase_backup.sql"],
        capture_output=True, text=True
    )
    print(result.stdout)
    if result.stderr:
        print("STDERR:", result.stderr)
    if result.returncode == 0:
        print("Backup complete!")
    else:
        print(f"Exit code: {result.returncode}")


if __name__ == "__main__":
    main()
