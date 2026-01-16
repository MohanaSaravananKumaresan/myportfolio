"use client";

import { motion, Variants } from "framer-motion";
import { ArrowDown, Layers, Shield, TrendingUp } from "lucide-react";

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.14 },
    },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 18 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: "easeOut" },
    },
};

function Pill({
                  icon,
                  title,
                  desc,
              }: {
    icon: React.ReactNode;
    title: string;
    desc: string;
}) {
    return (
        <div
            className="
                rounded-2xl
                bg-black/60
                backdrop-blur-xl
                border border-white/10
                p-6
                transition
                hover:border-indigo-400/40
                hover:shadow-lg hover:shadow-indigo-500/10
            "
        >
            <div className="flex items-start gap-4">
                <div
                    className="
                        w-10 h-10
                        flex items-center justify-center
                        rounded-full
                        bg-indigo-500/10
                        text-indigo-400
                        flex-shrink-0
                    "
                >
                    {icon}
                </div>

                <div>
                    <p className="text-sm font-medium text-white">{title}</p>
                    <p className="mt-2 text-sm text-gray-400 leading-relaxed">
                        {desc}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default function About() {
    return (
        <section id="about" className="px-6 py-32 bg-black text-white">
            <motion.div
                className="max-w-6xl mx-auto"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
            >
                {/* Title */}
                <motion.div variants={itemVariants} className="max-w-4xl">
                    <p className="text-sm uppercase tracking-widest text-indigo-400 mb-4">
                        About
                    </p>

                    <h2 className="text-3xl md:text-4xl font-semibold leading-tight">
                        I modernize backend systems
                        <span className="text-indigo-400"> without breaking the business.</span>
                    </h2>

                    <p className="mt-6 text-lg text-gray-400 leading-relaxed max-w-3xl">
                        I’m a senior backend engineer focused on scalable architecture,
                        modernization of legacy applications, and reliability under real-world
                        constraints. I enjoy building systems that stay stable through growth,
                        migrations, and constant change — not just “working in dev”.
                    </p>
                </motion.div>

                {/* Narrative highlight */}
                <motion.div
                    variants={itemVariants}
                    className="
                        mt-12
                        rounded-2xl
                        bg-black/60
                        backdrop-blur-xl
                        border border-white/10
                        p-8
                        text-gray-300
                        leading-relaxed
                    "
                >
                    <p>
                        My work usually starts where the easy part ends — when performance degrades,
                        releases feel risky, teams slow down because systems are fragile, and technical
                        decisions begin to directly affect business outcomes.
                    </p>

                    <p className="mt-5 text-gray-400">
                        I care about clean boundaries, safe change, and architecture that can be explained
                        in one whiteboard session — because that’s what scales teams, not just code.
                    </p>
                </motion.div>

                {/* What I bring */}
                <motion.div
                    variants={itemVariants}
                    className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
                >
                    <Pill
                        icon={<Layers size={18} />}
                        title="Modernization"
                        desc="Turning legacy constraints into maintainable, cloud-ready foundations — without risky rewrites."
                    />
                    <Pill
                        icon={<TrendingUp size={18} />}
                        title="Scalability"
                        desc="Designing services and APIs that stay predictable under growth, load, and evolving requirements."
                    />
                    <Pill
                        icon={<Shield size={18} />}
                        title="Reliability"
                        desc="Reducing incidents, strengthening CI/CD, and building systems teams can ship confidently."
                    />
                </motion.div>

                {/* Next anchor */}
                <motion.div variants={itemVariants} className="mt-20 flex justify-center">
                    <a
                        href="#achievements"
                        className="
                            inline-flex items-center gap-2
                            text-sm text-gray-500
                            hover:text-indigo-400
                            transition
                        "
                    >
                        Next: Impact & Outcomes <ArrowDown size={16} />
                    </a>
                </motion.div>
            </motion.div>
        </section>
    );
}
