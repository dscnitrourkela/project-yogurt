import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { answer } = await req.json();

    const correctAnswer = process.env.CORRECT_ANSWER!;
    const isCorrect =
      answer.toLowerCase().trim() === correctAnswer.toLowerCase();

    return NextResponse.json({
      success: isCorrect,
      message: isCorrect ? 'Correct answer!' : 'Try again!',
    });
  } catch (error) {
    console.error('Error processing answer:', error);
    return NextResponse.json(
      {
        success: false,
        message: 'Something went wrong',
      },
      { status: 500 }
    );
  }
}
