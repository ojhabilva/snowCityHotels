export default function StayCard({ index, item }: any) {
    return (

        <div key={index} className="group">

            {/* IMAGE */}
            <div className="overflow-hidden">
                <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-[400px] object-cover transition duration-700 group-hover:scale-105"
                />
            </div>

            {/* CONTENT */}
            <div className="mt-4 space-y-2">

                <h3 className="font-semibold text-black text-lg">
                    {item.title}
                </h3>

                <p className="text-sm text-black leading-relaxed">
                    {item.desc}
                </p>

                <button className="text-sm font-medium text-black underline mt-2 hover:opacity-70">
                    Learn More
                </button>

            </div>
        </div>
    );
}