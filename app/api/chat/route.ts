import "dotenv/config"
import OpenAI from 'openai';
import { NextResponse } from 'next/server';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || '',
});

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      throw new Error('Invalid or empty messages array');
    }

    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",  // Update this to the correct model name
      messages,
    });

    if (!response.choices || response.choices.length === 0) {
      throw new Error('No response from OpenAI API');
    }

    return NextResponse.json(response.choices[0].message);
  } catch (error: any) {
    console.error('Error in OpenAI request:', error);
    return NextResponse.json(
      { error: error.message || 'An error occurred while processing your request' },
      { status: 500 }
    );
  }
}