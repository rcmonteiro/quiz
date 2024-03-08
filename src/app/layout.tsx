import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { GoogleTagManager } from '@next/third-parties/google';
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
        <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM ?? ''} />
        {children}
      </body>
    </html>
  );
}
