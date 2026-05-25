import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Inspark",
  description: "AI-powered self-discovery and opportunity exploration for students."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
