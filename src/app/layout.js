import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "SmartCare Africa Foundation | Sustaining Life & Nature",
  description: "A registered Tanzanian NGO (Reg. No. 00NGO/R/8467) connecting human health and environmental sustainability to empower communities in Biharamulo, Kagera Region, and across Tanzania.",
  icons: {
    icon: "/logo/logo.jpg",
    shortcut: "/logo/logo.jpg",
    apple: "/logo/logo.jpg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable}`} suppressHydrationWarning>
      <body className="antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
