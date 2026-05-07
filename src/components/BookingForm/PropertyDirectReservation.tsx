"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Property2Hover, Property3Hover, PropertyRoom } from "@/constent/graphic";
import FollowUsSection from "@/pages/HomePages/FollowUsSection";

interface PropertyDRProps {
    name: string;
    bookingLink: string;
}

export default function PropertyDirectReservation({ name, bookingLink }: PropertyDRProps) {
    return (
        <div className="bg-white min-h-screen font-poppins">
            <section className="w-full bg-white text-black relative pb-10">
                {/* Header */}
                <div className="bg-[#e8e1c8] w-full py-6 text-center mb-10">
                    <h2 className="text-2xl md:text-4xl font-bold tracking-tight">
                        Direct Reservation - {name}
                    </h2>
                </div>

                {/* Info Cards */}
                <div className="grid md:grid-cols-2 gap-10 md:gap-14 px-6 md:px-20 max-w-7xl mx-auto">
                    {/* Stay Card */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="relative h-[350px] md:h-[500px] overflow-hidden group rounded-sm shadow-xl"
                    >
                        <Image
                            src={Property3Hover.src}
                            alt="Stay"
                            fill
                            className="object-cover group-hover:scale-105 transition duration-700"
                        />
                        <div className="absolute inset-0 bg-black/40 p-8 flex flex-col justify-start">
                            <h3 className="text-white text-3xl md:text-4xl font-bold mb-8 border-b-2 border-white pb-2 w-fit">
                                Stay
                            </h3>
                            <ul className="text-white text-lg md:text-2xl space-y-4 max-w-[90%] font-medium">
                                <li>• Complimentary accommodation for two children under 6 years of age</li>
                                <li>• Enjoy 10% off on laundry services for bills above INR 1000</li>
                            </ul>
                        </div>
                    </motion.div>

                    {/* Dining Card */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="relative h-[350px] md:h-[500px] overflow-hidden group rounded-sm shadow-xl"
                    >
                        <Image
                            src={PropertyRoom.src}
                            alt="Dining"
                            fill
                            className="object-cover group-hover:scale-105 transition duration-700"
                        />
                        <div className="absolute inset-0 bg-black/40 p-8 flex flex-col justify-start">
                            <h3 className="text-white text-3xl md:text-4xl font-bold mb-8 border-b-2 border-white pb-2 w-fit">
                                Dining
                            </h3>
                            <ul className="text-white text-lg md:text-2xl space-y-4 max-w-[90%] font-medium">
                                <li>• Enjoy 10% off on all dining</li>
                                <li>• Happy Hours: Buy 2 drinks and get the third complimentary (11:00–19:00)</li>
                            </ul>
                        </div>
                    </motion.div>
                </div>

                {/* Final CTA */}
                <div className="flex justify-center mt-16 px-6">
                    <Link 
                        href={bookingLink}
                        className="bg-black text-white px-16 py-5 text-xl md:text-2xl font-bold tracking-[0.2em] hover:bg-gray-800 transition shadow-2xl rounded-sm text-center"
                    >
                        BOOK NOW
                    </Link>
                </div>
            </section>

            {/* Midweek Promo Banner */}
            <section className="w-full py-16 bg-white px-6 md:px-20">
                <div className="relative w-full h-[400px] md:h-[550px] overflow-hidden rounded-sm shadow-2xl">
                    <Image
                        src={Property2Hover.src}
                        alt="Midweek Delight"
                        fill
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#5a6f2c]/90 via-[#5a6f2c]/40 to-transparent"></div>
                    <div className="absolute inset-0 flex flex-col md:flex-row justify-between p-8 md:p-16">
                        <div className="text-white max-w-lg flex flex-col justify-between h-full">
                            <h2 className="text-4xl md:text-7xl font-bold leading-tight italic" style={{ fontFamily: 'var(--font-satisfy), cursive' }}>
                                Midweek <br /> Delight
                            </h2>
                            <p className="mt-8 text-xl md:text-3xl font-medium max-w-[400px] leading-relaxed">
                                Unlock extra savings available only on our website
                            </p>
                        </div>
                        <div className="text-white flex flex-col justify-end items-start md:items-end max-w-md mt-10 md:mt-0">
                            <p className="text-lg md:text-2xl text-left md:text-right font-medium mb-6">
                                Enjoy additional savings when bookings are made from Monday to Sunday
                            </p>
                            <button className="bg-[#5a6f2c] text-white px-8 py-4 text-xl md:text-2xl font-bold hover:bg-white hover:text-[#5a6f2c] transition shadow-lg">
                                Use Code : Weekendoff
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <FollowUsSection />
        </div>
    );
}
