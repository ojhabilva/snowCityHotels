"use client";

import { useMenu } from "@/context/MenuContext";


export default function HeroSection({ image }: { image: string }) {
    const { openMenu, openContact } = useMenu();

    const isVideo = image.endsWith(".mp4") || image.endsWith(".webm") || image.endsWith(".ogg");

    return (
        <div className="relative flex mb-20 justify-center w-full h-[80vh] md:h-[85vh] overflow-hidden">

            {/* MEDIA */}
            {isVideo ? (
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                >
                    <source src={image} type="video/mp4" />
                </video>
            ) : (
                <img
                    src={image}
                    alt="Hero"
                    className="w-full h-full object-cover"
                />
            )}

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


        </div>
    );
}
