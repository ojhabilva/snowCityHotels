"use client";

import { Property2Hover, Property3Hover, PropertyRoom } from "@/constent/graphic";
import Image from "next/image";
import FollowUsSection from "../HomePages/FollowUsSection";
import { useMenu } from "@/context/MenuContext";
import PropertyDropdown from "@/components/components/PropertyDropdown";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";


export default function DirectReservation() {
    const { openMenu, openContact } = useMenu();
    const [selectedLink, setSelectedLink] = useState("");

    return (
        <>
            <section className="w-full bg-white text-black relative pb-10">

                {/* Side Labels */}
                {/* <button
                    onClick={openMenu}
                    className="hidden md:block absolute left-2 top-1/2 -translate-y-1/2 rotate-[-90deg] text-md tracking-widest hover:text-gray-600 transition-colors"
                >
                    Menu
                </button>
                <button
                    onClick={openContact}
                    className="hidden md:block absolute right-2 top-1/2 -translate-y-1/2 rotate-[90deg] text-md tracking-widest hover:text-gray-600 transition-colors"
                >
                    Contact
                </button> */}



                {/* Header */}
                <div className="bg-[#e8e1c8] w-full py-4 text-center mb-6">
                    <h2 className="text-2xl md:text-3xl font-semibold">
                        Direct Reservation
                    </h2>
                </div>

                {/* Select */}
                <div className="flex flex-col items-center mb-8">
                    <label className="text-lg mb-2 font-medium">Select Hotels</label>
                    <PropertyDropdown 
                        className="w-full md:w-[500px]" 
                        onSelect={(val) => {
                            if (val.includes("Nature House")) setSelectedLink("/DirectReservation/nature-house");
                            else if (val.includes("Montana Blue")) setSelectedLink("/DirectReservation/montana-blues");
                            else if (val.includes("Baan")) setSelectedLink("/DirectReservation/baan");
                            else if (val.includes("Shivalaya")) setSelectedLink("/DirectReservation/shivalaya");
                        }}
                    />
                </div>


                {/* Cards */}
                <div className="grid md:grid-cols-2 gap-14 px-6 md:px-14">

                    {/* Stay */}
                    <motion.div 
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative h-[350px] md:h-[450px] overflow-hidden group rounded-sm shadow-lg"
                    >
                        <Image
                            src={Property3Hover.src}
                            alt="Stay"
                            fill
                            className="object-cover group-hover:scale-105 transition duration-700"
                        />
                        <div className="absolute w-full h-[2px] bg-white top-25 left-0"></div>

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black/40 p-6 flex flex-col justify-center">
                            <h3 className="absolute top-8 left-8 text-white text-3xl font-bold mb-4">
                                Stay
                            </h3>

                            <ul className="absolute top-32 md:top-40 left-10 text-white text-lg md:text-2xl space-y-2 max-w-[80%]">
                                <li>• Complimentary accommodation for two children under 6 years of age</li>
                                <li>• Enjoy 10% off on laundry services for bills above INR 1000</li>
                            </ul>
                        </div>
                    </motion.div>

                    {/* Dining */}
                    <motion.div 
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative h-[350px] md:h-[450px] overflow-hidden group rounded-sm shadow-lg"
                    >
                        <Image
                            src={PropertyRoom.src}
                            alt="Dining"
                            fill
                            className="object-cover group-hover:scale-105 transition duration-700"
                        />

                        <div className="absolute w-full h-[2px] bg-white top-25 left-0"></div>

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black/40 p-6 flex flex-col justify-center">
                            <h3 className="absolute top-8 left-8 text-white text-3xl font-bold mb-4">
                                Dining
                            </h3>

                            <ul className="absolute top-32 md:top-40 left-10 text-white text-lg md:text-2xl space-y-2 max-w-[80%]">
                                <li>• Enjoy 10% off on all dining</li>
                                <li>• Happy Hours: Buy 2 drinks and get the third complimentary (11:00–19:00)</li>
                            </ul>
                        </div>
                    </motion.div>

                </div>

                {/* Button */}
                <div className="flex justify-center mt-12 px-6">
                    <Link 
                        href={selectedLink || "#"}
                        className={`w-full md:w-auto bg-black text-white px-12 py-4 text-xl font-bold tracking-widest hover:bg-gray-800 transition shadow-xl text-center ${!selectedLink ? 'opacity-50 cursor-not-allowed' : ''}`}
                    >
                        BOOK NOW
                    </Link>
                </div>

            </section>
            <section className="w-full py-10 bg-white">

                <div className="relative w-full h-[300px] md:h-[500px] overflow-hidden">

                    {/* Background Image */}
                    <Image
                        src={Property2Hover.src}
                        alt="Midweek Delight"
                        fill
                        className="object-cover"
                    />

                    {/* Left Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#5a6f2c]/80 to-transparent"></div>

                    {/* Content */}
                    <div className="absolute inset-0 flex flex-col md:flex-row justify-between p-6 md:p-10">

                        {/* LEFT TEXT */}
                        <div className="text-white max-w-md flex flex-col justify-between">
                            <h2 className="text-3xl md:text-6xl praise-regular leading-tight">
                                Midweek <br /> Delight
                            </h2>

                            <p className="mt-6 text-sm md:text-2xl max-w-[350px]">
                                Unlock extra savings available only on our website
                            </p>
                        </div>

                        {/* RIGHT TEXT */}
                        <div className="text-white flex flex-col justify-end items-start md:items-end max-w-md mt-6 md:mt-0">

                            <p className="text-sm md:text-lg text-left">
                                Enjoy additional savings when bookings are made from Monday to Sunday
                            </p>

                            <button className="mt-4 bg-[#5a6f2c] px-4 py-2 text-lg hover:bg-white hover:text-black transition">
                                Use Code : Weekendoff
                            </button>
                        </div>

                    </div>

                </div>

            </section>
            <FollowUsSection />
        </>
    )
}   