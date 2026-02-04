import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Grow My Therapy",
  description: "Next.js + Tailwind starter."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
