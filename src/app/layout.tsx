import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./styles/globals.css";

const globalFont = Poppins({subsets: ['latin'], weight: ['100', '200', '400', '700']});

export const metadata: Metadata = {
  title: "Desafio do Milhão",
  description: "Consegue responder todas as 15 perguntas e tirar 100%?",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={globalFont.className}>
        {children}
      </body>
    </html>
  );
}
