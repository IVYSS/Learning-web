import { Navbar } from "@/src/components/Navbar/Navbar";
import { Nunito, Source_Sans_3 } from "next/font/google";
import { Footer } from "./Footer";
// import { Navbar } from "@/src/components/Navbar";
import "./globals.css";

// Configure Nunito
const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  display: "swap",
});

// Configure Source Sans 3
const sourceSans3 = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source-sans-3",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${nunito.variable} ${sourceSans3.variable}`}>
        {/* <Navbar tabs={mockTabHome} /> */}
        {children}
        <Footer />
      </body>
    </html>
  );
}
