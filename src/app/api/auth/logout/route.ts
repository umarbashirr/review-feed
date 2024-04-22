import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST() {
  try {
    cookies().delete("token");

    return NextResponse.json(
      {
        message: "Logout successfully!",
        data: null,
        statusCode: 200,
        success: true,
      },
      {
        status: 200,
      }
    );
  } catch (error: any) {
    return NextResponse.json(
      {
        message: error.message,
        success: false,
        statusCode: 500,
        data: null,
      },
      { status: 500 }
    );
  }
}
