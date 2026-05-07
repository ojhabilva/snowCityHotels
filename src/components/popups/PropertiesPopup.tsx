"use client";

import { useEffect } from "react";
import { Property1, Property2, Property3, Property4 } from "@/constent/graphic";
import Link from "next/link";

export default function PropertiesPopup({ show, onClose }) {
    const data = [
        { title: "Nature House", subtitle: "(Rana Cottage)", image: Property1.src, url: "/Properties/NatureHouse" },
        { title: "Baan", subtitle: "(Snow City Stays)", image: Property2.src, url: "/Properties/Baan" },
        { title: "Montana Blues", subtitle: "(Manali)", image: Property3.src, url: "/Properties/MontanaBlueResort" },
        { title: "Shivalaya", subtitle: "(Snow City Stays)", image: Property4.src, url: "/Properties/Shivalaya" },
    ];

    // 🔥 Close on ESC key
    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === "Escape") onClose();
        };
        document.addEventListener("keydown", handleEsc);
        return () => document.removeEventListener("keydown", handleEsc);
    }, [onClose]);

    return (
        <div
            className={`fixed inset-0 z-5 transition-all duration-500 ${show ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                }`}
        >
            {/* 🔥 FULL SCREEN BACKDROP (click anywhere closes) */}
            <div
                className="absolute inset-0"
                onClick={onClose}
            />

            {/* PANEL */}
            <div
                className={`absolute top-[90px] left-1/2 -translate-x-1/2 w-[90%] lg:w-[40%] transition-all duration-500 ${show ? "translate-y-0" : "-translate-y-10"
                    }`}
                onClick={(e) => e.stopPropagation()} // 👈 prevent close when clicking inside
            >
                <div className="bg-[#486221] backdrop-blur-xl border border-white/20 rounded-b-xl shadow-2xl p-8">

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

                        {data.map((item, index) => (
                            <Link href={item.url} key={index}>
                                <div className="flex items-center gap-6">

                                    {/* Image */}
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-[110px] h-[110px] object-cover rounded-xl"
                                    />

                                    {/* Text */}
                                    <div className="text-white">
                                        <h3 className="text-md font-semibold">
                                            {item.title}
                                        </h3>
                                        <p className="opacity-80 text-sm">
                                            {item.subtitle}
                                        </p>
                                    </div>

                                </div>
                            </Link>
                        ))}

                    </div>

                </div>
            </div>
        </div>
    );
}