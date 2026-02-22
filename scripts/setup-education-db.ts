
import * as dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

// Disable strict SSL check for this script
if (process.env.NODE_ENV !== 'production') { process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'; }

import { Client } from 'pg';

async function setupDatabase() {
    const client = new Client({
        connectionString: process.env.POSTGRES_URL,
        ssl: { rejectUnauthorized: false }
    });

    try {
        await client.connect();
        console.log("✅ Connected to Database");

        // 1. Create Education Table
        const createTableQuery = `
      CREATE TABLE IF NOT EXISTS education (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        institution TEXT NOT NULL,
        degree TEXT NOT NULL,
        period TEXT NOT NULL,
        start_date DATE, -- Optional parsing from period if desired, or just store string
        end_date DATE,
        location TEXT,
        focus_area TEXT,
        description TEXT,
        created_at TIMESTAMPTZ DEFAULT NOW(),
        updated_at TIMESTAMPTZ DEFAULT NOW()
      );
    `;
        await client.query(createTableQuery);
        console.log("✅ Table 'education' created (or exists)");

        // 2. Enable RLS
        await client.query(`ALTER TABLE education ENABLE ROW LEVEL SECURITY;`);
        console.log("✅ RLS Enabled");

        // 3. Create Policy
        await client.query(`
      DROP POLICY IF EXISTS "Public Read Access" ON education;
      CREATE POLICY "Public Read Access" ON education
        FOR SELECT
        TO public
        USING (true);
    `);

        await client.query(`
      DROP POLICY IF EXISTS "Service Role Full Access" ON education;
      CREATE POLICY "Service Role Full Access" ON education
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
