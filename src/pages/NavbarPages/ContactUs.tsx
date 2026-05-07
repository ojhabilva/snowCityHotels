"use client";

import { Shivalaya1, ContactPageLogo, EmailIcon } from "@/constent/graphic";
import { FaMapMarkerAlt, FaPhoneAlt, FaUser, FaCommentAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ContactUs() {
    return (
        <div className="bg-[#f2f2f2] min-h-screen font-poppins">
            {/* Hero Section */}
            <section className="relative w-full h-[350px] md:h-[480px] overflow-hidden">
                <Image
                    src={Shivalaya1}
                    alt="Contact Us Background"
                    fill
                    className="object-cover object-top"
                    priority
                />

                <div className="absolute inset-0 bg-black/40" />

                <div className="absolute inset-0 flex flex-col items-center justify-start pt-20 md:pt-28 text-white">
                    <motion.h1 
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="relative z-10 text-[35px] md:text-[65px] font-bold tracking-tight [text-shadow:_0_2px_10px_rgba(0,0,0,0.5)]"
                    >
                        Contact Us
                    </motion.h1>
                </div>
            </section>

            {/* Main Content Section */}
            <section className="w-full py-12 px-4 md:px-6 lg:px-8 max-w-[1650px] mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_2fr] gap-8 md:gap-12 items-stretch">

                    {/* LEFT COLUMN */}
                    <div className="flex flex-col space-y-6 h-full">
                        {/* Contact Info Card */}
                        <div className="bg-white p-8 rounded-sm shadow-sm border border-gray-100">
                            <div className="mb-8">
                                <img
                                    src={ContactPageLogo.src}
                                    alt="Snow City Stays Logo"
                                    className="w-full max-w-[320px] h-auto object-contain"
                                />
                            </div>

                            <div className="space-y-5">
                                <div className="flex items-start gap-3">
                                    <FaMapMarkerAlt className="text-[#333] mt-1.5 text-lg flex-shrink-0" />
                                    <p className="text-[#333] text-[18px] font-normal leading-snug">
                                        Left Bank Aleo, Manali, Distt. Kullu (H.P.)
                                    </p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <FaPhoneAlt className="text-[#333] text-lg flex-shrink-0" />
                                    <p className="text-[#333] text-[18px] font-normal">
                                        094595-15050 & 089883-15050
                                    </p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <img src={EmailIcon.src} alt="Email" className="w-5 h-5 flex-shrink-0" />
                                    <p className="text-[#333] text-[18px] font-normal">
                                        snowcitystays@gmail.com
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Map Card */}
                        <div className="bg-white p-4 rounded-sm shadow-sm border border-gray-100 flex flex-col">
                            <p className="text-[18px] font-bold mb-3 text-[#333] px-2">Map</p>
                            <div className="w-full h-[250px] rounded-sm overflow-hidden">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3344.8213233853177!2d77.1891!3d32.2396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3904870000000001%3A0x0!2zMzLCsDE0JzIyLjYiTiA3N8KwMTEnMjAuOCJF!5e0!3m2!1sen!2sin!4v1714986423985!5m2!1sen!2sin"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen={true}
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    </div>

                    {/* RIGHT COLUMN - Inquiry Form */}
                    <div className="bg-white p-8 md:p-10 rounded-sm shadow-sm border border-gray-100 self-start w-full">
                        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-[#333]">
                            Send Us Your Queries
                        </h2>

                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <div className="flex items-center gap-2 text-[#333] font-medium text-[18px]">
                                        <FaUser className="text-sm" />
                                        <label>First Name</label>
                                    </div>
                                    <input
                                        type="text"
                                        placeholder="First Name"
                                        className="w-full px-3 py-2.5 border border-gray-300 rounded-sm focus:outline-none focus:border-gray-500 transition text-gray-800 text-[16px]"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <div className="flex items-center gap-2 text-[#333] font-medium text-[18px]">
                                        <label>Last Name</label>
                                    </div>
                                    <input
                                        type="text"
                                        placeholder="Surname"
                                        className="w-full px-3 py-2.5 border border-gray-300 rounded-sm focus:outline-none focus:border-gray-500 transition text-gray-800 text-[16px]"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <div className="flex items-center gap-2 text-[#333] font-medium text-[18px]">
                                        <img src={EmailIcon.src} alt="Email" className="w-5 h-5" />
                                        <label>E-mail</label>
                                    </div>
                                    <input
                                        type="email"
                                        placeholder="xyz@abc.com"
                                        className="w-full px-3 py-2.5 border border-gray-300 rounded-sm focus:outline-none focus:border-gray-500 transition text-gray-800 text-[16px]"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <div className="flex items-center gap-2 text-[#333] font-medium text-[18px]">
                                        <FaPhoneAlt className="text-sm" />
                                        <label>Phone</label>
                                    </div>
                                    <input
                                        type="text"
                                        placeholder="Phone No."
                                        className="w-full px-3 py-2.5 border border-gray-300 rounded-sm focus:outline-none focus:border-gray-500 transition text-gray-800 text-[16px]"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <div className="flex items-center gap-2 text-[#333] font-medium text-[18px]">
                                    <FaCommentAlt className="text-sm" />
                                    <label>Message</label>
                                </div>
                                <textarea
                                    rows={5}
                                    placeholder="Type your message"
                                    className="w-full px-3 py-2.5 border border-gray-300 rounded-sm focus:outline-none focus:border-gray-500 transition text-gray-800 text-[16px] resize-none"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-[#3d3d3d] hover:bg-[#2d2d2d] text-white font-bold py-4 rounded-sm transition duration-300 uppercase tracking-wider text-[18px] mt-4"
                            >
                                SEND ENQUIRY
                            </button>
                        </form>
                    </div>

                </div>
            </section>
        </div>
    );
}

