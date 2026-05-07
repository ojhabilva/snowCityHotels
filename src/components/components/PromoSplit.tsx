import { Promo } from "@/constent/graphic";
import Image from "next/image";

export default function PromoSplit({ image }: { image: string }) {
    return (
        <div className="grid w-full py-10">

            {/* LEFT - BLUR PROMO */}
            <div className="relative w-full h-[250px] md:h-[400px] overflow-hidden">

                <Image src={Promo.src} fill alt="Promo" />

            </div>
        </div>
    );
}