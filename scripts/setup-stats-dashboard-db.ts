
import * as dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

if (process.env.NODE_ENV !== 'production') { process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'; }

import { Client } from 'pg';

async function setupDatabase() {
    const client = new Client({
        connectionString: process.env.POSTGRES_URL,
        ssl: { rejectUnauthorized: false }
    });

    try {
        await client.connect();
        console.log("Connected to Database");

        const createTableQuery = `
      CREATE TABLE IF NOT EXISTS stats_dashboard (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        label TEXT NOT NULL,
        value TEXT NOT NULL,
        icon TEXT,
        display_order INTEGER DEFAULT 0,
        created_at TIMESTAMPTZ DEFAULT NOW(),
        updated_at TIMESTAMPTZ DEFAULT NOW()
      );
    `;
        await client.query(createTableQuery);
        console.log("Table 'stats_dashboard' created (or exists)");

        await client.query(`ALTER TABLE stats_dashboard ENABLE ROW LEVEL SECURITY;`);

        await client.query(`
      DROP POLICY IF EXISTS "Public Read Access" ON stats_dashboard;
      CREATE POLICY "Public Read Access" ON stats_dashboard FOR SELECT TO public USING (true);
    `);
        await client.query(`
      DROP POLICY IF EXISTS "Service Role Full Access" ON stats_dashboard;
      CREATE POLICY "Service Role Full Access" ON stats_dashboard FOR ALL TO service_role USING (true) WITH CHECK (true);
    `);
        console.log("Policies created");
    } catch (err) {
        console.error("Database Setup Error:", err);
    } finally {
        await client.end();
    }
}

setupDatabase();
