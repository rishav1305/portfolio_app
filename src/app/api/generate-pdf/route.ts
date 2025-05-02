import { NextRequest, NextResponse } from 'next/server';
import puppeteer from 'puppeteer';
import portfolioData from '@/data/portfolioData';
import { generateOnePageCVHTML, generateDetailedResumeHTML } from '@/utils/pdf/templates';
import path from 'path';
import fs from 'fs';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const type = searchParams.get('type') || 'cv'; // Default to CV if not specified
  const requestedName = searchParams.get('name') || portfolioData.personalInfo.name;
  
  let browser;
  try {
    console.log('Starting PDF generation process...');

    // Enhanced browser launch configuration
    browser = await puppeteer.launch({ 
      headless: true,  // Use boolean true for older versions of Puppeteer
      args: [
        '--no-sandbox', 
        '--disable-setuid-sandbox',
        '--disable-dev-shm-usage',
        '--disable-gpu',
        '--font-render-hinting=none' // Improve font rendering
      ]
    });
    
    console.log('Browser launched successfully');
    const page = await browser.newPage();
    
    // Set viewport for better rendering
    await page.setViewport({
      width: 1200,
      height: 1600,
      deviceScaleFactor: 2
    });
    
    // Generate HTML content based on type
    console.log(`Generating ${type} HTML content...`);
    const html = type === 'resume' 
      ? generateDetailedResumeHTML(portfolioData)
      : generateOnePageCVHTML(portfolioData);
    
    // Set HTML content with increased timeout
    await page.setContent(html, { 
      waitUntil: ['load', 'networkidle0'],
      timeout: 30000
    });
    
    // Define file paths
    const formattedName = requestedName.replace(/\s+/g, '_');
    const fileName = type === 'resume' ? `${formattedName}_Resume.pdf` : `${formattedName}_CV.pdf`;
    const publicDir = path.join(process.cwd(), 'public', 'documents');
    const filePath = path.join(publicDir, fileName);
    
    // Create documents directory if it doesn't exist
    if (!fs.existsSync(publicDir)) {
      console.log('Creating documents directory...');
      fs.mkdirSync(publicDir, { recursive: true });
    }
    
    console.log(`Generating PDF: ${fileName}`);
    
    // Generate PDF with appropriate settings based on type
    if (type === 'cv') {
      await page.pdf({
        path: filePath,
        format: 'A4',
        margin: { top: '0.5cm', right: '0.5cm', bottom: '0.5cm', left: '0.5cm' },
        printBackground: true,
        timeout: 60000 // Increased timeout for PDF generation
      });
    } else {
      // Standard margins for detailed resume
      await page.pdf({
        path: filePath,
        format: 'A4',
        margin: { top: '1cm', right: '1cm', bottom: '1cm', left: '1cm' },
        printBackground: true,
        timeout: 60000 // Increased timeout for PDF generation
      });
    }
    
    console.log('PDF generated successfully');
    
    await browser.close();
    browser = null;
    
    return NextResponse.json({ 
      success: true, 
      message: 'PDF generated successfully',
      fileName,
      path: `/documents/${fileName}`
    });
  } catch (error: unknown) {
    console.error('PDF generation error:', error);
    
    // Ensure browser is closed if an error occurs
    if (browser) {
      try {
        await browser.close();
      } catch (closeError) {
        console.error('Error closing browser:', closeError);
      }
    }
    
    // Properly handle the unknown error type
    const errorMessage = error instanceof Error 
      ? error.message 
      : 'Unknown error';
    
    return NextResponse.json(
      { success: false, error: `Failed to generate PDF: ${errorMessage}` },
      { status: 500 }
    );
  }
}
