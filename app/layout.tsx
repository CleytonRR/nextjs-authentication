import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Authentication",
  description: "Authentication with NextAuth.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={"antialiased"}>{children}</body>
    </html>
  );
}
