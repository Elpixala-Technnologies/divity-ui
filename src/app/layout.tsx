import type { Metadata } from "next";
import { Poppins } from "@next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"], // Adjust based on your needs
});

export const metadata: Metadata = {
  title: "Divity Audio",
  description: "Divity Audio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} relative bg-gray-100 antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
