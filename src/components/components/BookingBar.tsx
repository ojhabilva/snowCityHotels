"use client";

import PropertyDropdown from "./PropertyDropdown";
import Link from "next/link";

export default function BookingBar({ slug }: { slug?: string }) {
    const bookingPath = slug ? `/DirectReservation/${slug}` : "/DirectReservation";
    
    return (
        <div className="max-w-4xl mx-auto -mt-10 flex flex-col md:flex-row items-center justify-between gap-4 px-6 py-4 relative">

            {/* Custom Dropdown */}
            <PropertyDropdown className="w-full md:w-[550px]" />


            {/* Buttons */}
            <div className="flex gap-3">
                <Link href={bookingPath} className="bg-black text-white px-6 py-2 text-sm hover:bg-gray-800 transition whitespace-nowrap">
                    BOOK NOW
                </Link>
                <Link href={bookingPath} className="bg-black text-white px-6 py-2 text-sm hover:bg-gray-800 transition whitespace-nowrap">
                    ENQUIRE NOW
                </Link>
            </div>
        </div>
    );
}