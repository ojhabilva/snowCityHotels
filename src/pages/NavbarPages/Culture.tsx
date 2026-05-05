"use client";

import { Blog1, Blog2, Blog3, Blog4, MontanaBG, InfoDesk2, Shivalaya1 } from "@/constent/graphic";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Culture() {
    const fadeIn = {
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    return (
        <div className="bg-white text-black font-poppins">
            {/* Hero Section */}
            <section className="relative w-full h-[60vh] md:h-[80vh] flex items-center justify-center text-center text-white">
                <Image
                    src={Blog2.src}
                    alt="Culture Hero"
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-[#486221]/40" />
                <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    className="relative z-10 px-6"
                >
                    <h1 className="text-5xl md:text-8xl font-bold mb-4">Culture</h1>
                    <p className="text-xl md:text-3xl font-medium opacity-90">
                        Inclusivity, Balance, and Holistic Well-being
                    </p>
                </motion.div>
            </section>

            {/* Introduction Section */}
            <section className="py-16 px-6 md:px-24 max-w-6xl mx-auto text-center">
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
            <section className="py-20 px-6 md:px-24 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <motion.div 
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative w-full aspect-[4/3] rounded-sm overflow-hidden shadow-2xl"
                    >
                        <Image
                            src={InfoDesk2.src}
                            alt="Dining Table"
                            fill
                            className="object-cover hover:scale-105 transition-transform duration-700"
                        />
                    </motion.div>
                    <motion.div 
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold">Our Belief</h2>
                        <p className="text-lg md:text-xl leading-relaxed text-gray-700 text-justify">
                            At Snow City Stays, we believe luxury goes beyond opulence—it is rooted in authenticity, 
                            sustainability, and meaningful connections. Through personalised service, thoughtful design, 
                            and a deep respect for the environment, we create a sanctuary that values both people and 
                            the planet.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* How We Succeed Section */}
            <section className="py-24 px-6 md:px-24 bg-[#fcfcfc]">
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
                                    <p className="text-gray-700 leading-relaxed">
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
            <section className="py-24 px-6 md:px-24 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <motion.div 
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative w-full aspect-video rounded-sm overflow-hidden shadow-xl"
                    >
                        <Image
                            src={MontanaBG.src}
                            alt="Montana Blues"
                            fill
                            className="object-cover hover:scale-105 transition-transform duration-700"
                        />
                    </motion.div>
                    <motion.div 
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="border-4 border-[#3b82f6] p-10 relative"
                    >
                        <h3 className="text-3xl md:text-4xl font-bold mb-6">Our Approach</h3>
                        <p className="text-lg md:text-xl leading-relaxed text-gray-800">
                            We foster an inclusive and balanced culture rooted in well-being for everyone. 
                            Our diverse team is professionally trained to deliver exceptional service standards, 
                            while staying deeply respectful of the cultural spirit of each destination.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Bottom Section - Brand Cards */}
            <section className="py-20 px-6 md:px-24 bg-[#FFFBEB]">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-7xl mx-auto">
                    {[
                        { title: "Sustainability", desc: "Living in harmony with nature and our community", image: Blog1.src },
                        { title: "Culture", desc: "A community of forward-thinkers and go-getters", image: Blog2.src },
                        { title: "History", desc: "A community of forward-thinkers and go-getters", image: Blog3.src },
                        { title: "Explore", desc: "A community of forward-thinkers and go-getters", image: Blog4.src },
                    ].map((item, index) => (
                        <div key={index} className="flex flex-col bg-white shadow-sm hover:shadow-xl transition-shadow duration-500">
                            <div className="relative h-[250px] w-full overflow-hidden">
                                <Image src={item.image} alt={item.title} fill className="object-cover transition-transform hover:scale-105 duration-500" />
                            </div>
                            <div className="text-center py-8 px-4 flex flex-col items-center">
                                <h4 className="font-bold text-2xl mb-2 uppercase tracking-wide">{item.title}</h4>
                                <p className="text-sm text-gray-600 leading-tight">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
