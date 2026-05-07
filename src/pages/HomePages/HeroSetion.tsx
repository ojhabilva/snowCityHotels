"use client";

import { useEffect, useRef } from "react";
import { FaSearch, FaHotel, FaMapMarkerAlt, FaKey, FaUsers } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Hero() {
    const textRef = useRef<HTMLDivElement>(null);
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const statsRef = useRef<HTMLDivElement>(null);
    const statItemsRef = useRef<HTMLDivElement[]>([]);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {
            // ── Image: scale in on scroll down, reverse on scroll up ──
            gsap.fromTo(
                videoRef.current,
                { scale: 1 },
                {
                    scale: window.innerWidth < 768 ? 1.3 : 2.18,
                    ease: "none",
                    scrollTrigger: {
                        trigger: videoRef.current,
                        start: "top top",
                        end: "bottom top",
                        scrub: 1.2,          // smooth, bidirectional scrub
                    },
                }
            );

            // ── Text elements: fade + slide up on first enter ──
            const textEls = textRef.current?.querySelectorAll(".animate-text") || [];
            gsap.fromTo(
                textEls,
                { opacity: 0, y: 300 },
                {
                    opacity: 1,
                    y: window.innerWidth < 768 ? -50 : -200,
                    duration: 1,
                    stagger: 0.2,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: textRef.current,
                        start: "top 85%",
                        toggleActions: "play none none reverse", // reverse on scroll up
                    },
                }
            );

            // ── Stats bar items: fade + slide in from right, reverse on scroll up ──
            if (statItemsRef.current.length > 0) {
                gsap.fromTo(
                    statItemsRef.current,
                    { opacity: 0, x: 100 },
                    {
                        opacity: 1,
                        x: 0,
                        duration: 0.6,
                        stagger: 0.15,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: statsRef.current,
                            start: "top 95%",
                            toggleActions: "play none none reverse", // reverse on scroll up
                            scrub: 1.2
                        },
                    }
                );
            }
        });

        return () => ctx.revert(); // clean up all ScrollTriggers on unmount
    }, []);

    const statsData = [
        { icon: <FaHotel />, value: "04", label: "Hotels & Resorts" },
        { icon: <FaMapMarkerAlt />, value: "04", label: "Location" },
        { icon: <FaKey />, value: "100", label: "Keys" },
        { icon: <FaUsers />, value: "400", label: "People" },
    ];

    return (
        <div id="home" className="relative w-full min-h-[90vh] md:min-h-[100vh] overflow-hidden">

            {/* Background — wrapped to contain scale without clipping the layout */}
            <div className="absolute inset-0 overflow-hidden">
                <video
                    ref={videoRef}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover origin-center will-change-transform"
                >
                    <source src="/heroSection/Welcome to1.mp4" type="video/mp4" />
                </video>
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/30" />

            {/* Content */}
            <div
                ref={textRef}
                className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4 sm:px-6 md:px-10"
            >
                <p className="animate-text text-sm sm:text-lg md:text-2xl mb-2">
                    Welcome to
                </p>

                <h1 className="animate-text text-2xl sm:text-4xl md:text-6xl font-bold mb-4 md:mb-6 leading-tight">
                    Snow City Stays
                </h1>

                {/* Search */}
                <div className="animate-text flex border-2 border-amber-50 items-center rounded-xl md:rounded-2xl px-3 md:px-5 py-2 shadow-lg w-[80%] sm:w-[250px] md:w-[150px]">
                    <FaSearch className="text-white mr-2" />
                    <input
                        type="text"
                        placeholder="Search"
                        className="bg-transparent outline-none w-full text-white placeholder:text-amber-50 text-sm md:text-base"
                    />
                </div>
            </div>

            {/* Stats */}
            <div
                ref={statsRef}
                className="absolute bottom-0 w-full bg-[#486221] text-white py-3 md:py-4"
            >
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 text-center px-2 md:px-0">
                    {statsData.map((item, i) => (
                        <div
                            key={i}
                            ref={(el) => {
                                if (el) statItemsRef.current[i] = el;
                            }}
                            className="flex flex-col items-center"
                        >
                            <div className="flex items-center gap-2">
                                {item.icon}
                                <p className="text-base md:text-xl">{item.value}</p>
                            </div>
                            <p className="text-sm md:text-xl font-semibold">{item.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}