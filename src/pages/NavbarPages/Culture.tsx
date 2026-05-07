"use client";

import { Blog1, Blog2, Blog3, Blog4, MontanaBG, InfoDesk2, Shivalaya1 } from "@/constent/graphic";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Culture() {
    const fadeIn: any = {
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    return (
        <div className="bg-white text-black font-poppins">
            {/* Hero Section */}
            <section className="relative w-full h-[85vh] overflow-hidden">
                <Image
                    src={Blog2}
                    alt="Culture Hero"
                    fill
                    className="w-full h-auto object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/20 to-transparent" />
                <div className="absolute inset-0 flex flex-col items-center justify-end pb-24 text-white">
                    <motion.h1
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="relative text-[50px] md:text-[50px] font-bold leading-tight font-poppins mb-2"
                    >
                        Culture
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="relative z-10 text-[18px] md:text-[25px] font-medium font-poppins text-center max-w-2xl px-6"
                    >
                        Inclusivity, Balance, and Holistic Well-being
                    </motion.p>
                </div>
            </section>

            {/* Introduction Section */}
            <section className="pt-16 px-6 md:px-24 max-w-6xl mx-auto text-center">
                <motion.p
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    variants={fadeIn}
                    className="text-lg md:text-2xl leading-relaxed text-gray-700 font-medium"
                >
                    Snow City Stays is a collective of visionaries, creators, and doers. Inspired by the rich cultural heritage
                    of the Himalayas, we bring together thoughtful hospitality and nature to craft meaningful, memorable
                    stays. Our identity reflects a balance of tradition and modern living, blending local character with
                    contemporary design to create a truly distinctive experience.
                </motion.p>
            </section>

            {/* Our Belief Section */}
            <section className="pt-20 px-4 md:px-12 max-w-[1400px] mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative w-full aspect-[16/10] rounded-sm overflow-hidden"
                    >
                        <Image
                            src={InfoDesk2.src}
                            alt="Dining Table"
                            fill
                            className="object-cover"
                        />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-6"
                    >
                        <h2 className="text-[30px] font-bold">Our Belief</h2>
                        <p className="text-[19px] leading-relaxed text-gray-800 text-justify">
                            At Snow City Stays, we believe luxury goes beyond opulence—it is rooted in authenticity,
                            sustainability, and meaningful connections. Through personalised service, thoughtful design,
                            and a deep respect for the environment, we create a sanctuary that values both people and
                            the planet.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* How We Succeed Section */}
            <section className="pt-24 px-6 md:px-24 bg-white">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        variants={fadeIn}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-5xl font-bold mb-2">How We Succeed</h2>
                        <p className="text-xl text-gray-500 italic">Our success is built upon :</p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-12 items-start">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                            {[
                                { title: "Personalized Services :", desc: "Crafting each experience with a thoughtful, data-informed approach that highlights individual needs, personal preferences, and careful attention to every detail." },
                                { title: "Local Economies :", desc: "Supporting and strengthening host communities by encouraging local craftsmanship, preserving traditional practices, and fostering sustainable livelihood opportunities." },
                                { title: "Sustainability :", desc: "Committed to minimizing environmental impact through responsible waste management, effective material recovery practices, and collaboration with organizations such as Healing Himalayas." },
                                { title: "Innovation :", desc: "Integrating modern technology to streamline operations, improve efficiency, and create exceptional guest experiences with consistently high standards of satisfaction." }
                            ].map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="space-y-4"
                                >
                                    <h4 className="text-2xl font-bold border-b-2 border-[#486221] inline-block pb-1">{item.title}</h4>
                                    <p className="text-gray-700 text-lg leading-relaxed">
                                        {item.desc}
                                    </p>
                                </motion.div>
                            ))}
                        </div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                            className="relative w-full h-[600px] rounded-sm overflow-hidden shadow-2xl"
                        >
                            <Image
                                src={Shivalaya1.src}
                                alt="Resort Interior"
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-700"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Our Approach Section */}
            <section className="py-24 px-4 md:px-12 max-w-[1400px] mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative w-full aspect-[16/10] rounded-sm overflow-hidden"
                    >
                        <Image
                            src={MontanaBG.src}
                            alt="Montana Blues"
                            fill
                            className="object-cover"
                        />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-6"
                    >
                        <h3 className="text-[30px] font-bold">Our Approach</h3>
                        <p className="text-xl leading-relaxed text-gray-800">
                            We foster an inclusive and balanced culture rooted in well-being for everyone.
                            Our diverse team is professionally trained to deliver exceptional service standards,
                            while staying deeply respectful of the cultural spirit of each destination.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Bottom Brand Cards Section */}
            <section className="bg-[#FFFBEB] py-24">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-0 items-stretch">
                    {[
                        { title: "Sustainability", desc: "Living in harmony with nature and our community", image: Blog1.src },
                        { title: "Culture", desc: "A community of forward-thinkers and go-getters", image: Blog2.src },
                        { title: "History", desc: "A community of forward-thinkers and go-getters", image: Blog3.src },
                        { title: "Explore", desc: "A community of forward-thinkers and go-getters", image: Blog4.src },
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="flex flex-col bg-white shadow-lg rounded-sm overflow-hidden group cursor-pointer h-full"
                        >
                            <div className="relative w-full h-[250px] md:h-[300px] overflow-hidden">
                                <Image src={item.image} alt={item.title} fill className="object-cover transition-transform group-hover:scale-110 duration-500" />
                            </div>
                            <div className="text-center py-8 px-6 flex flex-col items-center justify-center flex-grow">
                                <h4 className="font-bold text-xl mb-4">{item.title}</h4>
                                <p className="text-xs text-gray-600 leading-relaxed max-w-[180px]">{item.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    );
}
