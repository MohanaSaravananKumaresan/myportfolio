"use client";

import { ArrowDown, Award, Bot, Code2, Cpu, ShieldCheck, Wrench } from "lucide-react";

type AchievementItem = {
    title: string;
    icon: any;
    value: string;
    description: string;
    highlights: string[];
};

const ACHIEVEMENTS: AchievementItem[] = [
    {
        title: "CI/CD Automation → $0.5M Client Value",
        icon: ShieldCheck,
        value: "$0.5M",
        description:
            "Automated Docker image upgrades inside CI/CD pipelines to eliminate version drift and reduce manual intervention.",
        highlights: [
            "Removed manual upgrade overhead across multiple environments",
            "Improved deployment reliability and release consistency",
            "Reduced operational risk caused by version mismatches",
        ],
    },
    {
        title: "z/OS REST Simplification → $0.7M Value",
        icon: Cpu,
        value: "$0.7M",
        description:
            "Integrated SAR (Service Access Representation) + AAR (API Access Representation) into a combined z/OS REST implementation.",
        highlights: [
            "Simplified API access patterns across teams",
            "Reduced duplication of effort and integration complexity",
            "Improved maintainability and reuse across services",
        ],
    },
    {
        title: "Internal Testing Tools → $0.4M Efficiency Gains",
        icon: Wrench,
        value: "$0.4M",
        description:
            "Built internal tools that streamlined functional + integration testing and improved developer onboarding.",
        highlights: [
            "Faster validation cycles and more predictable test execution",
            "Lower effort for new developers to adopt the workflow",
            "Improved confidence in changes before release",
        ],
    },
    {
        title: "AI-Assisted Testing → Higher Developer Productivity",
        icon: Bot,
        value: "AI",
        description:
            "Integrated GitHub Copilot Chat into test automation workflows for faster debugging and test generation.",
        highlights: [
            "Enabled intelligent test case generation",
            "Reduced manual effort in debugging and code writing",
            "Improved test coverage through faster iteration",
        ],
    },
    {
        title: "Code Quality Automation → $0.4M Delivery Value",
        icon: Code2,
        value: "$0.4M",
        description:
            "Created additional Gradle Spotless scripts for automated formatting + verification across teams.",
        highlights: [
            "Consistent coding standards with automated enforcement",
            "Reduced review overhead and formatting noise",
            "Improved delivery speed with fewer avoidable iterations",
        ],
    },
    {
        title: "Awards & Recognition",
        icon: Award,
        value: "USAA",
        description:
            "Recognized for innovation and efficiency improvements in secure application development.",
        highlights: [
            "USAA ‘Excellence Award’",
            "USAA ‘4ward Award’",
            "Consistent recognition for impact-driven engineering",
        ],
    },
];

function ValueChip({ text }: { text: string }) {
    return (
        <span
            className="
        inline-flex items-center
        px-3 py-1
        rounded-full
        text-xs font-medium
        bg-indigo-500/10
        text-indigo-300
        border border-indigo-400/20
      "
        >
      {text}
    </span>
    );
}

export default function Achievements() {
    return (
        <section id="achievements" className="px-6 py-32 bg-black text-white">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="max-w-3xl mb-20">
                    <h2 className="text-3xl md:text-4xl font-semibold mb-6">
                        Impact that shows up in business value
                    </h2>
                    <p className="text-lg text-gray-400 leading-relaxed">
                        Not just “worked on features” — measurable outcomes that improved delivery,
                        reliability, and long-term system ownership.
                    </p>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {ACHIEVEMENTS.map((item, idx) => {
                        const Icon = item.icon;

                        return (
                            <div
                                key={idx}
                                className="
                  group
                  rounded-2xl
                  bg-black/60
                  backdrop-blur
                  border border-white/10
                  p-8
                  transition
                  hover:border-indigo-400/40
                  hover:shadow-lg hover:shadow-indigo-500/10
                "
                            >
                                <div className="flex items-start justify-between gap-6 mb-6">
                                    <div className="flex items-center gap-4">
                                        <div
                                            className="
                        w-11 h-11
                        rounded-full
                        flex items-center justify-center
                        bg-indigo-500/10
                        text-indigo-400
                      "
                                        >
                                            <Icon size={20} />
                                        </div>

                                        <div className="space-y-2">
                                            <ValueChip text={item.value} />
                                            <h3 className="text-xl font-medium leading-snug">
                                                {item.title}
                                            </h3>
                                        </div>
                                    </div>
                                </div>

                                <p className="text-gray-300 leading-relaxed">
                                    {item.description}
                                </p>

                                <ul className="mt-6 space-y-3 text-gray-400">
                                    {item.highlights.map((p, i) => (
                                        <li key={i} className="leading-relaxed">
                                            • {p}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        );
                    })}
                </div>

                {/* Next anchor */}
                <div className="mt-20 flex justify-center">
                    <a
                        href="#projects"
                        className="
              inline-flex items-center gap-2
              text-sm text-gray-500
              hover:text-indigo-400
              transition
            "
                    >
                        Next: Work <ArrowDown size={16} />
                    </a>
                </div>
            </div>
        </section>
    );
}
