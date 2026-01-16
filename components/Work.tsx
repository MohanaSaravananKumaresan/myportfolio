"use client";

import { ArrowUpRight } from "lucide-react";
import ScrollHint from "@/components/ScrollHint";

type WorkItem = {
    title: string;
    tag: string;
    roleLine?: string;
    problem: string;
    approach: string;
    impact: string;
};

const WORK_ITEMS: WorkItem[] = [
    {
        title: "HCLTech @ USAA — Senior Software Engineer",
        tag: "Aug 2022 – Present",
        roleLine: "Backend Engineering • GoLang • Java • AWS • Mainframe",
        problem:
            "Enterprise systems needed safer delivery, scalable architecture, and modernization without disrupting production stability.",
        approach:
            "Designed and improved backend services with clear boundaries, strengthened CI/CD, and introduced reliability-first patterns for predictable releases.",
        impact:
            "Improved delivery confidence, reduced operational risk, and enabled teams to ship faster with controlled change.",
    },
    {
        title: "HCLTech @ USAA — Software Engineer",
        tag: "Jun 2020 – Aug 2022",
        roleLine: "Backend Development • Automation • Platform Work",
        problem:
            "Early-stage systems and workflows required consistent engineering practices, stable automation, and faster validation cycles.",
        approach:
            "Built and improved backend components, internal tooling, and automation workflows that reduced friction for development and testing.",
        impact:
            "Increased productivity, improved reliability, and accelerated validation for multiple teams and environments.",
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
                    <p className="text-sm uppercase tracking-widest text-indigo-400 mb-4">
                        Work
                    </p>

                    <h2 className="text-3xl md:text-4xl font-semibold mb-6">
                        Where I’ve built, shipped, and scaled
                    </h2>

                    <p className="text-lg text-gray-400 leading-relaxed">
                        I’ve worked across enterprise backend systems — building scalable
                        services, improving reliability, and delivering outcomes that teams
                        can sustain long-term.
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

                                    {item.roleLine && (
                                        <p className="text-sm text-gray-400">{item.roleLine}</p>
                                    )}
                                </div>

                                <div className="opacity-40 group-hover:opacity-90 transition">
                                    <ArrowUpRight size={18} />
                                </div>
                            </div>

                            <div className="space-y-6 text-gray-300">
                                <div>
                                    <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">
                                        Focus
                                    </p>
                                    <p className="leading-relaxed">{item.problem}</p>
                                </div>

                                <div>
                                    <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">
                                        What I did
                                    </p>
                                    <p className="leading-relaxed">{item.approach}</p>
                                </div>

                                <div>
                                    <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">
                                        Outcome
                                    </p>
                                    <p className="leading-relaxed text-white/90">{item.impact}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Next anchor (A) */}
                <div className="mt-20 flex justify-center">
                    <ScrollHint href="#credentials" text="Certifications & education" />
                </div>
            </div>
        </section>
    );
}
