import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    clue: [
      {
        message:
          'A strange binary signal (01010100) echoes, revealing its twin nature.',
      },
      {
        message:
          'Not consonants, not hidden in text — we are the soft sounds that flow together.',
      },
      {
        message:
          'Clue to next place: The stars guide your way, but not everything moves on the web. Some things are kept safe in a small hidden box inside your browser',
      },
    ],
  });
}
