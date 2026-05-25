import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Inspark | Turn uncertainty into a clear path",
  description: "AI-powered self-discovery and opportunity exploration for students.",
  icons: {
    icon: "/inspark-mark.svg"
  }
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
