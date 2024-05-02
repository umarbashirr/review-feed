import connectMongo from "@/lib/db-connect";
import AppForm from "@/models/app-form.model";
import { standardReviewForms } from "@/utils/standard-form-template";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectMongo();
    await AppForm.deleteMany({
      isStandard: true,
    });
    await AppForm.create(standardReviewForms);
    console.log("Seed data imported successfully");
    return NextResponse.json({
      success: true,
      message: "Seed data imported successfully",
    });
  } catch (error: any) {
    console.error("Error: ", error);
    return NextResponse.json(
      {
        success: false,
        message: error.message,
      },
      {
        status: 500,
      }
    );
  }
}
