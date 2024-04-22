import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import connectMongo from "@/lib/db-connect";
import User from "@/models/user.model";
import Profile from "@/models/profile.model";

export async function POST(req: Request, res: Response) {
  try {
    await connectMongo();

    const { name, email, password } = await req.json();

    if (!name || !email || !password) {
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

    const user = await User.findOne({ email });

    if (user) {
      return NextResponse.json(
        {
          message: "User already exists",
          success: false,
          statusCode: 402,
          data: null,
        },
        { status: 402 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    if (!hashedPassword) {
      return NextResponse.json(
        {
          message: "Error while ecrypting password",
          success: false,
          statusCode: 402,
          data: null,
        },
        { status: 402 }
      );
    }

    const profile = new Profile({
      name,
    });

    const addedProfile = await profile.save();

    const newUser = new User({
      email,
      password: hashedPassword,
      profile: addedProfile?._id,
    });

    const addedUser = await newUser.save();

    const userPayload = {
      id: addedUser._id,
      email: addedUser.email,
    };

    return NextResponse.json(
      {
        message: "Account created successfully!",
        data: userPayload,
        statusCode: 201,
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
