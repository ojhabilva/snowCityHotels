"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useMenu } from "@/context/MenuContext";
import { FaTimes, FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function ContactMenu() {
    const { isContactOpen, closeContact } = useMenu();

    return (
        <AnimatePresence>
            {isContactOpen && (
                <motion.div
                    initial={{ x: "100%" }}
                    animate={{ x: "50%" }}
                    exit={{ x: "100%" }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="fixed inset-0 z-[100] flex flex-col overflow-hidden"
                >
                    {/* BACKDROP (to close) */}
                    <div className="absolute inset-0 z-[-1]" onClick={closeContact} />

                    {/* TOP PANEL (CREAM) */}
                    <div className="w-full md:w-[50%] h-[35%] bg-[#fffbeb] p-8 md:p-16 flex flex-col justify-center relative">
                        <button
                            onClick={closeContact}
                            className="absolute top-8 right-8 text-2xl hover:opacity-70 transition-opacity text-gray-800"
                        >
                            <FaTimes />
                        </button>

                        <h2 className="text-4xl md:text-5xl font-normal text-black mb-2">Contact</h2>
                        <h3 className="text-2xl md:text-xl font-normal text-black mb-6">Snow City Stays</h3>
                        <p className="text-lg md:text-xl text-gray-800 max-w-4xl leading-relaxed">
                            Reach out to us for inquiries, reservations, or any assistance—our team is here to ensure your ideal getaway.
                        </p>
                    </div>

                    {/* BOTTOM PANEL (GREEN) */}
                    <div className="w-full md:w-[50%] h-[65%] bg-[#486221] p-8 md:px-16 text-white flex flex-col">

                        {/* Sales & Reservation Section */}
                        <div className="flex flex-col md:flex-row justify-between items-start gap-10 mt-10">
                            <div className="text-2xl md:text-3xl font-light">
                                Sales & Reservation
                            </div>
                            <div className="flex flex-col gap-4 w-full md:w-80">
                                <button className="border border-white/60 rounded-xl py-3 px-8 text-center hover:bg-white hover:text-[#486221] transition-all text-xl tracking-widest uppercase">
                                    BOOK NOW
                                </button>
                                <button className="border border-white/60 rounded-xl py-3 px-8 text-center hover:bg-white hover:text-[#486221] transition-all text-xl tracking-widest">
                                    094595-15050
                                </button>
                                <button className="border border-white/60 rounded-xl py-3 px-8 text-center hover:bg-white hover:text-[#486221] transition-all text-xl tracking-widest">
                                    089883-15050
                                </button>
                                <button className="border border-white/60 rounded-xl py-3 px-8 text-center hover:bg-white hover:text-[#486221] transition-all text-lg tracking-wider truncate">
                                    snowcitystays@gmail.com
                                </button>
                            </div>
                        </div>

                        {/* Divider */}
                        <div className="w-full h-[1px] bg-white/20 my-5" />

                        {/* Follow Us Section */}
                        <div className="flex justify-between items-center mt-auto">
                            <div className="text-2xl md:text-3xl font-light">
                                Follow us
                            </div>
                            <div className="flex gap-6 items-center">
                                <a href="#" className="bg-black p-2 rounded-md hover:scale-110 transition-transform">
                                    <FaXTwitter size={24} />
                                </a>
                                <a href="#" className="bg-[#1877F2] p-2 rounded-md hover:scale-110 transition-transform">
                                    <FaFacebook size={24} />
                                </a>
                                <a href="#" className="bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] p-2 rounded-md hover:scale-110 transition-transform">
                                    <FaInstagram size={24} />
                                </a>
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
