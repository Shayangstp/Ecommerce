import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@components/navbar";
import { Toaster } from "react-hot-toast";
import AuthSession from "./components/AuthSession";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ecommerce",
  description: "Ecommerce",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthSession>
      <html lang="en">
        <Toaster position="top-center" />
        <Navbar />
        <body className={inter.className}>{children}</body>
      </html>
    </AuthSession>
  );
}
