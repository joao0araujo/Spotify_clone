import type { Metadata } from "next";
import "./globals.css";
import { Figtree } from 'next/font/google';
import BarraLateral from "@/components/Barra-lateral";

const fonte = Figtree({subsets: ['latin']});

export const metadata: Metadata = {
  title: "Spotify Clone",
  description: "Esse é um clone do app Spotify",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body className={fonte.className}>
        <BarraLateral>
          {children}
        </BarraLateral>
      </body>
    </html>
  );
}
