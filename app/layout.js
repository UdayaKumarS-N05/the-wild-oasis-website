import Navigation from "./_components/Navigation";
import Logo from "./_components/Logo";
import Header from "./_components/Header";

import { Josefin_Sans } from "next/font/google";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

import { Manrope } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
});

import "@/app/_styles/globals.css";

export const metadata = {
  // title: "The Wild Oasis",
  title: {
    template: "%s : The Wild Oasis",
    default: "Welcome to The Wild Oasis",
  },
  description:
    "Luxurious cabin hotel, located in the middle of the Western Ghats.",
};

function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`text-primary-100 min-h-dvh bg-primary-950 ${manrope.className} flex flex-col antialiased  relative`}
      >
        <Header />
        <div className="flex-1 px-8 py-12 grid">
          <main className="max-w-7xl mx-auto w-full">{children}</main>
        </div>
      </body>
    </html>
  );
}

export default RootLayout;
