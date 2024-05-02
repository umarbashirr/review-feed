import { verifyUserToken } from "@/handlers/verify-jwt";
import connectMongo from "@/lib/db-connect";
import AppForm from "@/models/app-form.model";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    await connectMongo();

    const token =
      req.cookies.get("token")?.value || req.headers.get("cookie") || "";

    const payloadUser: any = await verifyUserToken(token);

    if (!payloadUser) {
      return NextResponse.json(
        {
          statusCode: 401,
          success: false,
          data: null,
          message: "Unauthorized",
        },
        { status: 401 }
      );
    }

    const forms = await AppForm.find({
      $or: [{ isStandard: true }, { createdBy: payloadUser.id }],
    });

    return NextResponse.json(
      {
        statusCode: 200,
        data: forms,
        success: true,
        message: "Fetched successfully!",
      },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json(
      {
        statusCode: 500,
        success: false,
        data: null,
        message: error.message,
      },
      { status: 500 }
    );
  }
}
