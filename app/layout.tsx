import { Nunito, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import { Footer } from "./Footer";
// import { Navbar } from "@/src/components/Navbar";

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
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${nunito.variable} ${sourceSans3.variable}`}
        suppressHydrationWarning
      >
        {/* <Navbar tab={mockTabHome} /> */}
        {children}
        <Footer />
      </body>
    </html>
  );
}
