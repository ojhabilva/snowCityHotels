import Link from "next/link";

export default function BookingBar() {
    return (
        <div className="max-w-4xl mx-auto -mt-10 bg-white shadow-lg flex flex-col md:flex-row items-center justify-between gap-4 px-6 py-4">

            {/* Dropdown */}
            <select className="border px-4 py-2 w-full md:w-[550px] text-black text-sm">
                <option>Select Hotels</option>
                <option>
                    Nature House (Rana Cottage)
                </option>
                <option>
                    Montana Blue Resort (Manali)
                </option>
                <option>
                    Baan (Snow City Stays)
                </option>
                <option>
                    Shivalaya (Snow City Stays)
                </option>
            </select>

            {/* Buttons */}
            <div className="flex gap-3">
                <Link href="/DirectReservation" className="bg-black text-white px-6 py-2 text-sm hover:bg-gray-800 transition">
                    BOOK NOW
                </Link>
                <Link href="/DirectReservation" className="bg-black text-white px-6 py-2 text-sm hover:bg-gray-800 transition">
                    ENQUIRE NOW
                </Link>
            </div>
        </div>
    );
}