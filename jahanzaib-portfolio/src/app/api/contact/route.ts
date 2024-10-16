// app/api/contact/route.ts
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json();

  // Simulate sending an email (replace with your email service logic)
  console.log(`Message from ${name} (${email}): ${message}`);

  return NextResponse.json({ success: true, message: 'Message sent successfully!' });
}
