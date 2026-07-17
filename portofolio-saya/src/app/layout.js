import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "800"],
});

export const metadata = {
  title: "Stephen Joshua Manullang — Portfolio",
  description: "Portfolio of Stephen Joshua Manullang",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
          <Header />
          <main id="home" className="flex-1">{children}</main>
        </body>
    </html>
  );
}
