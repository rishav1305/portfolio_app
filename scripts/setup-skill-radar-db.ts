
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
      CREATE TABLE IF NOT EXISTS skill_radar_data (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        subject TEXT NOT NULL,
        value INTEGER NOT NULL,
        full_mark INTEGER NOT NULL DEFAULT 100,
        display_order INTEGER DEFAULT 0,
        created_at TIMESTAMPTZ DEFAULT NOW(),
        updated_at TIMESTAMPTZ DEFAULT NOW()
      );
    `;
        await client.query(createTableQuery);
        console.log("Table 'skill_radar_data' created (or exists)");

        await client.query(`ALTER TABLE skill_radar_data ENABLE ROW LEVEL SECURITY;`);

        await client.query(`
      DROP POLICY IF EXISTS "Public Read Access" ON skill_radar_data;
      CREATE POLICY "Public Read Access" ON skill_radar_data FOR SELECT TO public USING (true);
    `);
        await client.query(`
      DROP POLICY IF EXISTS "Service Role Full Access" ON skill_radar_data;
      CREATE POLICY "Service Role Full Access" ON skill_radar_data FOR ALL TO service_role USING (true) WITH CHECK (true);
    `);
        console.log("Policies created");
    } catch (err) {
        console.error("Database Setup Error:", err);
    } finally {
        await client.end();
    }
}

setupDatabase();
