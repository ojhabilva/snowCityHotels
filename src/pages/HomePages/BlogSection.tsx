"use client";

import { Blog1, Blog2, Blog3, Blog4 } from "@/constent/graphic";
import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";

type BlogItem = {
  title: string;
  desc: string;
  image: string;
};

const rightBlogs: BlogItem[] = [
  {
    title: "Culture",
    desc: "A community of forward-thinkers and go-getters",
    image: Blog2.src,
  },
  {
    title: "Snow City Stay Story",
    desc: "Evolved from a vision into a distinguished hospitality brand.",
    image: Blog3.src,
  },
  {
    title: "Explore Manali",
    desc: "A community of forward-thinkers and go-getters",
    image: Blog4.src,
  },
];

// Animation variants
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const slideLeft: Variants = {
  hidden: { opacity: 0, x: -60 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const slideRight: Variants = {
  hidden: { opacity: 0, x: 60 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

export default function BlogSection() {
  return (
    <section id="blogs" className="w-full bg-[#FFFADD] text-black py-12 px-6 md:px-16 overflow-hidden">
      {/* Heading */}
      <motion.h2
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
        className="text-2xl md:text-3xl font-semibold text-[#486221] text-center mb-8"
      >
        Blog
      </motion.h2>

      <div className="grid md:grid-cols-[1.6fr_1fr] gap-12">

        {/* LEFT BIG CARD */}
        <motion.div
          variants={slideLeft}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          className="flex flex-col"
        >
          <Link href="/Sustainability">
            <div className="relative w-full h-[420px] md:h-[600px] overflow-hidden cursor-pointer group rounded-sm shadow-xl">
              <Image
                src={Blog1.src}
                alt="Sustainability"
                fill
                priority
                className="object-cover group-hover:scale-105 transition duration-500 ease-out"
              />
            </div>
          </Link>

          <div className="text-center flex flex-col justify-center items-center mt-4">
            <h3 className="font-semibold text-xl">Sustainability</h3>
            <p className="max-w-xs text-lg text-gray-700">
              Living in harmony with nature and our community
            </p>
          </div>
        </motion.div>

        {/* RIGHT STACKED CARDS */}
        <div className="flex flex-col gap-6">
          {rightBlogs.map((item, i) => (
            <motion.div
              key={i}
              variants={slideRight}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.2 }}
              transition={{ delay: i * 0.15 }}
              className="flex flex-col justify-center items-center"
            >
              <Link href={item.title === "Culture" ? "/Culture" : "#"} className="w-full">
                <div className="relative w-full h-[200px] md:h-[180px] overflow-hidden cursor-pointer group rounded-sm shadow-md">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition duration-500 ease-out"
                  />
                </div>
              </Link>

              <div className="flex flex-col items-center text-center mt-3">
                <h3 className="font-semibold text-md">{item.title}</h3>
                <p className="max-w-xs text-sm text-gray-700">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}