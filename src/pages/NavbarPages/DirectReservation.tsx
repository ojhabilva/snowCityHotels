import { Property2Hover, Property3Hover, PropertyRoom } from "@/constent/graphic";
import Image from "next/image";
import FollowUsSection from "../HomePages/FollowUsSection";

export default function DirectReservation() {
    return (
        <>
            <section className="w-full bg-[#e5e5e5] text-black relative pb-10">

                {/* Side Labels */}
                <div className="hidden md:block absolute left-2 top-1/2 -translate-y-1/2 rotate-[-90deg] text-sm tracking-widest">
                    Menu
                </div>
                <div className="hidden md:block absolute right-2 top-1/2 -translate-y-1/2 rotate-[90deg] text-sm tracking-widest">
                    Contact
                </div>

                {/* Header */}
                <div className="bg-[#e8e1c8] w-full py-4 text-center mb-6">
                    <h2 className="text-2xl md:text-3xl font-semibold">
                        Direct Reservation
                    </h2>
                </div>

                {/* Select */}
                <div className="flex flex-col items-center mb-8">
                    <label className="text-lg mb-2">Select Hotels</label>
                    <select className="w-[500px] border border-black px-4 py-2 bg-transparent">
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
                </div>

                {/* Cards */}
                <div className="grid md:grid-cols-2 gap-4 px-14">

                    {/* Stay */}
                    <div className="relative h-[450px] overflow-hidden group">
                        <Image
                            src={Property3Hover.src}
                            alt="Stay"
                            fill
                            className="object-cover group-hover:scale-105 transition duration-500"
                        />
                        <div className="absolute w-full h-[2px] bg-white top-25 left-0"></div>

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black/40 p-6 flex flex-col justify-center">
                            <h3 className="absolute top-8 left-8 text-white text-3xl font-bold mb-4">
                                Stay
                            </h3>

                            <ul className="absolute top-40 left-10 text-white text-2xl space-y-2">
                                <li>• Complimentary accommodation for two children under 6 years of age</li>
                                <li>• Enjoy 10% off on laundry services for bills above INR 1000</li>
                            </ul>
                        </div>
                    </div>

                    {/* Dining */}
                    <div className="relative h-[450px] overflow-hidden group">
                        <Image
                            src={PropertyRoom.src}
                            alt="Dining"
                            fill
                            className="object-cover group-hover:scale-105 transition duration-500"
                        />

                        <div className="absolute w-full h-[2px] bg-white top-25 left-0"></div>

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black/40 p-6 flex flex-col justify-center">
                            <h3 className="absolute top-8 left-8 text-white text-3xl font-bold mb-4">
                                Dining
                            </h3>

                            <ul className="absolute top-40 left-10 text-white text-2xl space-y-2">
                                <li>• Enjoy 10% off on all dining</li>
                                <li>• Happy Hours: Buy 2 drinks and get the third complimentary (11:00–19:00)</li>
                            </ul>
                        </div>
                    </div>

                </div>

                {/* Button */}
                <div className="flex justify-center mt-8">
                    <button className="bg-black text-white px-6 py-3 text-xl tracking-wide hover:bg-gray-800 transition">
                        BOOK NOW
                    </button>
                </div>

            </section>
            <section className="w-full px-4 md:px-16 py-10 bg-[#e5e5e5]">

                <div className="relative w-full h-[300px] md:h-[400px] overflow-hidden">

                    {/* Background Image */}
                    <Image
                        src={Property2Hover.src}
                        alt="Midweek Delight"
                        fill
                        className="object-cover"
                    />

                    {/* Left Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#5a6f2c]/80 to-transparent"></div>

                    {/* Content */}
                    <div className="absolute inset-0 flex flex-col md:flex-row justify-between p-6 md:p-10">

                        {/* LEFT TEXT */}
                        <div className="text-white max-w-md flex flex-col justify-between">
                            <h2 className="text-3xl md:text-6xl praise-regular leading-tight">
                                Midweek <br /> Delight
                            </h2>

                            <p className="mt-6 text-sm md:text-2xl max-w-[350px]">
                                Unlock extra savings available only on our website
                            </p>
                        </div>

                        {/* RIGHT TEXT */}
                        <div className="text-white flex flex-col justify-end items-start md:items-end max-w-md mt-6 md:mt-0">

                            <p className="text-sm md:text-lg text-left">
                                Enjoy additional savings when bookings are made from Monday to Sunday
                            </p>

                            <button className="mt-4 bg-[#5a6f2c] px-4 py-2 text-lg hover:bg-white hover:text-black transition">
                                Use Code : Weekendoff
                            </button>
                        </div>

                    </div>

                </div>

            </section>
            <FollowUsSection />
        </>
    )
}   