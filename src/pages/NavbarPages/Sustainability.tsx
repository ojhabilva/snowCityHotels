"use client";

import {
    Blog1, Blog2, Blog3, Blog4, HistorySectionbg, NavbarLogo,
    Adv1, Adv4, PropertyRoom, Shivalaya1, InfoDesk2, NatureHouse3, MontanaBG,
    NosingleUsePlastic
} from "@/constent/graphic";
import Image from "next/image";
import {
    FaLightbulb, FaTrash, FaWineBottle, FaBan, FaLeaf,
    FaStore, FaFileAlt, FaSun, FaUsers, FaChalkboardTeacher
} from "react-icons/fa";
import { motion } from "framer-motion";

export default function Sustainability() {
    const fadeIn: any = {
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    const achievements = [
        { icon: <FaLightbulb />, label: "Energy-Efficient LED Lighting" },
        { icon: <FaTrash />, label: "On-Site Waste Segregation" },
        { icon: <FaWineBottle />, label: "Eliminating Single-Use PET Bottles" },
        { icon: <Image src={NosingleUsePlastic.src} alt="No Plastic" width={60} height={60} className="object-contain" />, label: "Free from Single-Use Plastics" },
        { icon: <FaLeaf />, label: "Back-of-House Eco Initiatives" },
        { icon: <FaStore />, label: "Locally Sourced Products" },
        { icon: <FaFileAlt />, label: "Reduced Paper Use & Recycled Materials" },
        { icon: <FaSun />, label: "Optimized Natural Lighting" },
        { icon: <FaUsers />, label: "Guest Awareness Programs" },
        { icon: <FaChalkboardTeacher />, label: "Sustainability Training for Staff" },
    ];

    const focusAreas = [
        {
            title: "Energy Efficiency",
            desc: "We use smart technologies and thoughtful design to minimise energy use. Wherever possible, we incorporate renewable energy sources—ensuring our guests enjoy a more responsible and refined stay. Encouraging low-impact choices, such as using bicycles for short distances, is one of the many ways we work to reduce overall energy consumption.",
            image: Shivalaya1.src
        },
        {
            title: "Carbon Footprint Reduction",
            desc: "Guided by global sustainability goals, we are committed to lowering our carbon emissions through responsible practices. Initiatives such as adopting electric vehicles wherever possible and improving operational efficiency help us move steadily toward a lower-impact future.",
            image: NatureHouse3.src
        },
        {
            title: "Electricity & Water Conservation",
            desc: "Water is a vital resource, and we are committed to using it responsibly. Through simple, everyday conservation practices, we aim to reduce consumption while inviting our guests to be part of the effort. In-room messages encourage the reuse of linens and towels, helping to lower water usage and reduce the energy required for laundry—creating a more efficient and mindful approach overall.",
            image: NatureHouse3.src
        },
        {
            title: "Waste Management",
            desc: "From phasing out single-use plastics to responsibly managing food waste, we ensure that all waste is carefully handled, stored, and disposed of with minimal environmental impact.",
            image: PropertyRoom.src
        },
        {
            title: "Paperless Operations",
            desc: "We aim to operate with minimal reliance on paper, reducing the environmental impact linked to its use and disposal. By adopting e-billing, we have significantly lowered paper consumption. This approach extends across guest services, administrative processes, and communication channels, supporting a more efficient and responsible way of working.",
            image: InfoDesk2.src
        },
        {
            title: "Biodiversity Protection",
            desc: "The natural environment lies at the heart of the Snow City Stays experience. We actively work to understand and protect the biodiversity surrounding our properties, ensuring we operate in harmony with the local ecosystem while helping preserve it for generations to come.",
            image: MontanaBG.src
        },
        {
            title: "Cleaning Drives",
            desc: "We stay closely connected with local sustainability initiatives and actively take part in clean-up efforts across our coastal and mountain regions. Often carried out alongside our guests and community members, these initiatives help reduce pollution and preserve a cleaner, more sustainable environment.",
            image: Blog2.src
        }
    ];

    return (
        <div className="bg-white text-black font-poppins">
            {/* Hero Section */}
            <section className="relative w-full h-[60vh] md:h-[80vh] flex items-end justify-center text-center text-white pb-16">
                <Image
                    src={Blog1.src}
                    alt="Sustainability Hero"
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="relative z-10 px-6 md:px-[55px]">
                    <h1 className="text-[50px] font-semibold leading-tight font-poppins mb-2">Sustainability</h1>
                    <p className="text-[25px] font-medium opacity-100 font-poppins">
                        Our dedication to environmental responsibility
                    </p>
                </div>
            </section>

            {/* Introduction Section */}
            <section className="pt-16 pb-0 px-6 md:px-[131px] text-center">
                <p className="text-lg md:text-xl leading-relaxed text-gray-700">
                    As an integral part of the local community, Snow City Stays is dedicated to being an environmentally
                    responsible neighbor. We actively engage in sustainability initiatives, support conservation efforts,
                    and contribute to the well-being of the community around us. <br /><br />
                    We are also committed to maintaining transparency in our environmental journey—regularly sharing
                    our progress, achievements, and future goals with our guests and stakeholders each year.
                </p>
            </section>

            <h2 className="text-3xl md:text-5xl font-bold text-center px-6 md:px-[55px] my-8">Our Policy</h2>

            {/* Policy Details Section */}
            <section className="bg-[#FFFBEB] py-16 px-6 md:px-[55px]">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-6">
                        <div className="h-px bg-gray-300 w-full mb-6" />
                        <p className="text-lg leading-relaxed text-gray-800">
                            Marking 10 years in 2025, Snow City Stays believes that true luxury is rooted in a deep respect for
                            nature and a commitment to sustainable living. We strive to encourage responsible travel and tourism
                            through our environmental initiatives, both within our properties and across the regions we proudly
                            call home.
                        </p>
                    </div>
                    <div className="space-y-6">
                        <div className="h-px bg-gray-300 w-full mb-6" />
                        <p className="text-lg leading-relaxed text-gray-800">
                            Nestled within a unique natural setting, we recognise our responsibility to act as careful
                            stewards of the environment—preserving biodiversity while safeguarding the rich natural and
                            cultural heritage of the communities in which we operate.
                        </p>
                    </div>
                </div>
                <div className="mt-12 border-t border-gray-300 pt-8">
                    <h3 className="text-2xl font-bold mb-4">At Snow City Stays</h3>
                    <p className="text-lg leading-relaxed text-gray-800">
                        We are committed to operating in a way that contributes to a sustainable future for our planet, while creating
                        heartfelt experiences for our guests and meaningful opportunities for our team members.
                    </p>
                </div>
            </section>

            {/* Reimagining Section */}
            <section className="py-20 text-center">
                <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight px-6 md:px-[330px]">
                    Reimagining the harmony between Luxury and Sustainability
                </h2>
                <p className="text-lg text-gray-600 mb-16 px-6 md:px-[123px]">
                    From impactful initiatives like comprehensive waste management to mindful choices such as
                    eliminating single-use plastics—every step we take is guided by our commitment to a greener future.
                    Our guests don't just enjoy refined comfort; they become part of a journey toward a more sustainable world.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 md:px-[55px]">
                    <div className="bg-[#FFFBEB] p-10 text-left rounded-sm">
                        <span className="text-xl font-bold mb-4 block">01.</span>
                        <h4 className="text-2xl font-bold mb-6">Compliance</h4>
                        <p className="text-gray-700 leading-relaxed">
                            Our commitment extends beyond meeting regulations. We strive to surpass both national and local
                            environmental standards, holding ourselves to a higher level of responsibility and accountability in
                            every action we take.
                        </p>
                    </div>
                    <div className="bg-white border border-gray-100 p-10 text-left rounded-sm shadow-sm">
                        <span className="text-xl font-bold mb-4 block">02.</span>
                        <h4 className="text-2xl font-bold mb-6">Sustainable Management</h4>
                        <p className="text-gray-700 leading-relaxed">
                            We are committed to building a cohesive sustainability management system that ensures efficient use of resources,
                            reduces waste, and promotes responsible energy practices—carefully aligned with our unique operational footprint.
                        </p>
                    </div>
                    <div className="bg-[#486221] p-10 text-left rounded-sm text-white">
                        <span className="text-xl font-bold mb-4 block">03.</span>
                        <h4 className="text-2xl font-bold mb-6">Continuous Improvement</h4>
                        <p className="opacity-90 leading-relaxed">
                            We are committed to regularly reviewing and refining our environmental practices, setting progressive annual goals,
                            and actively working to reduce our carbon footprint year after year.
                        </p>
                    </div>
                </div>
            </section>

            {/* Key Achievements Section */}
            <section className="py-20 bg-white">
                <div className="text-center">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 px-6 md:px-[55px]">Key Achievements</h2>
                    <p className="text-lg text-gray-600 mb-16 px-6 md:px-[123px]">
                        Sustainability lies at the heart of our operations, with full adoption across key areas creating a strong
                        foundation for long-term impact. These milestones reflect our dedication to responsible growth and a
                        more sustainable future.
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4 px-6 md:px-[55px]">
                        {achievements.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05, duration: 0.4 }}
                                whileHover={{ scale: 1.05, backgroundColor: "#FEF3C7" }}
                                className="bg-[#FFFBEB] p-6 flex flex-col items-center justify-center text-center rounded-sm transition cursor-pointer hover:shadow-md h-[180px]"
                            >
                                <div className="text-3xl text-[#486221] mb-4 flex items-center justify-center">
                                    {item.icon}
                                </div>
                                <span className="text-sm font-medium text-gray-800 leading-snug">
                                    {item.label}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Current Progress Section */}
            <section className="bg-[#FFFBEB] pt-20">
                <div className="px-6 md:px-[55px]">
                    <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">Current Progress</h2>

                    <div className="flex flex-col gap-y-4 text-[22px] font-normal text-black mb-16">
                        {[
                            { name: "1. Rainwater Harvesting", status: "nearing completion (70%)" },
                            { name: "2. Water-Saving Fixtures", status: "implementation in progress (70%)" },
                            { name: "3. Circular Practices", status: "being expanded across properties" },
                            { name: "4. EV Charging Facilities", status: "steadily growing infrastructure" },
                            { name: "5. Energy-Efficient Lighting", status: "adoption increasing across spaces" },
                            { name: "6. Climate & Irrigation Systems", status: "enhancing overall efficiency" },
                        ].map((item, index) => (
                            <div key={index} className="flex justify-between items-center py-1">
                                <span>{item.name}</span>
                                <span>{item.status}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="relative w-full h-[400px] md:h-[600px] overflow-hidden">
                    <Image
                        src={HistorySectionbg.src}
                        alt="Resort Progress"
                        fill
                        className="object-cover"
                    />
                </div>
            </section>

            {/* Focus Areas Section */}
            <section className="py-24 bg-white px-6 md:px-[55px]">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Focus Areas</h2>
                    <p className="text-lg text-gray-600 mb-8">We prioritise the following key areas across our value chain:</p>
                </div>

                <div className="sticky top-0 z-40 py-4 bg-white/90 backdrop-blur-md border-y border-gray-100 mb-16">
                    <div className="text-center">
                        <div className="flex flex-wrap justify-center gap-10 md:gap-24 text-sm font-bold text-gray-800 uppercase tracking-widest bg-[#FFFBEB] py-4 px-12 rounded-full inline-block">
                            <span>Energy Efficiency &nbsp; &nbsp;&nbsp;</span>
                            <span>Carbon Footprint&nbsp;&nbsp; &nbsp;</span>
                            <span>Water Conservation&nbsp;&nbsp;&nbsp;</span>
                            <span>Waste Management&nbsp;&nbsp;&nbsp; </span>
                            <span>Biodiversity&nbsp;&nbsp;&nbsp;</span>
                            <span>Cleaning Drives&nbsp;&nbsp;&nbsp;</span>
                        </div>
                    </div>
                </div>

                <div className="space-y-24 px-6 md:px-[55px]">
                    {focusAreas.map((area, index) => (
                        <motion.div
                            key={index}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, amount: 0.3 }}
                            variants={{
                                hidden: { opacity: 0, x: index % 2 === 0 ? -50 : 50 },
                                show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
                            }}
                            className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12`}
                        >
                            <div className="flex-1 space-y-6">
                                <h3 className="text-3xl font-bold">{area.title}</h3>
                                <p className="text-lg text-gray-700 leading-relaxed text-justify">
                                    {area.desc}
                                </p>
                            </div>
                            <div className="flex-1 flex justify-center">
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.4 }}
                                    className="relative w-full h-[300px] max-w-[600px] aspect-[4/3] rounded-[150px] overflow-hidden shadow-lg cursor-pointer"
                                >
                                    <Image
                                        src={area.image}
                                        alt={area.title}
                                        fill
                                        className="object-cover"
                                    />
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Cleaning Drives & Bottom Section */}
            <section className="py-24 bg-white border-t border-gray-100">
                <div className="px-6 md:px-[55px] flex flex-col md:flex-row items-center gap-16 mb-24">
                    <div className="flex-1 relative w-full h-[400px] rounded-sm overflow-hidden">
                        <Image
                            src={NatureHouse3.src}
                            alt="Cleaning Drive"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="flex-1 space-y-6">
                        <h3 className="text-3xl font-bold">Snow City Stays</h3>
                        <p className="text-[#486221] font-semibold tracking-widest uppercase text-sm">Sustainability Policy</p>
                        <p className="text-lg text-gray-700 leading-relaxed text-justify">
                            Our 2024 Progress Report highlights the strides we've made so far and outlines our vision for the years ahead.
                            While it reflects long-standing efforts built over time, the report places particular focus on initiatives
                            and achievements from the year ending December 31, 2024.
                        </p>
                    </div>
                </div>

                {/* Bottom Brand Cards */}
                <div className="bg-[#FFFBEB] py-24">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-0 items-stretch">
                        {[
                            { title: "Sustainability", desc: "Living in harmony with nature and our community", image: Blog1.src },
                            { title: "Culture", desc: "A community of forward-thinkers and go-getters", image: Blog2.src },
                            { title: "History", desc: "A community of forward-thinkers and go-getters", image: Blog3.src },
                            { title: "Explore", desc: "A community of forward-thinkers and go-getters", image: Blog4.src },
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -10 }}
                                className="flex flex-col bg-white shadow-lg rounded-sm overflow-hidden group cursor-pointer h-full"
                            >
                                <div className="relative w-full h-[250px] md:h-[300px] overflow-hidden">
                                    <Image src={item.image} alt={item.title} fill className="object-cover transition-transform group-hover:scale-110 duration-500" />
                                </div>
                                <div className="text-center py-8 px-6 flex flex-col items-center justify-center flex-grow">
                                    <h4 className="font-bold text-xl mb-4">{item.title}</h4>
                                    <p className="text-xs text-gray-600 leading-relaxed max-w-[180px]">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
