"use client";

import { AboutUsBG, NavbarLogo } from "@/constent/graphic";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

export default function ContactUs() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative w-full h-[50vh] md:h-[60vh] flex items-center justify-center text-white overflow-hidden">
                {/* Background Image */}
                <img
                    src={AboutUsBG.src}
                    alt="Contact Us Background"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40" />

                {/* Content */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    className="relative z-10 text-center"
                >
                    <h1 className="text-4xl md:text-7xl font-bold tracking-tight">
                        Contact Us
                    </h1>
                </motion.div>
            </section>

            {/* Main Content Section */}
            <section className="w-full bg-[#f9f9f9] py-16 px-6 md:px-16 lg:px-24">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                    
                    {/* Left Column - Contact Info Card */}
                    <motion.div 
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="bg-white p-10 rounded-lg shadow-xl flex flex-col items-center md:items-start space-y-8 h-full min-h-[500px]"
                    >
                        <motion.div 
                            whileHover={{ scale: 1.05 }}
                            className="mb-6 self-center md:self-start cursor-pointer"
                        >
                            <img
                                src={NavbarLogo.src}
                                alt="Snow City Stays Logo"
                                className="w-[180px] md:w-[220px]"
                            />
                        </motion.div>

                        <div className="space-y-8 w-full">
                            {[
                                { icon: <FaMapMarkerAlt />, text: "Left Bank Aleo, Manali, Distt. Kullu (H.P.)" },
                                { icon: <FaPhoneAlt />, text: "094595-15050 & 089883-15050" },
                                { icon: <FaEnvelope />, text: "snowcitystays@gmail.com" }
                            ].map((item, idx) => (
                                <motion.div 
                                    key={idx}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 + idx * 0.1 }}
                                    className="flex items-start gap-4"
                                >
                                    <div className="text-[#8B0000] mt-1 text-xl">
                                        {item.icon}
                                    </div>
                                    <p className="text-gray-700 text-lg md:text-xl font-medium leading-relaxed">
                                        {item.text}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right Column - Inquiry Form Card */}
                    <motion.div 
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="bg-white p-10 rounded-lg shadow-xl h-full"
                    >
                        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-gray-800">
                            Send Us Your Queries
                        </h2>
                        
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-gray-700 font-medium text-lg">First Name</label>
                                    <input 
                                        type="text" 
                                        placeholder="First Name"
                                        className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-[#486221] transition text-gray-800"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-gray-700 font-medium text-lg">Last Name</label>
                                    <input 
                                        type="text" 
                                        placeholder="Surname"
                                        className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-[#486221] transition text-gray-800"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-gray-700 font-medium text-lg">E-mail</label>
                                    <input 
                                        type="email" 
                                        placeholder="xyz@abc.com"
                                        className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-[#486221] transition text-gray-800"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-gray-700 font-medium text-lg">Phone</label>
                                    <input 
                                        type="text" 
                                        placeholder="Phone No."
                                        className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-[#486221] transition text-gray-800"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-gray-700 font-medium text-lg">Message</label>
                                <textarea 
                                    rows={6}
                                    placeholder="Type your message"
                                    className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-[#486221] transition text-gray-800 resize-none"
                                ></textarea>
                            </div>

                            <motion.button 
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                type="submit"
                                className="w-full bg-[#3d3d3d] hover:bg-black text-white font-bold py-4 rounded transition duration-300 uppercase tracking-wider text-lg shadow-lg"
                            >
                                Send Enquiry
                            </motion.button>
                        </form>
                    </motion.div>

                </div>
            </section>
        </>
    );
}
