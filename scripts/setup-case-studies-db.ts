
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
      CREATE TABLE IF NOT EXISTS case_studies (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        case_id TEXT UNIQUE NOT NULL,
        title TEXT NOT NULL,
        role TEXT NOT NULL,
        challenge TEXT NOT NULL,
        solution TEXT NOT NULL,
        impact TEXT NOT NULL,
        metrics JSONB DEFAULT '[]',
        tech_stack TEXT[] DEFAULT '{}',
        display_order INTEGER DEFAULT 0,
        created_at TIMESTAMPTZ DEFAULT NOW(),
        updated_at TIMESTAMPTZ DEFAULT NOW()
      );
    `;
        await client.query(createTableQuery);
        console.log("Table 'case_studies' created (or exists)");

        await client.query(`ALTER TABLE case_studies ENABLE ROW LEVEL SECURITY;`);

        await client.query(`
      DROP POLICY IF EXISTS "Public Read Access" ON case_studies;
      CREATE POLICY "Public Read Access" ON case_studies FOR SELECT TO public USING (true);
    `);
        await client.query(`
      DROP POLICY IF EXISTS "Service Role Full Access" ON case_studies;
      CREATE POLICY "Service Role Full Access" ON case_studies FOR ALL TO service_role USING (true) WITH CHECK (true);
    `);
        console.log("Policies created");
    } catch (err) {
        console.error("Database Setup Error:", err);
    } finally {
        await client.end();
    }
}

setupDatabase();
