import { Property1, Property1Hover, Property2, Property2Hover, Property3, Property3Hover, Property4, Property4Hover } from "@/constent/graphic";

export default function Properties() {
    const data = [
        {
            title: "Nature House",
            subtitle: "(Rana Cottage)",
            image: Property1.src,
            hoverImage: Property1Hover.src,
            description: "Enjoy breathtaking views...",
        },
        {
            title: "Montana Blues Resort",
            subtitle: "(Manali)",
            image: Property2.src,
            hoverImage: Property2Hover.src,
            description: "Enjoy breathtaking views...",
        },
        {
            title: "Baan",
            subtitle: "(Snow City Stays)",
            image: Property3.src,
            hoverImage: Property3Hover.src,
            description: "Enjoy breathtaking views...",
        },
        {
            title: "Shivalaya",
            subtitle: "(Snow City Stays)",
            image: Property4.src,
            hoverImage: Property4Hover.src,
            description: "Enjoy breathtaking views...",
        },
    ];

    return (
        <section id="properties" className="pt-6 pb-20 w-full bg-white">

            {/* Heading */}
            <h2 className="text-center text-[#486221] text-xl sm:text-2xl md:text-4xl font-semibold mb-6 px-4">
                Properties
            </h2>

            {/* Grid:
                mobile  → 1 col  (full-width cards, shorter height, tap-friendly)
                sm/tab  → 2 cols
                lg/desk → 4 cols
            */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                {data.map((item, index) => (
                    <div
                        key={index}
                        className="relative group overflow-hidden
                            h-[320px] sm:h-[480px] lg:h-[700px]"
                    >
                        {/* ── DEFAULT: full image ── */}
                        <img
                            src={item.image}
                            alt={item.title}
                            className="absolute inset-0 w-full h-full object-cover
                                transition-all duration-700 group-hover:scale-110 group-hover:opacity-0"
                        />

                        {/* ── DEFAULT: title overlay ── */}
                        <div
                            className="absolute top-4 sm:top-6 w-full text-center z-10
                                transition-opacity duration-500 group-hover:opacity-0
                                px-2"
                        >
                            {/* White text with shadow for visibility on all images */}
                            <h3 className="font-semibold text-base sm:text-lg md:text-2xl text-black">
                                {item.title}
                            </h3>
                            <p className="text-sm sm:text-md text-black/90 ">
                                {item.subtitle}
                            </p>
                        </div>

                        {/* ── HOVER PANEL: slides up from bottom ── */}
                        <div
                            className="absolute bottom-0 left-0 w-full h-full
                                translate-y-full group-hover:translate-y-0
                                transition-transform duration-500 z-10 overflow-hidden"
                        >
                            {/* Top half — hover image */}
                            <div className="absolute top-0 left-0 w-full h-1/2 overflow-hidden">
                                <img
                                    src={item.hoverImage}
                                    alt={`${item.title} hover`}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Bottom half — text + CTA */}
                            <div
                                className="absolute bottom-0 left-0 w-full h-1/2
                                    flex flex-col justify-center items-center text-black
                                    px-4 py-4 sm:p-6
                                    translate-y-full group-hover:translate-y-0
                                    transition-transform duration-500"
                            >
                                <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-1 text-center">
                                    {item.title}
                                </h3>
                                <p className="text-xs sm:text-sm opacity-80 text-center">
                                    {item.subtitle}
                                </p>
                                <button
                                    className="bg-black text-white mt-4 sm:mt-8 md:mt-10
                                        text-sm sm:text-base md:text-lg
                                        rounded-lg px-4 py-2 sm:px-5
                                        hover:bg-gray-100 active:scale-95
                                        transition-all duration-200"
                                >
                                    Explore Now
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}