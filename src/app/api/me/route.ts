import { verifyUserToken } from "@/handlers/verify-jwt";
import connectMongo from "@/lib/db-connect";
import User from "@/models/user.model";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    await connectMongo();

    const token = req.cookies.get("token")?.value || "";
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
    const user = await User.findById(payloadUser?.id);

    if (!user) {
      return NextResponse.json(
        {
          statusCode: 401,
          success: false,
          data: null,
          message: "No user found!",
        },
        { status: 401 }
      );
    }

    return NextResponse.json(
      {
        statusCode: 200,
        data: user,
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

export async function POST(req: NextRequest) {
  try {
    await connectMongo();

    const {
      name,
      companyName,
      phoneNumber,
      locality,
      addressLine,
      city,
      state,
      country,
      zipcode,
    } = await req.json();

    console.log(
      name,
      companyName,
      phoneNumber,
      locality,
      addressLine,
      city,
      state,
      country,
      zipcode
    );

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

    const address = {
      locality,
      addressLine,
      city,
      state,
      country,
      zipcode,
    };

    const user = await User.findByIdAndUpdate(
      payloadUser?.id,
      {
        $set: {
          name,
          companyName,
          phoneNumber,
          address,
        },
      },
      {
        new: true,
      }
    );

    if (!user) {
      return NextResponse.json(
        {
          success: false,
          message: "Error while updating details!",
        },
        { status: 401 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        data: user,
        message: "User updated successfully!",
      },
      {
        status: 200,
      }
    );
  } catch (error: any) {
    console.error(error);
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
