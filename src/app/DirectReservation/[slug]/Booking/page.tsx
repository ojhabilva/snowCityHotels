"use client";

import React from 'react';
import { useParams } from 'next/navigation';
import PropertyBookingForm from "@/components/BookingForm/PropertyBookingForm";
import { Property1, Property2, Property3, Property4, NatureHouse1, NatureHouse2, NatureHouse3, NatureHouse4 } from "@/constent/graphic";

const propertiesData: Record<string, any> = {
    "nature-house": {
        name: "Nature House (Rana Cottage)",
        description: `Nestled amidst the gentle fragrance of apple orchards and surrounded by the serene beauty of the Himalayas, Nature House (Rana Cottage) offers a peaceful retreat where nature and comfort come together effortlessly. Thoughtfully designed to provide warmth and privacy, the cottage welcomes you with a calm and homely charm.
The interiors reflect a rustic elegance, with natural textures and wooden tones creating a cozy and inviting space. Large windows open up to refreshing views of the mountains, allowing you to soak in the beauty of the outdoors right from your room. Whether you choose to relax indoors or step outside into the orchard-lined surroundings, every moment here feels unhurried and soothing.
Perfect for those seeking a quiet escape away from the crowd, Nature House (Rana Cottage) balances simplicity with comfort. Located at a convenient distance from Kullu Airport, the journey to the cottage is smooth and scenic, with transfer assistance available on request.
Set within lush green surroundings and embraced by nature, it is an ideal hideaway where you can truly unwind and reconnect with the tranquility of the mountains.`,
        images: [Property1.src, NatureHouse1.src, NatureHouse2.src, NatureHouse3.src, NatureHouse4.src],
        rooms: [
            { title: "Room Only", originalPrice: 6345, discountedPrice: 5200, discountLabel: "20% Off (Save INR 5,300)" },
            { title: "Room with Breakfast", originalPrice: 6345, discountedPrice: 5200, discountLabel: "20% Off (Save INR 5,300)" },
            { title: "Room with Breakfast and Lunch / Dinner", originalPrice: 6345, discountedPrice: 5200, discountLabel: "20% Off (Save INR 5,300)" }
        ]
    },
    "montana-blues": {
        name: "Montana Blues",
        description: `Nestled amidst the gentle fragrance of apple orchards and surrounded by the serene beauty of the Himalayas, Montana Blues offers a peaceful retreat where nature and comfort come together effortlessly. Thoughtfully designed to provide warmth and privacy, the cottage welcomes you with a calm and homely charm.
The interiors reflect a rustic elegance, with natural textures and wooden tones creating a cozy and inviting space. Large windows open up to refreshing views of the mountains, allowing you to soak in the beauty of the outdoors right from your room. Whether you choose to relax indoors or step outside into the orchard-lined surroundings, every moment here feels unhurried and soothing.
Perfect for those seeking a quiet escape away from the crowd, Nature House (Rana Cottage) balances simplicity with comfort. Located at a convenient distance from Kullu Airport, the journey to the cottage is smooth and scenic, with transfer assistance available on request.
Set within lush green surroundings and embraced by nature, it is an ideal hideaway where you can truly unwind and reconnect with the tranquility of the mountains.`,
        images: [Property2.src, NatureHouse1.src, NatureHouse2.src, NatureHouse3.src, NatureHouse4.src],
        rooms: [
            { title: "Room Only", originalPrice: 6345, discountedPrice: 5200, discountLabel: "20% Off (Save INR 5,300)" },
            { title: "Room with Breakfast", originalPrice: 6345, discountedPrice: 5200, discountLabel: "20% Off (Save INR 5,300)" },
            { title: "Room with Breakfast and Lunch / Dinner", originalPrice: 6345, discountedPrice: 5200, discountLabel: "20% Off (Save INR 5,300)" }
        ]
    },
    "baan": {
        name: "Bann by Snow City Stays",
        description: `Nestled amidst the gentle fragrance of apple orchards and surrounded by the serene beauty of the Himalayas, Baan by Snow City Stays offers a peaceful retreat where nature and comfort come together effortlessly. Thoughtfully designed to provide warmth and privacy, the cottage welcomes you with a calm and homely charm.
The interiors reflect a rustic elegance, with natural textures and wooden tones creating a cozy and inviting space. Large windows open up to refreshing views of the mountains, allowing you to soak in the beauty of the outdoors right from your room. Whether you choose to relax indoors or step outside into the orchard-lined surroundings, every moment here feels unhurried and soothing.
Perfect for those seeking a quiet escape away from the crowd, Nature House (Rana Cottage) balances simplicity with comfort. Located at a convenient distance from Kullu Airport, the journey to the cottage is smooth and scenic, with transfer assistance available on request.
Set within lush green surroundings and embraced by nature, it is an ideal hideaway where you can truly unwind and reconnect with the tranquility of the mountains.`,
        images: [Property3.src, NatureHouse1.src, NatureHouse2.src, NatureHouse3.src, NatureHouse4.src],
        rooms: [
            { title: "Room Only", originalPrice: 6345, discountedPrice: 5200, discountLabel: "20% Off (Save INR 5,300)" },
            { title: "Room with Breakfast", originalPrice: 6345, discountedPrice: 5200, discountLabel: "20% Off (Save INR 5,300)" },
            { title: "Room with Breakfast and Lunch / Dinner", originalPrice: 6345, discountedPrice: 5200, discountLabel: "20% Off (Save INR 5,300)" }
        ]
    },
    "shivalaya": {
        name: "Shivalaya by Snow City Stays",
        description: `Nestled amidst the gentle fragrance of apple orchards and surrounded by the serene beauty of the Himalayas, Shivalaya by Snow City Stays offers a peaceful retreat where nature and comfort come together effortlessly. Thoughtfully designed to provide warmth and privacy, the cottage welcomes you with a calm and homely charm.
The interiors reflect a rustic elegance, with natural textures and wooden tones creating a cozy and inviting space. Large windows open up to refreshing views of the mountains, allowing you to soak in the beauty of the outdoors right from your room. Whether you choose to relax indoors or step outside into the orchard-lined surroundings, every moment here feels unhurried and soothing.
Perfect for those seeking a quiet escape away from the crowd, Nature House (Rana Cottage) balances simplicity with comfort. Located at a convenient distance from Kullu Airport, the journey to the cottage is smooth and scenic, with transfer assistance available on request.
Set within lush green surroundings and embraced by nature, it is an ideal hideaway where you can truly unwind and reconnect with the tranquility of the mountains.`,
        images: [Property4.src, NatureHouse1.src, NatureHouse2.src, NatureHouse3.src, NatureHouse4.src],
        rooms: [
            { title: "Room Only", originalPrice: 6345, discountedPrice: 5200, discountLabel: "20% Off (Save INR 5,300)" },
            { title: "Room with Breakfast", originalPrice: 6345, discountedPrice: 5200, discountLabel: "20% Off (Save INR 5,300)" },
            { title: "Room with Breakfast and Lunch / Dinner", originalPrice: 6345, discountedPrice: 5200, discountLabel: "20% Off (Save INR 5,300)" }
        ]
    }
};

export default function BookingPage() {
    const params = useParams();

    if (!params) return null;

    const slug = params.slug as string;
    const data = propertiesData[slug];

    if (!data) return <div>Property not found</div>;

    return <PropertyBookingForm property={data} />;
}
