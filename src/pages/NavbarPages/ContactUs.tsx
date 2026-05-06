"use client";

import { Shivalaya1, NavbarLogo } from "@/constent/graphic";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaUser, FaCommentAlt, FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";

export default function ContactUs() {
    return (
        <div className="bg-[#f2f2f2] min-h-screen">
            {/* Hero Section */}
            <section className="relative w-full h-[60vh] md:h-[75vh] flex items-center justify-center text-white overflow-hidden">
                {/* Background Image - Using Shivalaya1 which is a night shot of the property */}
                <img
                    src={Shivalaya1.src}
                    alt="Contact Us Background"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                
                {/* Overlay for better text readability */}
                <div className="absolute inset-0 bg-black/30" />

                {/* Content */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="relative z-10 text-center"
                >
                    <h1 className="text-5xl md:text-8xl font-bold tracking-normal melodrama drop-shadow-lg">
                        Contact Us
                    </h1>
                </motion.div>
            </section>

            {/* Main Content Section */}
            <section className="w-full py-12 md:py-20 px-4 md:px-10 lg:px-20 max-w-[1400px] mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-8 md:gap-12">
                    
                    {/* LEFT COLUMN - Contact & Map */}
                    <div className="space-y-8">
                        {/* Contact Info Card */}
                        <motion.div 
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="bg-white p-8 md:p-12 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] flex flex-col space-y-8"
                        >
                            <div className="self-start">
                                <img
                                    src={NavbarLogo.src}
                                    alt="Snow City Stays Logo"
                                    className="w-[180px] md:w-[240px] brightness-0"
                                />
                            </div>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <FaMapMarkerAlt className="text-[#333] mt-1.5 text-xl flex-shrink-0" />
                                    <p className="text-[#333] text-lg md:text-xl font-medium leading-snug">
                                        Left Bank Aleo, Manali, Distt. Kullu (H.P.)
                                    </p>
                                </div>
                                <div className="flex items-center gap-4">
                                    <FaPhoneAlt className="text-[#333] text-xl flex-shrink-0" />
                                    <p className="text-[#333] text-lg md:text-xl font-medium">
                                        094595-15050 & 089883-15050
                                    </p>
                                </div>
                                <div className="flex items-center gap-4">
                                    <FaEnvelope className="text-[#333] text-xl flex-shrink-0" />
                                    <p className="text-[#333] text-lg md:text-xl font-medium">
                                        snowcitystays@gmail.com
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Map Card */}
                        <motion.div 
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="bg-white p-4 md:p-6 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
                        >
                            <h3 className="text-xl font-bold mb-4 text-[#333] px-2">Map</h3>
                            <div className="w-full h-[350px] md:h-[450px] rounded-lg overflow-hidden grayscale-[0.2] contrast-[1.1]">
                                <iframe 
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1734918.4414002777!2d76.1256336!3d31.1048294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390453c367fdbfff%3A0x6fb351838248a30!2sHimachal%20Pradesh!5e0!3m2!1sen!2sin!4v1714986423985!5m2!1sen!2sin" 
                                    width="100%" 
                                    height="100%" 
                                    style={{ border: 0 }} 
                                    allowFullScreen={true} 
                                    loading="lazy" 
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div>
                        </motion.div>
                    </div>

                    {/* RIGHT COLUMN - Inquiry Form */}
                    <motion.div 
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="bg-white p-8 md:p-12 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] flex flex-col"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-[#333] melodrama">
                            Send Us Your Queries
                        </h2>
                        
                        <form className="space-y-8 flex-grow">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-3">
                                    <div className="flex items-center gap-2 text-[#333] font-semibold text-xl">
                                        <FaUser className="text-lg" />
                                        <label>First Name</label>
                                    </div>
                                    <input 
                                        type="text" 
                                        placeholder="First Name"
                                        className="w-full px-4 py-3.5 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#486221] transition text-gray-800 text-lg bg-[#fafafa]"
                                    />
                                </div>
                                <div className="space-y-3">
                                    <div className="flex items-center gap-2 text-[#333] font-semibold text-xl pl-0 md:pl-2">
                                        <label>Last Name</label>
                                    </div>
                                    <input 
                                        type="text" 
                                        placeholder="Surname"
                                        className="w-full px-4 py-3.5 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#486221] transition text-gray-800 text-lg bg-[#fafafa]"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-3">
                                    <div className="flex items-center gap-2 text-[#333] font-semibold text-xl">
                                        <FaEnvelope className="text-lg" />
                                        <label>E-mail</label>
                                    </div>
                                    <input 
                                        type="email" 
                                        placeholder="xyz@abc.com"
                                        className="w-full px-4 py-3.5 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#486221] transition text-gray-800 text-lg bg-[#fafafa]"
                                    />
                                </div>
                                <div className="space-y-3">
                                    <div className="flex items-center gap-2 text-[#333] font-semibold text-xl">
                                        <FaPhoneAlt className="text-lg" />
                                        <label>Phone</label>
                                    </div>
                                    <input 
                                        type="text" 
                                        placeholder="Phone No."
                                        className="w-full px-4 py-3.5 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#486221] transition text-gray-800 text-lg bg-[#fafafa]"
                                    />
                                </div>
                            </div>

                            <div className="space-y-3">
                                <div className="flex items-center gap-2 text-[#333] font-semibold text-xl">
                                    <FaCommentAlt className="text-lg" />
                                    <label>Message</label>
                                </div>
                                <textarea 
                                    rows={8}
                                    placeholder="Type your message"
                                    className="w-full px-4 py-3.5 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#486221] transition text-gray-800 text-lg bg-[#fafafa] resize-none"
                                ></textarea>
                            </div>

                            <motion.button 
                                whileHover={{ backgroundColor: "#1a1a1a" }}
                                whileTap={{ scale: 0.98 }}
                                type="submit"
                                className="w-full bg-[#444] text-white font-bold py-5 rounded-md transition duration-300 uppercase tracking-widest text-xl shadow-md mt-4 flex items-center justify-center gap-3"
                            >
                                Send Enquiry
                                <FaPaperPlane className="text-sm" />
                            </motion.button>
                        </form>
                    </motion.div>

                </div>
            </section>
        </div>
    );
}
