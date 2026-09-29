import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const fraunces = Fraunces({ subsets: ["latin"], variable: "--font-fraunces" });

export const metadata: Metadata = {
  title: "Thidel — Alta Alfaiataria Masculina",
  description: "Ternos, camisas e esporte fino masculinas com altos detalhes profissionais.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} ${fraunces.variable} font-sans bg-bg text-ink font-light`}>
        {children}
      </body>
    </html>
  );
}
