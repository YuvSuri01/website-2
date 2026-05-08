import "./globals.css";
import { Poppins, Playfair_Display } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import FormContextProvider from "@/context/FormContext";

import { Navbar, Footer, Welcome } from "@/components";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["devanagari"],
  variable: "--font-poppins",
});

const playfair_display = Playfair_Display({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata = {
  title: "3 Year Home",
  description: "Find your home ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <body
        className={`${playfair_display.variable} ${poppins.variable} bg-[url('/assets/bg-image.png')] bg-[#f0fdfa]`}
      >
        <FormContextProvider>
          <Welcome />
          <Navbar />
          <main>{children}</main>
          <Footer />
        </FormContextProvider>
      </body>
    </html>
  );
}
