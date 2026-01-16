"use client";

import { ArrowDown, Building2, Briefcase, MapPin } from "lucide-react";

type RoleItem = {
    company: string;
    client?: string;
    title: string;
    duration: string;
    summary: string;
};

const ROLES: RoleItem[] = [
    {
        company: "HCLTech",
        client: "USAA",
        title: "Senior Software Engineer",
        duration: "Aug 2022 – Present",
        summary:
            "Backend engineering ownership across scalable services, delivery automation, and system reliability — with focus on long-term maintainability and business outcomes.",
    },
    {
        company: "HCLTech",
        client: "USAA",
        title: "Software Engineer",
        duration: "Jun 2020 – Aug 2022",
        summary:
            "Started as a fresher and grew into strong backend execution — contributing to core service development, modernization work, and delivery improvements.",
    },
];

const TECH: string[] = ["GoLang", "Java", "AWS", "Mainframe tools & languages"];

function Chip({ text }: { text: string }) {
    return (
        <span
            className="
        inline-flex items-center
        px-3 py-1
        rounded-full
        text-xs font-medium
        bg-white/5
        text-gray-200
        border border-white/10
        whitespace-nowrap
      "
        >
      {text}
    </span>
    );
}

function RoleCard({ item }: { item: RoleItem }) {
    return (
        <div
            className="
        rounded-2xl
        bg-black/60
        backdrop-blur-xl
        border border-white/10
        p-8
        transition
        hover:border-indigo-400/40
        hover:shadow-lg hover:shadow-indigo-500/10
      "
        >
            <div className="flex flex-col gap-5">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                    <div className="space-y-1">
                        <p className="text-lg font-semibold text-white leading-tight">
                            {item.title}
                        </p>

                        <div className="flex flex-wrap items-center gap-2 text-sm text-gray-400">
              <span className="inline-flex items-center gap-2">
                <Building2 size={16} className="text-indigo-400" />
                  {item.company}
              </span>

                            {item.client && (
                                <>
                                    <span className="text-gray-600">•</span>
                                    <span className="inline-flex items-center gap-2">
                    <MapPin size={16} className="text-indigo-400" />
                    Client: {item.client}
                  </span>
                                </>
                            )}
                        </div>
                    </div>

                    <div className="text-sm text-gray-400 font-mono">{item.duration}</div>
                </div>

                <p className="text-gray-300 leading-relaxed">{item.summary}</p>
            </div>
        </div>
    );
}

export default function Work() {
    return (
        <section id="projects" className="px-6 py-32 bg-black text-white">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="max-w-3xl mb-14">
                    <p className="text-sm uppercase tracking-widest text-indigo-400 mb-4">
                        Work
                    </p>

                    <h2 className="text-3xl md:text-4xl font-semibold leading-tight">
                        Where I’ve worked,
                        <span className="text-indigo-400"> and how my role evolved.</span>
                    </h2>

                    <p className="mt-6 text-lg text-gray-400 leading-relaxed">
                        I’ve been building backend systems at HCLTech for USAA — growing from
                        a fresher into a senior engineer focused on scalable architecture,
                        reliability, and delivery efficiency.
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                        {TECH.map((t) => (
                            <Chip key={t} text={t} />
                        ))}
                    </div>
                </div>

                {/* Roles */}
                <div className="grid grid-cols-1 gap-8">
                    {ROLES.map((r) => (
                        <RoleCard key={r.title + r.duration} item={r} />
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
