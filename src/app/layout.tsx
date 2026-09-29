import type { Metadata } from "next";
import "./globals.css";

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
      <body className="font-sans bg-bg text-ink font-light">
        {children}
      </body>
    </html>
  );
}
