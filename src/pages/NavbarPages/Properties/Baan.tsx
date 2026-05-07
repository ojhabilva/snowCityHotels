"use client";

import BlogCard from "@/components/cards/BlogCard";

import StayCard from "@/components/cards/StayCard";
import BookingBar from "@/components/components/BookingBar";
import HeroSection from "@/components/components/HeroSection";
import OffersBanner from "@/components/components/OffersBanner";
import PromoSplit from "@/components/components/PromoSplit";
import SectionHeader from "@/components/components/SectionHeader";
import { Baan1, Baan2, Baan3, Blog1, MontanaOffer, NatureHouse1, NatureHouse2, NatureHouse3, NatureHouse4, Promo, Promo1, Property1, Property2, Property2Hover, Property3 } from "@/constent/graphic";
import FollowUsSection from "@/pages/HomePages/FollowUsSection";
import Image from "next/image";
import { useMenu } from "@/context/MenuContext";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";


export default function Baan() {
    const { openMenu, openContact } = useMenu();

    const stays = [
        {
            title: "Nature House (Rana Cottage)",
            image: Property1.src,
            desc: "Surrounded by the fragrant apple orchards of Himachal, Snow City Stays, Manali offers a calm retreat for travelers seeking comfort and relaxation. Nestled in the charming town of Haripur, it presents a peaceful escape embraced by natural beauty...",
        },
        {
            title: "Montana Blues (Manali)",
            image: Property2.src,
            desc: "Perched amidst the scenic heights of Manali, Snow City Stays offers captivating views of the surrounding valleys and mountains. Surrounded by lush landscapes and fresh mountain air, this peaceful retreat creates a relaxing and immersive experience...",
        },
        {
            title: "Baan (by Snow City Stays)",
            image: Property3.src,
            desc: "Experience the perfect blend of natural beauty and refined comfort at Snow City Stays, Manali—a peaceful retreat set amidst lush surroundings. With spacious accommodations and a serene atmosphere, it offers an ideal escape for relaxation...",
        },
    ];

    const posts = [
        {
            id: 1,
            title: "Exploring Hadimba Temple & Manali’s Heritage",
            date: "July 28 2025",
            description:
                "Step into the timeless charm of the iconic Hadimba Temple, surrounded by tall deodar forests and rich local history. Known for its unique wooden architecture and spiritual significance, this heritage site offers a glimpse into Manali’s cultural roots and traditions...",
            image: NatureHouse2.src
        },
        {
            id: 2,
            title: "Adventure Activities in Manali You Must Try",
            date: "July 21 2025",
            description:
                "From paragliding over lush valleys to thrilling outdoor experiences, Manali offers endless adventure for every kind of traveler. Get ready to explore the adrenaline side of the mountains...",
            image: NatureHouse3.src
        },
        {
            id: 3,
            title: "Winter Wonderland: Snow Experiences in Manali",
            date: "June 17 2025",
            description:
                "Experience the magic of snow-covered landscapes, frozen valleys, and peaceful winter trails. Manali transforms into a dreamy escape during the colder months...",
            image: NatureHouse4.src
        },
    ];

    const eightfoldValues = [
        {
            label: "Right View",
            title: "Guest-Focused Vision",
            desc: "Recognizing the diverse needs, cultures, and expectations of our guests is at the heart of what we do. We create experiences that offer comfort, happiness, and a genuine sense of belonging."
        },
        {
            label: "Right Intention",
            title: "Purposeful Service",
            desc: "True hospitality is built on thoughtful and meaningful service. We serve with genuine care, ensuring every guest leaves with positive and memorable experiences."
        },
        {
            label: "Right Speech",
            title: "Transparent Communication",
            desc: "Trust grows through openness. We communicate with clarity and respect, ensuring our commitments truly reflect the experience we deliver—from promotions to every guest interaction."
        },
        {
            label: "Right Action",
            title: "Ethical Practices",
            desc: "Our approach is guided by sustainability and responsible operations. We adopt eco-friendly practices, respect local culture, and promote socially conscious hospitality."
        },
        {
            label: "Right Livelihood",
            title: "Equitable & Inclusive Employment",
            desc: "We foster a respectful and inclusive workplace, promoting fairness, equal opportunities, and continuous growth for our team."
        },
        {
            label: "Right Mindfulness",
            title: "Thoughtful Attention",
            desc: "By staying present and attentive, we tailor each experience to our guests, address needs proactively, and ensure a smooth and comfortable stay."
        },
        {
            label: "Right Mindfulness",
            title: "Attentive Care",
            desc: "By staying fully present in service, we create personalized guest experiences, anticipate and resolve concerns early, and ensure a smooth, seamless stay."
        },
        {
            label: "Right Concentration",
            title: "Sustainable Growth",
            desc: "We maintain a balance between profitability and sustainability by embedding long-term environmental, social, and economic considerations into our operations."
        }
    ];

    const features = [
        {
            title: "Authentic Hospitality",
            desc: "Where tradition meets heartfelt care, we offer stays that echo the true spirit of every destination.",
            image: Baan1.src
        },
        {
            title: "Crafted Culinary Journeys",
            desc: "From thoughtfully curated flavors to bespoke dining moments, every meal becomes a memorable experience.",
            image: Baan2.src,
        },
        {
            title: "Personalized Wellness Treatments",
            desc: "Indulge in tailored wellness rituals designed to restore balance and leave a lasting sense of renewal.",
            image: Baan3.src,
        },
    ];

    const promoImages = [
        {
            image: Property2Hover.src,
            title: "Midweek Delight",
            subtitle: "Unlock extra savings available only on our website",
            description: "Enjoy additional savings when bookings are made from Monday to Sunday",
            code: "Weekendoff"
        },
        {
            image: Promo1.src,
            title: "",
            subtitle: "",
            description: "",
            code: ""
        },
        {
            image: Promo.src,
            title: "",
            subtitle: "",
            description: "",
            code: ""
        }
    ];

    const [currentPromo, setCurrentPromo] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentPromo((prev) => (prev + 1) % promoImages.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [promoImages.length]);

    return (
        <>
            <section className="w-full bg-white">

                {/* HERO CAROUSEL */}
                <section className="w-full pb-10">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative w-full mb-10 h-[400px] md:h-[500px] overflow-hidden"
                    >
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentPromo}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 1 }}
                                className="absolute inset-0"
                            >
                                {/* Background Image */}
                                <Image
                                    src={promoImages[currentPromo].image}
                                    alt={promoImages[currentPromo].title}
                                    fill
                                    className="object-cover"
                                />

                                {/* Left Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>

                                {/* Content */}
                                <div className="absolute inset-0 flex flex-col md:flex-row justify-between p-8 md:p-16">

                                    {/* LEFT TEXT */}
                                    <motion.div
                                        initial={{ x: -50, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        transition={{ delay: 0.3, duration: 0.8 }}
                                        className="text-white max-w-xl flex flex-col justify-center"
                                    >
                                        <h2 className="text-4xl md:text-7xl praise-regular leading-tight mb-4">
                                            {promoImages[currentPromo].title.split(' ').map((word, i) => (
                                                <span key={i}>{word} {i === 0 && <br />}</span>
                                            ))}
                                        </h2>

                                        <p className="text-lg md:text-2xl font-light tracking-wide max-w-[450px]">
                                            {promoImages[currentPromo].subtitle}
                                        </p>
                                    </motion.div>

                                    {/* RIGHT TEXT */}
                                    <motion.div
                                        initial={{ x: 50, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        transition={{ delay: 0.5, duration: 0.8 }}
                                        className="text-white flex flex-col justify-center items-start md:items-end max-w-md mt-8 md:mt-0"
                                    >
                                        <p className="text-base md:text-xl text-left md:text-right font-light leading-relaxed mb-6">
                                            {promoImages[currentPromo].description}
                                        </p>

                                        <button className="bg-[#5a6f2c] px-8 py-3 text-lg font-bold tracking-widest hover:bg-white hover:text-black transition-all duration-300 shadow-xl rounded-sm">
                                            {promoImages[currentPromo].code === "" ? "" : `Use Code : ${promoImages[currentPromo].code}`}
                                        </button>
                                    </motion.div>

                                </div>
                            </motion.div>
                        </AnimatePresence>

                        {/* Carousel Indicators */}
                        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-10">
                            {promoImages.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentPromo(index)}
                                    className={`w-3 h-3 rounded-full transition-all duration-300 ${currentPromo === index ? "bg-white w-8" : "bg-white/40"
                                        }`}
                                />
                            ))}
                        </div>
                    </motion.div>
                </section>

                {/* BOOKING BAR */}
                <BookingBar slug="baan" />

                {/* DESCRIPTION */}
                <div className="max-w-6xl mx-auto text-center px-6 py-10 text-gray-700 text-sm md:text-xl leading-relaxed">
                    <h1 className="font-bold text-4xl mb-4">Curated Stays with a Guest-First Approach</h1>
                    At Baan by Snow City Stays, hospitality is shaped around a guest-first philosophy. Rooted in comfort, authenticity, and thoughtful service, we create stays that feel both enriching and inspiring.
                    Every element—from design to experience—is guided by care, simplicity, and sustainability, ensuring your stay is not just comfortable, but truly meaningful.
                </div>

            </section>

            <section className="w-full bg-white px-6 md:px-16 py-10">

                {/* ===== TOP BANNER ===== */}
                <SectionHeader dir="justify-start" title="Snow City Stays" />
                <div className="grid md:grid-cols-3 gap-14">
                    {stays.map((item) => (
                        <StayCard key={item.title} item={item} />
                    ))}
                </div>

            </section>

            <section className="w-full bg-white px-6 md:px-16 py-10">
                <OffersBanner image={MontanaOffer.src} />
            </section>
            <section className="w-full bg-white px-6 md:px-16 py-12 text-gray-800">

                {/* ===== TITLE ===== */}
                <div className="max-w-8xl mx-auto text-center mb-12">
                    <h1 className="text-2xl md:text-4xl font-semibold mb-4">
                        About Baan by Snow City Stays
                    </h1>

                    <p className="text-sm md:text-xl text-left leading-relaxed text-black">
                        Baan by Snow City Stays is a thoughtfully curated collection of stays centered around mindful hospitality.
                        Our approach is built on values of responsible service, sustainability, and guest well-being.
                        <br />
                        We believe hospitality is more than just offering a comfortable place to stay—it's about crafting meaningful experiences
                        that respect local culture, care for the environment, and focus on genuine guest comfort.
                    </p>
                </div>

                {/* ===== VALUES GRID ===== */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-16">

                    {eightfoldValues.map((item, index) => (
                        <div key={index} className="group [perspective:1000px] h-[300px] md:h-[300px]">
                            <motion.div
                                className="relative w-full h-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]"
                            >
                                {/* FRONT (Green) */}
                                <div className="absolute inset-0 bg-[#4b6527] text-white p-8 rounded-xl shadow-md flex flex-col justify-center [backface-visibility:hidden]">
                                    <p className="opacity-70 text-sm mb-2">{item.label} →</p>
                                    <h3 className="text-2xl font-bold leading-tight">{item.title}</h3>
                                </div>

                                {/* BACK (Cream) */}
                                <div className="absolute inset-0 bg-[#fffbe6] text-gray-800 p-6 rounded-xl shadow-xl flex flex-col justify-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                                    <p className="text-gray-500 text-xs mb-1 font-medium">{item.label} →</p>
                                    <h3 className="text-lg font-bold mb-3 text-black leading-tight">{item.title}</h3>
                                    <p className="text-sm leading-relaxed">
                                        {item.desc}
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                    ))}

                </div>

                {/* ===== SUSTAINABILITY SECTION ===== */}
                <div className="grid py-10 md:grid-cols-2 gap-10 items-center mb-16">

                    {/* IMAGE */}
                    <div>
                        <img
                            src={Blog1.src}
                            alt="Sustainability"
                            className="w-full h-[250px] md:h-[300px] object-cover"
                        />
                    </div>

                    {/* TEXT */}
                    <div className="relative h-full">
                        <h2 className="text-xl md:text-3xl font-semibold mb-4">
                            Our Commitment to Sustainability
                        </h2>

                        <p className="text-sm md:text-xl text-gray-600 leading-relaxed mb-6">
                            We support eco-friendly initiatives, collaborate with local partners, and promote responsible tourism
                            to minimize our environmental impact while enriching guest experiences.
                        </p>

                        <button className="absolute -bottom-1 left-50 bg-gray-800 text-white px-6 py-2 text-xl hover:bg-black transition">
                            LEARN MORE
                        </button>
                    </div>

                </div>

                {/* ===== FEATURES ===== */}
                <div className="grid md:grid-cols-3 gap-6">

                    {features.map((item, index) => (
                        <div key={index} className="bg-[#f0e7d6]">

                            {/* IMAGE */}
                            <div className="overflow-hidden">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-[220px] object-cover transition duration-700 hover:scale-105"
                                />
                            </div>

                            {/* TEXT */}
                            <div className="p-4 h-[220px] flex flex-col justify-center">
                                <h3 className="text-sm md:text-xl font-semibold mb-2">
                                    {item.title}
                                </h3>
                                <p className="text-sm md:text-lg text-gray-600 leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>

                        </div>
                    ))}

                </div>

            </section>

            <section className="w-full bg-white py-16 px-6 md:px-16">

                {/* Header */}
                <SectionHeader title="Latest Post" />

                {/* Cards */}
                <div className="grid text-black md:grid-cols-3 gap-14 mb-3">
                    {posts.map((post) => (
                        <BlogCard key={post.id} post={post} />
                    ))}
                </div>
            </section>
            <FollowUsSection />
        </>
    )
}