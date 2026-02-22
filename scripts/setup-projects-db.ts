
import * as dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

// Disable strict SSL check for this script (needed for some Supabase pooler setups)
if (process.env.NODE_ENV !== 'production') { process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'; }

import { Client } from 'pg';

async function setupDatabase() {
    const client = new Client({
        connectionString: process.env.POSTGRES_URL,
    });

    try {
        await client.connect();
        console.log("✅ Connected to Database");

        // 1. Create Table
        const createTableQuery = `
      CREATE TABLE IF NOT EXISTS projects (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        title TEXT NOT NULL,
        description TEXT,
        short_description TEXT,
        image TEXT,
        thumbnail TEXT,
        tech_stack TEXT[],
        link TEXT,
        category TEXT,
        company TEXT,
        clients TEXT,
        start_date DATE,
        end_date DATE,
        created_at TIMESTAMPTZ DEFAULT NOW(),
        updated_at TIMESTAMPTZ DEFAULT NOW()
      );
    `;
        await client.query(createTableQuery);
        console.log("✅ Table 'projects' created (or exists)");

        // 2. Enable RLS
        await client.query(`ALTER TABLE projects ENABLE ROW LEVEL SECURITY;`);
        console.log("✅ RLS Enabled");

        // 3. Create Policy (Drop existing first to avoid errors)
        await client.query(`
      DROP POLICY IF EXISTS "Public Read Access" ON projects;
      CREATE POLICY "Public Read Access" ON projects
        FOR SELECT
        TO public
        USING (true);
    `);
        console.log("✅ Policy 'Public Read Access' created");

        // 4. Create Policy for Service Role (Full Access)
        await client.query(`
      DROP POLICY IF EXISTS "Service Role Full Access" ON projects;
      CREATE POLICY "Service Role Full Access" ON projects
        FOR ALL
        TO service_role
        USING (true)
        WITH CHECK (true);
    `);
        console.log("✅ Policy 'Service Role Full Access' created");

    } catch (err) {
        console.error("❌ Database Setup Error:", err);
    } finally {
        await client.end();
    }
}

setupDatabase();
