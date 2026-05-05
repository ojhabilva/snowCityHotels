export default function OffersBanner({ image }: { image: string }) {
    return (
        <div className="grid md:grid-cols-[1.3fr_1fr] w-full overflow-hidden">

            {/* LEFT IMAGE */}
            <div className="relative h-[350px] md:h-[680px] overflow-hidden">
                <img
                    src={image}
                    alt="Exclusive Offers"
                    className="w-full h-full object-cover transition duration-[1500ms] hover:scale-105"
                />
            </div>

            {/* RIGHT CONTENT */}
            <div className="bg-[#4b6527] text-white flex flex-col justify-between p-8 md:p-11">

                {/* TOP */}
                <div>
                    <h2 className="text-xl md:text-5xl font-semibold leading-snug mb-4">
                        Exclusive Benefits on <br /> Direct Booking
                    </h2>

                    {/* Arrow */}
                    <div className="text-4xl mb-6"><i
                        className=
                        "fi fi-bs-arrow-up-right"
                    ></i></div>
                </div>
                <p className="text-sm md:text-xl text-justify leading-relaxed opacity-90">
                    Explore special offers and exclusive benefits available only on our website.
                    Plan a memorable getaway tailored to suit your unique travel style and preferences.
                </p>

                {/* BUTTON */}
                <div className="mt-8 w-full flex items-center justify-center">
                    <button className="bg-[#e6e0c8] text-black px-6 py-3 text-lg font-medium rounded-md hover:bg-white transition">
                        VIEW ALL OFFERS
                    </button>
                </div>

            </div>

        </div>
    );
}