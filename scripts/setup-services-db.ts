
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

        // 1. Create Services Table
        const createTableQuery = `
      CREATE TABLE IF NOT EXISTS services (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        title TEXT NOT NULL,
        description TEXT NOT NULL,
        icon_name TEXT, -- We'll store the Lucide icon name string
        skills TEXT[] DEFAULT '{}',
        price_range TEXT,
        timeline TEXT,
        features TEXT[] DEFAULT '{}',
        service_type TEXT, -- 'v1', 'v2', etc. or generic 'service'
        display_order INTEGER DEFAULT 0,
        created_at TIMESTAMPTZ DEFAULT NOW(),
        updated_at TIMESTAMPTZ DEFAULT NOW()
      );
    `;
        await client.query(createTableQuery);
        console.log("✅ Table 'services' created (or exists)");

        // 2. Enable RLS
        await client.query(`ALTER TABLE services ENABLE ROW LEVEL SECURITY;`);
        console.log("✅ RLS Enabled");

        // 3. Create Policy
        await client.query(`
      DROP POLICY IF EXISTS "Public Read Access" ON services;
      CREATE POLICY "Public Read Access" ON services
        FOR SELECT
        TO public
        USING (true);
    `);

        await client.query(`
      DROP POLICY IF EXISTS "Service Role Full Access" ON services;
      CREATE POLICY "Service Role Full Access" ON services
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
