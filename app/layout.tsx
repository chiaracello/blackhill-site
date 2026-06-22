import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Blackhill Capital | Advisory em Crédito Complexo e Precatórios",
    template: "%s | Blackhill Capital",
  },
  description:
    "Blackhill Capital é uma boutique independente de advisory em crédito complexo — precatórios, NPL judicial e distressed credit no Brasil. Sem gestão de capital próprio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="h-full">
      <body className="min-h-full flex flex-col bg-navy text-off-white antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
