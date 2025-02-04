import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Inter } from 'next/font/google';


const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: {
    template: "%s | SurveyMonkey",
    default: "SurveyMonkey: The World's Most Popular Free Online Survey Tool"
  },
  description: "Use SurveyMonkey to drive your business forward by using our free online survey tool to capture the voices and opinions of the people who matter most to you.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        {children}
      </body>
    </html>
  );
}
