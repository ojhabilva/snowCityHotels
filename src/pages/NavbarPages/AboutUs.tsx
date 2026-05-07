"use client";

import { AboutUs1, AboutUs2, AboutUs3, AboutUsBG, Blog1, Blog2, Blog3, Blog4, NavbarLogo } from "@/constent/graphic";
import { motion, Variants } from "framer-motion";
import Image from "next/image";

export default function AboutUs() {
    const fadeIn: Variants = {
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };


    const data = [
        {
            title: "Sustainability",
            desc: "Living in harmony with nature and our community",
            image: Blog1
        },
        {
            title: "Culture",
            desc: "A community of forward-thinkers and go-getters",
            image: Blog2
        },
        {
            title: "History",
            desc: "A community of forward-thinkers and go-getters",
            image: Blog3,
        },
        {
            title: "Explore",
            desc: "A community of forward-thinkers and go-getters",
            image: Blog4
        },
    ];

    return (
        <>
            <section className="relative font-poppins w-full h-[60vh] md:h-[80vh] overflow-hidden flex items-center justify-center text-white">
                {/* Background Image */}
                <motion.div
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 2 }}
                    className="absolute inset-0"
                >
                    <Image
                        src={AboutUsBG}
                        alt="Snow City"
                        fill
                        className="object-cover"
                        priority
                    />
                </motion.div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/30" />
                <motion.p
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="absolute top-15 text-2xl md:text-6xl mb-6"
                >
                    About us
                </motion.p>
                <div className="relative text-center px-6">


                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                        className="max-w-2xl text-md md:text-2xl font-bold leading-tight [text-shadow:_0_4px_12px_rgba(0,0,0,0.5)]"
                    >
                        The essence of our brand is rooted in bringing different
                        elements together in perfect balance.
                    </motion.h1>
                </div>
            </section>
            <section className="w-full bg-[#f5f5f5]">

                {/* TOP TEXT */}
                <div className="max-w-[1450px] mx-auto text-center px-6 pt-4">

                    <motion.p
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        variants={fadeIn}
                        className="max-w-2xl mx-auto text-gray-600 text-sm md:text-lg leading-relaxed mb-16"
                    >
                        At Snow City Stays, we bring a fresh perspective to hospitality by combining attentive service with responsible, sustainable practices. Inspired by the scenic charm of Manali and the lifestyle of the Himalayas, we merge natural beauty with contemporary comfort—creating spaces where every stay becomes a memorable experience.
                    </motion.p>

                </div>

                {/* IMAGE GRID */}
                <div className="grid grid-cols-1 md:grid-cols-3">

                    {/* SKY */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative h-[300px] md:h-[400px] group overflow-hidden cursor-pointer"
                    >
                        <Image
                            src={AboutUs1}
                            alt="Sky"
                            fill
                            className="object-cover transition duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition" />
                        <h3 className="absolute inset-0 flex items-center justify-center text-white text-xl md:text-4xl font-semibold">
                            Sky
                        </h3>
                    </motion.div>

                    {/* MOUNTAIN */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative h-[300px] md:h-[400px] group overflow-hidden cursor-pointer"
                    >
                        <Image
                            src={AboutUs2}
                            alt="Mountain"
                            fill
                            className="object-cover transition duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition" />
                        <h3 className="absolute inset-0 flex items-center justify-center text-white text-xl md:text-4xl font-semibold">
                            Mountain
                        </h3>
                    </motion.div>

                    {/* EARTH */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="relative h-[300px] md:h-[400px] group overflow-hidden cursor-pointer"
                    >
                        <Image
                            src={AboutUs3}
                            alt="Earth"
                            fill
                            className="object-cover transition duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition" />
                        <h3 className="absolute inset-0 flex items-center justify-center text-white text-xl md:text-4xl font-semibold">
                            Earth
                        </h3>
                    </motion.div>

                </div>
            </section>
            <section className="w-full bg-[#f5f5f5] text-gray-800">

                {/* ===== OUR STAYS ===== */}
                <div className="max-w-[1400px] mx-auto py-16 text-center">

                    <p className="text-2xl text-gray-500 mb-2">Our Stays</p>

                    <motion.h2
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        variants={fadeIn}
                        className="text-2xl md:text-4xl font-semibold leading-snug mb-6"
                    >
                        Creating Memorable Experiences <br />
                        Inspired by Natural Surroundings
                    </motion.h2>

                    <div className="grid md:grid-cols-[2.5fr_1fr] gap-10 items-center mt-10 text-left">

                        {/* LEFT TEXT */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="text-sm md:text-xl text-justify leading-relaxed space-y-4"
                        >
                            <p>
                                From attentive guest service to thoughtfully planned experiences that reflect
                                local culture and lifestyle, Snow City Stays offers more than just accommodation—
                                it’s a complete experience. Discover a stay where comfort meets purpose.
                            </p>
                            <p >
                                Every detail is carefully considered to ensure comfort, warmth, and a sense of belonging.
                            </p>
                            <p>
                                We aim to create spaces where guests can slow down, unwind, and truly enjoy their time in the mountains.
                            </p>
                        </motion.div>

                        {/* RIGHT LOGO BOX */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="flex justify-center"
                        >
                            <div className="bg-[#4b6b2c] w-[250px] h-[200px] flex items-center justify-center shadow-lg">
                                <Image
                                    src={NavbarLogo}
                                    alt="Snow City"
                                    width={120}
                                    height={120}
                                    className="hover:scale-110 transition-transform duration-500 object-contain"
                                />
                            </div>
                        </motion.div>

                    </div>
                </div>

                {/* ===== OUR CULTURE ===== */}
                <div className="max-w-[1400px] mx-auto py-10 text-center">

                    <p className="text-2xl text-gray-500 mb-2">Our Culture</p>

                    <motion.h2
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        variants={fadeIn}
                        className="text-2xl md:text-4xl font-semibold mb-10"
                    >
                        A team driven by ideas, passion, and purpose.
                    </motion.h2>

                    <div className="grid md:grid-cols-[1fr_3fr] gap-12 items-center text-left">

                        {/* LEFT IMAGE */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative w-full h-[250px] overflow-hidden"
                        >
                            <Image
                                src={Blog2}
                                alt="Culture"
                                fill
                                className="object-cover shadow-xl hover:scale-105 transition-transform duration-700"
                            />
                        </motion.div>

                        {/* RIGHT TEXT */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="space-y-4 text-sm text-justify md:text-xl flex flex-col items-center justify-center leading-relaxed"
                        >
                            <p>
                                Inspired by the cultural richness of the Himalayas, we bring together hospitality and nature
                                to create stays that feel meaningful and memorable.
                                Our approach reflects a balance of tradition and modern living, combining local character
                                with contemporary design to offer a unique experience.
                            </p>

                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="mt-10 px-5 py-2 bg-black text-white text-lg rounded hover:bg-gray-800 transition shadow-lg"
                            >
                                Explore Now
                            </motion.button>
                        </motion.div>

                    </div>
                </div>

                {/* ===== QUOTE ===== */}
                <div className="max-w-[1400px] mx-auto py-16 text-center">

                    <motion.p
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        variants={fadeIn}
                        className="text-lg md:text-4xl font-semibold leading-relaxed px-4"
                    >
                        “True luxury lies not in possessions, but in the care, connection and creativity
                        we extend to our guests, our surroundings, and one another.”
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                        className="mt-4 text-2xl text-gray-500"
                    >
                        — Founder, Snow City Stays
                    </motion.p>

                </div>

            </section>
            <section className="w-full bg-[#ded6b8] py-16">

                <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

                    {data.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            whileHover={{ y: -15, scale: 1.02 }}
                            className={`group flex flex-col cursor-pointer transition-all duration-500 ease-out`}
                        >
                            {/* Image */}
                            <div className="relative w-full h-[220px] overflow-hidden shadow-md group-hover:shadow-2xl transition-all duration-500">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover transition duration-700 group-hover:scale-110"
                                />
                            </div>

                            {/* Content */}
                            <div className="bg-[#e9e9e9] text-center px-4 py-6 shadow-md group-hover:shadow-2xl transition-all duration-500 group-hover:bg-white">
                                <h3 className="text-lg text-black font-semibold mb-2">
                                    {item.title}
                                </h3>
                                <p className="text-sm text-black leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}

                </div>
            </section>
        </>
    );
}