"use client";

import "./globals.css";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/navbar";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

const playfair = Playfair_Display({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700", "800", "900"],
    variable: "--font-playfair",
});

import { MenuProvider } from "@/context/MenuContext";
import SideMenu from "@/components/layout/SideMenu";
import ContactMenu from "@/components/layout/ContactMenu";

export default function MainLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <MenuProvider>
                    <Navbar />
                    <SideMenu />
                    <ContactMenu />
                    {children}
                    <Footer />
                </MenuProvider>
            </body>
        </html>
    );
}


