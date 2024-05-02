import Review from "@/models/review.model";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  try {
    // Let's fetch the reviews count. Total reviews count, monthly reviews count, weekly reviews count, daily reviews count, positive reviews count, negative reviews count, neutral reviews count, and average rating, and return them as a response using mongoose aggregation

    const reviewsCount = await Review.aggregate([
      {
        $group: {
          _id: null,
          total: { $sum: 1 },
          monthly: {
            $sum: {
              $cond: [
                {
                  $gte: [
                    "$createdAt",
                    new Date(new Date().setDate(new Date().getDate() - 30)),
                  ],
                },
                1,
                0,
              ],
            },
          },
          weekly: {
            $sum: {
              $cond: [
                {
                  $gte: [
                    "$createdAt",
                    new Date(new Date().setDate(new Date().getDate() - 7)),
                  ],
                },
                1,
                0,
              ],
            },
          },
          daily: {
            $sum: {
              $cond: [
                {
                  $gte: [
                    "$createdAt",
                    new Date(new Date().setDate(new Date().getDate() - 1)),
                  ],
                },
                1,
                0,
              ],
            },
          },
          positive: {
            $sum: {
              $cond: [{ $eq: ["$rating", 5] }, 1, 0],
            },
          },
          negative: {
            $sum: {
              $cond: [{ $eq: ["$rating", 1] }, 1, 0],
            },
          },
          neutral: {
            $sum: {
              $cond: [{ $eq: ["$rating", 3] }, 1, 0],
            },
          },
          averageRating: { $avg: "$rating" },
        },
      },
    ]);

    return NextResponse.json({
      data: reviewsCount,
      success: true,
    });
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
