import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "../styles/globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export const metadata: Metadata = {
  title: "Pokédex",
  description:
    "Browse and search the original 151 Pokémon. Filter by type, search by name, and view detailed stats.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geist.variable} font-sans antialiased bg-slate-50`}>
        {children}
      </body>
    </html>
  );
}
