import EmailVerificationToken from "@models/emailVerificationToken";
import { NewUserRequest } from "@/app/types";
import startDb from "@lib/db";
import UserModel from "@models/userModel";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
// import { sendEmail } from "@/app/lib/email";
import crypto from "crypto";

export const POST = async (req: Request) => {
  const body = (await req.json()) as NewUserRequest;
  await startDb();

  const newUser = await UserModel.create({
    ...body,
  });

  let transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "g.shayan5529@gmail.com",
      pass: process.env.NODE_MAILER,
    },
  });

  const token = crypto.randomBytes(36).toString("hex");
  const verificationUrl = `${process.env.VERIFICATION_URL}?token=${token}&userId=${newUser._id}`;

  await transport.sendMail({
    from: "g.shayan5529@gmail.com",
    to: newUser.email,
    subject: "Verify your email",
    html: `<h1>Please verify your email <a href="${verificationUrl}">click</a></h1>`,
  });

  await EmailVerificationToken.create({
    user: newUser._id,
    token,
  });

  // const verificationUrl = `${process.env.VERIFICATION_URL}?token=${token}&userId=${newUser._id}`;

  // await sendEmail({
  //   profile: { name: newUser.name, email: newUser.email },
  //   subject: "verification",
  //   linkUrl: verificationUrl,
  // });

  return NextResponse.json({ message: "Please check your Email" });
};
