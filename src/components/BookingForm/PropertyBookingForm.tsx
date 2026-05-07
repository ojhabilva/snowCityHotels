"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronLeft, FaChevronRight, FaUser, FaMinus, FaPlus, FaExternalLinkAlt, FaCalendarAlt } from 'react-icons/fa';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface RoomOption {
    title: string;
    description?: string;
    originalPrice: number;
    discountedPrice: number;
    discountLabel: string;
}

interface PropertyData {
    name: string;
    subtitle?: string;
    description: string;
    images: string[];
    rooms: RoomOption[];
}

export default function PropertyBookingForm({ property }: { property: PropertyData }) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [roomCounts, setRoomCounts] = useState<number[]>(property.rooms.map(() => 0));

    // Date states
    const [startDate, setStartDate] = useState<Date | null>(new Date());
    const [endDate, setEndDate] = useState<Date | null>(new Date(new Date().setDate(new Date().getDate() + 1)));

    const handlePrevImage = () => {
        setCurrentImageIndex((prev) => (prev === 0 ? property.images.length - 1 : prev - 1));
    };

    const handleNextImage = () => {
        setCurrentImageIndex((prev) => (prev === property.images.length - 1 ? 0 : prev + 1));
    };

    const updateCount = (index: number, delta: number) => {
        setRoomCounts((prev) => {
            const newCounts = [...prev];
            newCounts[index] = Math.max(0, newCounts[index] + delta);
            return newCounts;
        });
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-white min-h-screen font-poppins"
        >
            {/* 1. Hero Promo Banner */}
            <section className="relative w-full h-[350px] md:h-[450px] overflow-hidden">
                <motion.div
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.5 }}
                    className="absolute inset-0"
                >
                    <Image
                        src={property.images[0]}
                        alt="Promo Banner"
                        fill
                        className="object-cover"
                    />
                </motion.div>
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute inset-0 flex flex-col items-start justify-center px-6 md:px-20 text-white">
                    <motion.h2
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-4xl md:text-6xl italic mb-4"
                        style={{ fontFamily: 'var(--font-satisfy), cursive' }}
                    >
                        Affair With September
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 }}
                        className="max-w-2xl text-sm md:text-lg mb-8 leading-relaxed"
                    >
                        Embrace the charm of September with a beautifully curated romantic getaway. Enjoy daily breakfast and dinner, an intimate romantic dining experience, delightful in-room surprises, and exclusive savings crafted for a memorable stay.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.7 }}
                        className="absolute top-1/2 right-6 md:right-20 -translate-y-1/2 text-right hidden md:block"
                    >
                        <p className="text-sm font-bold uppercase tracking-widest mb-1">USE CODE</p>
                        <h3 className="text-4xl font-bold mb-1">SNOWCITY20</h3>
                        <p className="text-sm font-medium">FOR ADDITIONAL SAVINGS</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.9 }}
                        className="mt-4 space-y-1 text-sm md:text-base font-bold uppercase tracking-wider"
                    >
                        <p>BOOKING DATE : 05 SEPT – 06 OCT</p>
                        <p>STAY DATES : 10 SEPT – 17 SEPT</p>
                    </motion.div>
                </div>
            </section>

            {/* 2. Search Strip */}
            <div className="max-w-[1400px] mx-auto px-6 mt-8 relative z-1">
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1.1 }}
                    className="bg-white p-4 rounded-sm flex flex-col md:flex-row gap-4 items-center"
                >
                    <div className="flex-1 w-full">
                        <select className="w-full p-3 text-black border border-black rounded-sm focus:outline-none focus:ring-1 focus:ring-black transition">
                            <option>India</option>
                        </select>
                    </div>
                    <div className="flex-[2] w-full flex items-center border border-black rounded-sm p-3 gap-2 cursor-pointer hover:border-gray-400 transition">
                        <div className="flex-1 flex items-center gap-2">
                            <FaCalendarAlt className="text-gray-400 text-sm" />
                            <DatePicker
                                selected={startDate}
                                onChange={(date: any) => setStartDate(date)}
                                selectsStart
                                startDate={startDate}
                                endDate={endDate}
                                dateFormat="dd MMM yyyy"
                                className="w-full text-sm text-black bg-transparent focus:outline-none cursor-pointer"
                                placeholderText="Check-in"
                            />
                        </div>
                        <FaChevronRight className="text-gray-400 text-xs" />
                        <div className="flex-1 flex items-center gap-2">
                            <DatePicker
                                selected={endDate}
                                onChange={(date: any) => setEndDate(date)}
                                selectsEnd
                                startDate={startDate}
                                endDate={endDate}
                                minDate={startDate || undefined}
                                dateFormat="dd MMM yyyy"
                                className="w-full text-sm text-black bg-transparent focus:outline-none cursor-pointer"
                                placeholderText="Check-out"
                            />
                        </div>
                    </div>
                    <div className="flex-1 w-full">
                        <input type="text" placeholder="Promo" className="w-full p-3 border border-black rounded-sm focus:outline-none focus:ring-1 placeholder:text-black focus:ring-black transition" />
                    </div>
                    <button className="w-full md:w-auto bg-[#2d2d2d] text-white px-10 py-3 font-bold rounded-sm hover:bg-black active:scale-95 transition">
                        SEARCH
                    </button>
                </motion.div>
            </div>

            {/* 3. Room/Package Toggle */}
            <div className="flex justify-center mt-12 mb-16">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.3 }}
                    className="bg-gray-100 p-1 rounded-2xl flex border border-gray-200"
                >
                    <button className="px-8 py-2 rounded-2xl bg-[#2d2d2d] text-white text-sm font-bold shadow-md transition-all">
                        Room
                    </button>
                    <button className="px-8 py-2 rounded-2xl text-gray-600 text-sm font-bold hover:bg-gray-200 transition-all">
                        Package
                    </button>
                </motion.div>
            </div>

            <div className="max-w-[1400px] mx-auto px-6">
                {/* 4. Property Details */}
                <div className="mb-20">
                    <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl font-bold mb-8 text-black"
                    >
                        Property Details
                    </motion.h2>
                    <div className="grid md:grid-cols-2 gap-20 items-start">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative w-[100%] h-full aspect-[16/10] bg-gray-200 rounded-sm overflow-hidden group"
                        >
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={currentImageIndex}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.5 }}
                                    className="absolute w-full h-full inset-0"
                                >
                                    <Image
                                        src={property.images[currentImageIndex]}
                                        alt={property.name}
                                        fill
                                        className="object-cover w-full h-full"
                                    />
                                </motion.div>
                            </AnimatePresence>
                            <button
                                onClick={handlePrevImage}
                                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 rounded-full flex items-center justify-center shadow-md hover:bg-white transition opacity-0 group-hover:opacity-100 z-10"
                            >
                                <FaChevronLeft className="text-gray-800" />
                            </button>
                            <button
                                onClick={handleNextImage}
                                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 rounded-full flex items-center justify-center shadow-md hover:bg-white transition opacity-0 group-hover:opacity-100 z-10"
                            >
                                <FaChevronRight className="text-gray-800" />
                            </button>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-6"
                        >
                            <h3 className="text-3xl font-bold text-black">{property.name}</h3>
                            <div className="text-gray-700 leading-relaxed text-justify space-y-4">
                                {property.description.split('\n').map((para, i) => (
                                    <p key={i}>{para}</p>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* 5. Room Options */}
                <div className="space-y-6 mb-24">
                    {property.rooms.map((room, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white border text-black border-gray-200 rounded-sm p-6 shadow-sm flex flex-col xl:flex-row items-center justify-between gap-8 hover:shadow-md transition-shadow"
                        >
                            <div className="flex-1 w-full space-y-3">
                                <div className="flex items-center gap-4">
                                    <h4 className="text-xl font-bold">{room.title}</h4>
                                    <button className=" text-sm flex items-center gap-2 hover:underline transition">
                                        Package info <FaExternalLinkAlt className="text-[10px]" />
                                    </button>
                                </div>

                                <div className="relative h-8 w-full max-w-[280px] overflow-hidden">
                                    <div className="absolute inset-0 bg-black skew-x-[-20deg] origin-left" />
                                    <p className="relative z-10 text-white text-xs font-bold px-4 py-2 italic whitespace-nowrap">
                                        {room.discountLabel}
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row items-center gap-8 xl:gap-12 w-full xl:w-auto">
                                <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-full">
                                    <span className="text-xl font-bold">2</span>
                                    <FaUser className="text-xl text-gray-700" />
                                </div>

                                <div className="flex flex-col items-center gap-2 min-w-[120px]">
                                    <p className="text-sm font-bold text-gray-700 uppercase tracking-tight">Room (s)</p>
                                    <div className="flex items-center border border-gray-300 rounded-sm overflow-hidden bg-white">
                                        <button
                                            onClick={() => updateCount(index, -1)}
                                            className="p-2 px-4 hover:bg-gray-100 border-r border-gray-300 transition"
                                        >
                                            <FaMinus className="text-[10px]" />
                                        </button>
                                        <span className="px-6 py-2 font-bold min-w-[3rem] text-center">{roomCounts[index]}</span>
                                        <button
                                            onClick={() => updateCount(index, 1)}
                                            className="p-2 px-4 hover:bg-gray-100 border-l border-gray-300 transition"
                                        >
                                            <FaPlus className="text-[10px]" />
                                        </button>
                                    </div>
                                </div>

                                <div className="text-right space-y-1 min-w-[150px]">
                                    <div className="flex flex-col items-end">
                                        <span className="text-xs text-gray-500 font-bold uppercase">From</span>
                                        <div className="flex items-center gap-2 text-gray-400 line-through text-sm">
                                            <span>INR {room.originalPrice.toLocaleString()}</span>
                                            <div className="bg-gray-300 w-4 h-4 rounded-full flex items-center justify-center text-white text-[10px] font-bold">!</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-end gap-2 group cursor-default">
                                        <span className="text-2xl font-bold text-[#2d2d2d]">INR {room.discountedPrice.toLocaleString()}</span>
                                        <FaChevronRight className="text-xs mt-1 text-gray-400 group-hover:text-black transition" />
                                    </div>
                                    <p className="text-[10px] text-gray-500 font-medium">(Tax Exclude)</p>
                                </div>

                                <button className="w-full sm:w-auto bg-[#2d2d2d] text-white px-10 py-3 font-bold rounded-sm hover:bg-black active:scale-95 transition shadow-lg hover:shadow-xl">
                                    Book
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* 6. Simple Footer Links */}
                <div className="border-t border-gray-200 py-12 flex flex-wrap justify-end gap-x-12 gap-y-6 text-sm text-gray-800 uppercase tracking-wide">

                    <button className="hover:text-black transition underline-offset-4 hover:underline">Home</button>
                    <button className="hover:text-black transition underline-offset-4 hover:underline">About us</button>
                    <button className="hover:text-black transition underline-offset-4 hover:underline">Privacy Policy</button>
                    <button className="hover:text-black transition underline-offset-4 hover:underline">Payment Terms</button>
                    <button className="hover:text-black transition underline-offset-4 hover:underline">Manage Bookings</button>
                </div>
            </div>
        </motion.div>
    );
}
