import { NextRequest, NextResponse } from 'next/server';
import portfolioData from "@/data/portfolioData";

// Simple API route for logging contact attempts
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, message } = body;
    
    // Validate the input
    if (!email || !message) {
      return NextResponse.json({ error: 'Email and message are required' }, { status: 400 });
    }

    // Just log the contact attempt
    console.log('Contact attempt:', {
      name: name || 'Not provided',
      email,
      message
    });

    // Return success - the actual email opening happens client-side
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error handling contact form submission:', error);
    return NextResponse.json({ error: 'Failed to process contact' }, { status: 500 });
  }
}
