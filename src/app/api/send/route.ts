import { Resend } from "resend";
import * as React from "react";
import EmailTemplate from "@/components/email";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, otp, token } = await req.json();
    const { data, error } = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: email,
      subject: "Please confirm your email account",
      react: EmailTemplate({
        userFirstname: name,
        otp: otp,
        emailVerificationToken: token,
      }) as React.ReactElement,
    });

    if (error) {
      return Response.json({ error });
    }
    return Response.json({ data });
  } catch (error) {
    return Response.json({ error });
  }
}
