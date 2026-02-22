
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
        console.log("Connected to Database");

        const createTableQuery = `
      CREATE TABLE IF NOT EXISTS site_config (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        name TEXT NOT NULL,
        title TEXT NOT NULL,
        email TEXT NOT NULL,
        short_bio TEXT NOT NULL,
        long_bio TEXT[] DEFAULT '{}',
        location TEXT,
        years_experience_start_year INTEGER NOT NULL DEFAULT 2018,
        whatsapp TEXT,
        contact_info JSONB DEFAULT '{}',
        social_media JSONB DEFAULT '{}',
        domain_expertise TEXT[] DEFAULT '{}',
        created_at TIMESTAMPTZ DEFAULT NOW(),
        updated_at TIMESTAMPTZ DEFAULT NOW()
      );
    `;
        await client.query(createTableQuery);
        console.log("Table 'site_config' created (or exists)");

        await client.query(`ALTER TABLE site_config ENABLE ROW LEVEL SECURITY;`);
        console.log("RLS Enabled");

        await client.query(`
      DROP POLICY IF EXISTS "Public Read Access" ON site_config;
      CREATE POLICY "Public Read Access" ON site_config
        FOR SELECT
        TO public
        USING (true);
    `);

        await client.query(`
      DROP POLICY IF EXISTS "Service Role Full Access" ON site_config;
      CREATE POLICY "Service Role Full Access" ON site_config
        FOR ALL
        TO service_role
        USING (true)
        WITH CHECK (true);
    `);
        console.log("Policies created");

    } catch (err) {
        console.error("Database Setup Error:", err);
    } finally {
        await client.end();
    }
}

setupDatabase();
