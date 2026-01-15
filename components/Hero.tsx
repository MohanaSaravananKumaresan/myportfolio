"use client";

import {motion, Variants} from "framer-motion";

const containerVariants: Variants = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
        },
    },
};

const itemVariants: Variants = {
    hidden: {
        opacity: 0,
        y: 20,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut",
        },
    },
};


export default function Hero() {
    return (
        <motion.section
            className="min-h-screen flex items-center justify-center px-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >

            <motion.div className="max-w-3xl text-center">
                <motion.p
                    variants={itemVariants}
                    className="text-sm uppercase tracking-widest text-indigo-400 mb-4"
                >

                    Senior Backend Engineer
                </motion.p>

                <motion.h1
                    variants={itemVariants}
                    className="text-4xl md:text-6xl font-bold leading-tight mb-6"
                >

                    I build modern,
                    <span className="block text-indigo-400">
            scalable web systems
          </span>
                </motion.h1>

                <motion.p
                    variants={itemVariants}
                    className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto leading-relaxed"
                >

                A space to showcase my work, thinking, and engineering journey.
                </motion.p>

                <motion.div
                    variants={itemVariants}
                    className="flex justify-center gap-4"
                >

                    <motion.a
                        href="#projects"
                        className="px-6 py-3 rounded-full bg-indigo-500 text-white font-medium hover:bg-indigo-600 transition"
                        whileHover={{y: -2}}
                        whileTap={{scale: 0.97}}
                    >
                        View Work
                    </motion.a>

                    <motion.a
                        href="#contact"
                        className="px-6 py-3 rounded-full border border-white/20 hover:border-indigo-400 transition"
                        whileHover={{y: -2}}
                        whileTap={{scale: 0.97}}
                    >
                        Contact
                    </motion.a>
                </motion.div>
            </motion.div>
        </motion.section>
    );
}
