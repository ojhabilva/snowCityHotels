import Image from "next/image";

export default function BlogCard({ post }: any) {
    return (
        <div className="space-y-4">

            <div className="relative w-full h-[300px] overflow-hidden">
                <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover hover:scale-105 transition"
                />
            </div>

            <h3 className="text-lg font-semibold">{post.title}</h3>

            <p className="text-sm italic">{post.date}</p>

            <p className="text-sm">{post.description}</p>

            <button className="text-sm italic hover:underline">
                Read Article
            </button>
        </div>
    );
}