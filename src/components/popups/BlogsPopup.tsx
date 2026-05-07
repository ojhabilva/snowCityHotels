"use client";

import { useEffect } from "react";
import { Blog1, Blog2, Blog3, Blog4 } from "@/constent/graphic";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function BlogsPopup({ show, onClose }) {
    const data = [
        { title: "Sustainability", image: Blog1.src, url: "/Sustainability" },
        { title: "Culture", image: Blog2.src, url: "/Culture" },
        { title: "Snow City Stays Story", image: Blog3.src, url: "/AboutUs" },
        { title: "Explore Manali", image: Blog4.src, url: "/Explore" },
    ];

    // Close on ESC key
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        document.addEventListener("keydown", handleEsc);
        return () => document.removeEventListener("keydown", handleEsc);
    }, [onClose]);

    return (
        <AnimatePresence>
            {show && (
                <div className="fixed inset-0 z-[100]">
                    {/* Backdrop */}
                    <div
                        className="absolute inset-0"
                        onClick={onClose}
                    />

                    {/* Panel */}
                    <motion.div
                        initial={{ opacity: 0, y: -20, x: "-50%" }}
                        animate={{ opacity: 1, y: 0, x: "-50%" }}
                        exit={{ opacity: 0, y: -20, x: "-50%" }}
                        transition={{ duration: 0.3 }}
                        className="absolute top-[70px] md:top-[90px] left-[95%] md:left-3/5 -translate-x-1/2 w-[90%] md:w-[300px]"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="bg-[#486221] backdrop-blur-xl border border-white/20 rounded-b-3xl shadow-2xl p-4">
                            <div className="flex flex-col gap-4">
                                {data.map((item, index) => (
                                    <Link href={item.url} key={index} onClick={onClose}>
                                        <motion.div
                                            whileHover={{ x: 10 }}
                                            className="flex items-center gap-8 group cursor-pointer"
                                        >
                                            {/* Image */}
                                            <div className="relative w-[90px] h-[90px] flex-shrink-0">
                                                <img
                                                    src={item.image}
                                                    alt={item.title}
                                                    className="w-full h-full object-cover rounded-[20px]"
                                                />
                                            </div>

                                            {/* Text */}
                                            <div className="text-white flex-1">
                                                <h3 className="text-lg leading-tight group-hover:text-white/80 transition-colors">
                                                    {item.title}
                                                </h3>
                                            </div>
                                        </motion.div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
