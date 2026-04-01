import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hermest Clinic Visual Consent Sheet",
  description: "Hermest Clinic pre-procedure visual consent sheet",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}
