"use client";

export default function HeroSection({ image }: { image: string }) {

    const isVideo = image.endsWith(".mp4") || image.endsWith(".webm") || image.endsWith(".ogg");

    return (
        <div className="relative flex mb-20 justify-center w-full h-[80vh] md:h-[90vh] overflow-hidden">

            {/* MEDIA */}
            {isVideo ? (
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-[90%] h-full object-cover"
                >
                    <source src={image} type="video/mp4" />
                </video>
            ) : (
                <img
                    src={image}
                    alt="Hero"
                    className="w-[90%] h-full object-cover"
                />
            )}

            {/* LEFT SIDE TEXT */}
            <div className="absolute left-2 top-1/2 -translate-y-1/2 rotate-[-90deg] text-sm tracking-widest text-gray-700">
                Menu
            </div>

            {/* RIGHT SIDE TEXT */}
            <div className="absolute right-2 top-1/2 -translate-y-1/2 rotate-90 text-sm tracking-widest text-gray-700">
                Contact
            </div>

        </div>
    );
}