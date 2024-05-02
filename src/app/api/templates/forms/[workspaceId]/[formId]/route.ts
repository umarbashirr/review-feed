import connectMongo from "@/lib/db-connect";
import AppForm from "@/models/app-form.model";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, { params }: any) {
  await connectMongo();
  try {
    const { workspaceId, formId } = params;

    const form = await AppForm.findOne({
      $or: [{ isStandard: true }, { createdBy: workspaceId }],
      _id: formId,
    });

    return NextResponse.json(
      {
        statusCode: 200,
        success: true,
        data: form,
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
