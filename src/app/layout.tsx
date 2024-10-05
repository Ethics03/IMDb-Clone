import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from '../Components/Header'
import Providers from './Providers'
import Navbar from '../Components/Navbar'
import Search from "@/Components/Search";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Imdb Clone",
  description: "This is a movie database clone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

      

    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>  
        <Header/>
        <Navbar/>
        <Search/>
        {children}
        </Providers>
      </body>
     
    </html>
  );
}
