"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useMenu } from "@/context/MenuContext";
import { FooterLogo, NavbarLogo } from "@/constent/graphic";
import Link from "next/link";
import { FaTimes } from "react-icons/fa";

export default function SideMenu() {
    const { isOpen, closeMenu } = useMenu();

    const properties = [
        { name: "Home", href: "/" },
        { name: "Nature House", href: "/Properties/NatureHouse" },
        { name: "Montana Blue Resort", href: "/Properties/MontanaBlueResort" },
        { name: "Baan by Snow City Stays", href: "/Properties/Baan" },
        { name: "Shivalaya by Snow City Stays", href: "/Properties/Shivalaya" },
    ];

    const infoLinks = [
        { name: "Offers & Promotion", href: "#" },
        { name: "Blogs", href: "#" },
        { name: "Terms & Conditions", href: "#" },
        { name: "Privacy Policy", href: "#" },
    ];

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ x: "-100%" }}
                    animate={{ x: 0 }}
                    exit={{ x: "-100%" }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="fixed inset-0 z-[100] flex flex-col md:flex-row overflow-hidden"
                >
                    {/* LEFT PANEL (WHITE) */}
                    <div className="w-full md:w-[45%] bg-white h-full relative flex flex-col items-center justify-center p-10 overflow-y-auto">
                        {/* Logo */}
                        <div className="absolute top-10 left-10">
                            <img src={FooterLogo.src} alt="Snow City Stays" className="w-20 md:w-40 h-auto" />
                        </div>

                        {/* CLOSE MENU Vertical Text */}
                        <div className="absolute left-0 top-1/2 -translate-y-1/2 -rotate-90 whitespace-nowrap z-10">
                            <button
                                onClick={closeMenu}
                                className="text-[10px] md:text-xs tracking-[0.4em] text-gray-800 uppercase font-bold hover:opacity-50 transition-opacity"
                            >
                                CLOSE MENU
                            </button>
                        </div>

                        {/* Property Buttons Grid */}
                        <div className="flex ml-20 flex-wrap gap-15 max-w-xl mx-auto">
                            <Link href="/" onClick={closeMenu} className="border border-gray-400 rounded-full py-2 px-8 text-gray-800 hover:bg-black hover:text-white transition-all text-sm font-medium">
                                Home
                            </Link>
                            <Link href="/Properties/NatureHouse" onClick={closeMenu} className="border border-gray-400 rounded-full py-2 px-8 text-gray-800 hover:bg-black hover:text-white transition-all text-sm font-medium">
                                Nature House
                            </Link>
                            <Link href="/Properties/MontanaBlueResort" onClick={closeMenu} className="border border-gray-400 rounded-full py-2 px-8 text-gray-800 hover:bg-black hover:text-white transition-all text-sm font-medium">
                                Montana Blue Resort
                            </Link>
                            <Link href="/Properties/Baan" onClick={closeMenu} className="border border-gray-400 rounded-full py-2 px-8 text-gray-800 hover:bg-black hover:text-white transition-all text-sm font-medium">
                                Baan by Snow City Stays
                            </Link>
                            <Link href="/Properties/Shivalaya" onClick={closeMenu} className="border border-gray-400 rounded-full py-2 px-8 text-gray-800 hover:bg-black hover:text-white transition-all text-sm font-medium">
                                Shivalaya by Snow City Stays
                            </Link>
                        </div>
                    </div>

                    {/* RIGHT PANEL (GREEN) */}
                    <div className="w-full md:w-[55%] bg-[#486221] h-full text-white relative p-10 md:p-20 flex flex-col overflow-y-auto">
                        {/* Header */}
                        <div className="flex justify-between items-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-light tracking-wide">Information</h2>
                            <button onClick={closeMenu} className="text-2xl font-light hover:opacity-70 transition-opacity p-2">
                                x
                            </button>
                        </div>


                        {/* Links Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-8 mb-20">
                            <Link href="#" onClick={closeMenu} className="text-lg md:text-xl font-normal hover:opacity-70 transition-opacity">
                                Offers & Promotion
                            </Link>
                            <Link href="#" onClick={closeMenu} className="text-lg md:text-xl font-normal hover:opacity-70 transition-opacity">
                                Terms & Conditions
                            </Link>
                            <Link href="#" onClick={closeMenu} className="text-lg md:text-xl font-normal hover:opacity-70 transition-opacity">
                                Blogs
                            </Link>
                            <Link href="#" onClick={closeMenu} className="text-lg md:text-xl font-normal hover:opacity-70 transition-opacity">
                                Privacy Policy
                            </Link>
                        </div>

                        {/* Divider */}
                        <div className="w-full h-[0.5px] bg-white/40 mb-16" />

                        {/* Sales & Reservation */}
                        <div className="flex flex-col md:flex-row justify-between gap-10">
                            <div className="text-xl md:text-2xl font-normal">
                                Sales & Reservation
                            </div>
                            <div className="flex flex-col gap-3 w-full md:w-64 lg:w-72">
                                <button className="border border-white/60 rounded-lg py-2 px-6 text-center hover:bg-white hover:text-[#486221] transition-all text-sm tracking-widest uppercase">
                                    BOOK NOW
                                </button>
                                <button className="border border-white/60 rounded-lg py-2 px-6 text-center hover:bg-white hover:text-[#486221] transition-all text-sm tracking-widest">
                                    094595-15050
                                </button>
                                <button className="border border-white/60 rounded-lg py-2 px-6 text-center hover:bg-white hover:text-[#486221] transition-all text-sm tracking-widest">
                                    089883-15050
                                </button>
                                <button className="border border-white/60 rounded-lg py-2 px-6 text-center hover:bg-white hover:text-[#486221] transition-all text-xs tracking-wider truncate">
                                    snowcitystays@gmail.com
                                </button>
                            </div>
                        </div>

                        {/* Bottom Divider */}
                        <div className="w-full h-[0.5px] bg-white/40 mt-16 md:mt-24" />
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );

}
