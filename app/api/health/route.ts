import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    ok: true,
    service: 'thinkrn',
    timestamp: new Date().toISOString()
  });
}
