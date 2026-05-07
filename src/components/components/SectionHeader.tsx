export default function SectionHeader({ dir, title }: { dir?: string, title: string }) {
    return (
        <div className={`${dir ? 'justify-start' : 'justify-center'} flex bg-white text-black items-center gap-2 mb-3`}>
            <h2 className="text-3xl md:text-4xl font-semibold">{title}</h2>
            <span className=" mt-2 text-3xl"><i
                className="fi fi-bs-arrow-up-right"
            ></i></span>
        </div>
    );
}