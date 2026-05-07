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
        <div>
            <motion.section
                id="about"
                variants={sectionSlide}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.3 }}
                className="relative bg-white w-full min-h-[70vh] md:min-h-[80vh] lg:h-[80vh] overflow-hidden"
            >
                {/* Background Image */}
                <motion.div
                    style={{ scale: 1.1 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 1.5 }}
                    className="absolute inset-0"
                >
                    <Image
                        src={HistorySectionbg.src}
                        alt="Our History"
                        fill
                        priority
                        className="object-cover"
                    />
                </motion.div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 md:bg-black/30" />

                {/* Content Wrapper */}
                <div className="relative z-10 flex items-center justify-center md:justify-start h-full px-4 sm:px-10 md:px-20 lg:px-32 py-10">

                    {/* Glass Card */}
                    <div
                        className="
                    w-full 
                    max-w-xs 
                    min-h-[300px] md:h-[60vh] 
                    text-center md:text-left
                    bg-[#1A649AB5]/71 backdrop-blur-lg border border-white/20
                    text-white 
                    flex flex-col items-center md:justify-center justify-between
                    p-8 md:p-12 
                    rounded-sm shadow-2xl
                    "
                    >
                        <h2 className="text-2xl md:text-4xl font-bold mb-8">
                            Our History
                        </h2>

                        <p className="text-base lg:text-lg text-center leading-relaxed mb-4 md:mb-6">
                            Since 2015, Snow City Stays brings together dreamers and innovators,
                            drawing inspiration from the timeless culture of the Himalayas.
                        </p>

                        <button
                            className="
                        bg-[#486221] text-white 
                        px-4 md:px-5 py-2 
                        text-sm md:text-lg
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
            <div className="h-[90px] w-full bg-white"></div>
        </div >
    );
}