export default function Hero() {
    return (
        <section className="min-h-screen flex items-center justify-center px-6">
            <div className="max-w-3xl text-center">
                <p className="text-sm uppercase tracking-widest text-indigo-400 mb-4">
                    Personal Portfolio
                </p>

                <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                    I build modern,
                    <span className="block text-indigo-400">
            scalable web systems
          </span>
                </h1>

                <p className="text-gray-400 text-lg mb-10">
                    A space to showcase my work, thinking, and engineering journey.
                </p>

                <div className="flex justify-center gap-4">
                    <a
                        href="#projects"
                        className="px-6 py-3 rounded-full bg-indigo-500 text-white font-medium hover:bg-indigo-600 transition"
                    >
                        View Work
                    </a>

                    <a
                        href="#contact"
                        className="px-6 py-3 rounded-full border border-white/20 hover:border-indigo-400 transition"
                    >
                        Contact
                    </a>
                </div>
            </div>
        </section>
    );
}
