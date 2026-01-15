"use client";

import {
    ShieldCheck,
    TrendingUp,
    Wrench,
    Rocket,
} from "lucide-react";

const ACHIEVEMENTS = [
    {
        title: "Reliability & Stability",
        icon: ShieldCheck,
        businessValue: "Reduced operational risk and downtime",
        points: [
            "Stabilized backend services to reduce production incidents and firefighting",
            "Improved failure handling and recovery paths across critical systems",
            "Increased release confidence through predictable, repeatable deployments",
        ],
    },
    {
        title: "Scale & Performance",
        icon: TrendingUp,
        businessValue: "Enabled growth without constant rewrites",
        points: [
            "Designed backend services to handle increased load without architectural churn",
            "Improved throughput and response consistency under peak traffic",
            "Proactively addressed scaling bottlenecks before they impacted users",
        ],
    },
    {
        title: "Modernization & Risk Reduction",
        icon: Wrench,
        businessValue: "Lowered long-term cost and technical risk",
        points: [
            "Modernized legacy components to simplify operations and maintenance",
            "Reduced system complexity by replacing fragile patterns with sustainable designs",
            "Improved maintainability and onboarding by clarifying architectural boundaries",
        ],
    },
    {
        title: "Delivery & Execution Excellence",
        icon: Rocket,
        businessValue: "Faster delivery with controlled change",
        points: [
            "Strengthened CI/CD pipelines to reduce release friction and regressions",
            "Shortened feedback loops between development and production",
            "Enabled teams to ship changes more frequently with higher confidence",
        ],
    },
];

export default function Achievements() {
    return (
        <section
            id="achievements"
            className="px-6 py-32 bg-black text-white"
        >
            <div className="max-w-6xl mx-auto">

                {/* Section header */}
                <div className="max-w-3xl mb-20">
                    <h2 className="text-3xl md:text-4xl font-semibold mb-6">
                        Impact & Outcomes
                    </h2>
                    <p className="text-lg text-gray-400 leading-relaxed">
                        A selection of outcomes where technical decisions
                        translated directly into business value — improving
                        reliability, scalability, and delivery velocity.
                    </p>
                </div>

                {/* Achievement blocks */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    {ACHIEVEMENTS.map((item, index) => {
                        const Icon = item.icon;

                        return (
                            <div
                                key={index}
                                className="
                                    relative
                                    rounded-2xl
                                    bg-black/60
                                    backdrop-blur
                                    border border-white/10
                                    p-8
                                    transition
                                    hover:border-indigo-400/40
                                "
                            >
                                {/* Header */}
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="
                                        flex items-center justify-center
                                        w-10 h-10 rounded-full
                                        bg-indigo-500/10
                                        text-indigo-400
                                    ">
                                        <Icon size={20} />
                                    </div>

                                    <h3 className="text-xl font-medium">
                                        {item.title}
                                    </h3>
                                </div>

                                {/* Business value */}
                                <p className="text-sm text-indigo-400 mb-6">
                                    {item.businessValue}
                                </p>

                                {/* Outcomes */}
                                <ul className="space-y-3 text-gray-300">
                                    {item.points.map((point, i) => (
                                        <li key={i} className="leading-relaxed">
                                            {point}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
