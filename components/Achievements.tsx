"use client";

import { motion, Variants } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import ScrollHint from "@/components/ScrollHint";

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.12 },
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

type Achievement = {
    value: string;
    headline: string;
    detail: string;
};

const ACHIEVEMENTS: Achievement[] = [
    {
        value: "$0.5M",
        headline: "Delivered client value via CI/CD automation",
        detail:
            "Automated Docker image upgrades inside pipelines, reducing manual effort, eliminating version drift, and improving deployment reliability across environments.",
    },
    {
        value: "$0.7M",
        headline: "Simplified API access with z/OS REST integration",
        detail:
            "Combined SAR (Service Access Representation) and AAR (API Access Representation) into a unified implementation, reducing duplication and improving developer efficiency.",
    },
    {
        value: "$0.4M",
        headline: "Accelerated validation through internal testing tools",
        detail:
            "Built tooling to streamline functional + integration testing, enabling faster cycles and smoother onboarding for new developers.",
    },
    {
        value: "AI boost",
        headline: "Improved test automation with Copilot Chat",
        detail:
            "Integrated GitHub Copilot Chat into automation workflows for faster debugging, smarter test generation, and improved coverage with less manual effort.",
    },
    {
        value: "$0.4M",
        headline: "Raised delivery quality with Spotless enforcement",
        detail:
            "Created additional Gradle Spotless scripts for formatting + verification, ensuring consistent standards and reducing review overhead.",
    },
    {
        value: "Awards",
        headline: "Recognized for innovation & efficiency",
        detail:
            "Received USAA ‘Excellence Award’ and ‘4ward Award’ for consistent improvements in secure application development.",
    },
];

function AchievementCard({ item }: { item: Achievement }) {
    return (
        <div
            className="
        group
        rounded-2xl
        bg-black/60
        backdrop-blur-xl
        border border-white/10
        p-7
        transition
        hover:border-indigo-400/40
        hover:shadow-lg hover:shadow-indigo-500/10
      "
        >
            <div className="flex items-start justify-between gap-6">
                <div>
                    <p className="text-indigo-300 text-sm font-medium">{item.value}</p>
                    <h3 className="mt-2 text-lg font-medium text-white leading-snug">
                        {item.headline}
                    </h3>
                </div>

                <div className="opacity-30 group-hover:opacity-90 transition">
                    <ArrowUpRight size={18} />
                </div>
            </div>

            <p className="mt-4 text-sm text-gray-400 leading-relaxed">{item.detail}</p>
        </div>
    );
}

export default function Achievements() {
    return (
        <section id="achievements" className="px-6 py-32 bg-black text-white">
            <motion.div
                className="max-w-6xl mx-auto"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                {/* Header */}
                <motion.div variants={itemVariants} className="max-w-3xl mb-16">
                    <p className="text-sm uppercase tracking-widest text-indigo-400 mb-4">
                        Impact
                    </p>

                    <h2 className="text-3xl md:text-4xl font-semibold leading-tight">
                        Business outcomes, not just code.
                    </h2>

                    <p className="mt-6 text-lg text-gray-400 leading-relaxed">
                        These are a few moments where engineering decisions turned into real
                        value — faster delivery, safer releases, and better reliability at
                        scale.
                    </p>
                </motion.div>

                {/* Grid */}
                <motion.div
                    variants={itemVariants}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                    {ACHIEVEMENTS.map((a, i) => (
                        <AchievementCard key={i} item={a} />
                    ))}
                </motion.div>

                {/* Next anchor (C) */}
                <motion.div variants={itemVariants}>
                    <ScrollHint href="#projects" text="The work behind the numbers" />
                </motion.div>
            </motion.div>
        </section>
    );
}
