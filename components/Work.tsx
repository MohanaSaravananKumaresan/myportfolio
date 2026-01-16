"use client";

import { ArrowUpRight, ArrowDown } from "lucide-react";

type WorkItem = {
    title: string;
    tag: string;
    problem: string;
    approach: string;
    impact: string;
    links?: {
        label: string;
        href: string;
    }[];
};

const WORK_ITEMS: WorkItem[] = [
    {
        title: "Legacy Modernization → Sustainable Services",
        tag: "Modernization",
        problem:
            "Legacy systems slowed delivery, increased operational risk, and made changes harder to validate.",
        approach:
            "Refactored and modernized backend components with clear boundaries, improved maintainability, and safer rollout patterns.",
        impact:
            "Reduced long-term risk and improved delivery confidence by making the system easier to evolve and support.",
        links: [{ label: "Read more", href: "#" }],
    },
    {
        title: "Reliability Hardening → Fewer Incidents",
        tag: "Reliability",
        problem:
            "Production issues were costly and reactive, with failures surfacing late and recovery being inconsistent.",
        approach:
            "Improved failure handling, introduced safer operational patterns, and focused on predictable behavior under stress.",
        impact:
            "Increased system resilience and reduced firefighting, improving trust across teams and stakeholders.",
    },
    {
        title: "Scalable Backend Design → Ready for Growth",
        tag: "Scale",
        problem:
            "Growth introduced bottlenecks and unpredictable latency under load, risking user experience and stability.",
        approach:
            "Designed backend services with scalability in mind and removed critical bottlenecks before they became customer-facing.",
        impact:
            "Enabled growth without architectural churn, keeping performance stable during peak usage.",
    },
    {
        title: "CI/CD Strengthening → Faster, Safer Releases",
        tag: "Delivery",
        problem:
            "Release processes were slower than necessary and failures increased friction across teams.",
        approach:
            "Strengthened CI/CD workflows to shorten feedback loops and improve consistency in deployments.",
        impact:
            "Reduced release friction and enabled faster delivery with controlled change and fewer regressions.",
    },
];

function TagPill({ text }: { text: string }) {
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

export default function Work() {
    return (
        <section id="projects" className="px-6 py-32 bg-black text-white">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="max-w-3xl mb-20">
                    <h2 className="text-3xl md:text-4xl font-semibold mb-6">
                        Work that holds up under pressure
                    </h2>
                    <p className="text-lg text-gray-400 leading-relaxed">
                        I focus on backend systems that survive real-world constraints —
                        growth, change, incidents, migrations, and long-term ownership.
                        These are a few outcome-driven highlights.
                    </p>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {WORK_ITEMS.map((item, idx) => (
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
                                <div className="space-y-3">
                                    <TagPill text={item.tag} />
                                    <h3 className="text-xl font-medium leading-snug">
                                        {item.title}
                                    </h3>
                                </div>

                                <div className="opacity-40 group-hover:opacity-90 transition">
                                    <ArrowUpRight size={18} />
                                </div>
                            </div>

                            <div className="space-y-6 text-gray-300">
                                <div>
                                    <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">
                                        Problem
                                    </p>
                                    <p className="leading-relaxed">{item.problem}</p>
                                </div>

                                <div>
                                    <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">
                                        Approach
                                    </p>
                                    <p className="leading-relaxed">{item.approach}</p>
                                </div>

                                <div>
                                    <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">
                                        Impact
                                    </p>
                                    <p className="leading-relaxed text-white/90">
                                        {item.impact}
                                    </p>
                                </div>

                                {item.links && item.links.length > 0 && (
                                    <div className="pt-2 flex flex-wrap gap-4 text-sm">
                                        {item.links.map((link, i) => (
                                            <a
                                                key={i}
                                                href={link.href}
                                                className="text-indigo-300 hover:text-indigo-200 transition"
                                            >
                                                {link.label} →
                                            </a>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                {/* NEXT ANCHOR */}
                <div className="mt-20 flex justify-center">
                    <a
                        href="#credentials"
                        className="
                            inline-flex items-center gap-2
                            text-sm text-gray-500
                            hover:text-indigo-400
                            transition
                        "
                    >
                        Next: Certifications & Education <ArrowDown size={16} />
                    </a>
                </div>
            </div>
        </section>
    );
}
