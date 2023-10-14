import nodemailer from "nodemailer";

type profile = { name: string; email: string };

interface EmailOptions {
  profile: { name: string; email: string };
  subject: "verification" | "forget-password" | "reset-password";
  linkUrl?: string;
}

const generateMailTransporter = () => {
  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "g.shayan5529@gmail.com",
      pass: process.env.NODE_MAILER,
    },
  });
  return transport;
};

const sendEmailVerificationLink = async (profile: profile, linkUrl: string) => {
  const transport = generateMailTransporter();
  await transport.sendMail({
    from: "g.shayan5529@gmail.com",
    to: profile.email,
    html: `<h1>Please verify your email by clicking on <a href="${linkUrl}">this link</a> </h1>`,
  });
};

const sendForgetPasswordLink = async (profile: profile, linkUrl: string) => {
  const transport = generateMailTransporter();
  await transport.sendMail({
    from: "g.shayan5529@gmail.com",
    to: profile.email,
    html: `<h1>We changed your password <a href="${process.env.SIGN_IN_URL}">click here</a> to sign in.</h1>`,
  });
};

const updatePasswordConformation = async (profile: profile) => {
  const transport = generateMailTransporter();
  await transport.sendMail({
    from: "g.shayan5529@gmail.com",
    to: profile.email,
    html: `<h1>We change your password <a href={}> click here to sign in</a>`,
  });
};
export const sendEmail = (options: EmailOptions) => {
  const { profile, subject, linkUrl } = options;

  switch (subject) {
    case "verification":
      return sendEmailVerificationLink(profile, linkUrl!);
    case "forget-password":
      return sendForgetPasswordLink(profile, linkUrl!);
    case "reset-password":
      return updatePasswordConformation(profile);
  }
};
