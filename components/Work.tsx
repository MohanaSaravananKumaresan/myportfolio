"use client";

import { ExternalLink } from "lucide-react";
import ScrollHint from "@/components/ScrollHint";

type WorkItem = {
    title: string;
    tag: string;
    roleLine?: string;
    problem: string;
    approach: string;
    impact: string;
    actions?: {
        label: string;
        href: string;
    }[];
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
        actions: [
            { label: "HCLTech", href: "https://www.hcltech.com/" },
            { label: "USAA", href: "https://www.usaa.com/" },
        ],
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
        actions: [
            { label: "HCLTech", href: "https://www.hcltech.com/" },
            { label: "USAA", href: "https://www.usaa.com/" },
        ],
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

function ExternalAction({ label, href }: { label: string; href: string }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noreferrer"
            className="
        inline-flex items-center gap-2
        px-4 py-2
        rounded-full
        text-sm
        bg-white/5
        border border-white/10
        text-gray-200
        hover:border-indigo-400/40
        hover:text-indigo-200
        hover:bg-indigo-500/10
        transition
        whitespace-nowrap
      "
        >
            {label}
            <ExternalLink size={14} />
        </a>
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
                group relative
                rounded-2xl
                bg-black/60
                backdrop-blur-xl
                border border-white/10
                p-8
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

                            <div className="relative">
                                <div className="space-y-3">
                                    <TagPill text={item.tag} />

                                    <h3 className="text-xl font-medium leading-snug">
                                        {item.title}
                                    </h3>

                                    {item.roleLine && (
                                        <p className="text-sm text-gray-400">{item.roleLine}</p>
                                    )}
                                </div>

                                {/* Official links */}
                                {item.actions && item.actions.length > 0 && (
                                    <div className="mt-6 flex flex-wrap gap-3">
                                        {item.actions.map((a, i) => (
                                            <ExternalAction key={i} label={a.label} href={a.href} />
                                        ))}
                                    </div>
                                )}

                                <div className="mt-8 space-y-6 text-gray-300">
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
                        </div>
                    ))}
                </div>

                {/* Next anchor */}
                <div className="mt-20 flex justify-center">
                    <ScrollHint href="#credentials" text="Certifications & education" />
                </div>
            </div>
        </section>
    );
}
