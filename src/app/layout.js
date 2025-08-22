import { Andika } from "next/font/google";
import "./globals.css";


const andika = Andika({
  subsets: ["latin", "latin-ext", "cyrillic", "cyrillic-ext", "vietnamese"],
  variable: "--font-andika",
  display: "swap",
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

export const metadata = {
  title: "EcoCare Foundation | Catalysing Change Across Africa",
  description: "We work with governments and stakeholders to drive change and improve the quality of lives across Africa through environmental sustainability and social development.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${andika.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
