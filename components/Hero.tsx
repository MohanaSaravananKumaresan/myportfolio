"use client";

import { motion, Variants } from "framer-motion";

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.22 },
    },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.9,
            ease: "easeOut",
        },
    },
};

export default function Hero() {
    return (
        <section
            className="
                relative z-0
                min-h-screen px-6
                pt-[120px] pb-32
            "
        >
            <motion.div
                className="max-w-6xl mx-auto flex flex-col"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {/* HERO TEXT */}
                <motion.div variants={itemVariants}>
                    <h1 className="text-4xl md:text-6xl font-semibold leading-tight max-w-4xl">
                        I design backend systems
                        <br />
                        that are meant to{" "}
                        <span className="relative text-indigo-400 tracking-tight">
                            last.
                            <span
                                className="
                                    absolute left-0 -bottom-1
                                    w-full h-px
                                    bg-gradient-to-r
                                    from-indigo-400/0
                                    via-indigo-400
                                    to-indigo-400/0
                                "
                            />
                        </span>
                    </h1>

                    <p className="mt-10 text-lg text-gray-400 max-w-2xl leading-relaxed">
                        Not just until launch — but through growth, rewrites,
                        migrations, and the moments where assumptions break.
                    </p>
                </motion.div>

                {/* QUOTE / THINKING BOX */}
                <motion.div
                    variants={itemVariants}
                    whileHover={{ y: -4 }}
                    className="
                        relative
                        mt-16 max-w-xl
                        rounded-2xl
                        bg-black/70
                        backdrop-blur-xl
                        border border-white/10
                        px-8 py-6
                        text-gray-300
                        transition-all duration-300
                        hover:border-indigo-400/40
                        hover:shadow-lg hover:shadow-indigo-500/10
                        md:ml-24
                    "
                >
                    <span
                        className="
                            hidden md:block
                            absolute -left-2 top-10
                            w-4 h-4
                            bg-black/70
                            border-l border-b border-white/10
                            rotate-45
                        "
                    />

                    <p className="text-sm leading-relaxed text-center md:text-left">
                        “Design is not just what it looks like and feels like.
                        Design is how it works.”
                    </p>

                    <p className="mt-4 text-xs text-gray-500 text-center">
                        — Steve Jobs
                    </p>
                </motion.div>

                {/* SCROLL HOOK */}
                <motion.a
                    variants={itemVariants}
                    href="#experience"
                    className="
                        mt-16
                        text-sm text-gray-500
                        hover:text-indigo-400
                        transition
                        cursor-pointer
                    "
                >
                    Scroll to see how I think — principles above, practice below ↓
                </motion.a>
            </motion.div>
        </section>
    );
}
