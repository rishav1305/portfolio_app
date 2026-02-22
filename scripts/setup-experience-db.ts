
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

        // 1. Create Experience Table
        // Matching key fields from WorkExperience type
        const createTableQuery = `
      CREATE TABLE IF NOT EXISTS experience (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        company TEXT NOT NULL,
        role TEXT NOT NULL,
        period TEXT NOT NULL,
        start_date DATE,
        end_date DATE,
        location TEXT,
        experience_type TEXT NOT NULL, -- 'professional' or 'freelance'
        description TEXT, -- Joined achievements or details
        achievements TEXT[],
        details TEXT[],
        tags TEXT[],
        remote_work BOOLEAN DEFAULT false,
        team_size INTEGER,
        tech_stack TEXT[], -- mapped from technicalEnvironment
        clients JSONB, -- array of {name, description} objects
        managerial_achievements TEXT[],
        ai_enablement TEXT[],
        key_metrics JSONB, -- array of {label, value} objects
        created_at TIMESTAMPTZ DEFAULT NOW(),
        updated_at TIMESTAMPTZ DEFAULT NOW()
      );
    `;
        await client.query(createTableQuery);
        console.log("✅ Table 'experience' created (or exists)");

        // 1b. Add missing columns if they don't exist
        const alterQueries = [
            `ALTER TABLE experience ADD COLUMN IF NOT EXISTS clients JSONB`,
            `ALTER TABLE experience ADD COLUMN IF NOT EXISTS managerial_achievements TEXT[]`,
            `ALTER TABLE experience ADD COLUMN IF NOT EXISTS ai_enablement TEXT[]`,
            `ALTER TABLE experience ADD COLUMN IF NOT EXISTS key_metrics JSONB`,
        ];
        for (const q of alterQueries) {
            await client.query(q);
        }
        console.log("✅ Missing columns added (if needed)");

        // 2. Enable RLS
        await client.query(`ALTER TABLE experience ENABLE ROW LEVEL SECURITY;`);
        console.log("✅ RLS Enabled");

        // 3. Create Policy (Drop existing first)
        await client.query(`
      DROP POLICY IF EXISTS "Public Read Access" ON experience;
      CREATE POLICY "Public Read Access" ON experience
        FOR SELECT
        TO public
        USING (true);
    `);

        await client.query(`
      DROP POLICY IF EXISTS "Service Role Full Access" ON experience;
      CREATE POLICY "Service Role Full Access" ON experience
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
