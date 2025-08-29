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
  title: "EcoCare Alliance Foundation | Connecting Health and Environment",
  description: "A registered NGO in Tanzania (Reg. No. 00NGO/R/8467) dedicated to providing healthcare services, promoting health education, championing environmental conservation, and empowering communities through sustainable initiatives.",
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
