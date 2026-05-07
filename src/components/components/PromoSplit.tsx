export default function PromoSplit({ image }: { image: string }) {
    return (
        <div className="grid md:grid-cols-2 gap-2 py-10 px-6 md:px-16">

            {/* LEFT - BLUR PROMO */}
            <div className="relative h-[250px] md:h-[400px] overflow-hidden">

                <img
                    src={image}
                    alt="Promo"
                    className="w-full h-full object-cover blur-sm scale-110"
                />

                <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-white text-center px-6">

                    <p className="text-sm mb-1 italic">Starting 1st May</p>

                    <h2 className="text-2xl praise-regular md:text-5xl font-semibold leading-snug mb-4">
                        Stay longer <br /> Save more
                    </h2>

                    <div className="flex flex-col gap-2 text-sm">
                        <button className="border border-white px-4 py-1 rounded-md hover:bg-white hover:text-black transition">
                            Book 2 nights, enjoy 3
                        </button>
                        <button className="border border-white px-4 py-1 rounded-md hover:bg-white hover:text-black transition">
                            Book 3 nights, enjoy 4
                        </button>
                        <button className="border border-white px-4 py-1 rounded-md hover:bg-white hover:text-black transition">
                            Assured Hotel Credit
                        </button>
                    </div>

                </div>
            </div>

            {/* RIGHT - IMAGE */}
            <div className="h-[250px] md:h-[400px] overflow-hidden">
                <img
                    src={image}
                    alt="Room"
                    className="w-full h-full object-cover hover:scale-105 transition duration-700"
                />
            </div>

        </div>
    );
}