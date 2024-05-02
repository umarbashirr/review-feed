import connectMongo from "@/lib/db-connect";
import Review from "@/models/review.model";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectMongo();

    // Lets fetch all reviewer details from review model and provide name, email, and phone number of the reviewer as data to the client

    const reviews = await Review.find().sort({ createdAt: -1 });

    reviews.map((review) => {
      return {
        name: review.name,
        email: review.email,
        phone: review.phoneNumber,
      };
    });

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
