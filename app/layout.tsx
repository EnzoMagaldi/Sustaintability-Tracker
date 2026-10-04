import type { Metadata } from "next";
import { Merriweather } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Sustainability Tracker",
  description:
    "Site criado para compilar as empresas que levam a sério questões de sustentabilidade em um só lugar ",
};

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
});

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-br" className={merriweather.className}>
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
