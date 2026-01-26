
import * as dotenv from 'dotenv';

// Load environment variables *before* any other imports that might use them
const localEnv = dotenv.config({ path: '.env.local' });
if (localEnv.error) {
    dotenv.config({ path: '.env' }); // Fallback to .env
}

// Dynamic imports are used here to ensure hoisting doesn't cause modules to load 
// before dotenv has configured process.env
import { GoogleGenerativeAIEmbeddings } from '@langchain/google-genai';
import portfolioData from '../src/data/portfolioData';
import { RecursiveCharacterTextSplitter } from '@langchain/textsplitters';

async function ingestData() {
    // Dynamically import supabase client to ensure it reads the *populated* process.env
    const { supabase } = await import('../src/lib/supabaseAdmin');

    console.log('🚀 Starting ingestion...');

    // Initialize Embeddings Generator
    const embeddings = new GoogleGenerativeAIEmbeddings({
        modelName: 'embedding-001',
        apiKey: process.env.GEMINI_API_KEY,
    });

    // 1. Convert structured portfolio data to narrative text chunks
    const rawDocs: string[] = [];

    // Profile Section
    rawDocs.push(`
    Profile Summary for ${portfolioData.personalInfo.name}:
    Title: ${portfolioData.personalInfo.title}
    Bio: ${portfolioData.personalInfo.shortBio}
    Detailed Bio: ${portfolioData.personalInfo.longBio.join(' ')}
    Skills: ${Object.entries(portfolioData.skills).map(([cat, skills]) => `${cat}: ${skills.map(s => s.name).join(', ')}`).join('; ')}
  `);

    // Projects Section
    portfolioData.projects.forEach(project => {
        rawDocs.push(`
      Project: ${project.title}
      Description: ${project.description}
      Technologies: ${project.techStack.join(', ')}
      Link: ${project.link}
    `);
    });

    // Experience Section
    const allExperience = [...portfolioData.professionalExperience, ...portfolioData.freelanceExperience];
    allExperience.forEach(exp => {
        const achievements = exp.achievements ? exp.achievements.join('. ') : '';
        rawDocs.push(`
      Experience at ${exp.company} (${exp.period}):
      Role: ${exp.role}
      Description: ${achievements}
    `);
    });

    // Case Studies
    if (portfolioData.caseStudies) {
        portfolioData.caseStudies.forEach(cs => {
            rawDocs.push(`
            Case Study: ${cs.title} (Role: ${cs.role})
            Challenge: ${cs.challenge}
            Solution: ${cs.solution}
            Impact: ${cs.impact}
            Tech Stack: ${cs.techStack.join(', ')}
          `);
        });
    }

    // 2. Split text into chunks
    const splitter = new RecursiveCharacterTextSplitter({
        chunkSize: 1000,
        chunkOverlap: 100,
    });

    const splitDocs = await splitter.createDocuments(rawDocs);
    console.log(`📄 Generated ${splitDocs.length} chunks.`);

    // 3. Embed and Store
    for (const doc of splitDocs) {
        try {
            const embedding = await embeddings.embedQuery(doc.pageContent);

            const { error } = await supabase.from('documents').insert({
                content: doc.pageContent,
                metadata: { source: 'portfolioData' },
                embedding,
            });

            if (error) {
                console.error('❌ Error inserting document:', error);
            } else {
                console.log('✅ Inserted chunk:', doc.pageContent.substring(0, 30).replace(/\n/g, ' ') + '...');
            }
        } catch (e) {
            console.error("Error generating embedding:", e);
        }
    }

    console.log('🎉 Ingestion complete!');
}

ingestData().catch(console.error);
