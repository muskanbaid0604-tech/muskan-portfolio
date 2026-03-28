import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import {
  Babylonica,
  Comforter,
  Comforter_Brush,
  Knewave,
  Permanent_Marker,
  Protest_Revolution,
  Water_Brush,
} from "next/font/google";
import "./globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const permanentMarker = Permanent_Marker({
  variable: "--font-permanent-marker",
  weight: "400",
  subsets: ["latin"],
});

const comforterBrush = Comforter_Brush({
  variable: "--font-comforter-brush",
  weight: "400",
  subsets: ["latin"],
});

const babylonica = Babylonica({
  variable: "--font-babylonica",
  weight: "400",
  subsets: ["latin"],
});

const comforter = Comforter({
  variable: "--font-comforter",
  weight: "400",
  subsets: ["latin"],
});

const waterBrush = Water_Brush({
  variable: "--font-water-brush",
  weight: "400",
  subsets: ["latin"],
});

const knewave = Knewave({
  variable: "--font-knewave",
  weight: "400",
  subsets: ["latin"],
});

const protestRevolution = Protest_Revolution({
  variable: "--font-protest-revolution",
  weight: "400",
  subsets: ["latin"],
});

export const metadata = {
  title: "Muskan Baid",
  description: "",
  icons: {
    icon: [{ url: "/logo-mb.png", type: "image/png" }],
    apple: [{ url: "/logo-mb.png", type: "image/png" }],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${permanentMarker.variable} ${comforterBrush.variable} ${babylonica.variable} ${comforter.variable} ${waterBrush.variable} ${knewave.variable} ${protestRevolution.variable} antialiased max-w-[1920px] mx-auto overflow-x-hidden`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
