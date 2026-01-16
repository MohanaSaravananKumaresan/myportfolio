"use client";

import { motion, Variants } from "framer-motion";
import {
    Sparkles,
    Trophy,
    Cpu,
    Boxes,
    ShieldCheck,
    DollarSign,
} from "lucide-react";
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
    icon: React.ReactNode;
};

const ACHIEVEMENTS: Achievement[] = [
    {
        value: "$0.5M",
        headline: "Delivered client value via CI/CD automation",
        detail:
            "Automated Docker image upgrades inside pipelines, reducing manual effort, eliminating version drift, and improving deployment reliability across environments.",
        icon: <Boxes size={18} />,
    },
    {
        value: "$0.7M",
        headline: "Simplified API access with z/OS REST integration",
        detail:
            "Integrated SAR (Service Archive) and AAR (API Archive) into a combined z/OS REST implementation, simplifying API access and reducing duplication of effort.",
        icon: <ShieldCheck size={18} />,
    },
    {
        value: "$0.4M",
        headline: "Accelerated validation through internal testing tools",
        detail:
            "Built internal testing tools to streamline functional + integration testing, enabling faster validation cycles and smoother onboarding for new developers.",
        icon: <Sparkles size={18} />,
    },
    {
        value: "AI boost",
        headline: "Improved test automation with Copilot Chat",
        detail:
            "Integrated GitHub Copilot Chat AI into test automation workflows for intelligent test case generation, faster debugging, and automated code suggestions to improve coverage.",
        icon: <Cpu size={18} />,
    },
    {
        value: "$0.4M",
        headline: "Improved delivery quality with Spotless enforcement",
        detail:
            "Created additional Gradle Spotless scripts for automated code formatting and verification, ensuring consistent standards and reducing review overhead.",
        icon: <DollarSign size={18} />,
    },
    {
        value: "Awards",
        headline: "Recognized for innovation & efficiency",
        detail:
            "Recognized with USAA ‘Excellence Award’ and ‘4ward Award’ for innovation and efficiency improvements in secure application development.",
        icon: <Trophy size={18} />,
    },
];

function AchievementCard({ item }: { item: Achievement }) {
    return (
        <div
            className="
        group relative
        rounded-2xl
        bg-black/60
        backdrop-blur-xl
        border border-white/10
        p-7
        transition
        hover:border-indigo-400/40
        hover:shadow-lg hover:shadow-indigo-500/10
        overflow-hidden
      "
        >
            {/* subtle glow */}
            <div
                className="
          pointer-events-none absolute inset-0 opacity-0
          group-hover:opacity-100 transition duration-300
        "
            >
                <div className="absolute -top-24 -right-24 h-48 w-48 rounded-full bg-indigo-500/12 blur-3xl" />
                <div className="absolute -bottom-24 -left-24 h-48 w-48 rounded-full bg-indigo-500/10 blur-3xl" />
            </div>

            <div className="relative flex items-start gap-4">
                {/* icon badge */}
                <div
                    className="
            w-10 h-10
            flex items-center justify-center
            rounded-full
            bg-indigo-500/10
            border border-indigo-400/20
            text-indigo-300
            flex-shrink-0
            group-hover:border-indigo-400/40
            transition
          "
                >
                    {item.icon}
                </div>

                <div>
                    <p className="text-indigo-300 text-sm font-medium tracking-wide">
                        {item.value}
                    </p>

                    <h3 className="mt-2 text-lg font-medium text-white leading-snug">
                        {item.headline}
                    </h3>

                    <p className="mt-4 text-sm text-gray-400 leading-relaxed">
                        {item.detail}
                    </p>
                </div>
            </div>
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
                        These are moments where engineering decisions turned into real value
                        — faster delivery, safer releases, and better reliability at scale.
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
