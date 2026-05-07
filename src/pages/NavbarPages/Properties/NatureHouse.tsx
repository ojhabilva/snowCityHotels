import BlogCard from "@/components/cards/BlogCard";
import StayCard from "@/components/cards/StayCard";
import BookingBar from "@/components/components/BookingBar";
import HeroSection from "@/components/components/HeroSection";
import OffersBanner from "@/components/components/OffersBanner";
import PromoSplit from "@/components/components/PromoSplit";
import SectionHeader from "@/components/components/SectionHeader";
import { NatureHouse1, NatureHouse2, NatureHouse3, NatureHouse4, Property1, Property2, Property2Hover, Property3 } from "@/constent/graphic";
import FollowUsSection from "@/pages/HomePages/FollowUsSection";

export default function NatureHouse() {
    const stays = [
        {
            title: "Nature House (Rana Cottage)",
            image: Property1.src,
            desc: "Surrounded by the fragrant apple orchards of Himachal, Snow City Stays, Manali offers a calm retreat for travelers seeking comfort and relaxation. Nestled in the charming town of Haripur, it presents a peaceful escape embraced by natural beauty...",
        },
        {
            title: "Montana Blues (Manali)",
            image: Property2.src,
            desc: "Perched amidst the scenic heights of Manali, Snow City Stays offers captivating views of the surrounding valleys and mountains. Surrounded by lush landscapes and fresh mountain air, this peaceful retreat creates a relaxing and immersive experience...",
        },
        {
            title: "Baan (by Snow City Stays)",
            image: Property3.src,
            desc: "Experience the perfect blend of natural beauty and refined comfort at Snow City Stays, Manali—a peaceful retreat set amidst lush surroundings. With spacious accommodations and a serene atmosphere, it offers an ideal escape for relaxation...",
        },
    ];

    const posts = [
        {
            id: 1,
            title: "Exploring Hadimba Temple & Manali’s Heritage",
            date: "July 28 2025",
            description:
                "Step into the timeless charm of the iconic Hadimba Temple, surrounded by tall deodar forests and rich local history. Known for its unique wooden architecture and spiritual significance, this heritage site offers a glimpse into Manali’s cultural roots and traditions...",
            image: NatureHouse2.src
        },
        {
            id: 2,
            title: "Adventure Activities in Manali You Must Try",
            date: "July 21 2025",
            description:
                "From paragliding over lush valleys to thrilling outdoor experiences, Manali offers endless adventure for every kind of traveler. Get ready to explore the adrenaline side of the mountains...",
            image: NatureHouse3.src
        },
        {
            id: 3,
            title: "Winter Wonderland: Snow Experiences in Manali",
            date: "June 17 2025",
            description:
                "Experience the magic of snow-covered landscapes, frozen valleys, and peaceful winter trails. Manali transforms into a dreamy escape during the colder months...",
            image: NatureHouse4.src
        },
    ];

    return (
        <>
            <section className="w-full bg-[#f5f5f5]">

                {/* HERO IMAGE */}
                <HeroSection image="/heroSection/Welcome to1.mp4" />

                {/* BOOKING BAR */}
                <BookingBar />

                {/* DESCRIPTION */}
                <div className="max-w-6xl mx-auto text-center px-6 py-10 text-gray-700 text-sm md:text-xl leading-relaxed">
                    At Snow City Stays, we design experiences that effortlessly combine comfort with the beauty of natural surroundings, making every stay more than just a visit—it becomes a collection of lasting memories. Where personalized service is paired with a strong commitment to guest satisfaction, our properties bring together modern comfort and nature in carefully selected locations, offering truly exceptional stays.
                </div>

                <PromoSplit image={Property2Hover.src} />

            </section>

            <section className="w-full bg-white px-6 md:px-16 py-10">

                {/* ===== TOP BANNER ===== */}
                <SectionHeader dir="justify-start" title="Snow City Stays" />
                <div className="grid md:grid-cols-3 gap-6">
                    {stays.map((item) => (
                        <StayCard key={item.title} item={item} />
                    ))}
                </div>

            </section>

            <section className="w-full  bg-white px-6 md:px-16 py-10">
                <OffersBanner image={NatureHouse1.src} />
            </section>

            <section className="w-full  bg-white pt-16 px-6 md:px-16">

                {/* Header */}
                <SectionHeader title="Latest Post" />

                {/* Cards */}
                <div className="grid text-black md:grid-cols-3 gap-10">
                    {posts.map((post) => (
                        <BlogCard key={post.id} post={post} />
                    ))}
                </div>
            </section>
            <FollowUsSection />
        </>
    )
}