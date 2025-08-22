import { Nunito } from "next/font/google";
import "./globals.css";


const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  display: "swap",
});

export const metadata = {
  title: "EcoCare Foundation | Catalysing Change Across Africa",
  description: "We work with governments and stakeholders to drive change and improve the quality of lives across Africa through environmental sustainability and social development.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${nunito.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
