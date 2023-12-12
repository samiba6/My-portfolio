import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Samy | Personal Portfolio",
  description: "Samy is a computer experice with 7 years of experience",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-gray-100 h-[50000px] text-gray-900 relative `}
      >
        <div className="bg-[#fbe3e2] -z-10 absolute top-[-6rem] right-[11rem] rounded-full h-[31.25rem] w-[31.25rem] blur-[10rem] sm:w-[68.75rem]">
          {" "}
        </div>
        <div className="bg-[#d1ebe3] -z-10 absolute top-[-1rem] left-[-35rem] rounded-full h-[31.25rem] w-[50rem] blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]">
          {" "}
        </div>
        <Header />
        {children}
      </body>
    </html>
  );
}
