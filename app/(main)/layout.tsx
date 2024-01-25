import React, { useEffect } from 'react';

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Navbar from "./components/navbar";
import Image from "next/image";
import Footer from "./components/footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fit Dance Oradea",
  description:
    "ÎMBINĂ ARMONIOS IDEEA DE MIȘCARE, CU PLĂCEREA DE A DANSA",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link
          href="https://fonts.googleapis.com/css2?family=PT+Serif&display=swap"
          rel="stylesheet"
        ></link>
      </head>

         <body className={inter.className}>
          <div className="md:-translate-y-[30rem]  absolute top-0 -z-10">
            <Image
              className="hidden md:block "
              alt="bg"
              width={1800}
              height={1000}
              src="/bg.jpeg"
            ></Image>
            <Image
              className="md:hidden block"
              alt="bg"
              width={700}
              height={500}
              src="/bg.jpeg"
            ></Image>
          </div>
          
            <Navbar />
            {children}

            {" "}
            <Footer />
      </body>
      

    </html>
  );
}
