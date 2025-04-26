import { NextRequest, NextResponse } from 'next/server';
import puppeteer from 'puppeteer';
import portfolioData from '@/data/portfolioData';
import { generateOnePageCVHTML, generateDetailedResumeHTML } from '@/utils/pdf/templates';
import path from 'path';
import fs from 'fs';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const type = searchParams.get('type') || 'cv'; // Default to CV if not specified
  
  try {
    // Launch Puppeteer
    const browser = await puppeteer.launch({ 
      headless: 'new',
      // Add args to help with potential issues in deployment environments
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    const page = await browser.newPage();
    
    // Generate HTML content based on type
    const html = type === 'resume' 
      ? generateDetailedResumeHTML(portfolioData)
      : generateOnePageCVHTML(portfolioData);
    
    // Set HTML content
    await page.setContent(html, { waitUntil: 'networkidle0' });
    
    // Define file paths
    const fileName = type === 'resume' ? 'Rishav_Chatterjee_Resume.pdf' : 'Rishav_Chatterjee_CV.pdf';
    const publicDir = path.join(process.cwd(), 'public', 'documents');
    const filePath = path.join(publicDir, fileName);
    
    // Create documents directory if it doesn't exist
    if (!fs.existsSync(publicDir)) {
      fs.mkdirSync(publicDir, { recursive: true });
    }
    
    // Generate PDF
    await page.pdf({
      path: filePath,
      format: 'A4',
      margin: { top: '1cm', right: '1cm', bottom: '1cm', left: '1cm' },
      printBackground: true
    });
    
    await browser.close();
    
    return NextResponse.json({ 
      success: true, 
      message: 'PDF generated successfully',
      fileName,
      path: `/documents/${fileName}`
    });
  } catch (error) {
    console.error('PDF generation error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to generate PDF' },
      { status: 500 }
    );
  }
}
