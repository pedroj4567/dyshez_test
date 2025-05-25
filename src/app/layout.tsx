import "./globals.css";
import type { Metadata } from "next";
import { poppins } from "@/lib/fonts";

export const metadata: Metadata = {
  title: "Dyshez",
  description: "Plataforma Dyshez",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${poppins.variable}`}>
      <body className="min-h-screen bg-background font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
