"use client";

import { NavbarLogo } from "@/constent/graphic";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="w-full bg-[#486221] text-white px-6 md:px-16 py-5">

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-[2fr_1.5fr_1.75fr_1.75fr] gap-8">

                {/* Explore */}
                <div>

                    <h3 className="text-2xl mb-4">Properties</h3>
                    <ul className="space-y-5 text-md text-white/80">
                        <li className="hover:text-white cursor-pointer">
                            <Link href="/Properties/NatureHouse">Nature House (Rana Cottages)</Link>
                        </li>
                        <li className="hover:text-white cursor-pointer">
                            <Link href="/Properties/MontanaBlueResort">Montana Blue Resort by Snow City Stays</Link>
                        </li>
                        <li className="hover:text-white cursor-pointer">
                            <Link href="/Properties/Baan">Baan by Snow City Stays</Link>
                        </li>
                        <li className="hover:text-white cursor-pointer">
                            <Link href="/Properties/Shivalaya">Shivalaya by Snow City Stays</Link>
                        </li>
                    </ul>
                </div>

                {/* Properties */}
                <div>
                    <h3 className="text-2xl mb-4">Explore</h3>
                    <ul className="space-y-5 text-md text-white/80">
                        <li className="hover:text-white cursor-pointer">
                            <Link href="/">Home</Link>
                        </li>
                        <li className="hover:text-white cursor-pointer">
                            <Link href="/AboutUs">About</Link>
                        </li>
                        <li className="hover:text-white cursor-pointer">
                            <Link href="/ContactUs">Contact</Link>
                        </li>
                        <li className="hover:text-white cursor-pointer">
                            <Link href="#gallery">Photo Gallery</Link>
                        </li>
                    </ul>
                </div>

                {/* Legal */}
                <div>
                    <h3 className="text-2xl mb-4">Legal</h3>
                    <ul className="space-y-5 text-md text-white/80">
                        <li className="hover:text-white cursor-pointer">
                            <Link href="/Legal/CorporatePolicies">Corporate Policies</Link>
                        </li>
                        <li className="hover:text-white cursor-pointer">
                            <Link href="/Legal/TermsAndConditions">Terms & Conditions</Link>
                        </li>
                        <li className="hover:text-white cursor-pointer">
                            <Link href="/Legal/PrivacyPolicy">Privacy Policy</Link>
                        </li>
                    </ul>
                </div>

                {/* Brand / Contact */}
                <div className="flex flex-col gap-3">

                    {/* Logo */}
                    <div className="text-xl mt-[-15] font-bold leading-tight">
                        <Image src={NavbarLogo.src} alt="logo" width={100} height={100} />
                    </div>

                    <p className="text-md text-white/80">
                        Snow City Stays <br />
                        Left Bank Aleo, Manali, Distt. Kullu (H.P.)
                    </p>

                    <p className="text-md text-white/80">
                        094595-15050 & 089883-15050
                    </p>

                    <p className="text-md text-white/80">
                        snowcitystays@gmail.com
                    </p>
                </div>

            </div>

            {/* Bottom */}
            <div className="text-center text-md text-[#99897C] mt-8 border-t border-white/20 pt-4">
                © All rights reserved Snow City Stays
            </div>
        </footer>
    );
}