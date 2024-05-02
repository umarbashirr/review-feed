import { verifyUserToken } from "@/handlers/verify-jwt";
import connectMongo from "@/lib/db-connect";
import User from "@/models/user.model";
import bcrypt from "bcrypt";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    await connectMongo();

    const { currentPassword, newPassword } = await req.json();

    const token = req.cookies.get("token")?.value || "";
    const payloadUser: any = await verifyUserToken(token);

    if (!payloadUser) {
      return NextResponse.json(
        {
          success: false,
          message: "Unauthorized",
        },
        { status: 401 }
      );
    }

    const user = await User.findById(payloadUser?.id).populate("password");

    if (!user) {
      return NextResponse.json(
        {
          success: false,
          message: "No user found!",
        },
        { status: 404 }
      );
    }

    const isPasswordCorrect = await bcrypt.compare(
      currentPassword,
      user.password
    );

    if (!isPasswordCorrect) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid current password!",
        },
        {
          status: 401,
        }
      );
    }

    const isOldNewPasswordSame = await bcrypt.compare(
      newPassword,
      user.password
    );

    if (isOldNewPasswordSame) {
      return NextResponse.json(
        {
          success: false,
          message: "New password cannot be same as old password",
        },
        { status: 401 }
      );
    }

    const newHashedPassword = await bcrypt.hash(newPassword, 10);

    if (!newHashedPassword) {
      return NextResponse.json(
        {
          success: false,
          message: "Something went wrong while updating password!",
        },
        { status: 401 }
      );
    }

    user.password = newHashedPassword;

    await user.save();

    return NextResponse.json(
      {
        success: true,
        message: "User password updated",
      },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json(
      {
        success: false,
        message: error.message,
      },
      { status: 500 }
    );
  }
}
