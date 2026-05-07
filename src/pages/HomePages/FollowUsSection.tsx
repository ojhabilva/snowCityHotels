"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { FaInstagram } from "react-icons/fa";
import { Property1, Property2, Property3, Property4 } from "@/constent/graphic";


// Data
const places = [
    { name: "Nature House", image: Property1.src },
    { name: "Montana Blue Resort", image: Property2.src },
    { name: "Baan", image: Property3.src },
    { name: "Shivalaya", image: Property4.src },
];

// Animation variants
const container: Variants = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.15,
        },
    },
};

const item: Variants = {
    hidden: { opacity: 0, x: 100 },
    show: {
        opacity: 1,
        x: 0,
        scale: 1,
        transition: {
            duration: 0.3,
            ease: "easeOut",
        },
    },
};

export default function FollowUsSection() {
    return (
        <section id="follow" className="w-full bg-white py-10 px-6 overflow-hidden">

            {/* Heading */}
            <motion.h2
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: false, amount: 0.2 }}
                className="text-center text-2xl text-[#486221] md:text-4xl font-semibold mb-8"
            >
                Follow Us
            </motion.h2>

            {/* Grid */}
            <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.2 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-6"
            >
                {places.map((itemData, i) => (
                    <motion.div
                        key={i}
                        variants={item}
                        viewport={{ once: false, amount: 0.2 }}
                        className="relative group text-black overflow-hidden cursor-pointer"
                    >
                        {/* Image */}
                        <div className="relative w-full h-[180px] md:h-[220px]">
                            <Image
                                src={itemData.image}
                                alt={itemData.name}
                                fill
                                className="object-cover transition duration-500 group-hover:scale-110"
                            />
                        </div>

                        {/* Overlay on hover */}
                        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                            <FaInstagram className="text-white text-2xl" />
                        </div>

                        {/* Label */}
                        <div className="bg-[#e6e6e6] py-3 flex items-center justify-center gap-2">
                            <FaInstagram className="text-sm" />
                            <p className="text-sm md:text-base font-medium">
                                {itemData.name}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}