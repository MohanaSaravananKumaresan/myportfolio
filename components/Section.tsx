type SectionProps = {
    id: string;
    title: string;
    children: React.ReactNode;
};

export default function Section({ id, title, children }: SectionProps) {
    return (
        <section
            id={id}
            className="max-w-6xl mx-auto px-6 py-24"
        >
            <h2 className="text-3xl font-semibold mb-12">
            {title}
            </h2>

            <div className="text-gray-300">
                {children}
            </div>
        </section>
    );
}
