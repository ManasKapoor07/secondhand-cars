import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Provider } from "react-redux";
import store from "@/redux/store/store";
import ReduxProvider from "@/redux/provide";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "MBC | Buy & Sell Second-Hand Cars | Maa Bahawani Car Bazar",
  description:
    "Find trusted second-hand cars at the best prices in India. Browse verified used car listings from top brands. Buy or sell now at Maa Bahawani Car Bazar.",
  keywords: [
    "second hand cars",
    "used cars",
    "buy used cars",
    "sell car online",
    "maa bhawani car haldwani",
    "maa bhawani car bazar haldwani",
    "nanital",
    "Maa Bahawani Car Bazar",
    "car bazar",
    "used cars India",
  ],
  metadataBase: new URL("https://www.maabhawanicarbazar.com"),
  openGraph: {
    title: "Maa Bahawani Car Bazar - Verified Second-Hand Cars",
    description:
      "Buy & sell second-hand cars from trusted dealers. Top deals on used cars from Maruti, Hyundai, Tata, Honda and more.",
    url: "https://www.maabhawanicarbazar.com/",
    siteName: "Maa Bahawani Car Bazar",
    images: [
      {
        url: "../logo.png", // place an image in public folder
        width: 1200,
        height: 630,
        alt: "Maa Bahawani Car Bazar - Used Cars",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
