import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ayman Khairi | Full Stack Developer",
  description:
    "Full Stack Developer building modern web applications, e-commerce platforms and scalable software solutions.",

  keywords: [
    "Full Stack Developer",
    "Next.js Developer",
    "ASP.NET Developer",
    "React Developer",
    "Flutter Developer",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
