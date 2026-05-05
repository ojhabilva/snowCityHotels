"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { HistorySectionbg } from "@/constent/graphic";

// Animation
const sectionSlide: Variants = {
    hidden: { opacity: 0, y: 120, scale: 0.95 },
    show: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

export default function HistorySection() {
    return (
        <motion.section
            id="about"
            variants={sectionSlide}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className="relative w-full min-h-[70vh] md:min-h-[80vh] lg:h-[80vh] overflow-hidden"
        >
            {/* Background Image */}
            <Image
                src={HistorySectionbg.src}
                alt="Our History"
                fill
                priority
                className="object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 md:bg-black/30" />

            {/* Content Wrapper */}
            <div className="relative z-10 flex items-center justify-center md:justify-start h-full px-4 sm:px-6 md:px-12 lg:px-20 py-10 md:py-0">

                {/* Glass Card */}
                <div
                    className="
                    w-full 
                    max-w-sm sm:max-w-md md:max-w-lg 
                    h-[45vh] md:h-[45vh] 
                    text-center md:text-left
                    bg-blue-900/50 backdrop-blur-md 
                    text-white 
                    flex flex-col items-center justify-between
                    p-10 sm:p-6 md:p-8 
                    rounded-lg shadow-xl
                    "
                >
                    <h2 className="text-3xl font-semibold mb-4 md:mb-6">
                        Our History
                    </h2>

                    <p className="text-base lg:text-lg leading-relaxed mb-4 md:mb-6">
                        Since 2015, Snow City Stays brings together dreamers and innovators,
                        drawing inspiration from the timeless culture of the Himalayas.
                    </p>

                    <button
                        className="
                        bg-black text-white 
                        px-4 md:px-5 py-2 
                        text-sm md:text-base
                        rounded-md 
                        hover:bg-white hover:text-black 
                        transition duration-300
                        "
                    >
                        Read History
                    </button>
                </div>
            </div>
        </motion.section>
    );
}