
import * as dotenv from 'dotenv';
dotenv.config();

// Disable strict SSL check for this script
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

import { Client } from 'pg';

async function setupDatabase() {
    const client = new Client({
        connectionString: process.env.POSTGRES_URL,
        ssl: { rejectUnauthorized: false }
    });

    try {
        await client.connect();
        console.log("✅ Connected to Database");

        // 1. Create Skill Categories Table
        // We will store the skills array as JSONB. 
        // This allows { name: string, level: number } objects easily.
        const createTableQuery = `
      CREATE TABLE IF NOT EXISTS skill_categories (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        category_name TEXT NOT NULL UNIQUE,
        skills JSONB NOT NULL DEFAULT '[]'::jsonb,
        display_order INTEGER DEFAULT 0,
        created_at TIMESTAMPTZ DEFAULT NOW(),
        updated_at TIMESTAMPTZ DEFAULT NOW()
      );
    `;
        await client.query(createTableQuery);
        console.log("✅ Table 'skill_categories' created (or exists)");

        // 2. Enable RLS
        await client.query(`ALTER TABLE skill_categories ENABLE ROW LEVEL SECURITY;`);
        console.log("✅ RLS Enabled");

        // 3. Create Policy
        await client.query(`
      DROP POLICY IF EXISTS "Public Read Access" ON skill_categories;
      CREATE POLICY "Public Read Access" ON skill_categories
        FOR SELECT
        TO public
        USING (true);
    `);

        await client.query(`
      DROP POLICY IF EXISTS "Service Role Full Access" ON skill_categories;
      CREATE POLICY "Service Role Full Access" ON skill_categories
        FOR ALL
        TO service_role
        USING (true)
        WITH CHECK (true);
    `);
        console.log("✅ Policies created");

    } catch (err) {
        console.error("❌ Database Setup Error:", err);
    } finally {
        await client.end();
    }
}

setupDatabase();
