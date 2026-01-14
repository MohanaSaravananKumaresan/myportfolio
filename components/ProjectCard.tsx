type ProjectCardProps = {
    title: string;
    description: string;
};

export default function ProjectCard({ title, description }: ProjectCardProps) {
    return (
        <div className="border border-white/10 rounded-xl p-6 hover:border-indigo-400 transition">
            <h3 className="text-xl font-semibold mb-3">
                {title}
            </h3>

            <p className="text-gray-400 text-sm">
                {description}
            </p>
        </div>
    );
}
