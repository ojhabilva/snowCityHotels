"use client";

import React from "react";
import { useState } from "react";
import { NavbarContactButton, NavbarIcon1, NavbarIcon2, NavbarLogo } from "@/constent/graphic";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";
import PropertiesPopup from "../popups/PropertiesPopup";
import BlogsPopup from "../popups/BlogsPopup";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    const [showBlogsPopup, setShowBlogsPopup] = useState(false);

    const navLinkVariants = {
        hover: { scale: 1.05, transition: { duration: 0.2 } }
    };

    const iconVariants = {
        hover: { scale: 1.2, transition: { duration: 0.2 } }
    };

    return (
        <>
            <nav className="w-full z-10 h-[70px] md:h-[90px] px-4 md:px-10 lg:px-16 bg-[#486221] text-white flex items-center justify-between relative">

                {/* LEFT - LOGO */}
                <Link href="/" className="cursor-pointer">
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="flex items-center"
                    >
                        <img
                            src={NavbarLogo.src}
                            alt="Logo"
                            className="w-[60px] md:w-[80px] h-auto"
                        />
                    </motion.div>
                </Link>

                {/* CENTER - MENU (DESKTOP) */}
                <ul className="hidden ml-20 lg:flex gap-6 lg:gap-10 text-base lg:text-lg font-medium">
                    <li>
                        <motion.button
                            whileHover="hover"
                            variants={navLinkVariants}
                            onClick={() => setShowPopup(true)}
                            className="hover:text-[#b5a2a2]"
                        >
                            Properties
                        </motion.button>
                    </li>
                    <li>
                        <motion.div whileHover="hover" variants={navLinkVariants}>
                            <Link href="#packages" className="hover:text-[#b5a2a2]">Packages</Link>
                        </motion.div>
                    </li>
                    <li>
                        <motion.div whileHover="hover" variants={navLinkVariants}>
                            <Link href="/AboutUs" className="hover:text-[#b5a2a2]">About Us</Link>
                        </motion.div>
                    </li>
                    <li>
                        <motion.button
                            whileHover="hover"
                            variants={navLinkVariants}
                            onClick={() => setShowBlogsPopup(true)}
                            className="hover:text-[#b5a2a2]"
                        >
                            Blogs
                        </motion.button>
                    </li>
                    <li>
                        <motion.div whileHover="hover" variants={navLinkVariants}>
                            <Link href="/ContactUs" className="hover:text-[#b5a2a2]">Contact us</Link>
                        </motion.div>
                    </li>
                    <li>
                        <motion.div whileHover="hover" variants={navLinkVariants}>
                            <Link href="#follow" className="hover:text-[#b5a2a2]">Faq</Link>
                        </motion.div>
                    </li>
                </ul>

                {/* RIGHT - ACTIONS */}
                <div className="hidden lg:flex items-center gap-4">
                    <Link href="/DirectReservation">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            className="text-sm md:text-lg font-semibold hover:text-[#b5a2a2] transition uppercase"
                        >
                            RESERVATION
                        </motion.button>
                    </Link>

                    <div className="flex flex-col items-center">
                        <motion.img whileHover="hover" variants={iconVariants} src={NavbarIcon2.src} alt="" className="w-4 md:w-5 h-4 md:h-5 cursor-pointer" />
                        <motion.img whileHover="hover" variants={iconVariants} src={NavbarContactButton.src} alt="" className="w-7 md:w-9 h-7 md:h-9 cursor-pointer" />
                        <motion.img whileHover="hover" variants={iconVariants} src={NavbarIcon1.src} alt="" className="w-4 md:w-5 h-4 md:h-5 cursor-pointer" />
                    </div>
                </div>

                {/* MOBILE MENU BUTTON */}
                <div className="lg:hidden">
                    <button onClick={() => setOpen(true)} className="p-2">
                        <FaBars size={24} />
                    </button>
                </div>

                {/* MOBILE MENU OVERLAY */}
                <div
                    className={`fixed inset-0 bg-black/60 z-[60] md:hidden transition-opacity duration-300 ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                        }`}
                    onClick={() => setOpen(false)}
                />

                {/* MOBILE MENU PANEL */}
                <div
                    className={`fixed top-0 right-0 h-full w-[80%] sm:w-[300px] bg-[#486221] z-[70] lg:hidden transform transition-transform duration-300 ease-in-out ${open ? "translate-x-0" : "translate-x-full"
                        } shadow-2xl p-6 flex flex-col`}
                >
                    <div className="flex justify-end mb-8">
                        <button onClick={() => setOpen(false)} className="p-2">
                            <FaTimes size={28} />
                        </button>
                    </div>

                    <div className="flex flex-col gap-6 text-xl font-medium">
                        <button
                            onClick={() => { setShowPopup(true); setOpen(false); }}
                            className="text-left hover:translate-x-2 transition-transform"
                        >
                            Properties
                        </button>
                        <Link href="#packages" onClick={() => setOpen(false)} className="hover:translate-x-2 transition-transform">Packages</Link>
                        <Link href="/AboutUs" onClick={() => setOpen(false)} className="hover:translate-x-2 transition-transform">About Us</Link>
                        <button
                            onClick={() => { setShowBlogsPopup(true); setOpen(false); }}
                            className="text-left hover:translate-x-2 transition-transform"
                        >
                            Blogs
                        </button>
                        <Link href="/ContactUs" onClick={() => setOpen(false)} className="hover:translate-x-2 transition-transform">Contact us</Link>
                        <Link href="#follow" onClick={() => setOpen(false)} className="hover:translate-x-2 transition-transform">Faq</Link>

                        <Link href="/DirectReservation" onClick={() => setOpen(false)}>
                            <button className="w-full border-2 border-white/40 px-6 py-3 rounded-xl mt-4 bg-white/10 hover:bg-white/20 transition uppercase">
                                RESERVATION
                            </button>
                        </Link>

                        <div className="flex gap-6 mt-auto pt-8 border-t border-white/20 justify-center">
                            <img src={NavbarIcon2.src} alt="WhatsApp" className="w-6 h-6" />
                            <img src={NavbarContactButton.src} alt="Call" className="w-11 h-11 mt-[-9px]" />
                            <img src={NavbarIcon1.src} alt="Gmail" className="w-6 h-6" />
                        </div>
                    </div>
                </div>
            </nav>
            <PropertiesPopup
                show={showPopup}
                onClose={() => setShowPopup(false)}
            />
            <BlogsPopup
                show={showBlogsPopup}
                onClose={() => setShowBlogsPopup(false)}
            />
        </>
    );
}