import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin", "latin-ext"],
  variable: "--font-roboto",
  weight: ["400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "Hermest Hair Clinic",
  description:
    "Haartransplantation in der Türkei mit Unique FUE / DHI, ALL-IN SAFETY PROTOCOL und All-Inclusive-Paketen.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className={roboto.variable}>
        {children}
      </body>
    </html>
  );
}
