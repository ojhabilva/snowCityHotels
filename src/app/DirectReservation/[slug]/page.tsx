"use client";

import React from 'react';
import { useParams } from 'next/navigation';
import PropertyDirectReservation from "@/components/BookingForm/PropertyDirectReservation";

const propertyNames: Record<string, string> = {
    "nature-house": "Nature House (Rana Cottage)",
    "montana-blues": "Montana Blues",
    "baan": "Bann by Snow City Stays",
    "shivalaya": "Shivalaya by Snow City Stays"
};

export default function DirectReservationPropertyPage() {
    const params = useParams();
    
    if (!params) return null;

    const slug = params.slug as string;
    const name = propertyNames[slug];

    if (!name) return <div>Property not found</div>;

    return (
        <PropertyDirectReservation 
            name={name} 
            bookingLink={`/DirectReservation/${slug}/Booking`} 
        />
    );
}
