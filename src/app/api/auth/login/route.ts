import connectMongo from "@/lib/db-connect";
import User from "@/models/user.model";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(req: Request, res: Response) {
  try {
    await connectMongo();

    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json(
        {
          message: "All fields required",
          success: false,
          statusCode: 400,
          data: null,
        },
        { status: 400 }
      );
    }

    const user = await User.findOne({ email }).populate("password profile");

    if (!user) {
      return NextResponse.json(
        {
          message: "User does not exists",
          success: false,
          statusCode: 402,
          data: null,
        },
        { status: 402 }
      );
    }

    const matchPassword = await bcrypt.compare(password, user?.password);

    if (!matchPassword) {
      return NextResponse.json(
        {
          message: "Incorrect password",
          success: false,
          statusCode: 402,
          data: null,
        },
        { status: 402 }
      );
    }

    const payload = {
      id: user?._id,
      name: user?.profile?.name,
      email: user?.email,
    };

    const token = await jwt.sign(payload, process.env.JWT_SECRET!, {
      expiresIn: "1d",
    });

    cookies().set("token", token, {
      secure: process.env.NODE_ENV === "production",
      httpOnly: process.env.NODE_ENV === "production",
    });

    return NextResponse.json(
      {
        message: "Login successfully!",
        data: payload,
        statusCode: 200,
        success: true,
      },
      {
        status: 201,
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
