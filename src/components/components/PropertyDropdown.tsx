"use client";

import React, { useState, useRef, useEffect } from "react";
import { Property1, Property2, Property3, Property4 } from "@/constent/graphic";

interface PropertyDropdownProps {
    onSelect?: (value: string) => void;
    className?: string;
}

export default function PropertyDropdown({ onSelect, className }: PropertyDropdownProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState("Select Hotels");
    const dropdownRef = useRef<HTMLDivElement>(null);

    const data = [
        { title: "Nature House", subtitle: "(Rana Cottage)", image: Property1.src },
        { title: "Montana Blue Resort", subtitle: "(Manali)", image: Property3.src },
        { title: "Baan", subtitle: "(Snow City Stays)", image: Property2.src },
        { title: "Shivalaya", subtitle: "(Snow City Stays)", image: Property4.src },
    ];

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className={`relative ${className}`} ref={dropdownRef}>
            <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="w-full border-2 border-black px-4 py-2 text-black text-sm flex justify-between items-center bg-transparent md:bg-white"
            >
                <span>{selected}</span>
                <span className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}>
                    ▼
                </span>
            </button>

            {isOpen && (
                <div className="absolute top-full left-0 w-full mt-2 bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-100 z-[100]">
                    <div className="flex flex-col">
                        {data.map((item, index) => (
                            <React.Fragment key={index}>
                                <div
                                    className="flex items-center justify-between p-4 hover:bg-gray-50 cursor-pointer transition-colors"
                                    onClick={() => {
                                        const value = `${item.title} ${item.subtitle}`;
                                        setSelected(value);
                                        setIsOpen(false);
                                        if (onSelect) onSelect(value);
                                    }}
                                >
                                    <div className="text-black">
                                        <h3 className="text-lg font-bold tracking-tight">
                                            {item.title}
                                        </h3>
                                        <p className="text-gray-600 text-xs font-normal">
                                            {item.subtitle}
                                        </p>
                                    </div>

                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-12 h-12 md:w-16 md:h-16 object-cover rounded-lg shadow-sm"
                                    />
                                </div>
                                {index < data.length - 1 && (
                                    <div className="mx-4 h-[1px] bg-gray-200" />
                                )}
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
