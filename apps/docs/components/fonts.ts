import { Poppins } from "next/font/google";

export const poppins = Poppins({
  weight: ['400'],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const fontClassName = `${poppins.variable} font-sans`;