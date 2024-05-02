import connectMongo from "@/lib/db-connect";
import Review from "@/models/review.model";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  await connectMongo();
  try {
    const body = await req.json();
    const {
      feedback,
      rating,
      name,
      email,
      phoneNumber,
      logoUrl,
      companyName,
      designation,
      roomNumber,
    } = body;

    if (!feedback || !rating || !name || !email) {
      return NextResponse.json(
        {
          error: "Please provide all required fields",
          success: false,
        },
        {
          status: 400,
        }
      );
    }

    const review = new Review({
      feedback,
      rating,
      name,
      email,
      phoneNumber,
      logoUrl,
      companyName,
      designation,
      roomNumber,
    });

    await review.save();

    return NextResponse.json(
      {
        success: true,
        message: "Review submitted successfully",
      },
      {
        status: 201,
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

export async function GET() {
  try {
    await connectMongo();
    const reviews = await Review.find().sort({ createdAt: -1 }).limit(4);

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
