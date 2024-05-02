import Review from "@/models/review.model";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const reviews = await Review.find().sort({ createdAt: -1 });

    return NextResponse.json(
      {
        success: true,
        data: reviews,
      },
      {
        status: 200,
      }
    );
  } catch (error: any) {
    return NextResponse.json(
      {
        error: error.message,
        success: false,
      },
      {
        status: 500,
      }
    );
  }
}
