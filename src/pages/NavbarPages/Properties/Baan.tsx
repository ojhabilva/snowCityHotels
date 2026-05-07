"use client";

import BlogCard from "@/components/cards/BlogCard";

import StayCard from "@/components/cards/StayCard";
import BookingBar from "@/components/components/BookingBar";
import HeroSection from "@/components/components/HeroSection";
import OffersBanner from "@/components/components/OffersBanner";
import PromoSplit from "@/components/components/PromoSplit";
import SectionHeader from "@/components/components/SectionHeader";
import { Baan1, Baan2, Baan3, Blog1, MontanaOffer, NatureHouse1, NatureHouse2, NatureHouse3, NatureHouse4, Property1, Property2, Property2Hover, Property3 } from "@/constent/graphic";
import FollowUsSection from "@/pages/HomePages/FollowUsSection";
import Image from "next/image";
import { useMenu } from "@/context/MenuContext";


export default function Baan() {
    const { openMenu, openContact } = useMenu();

    const stays = [
        {
            title: "Nature House (Rana Cottage)",
            image: Property1.src,
            desc: "Surrounded by the fragrant apple orchards of Himachal, Snow City Stays, Manali offers a calm retreat for travelers seeking comfort and relaxation. Nestled in the charming town of Haripur, it presents a peaceful escape embraced by natural beauty...",
        },
        {
            title: "Montana Blue Resort (Manali)",
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

    const values = [
        "Guest-Focused Perspective",
        "Purposeful Service",
        "Ethical Practices",
        "Clear & Honest Communication",
        "Equitable & Inclusive Employment",
        "Ongoing Enhancement",
        "Thoughtful Attention",
        "Focused Sustainability",
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

    return (
        <>
            <section className="w-full bg-white">

                {/* HERO IMAGE */}
                <section className="w-full pb-10">

                    {/* <button
                        onClick={openMenu}
                        className="absolute left-2 top-1/2 -translate-y-1/2 rotate-[-90deg] text-md tracking-widest text-gray-700 hover:text-black transition-colors"
                    >
                        Menu
                    </button>

                    <button
                        onClick={openContact}
                        className="absolute right-2 top-1/2 -translate-y-1/2 rotate-90 text-md tracking-widest text-gray-700 hover:text-black transition-colors"
                    >
                        Contact
                    </button> */}

                    <div className="relative w-full mb-10 h-[300px] md:h-[400px] overflow-hidden">

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
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">

                    {values.map((item, index) => (
                        <div
                            key={index}
                            className="bg-[#4b6527] text-white px-8 py-12 rounded-xl text-sm md:text-2xl shadow-md hover:shadow-xl transition"
                        >
                            <p className="opacity-70 text-xs mb-1">Right {index + 1} →</p>
                            <h3 className="">{item}</h3>
                        </div>
                    ))}

                </div>

                {/* ===== SUSTAINABILITY SECTION ===== */}
                <div className="grid md:grid-cols-2 gap-10 items-center mb-16">

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