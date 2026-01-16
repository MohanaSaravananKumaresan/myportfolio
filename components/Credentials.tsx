"use client";

import { GraduationCap, BadgeCheck, ExternalLink } from "lucide-react";
import ScrollHint from "@/components/ScrollHint";

type Cert = {
    name: string;
    year: string;
};

const CERTIFICATIONS: Cert[] = [
    { name: "Workato Pro 2 Certified", year: "2021" },
    { name: "AWS Certified Cloud Practitioner", year: "2022" },
    { name: "Agile SAFe Practitioner", year: "2024" },
    { name: "AWS Certified Developer – Associate", year: "2024" },
    { name: "AWS Certified AI Practitioner", year: "2025" },
    { name: "Guidewire Associate Developer – Upgraded to Kurfi", year: "2025" },
];

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

export default function Credentials() {
    return (
        <section id="credentials" className="px-6 py-32 bg-black text-white">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="max-w-3xl mb-16">
                    <p className="text-sm uppercase tracking-widest text-indigo-400 mb-4">
                        Credentials
                    </p>

                    <h2 className="text-3xl md:text-4xl font-semibold mb-6">
                        Proof of learning. Proof of foundation.
                    </h2>

                    <p className="text-lg text-gray-400 leading-relaxed">
                        Certifications that reflect continuous growth — and education that shaped
                        my foundation in computing + design.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Certifications */}
                    <div
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
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 rounded-full bg-indigo-500/10 text-indigo-400 flex items-center justify-center">
                                    <BadgeCheck size={18} />
                                </div>
                                <h3 className="text-xl font-medium">Certifications</h3>
                            </div>

                            <div className="space-y-4">
                                {CERTIFICATIONS.map((c, i) => (
                                    <div
                                        key={i}
                                        className="
                      flex items-center justify-between gap-6
                      rounded-xl
                      border border-white/10
                      bg-black/40
                      px-5 py-4
                    "
                                    >
                                        <p className="text-gray-200 text-sm leading-relaxed">
                                            {c.name}
                                        </p>
                                        <span className="text-xs text-gray-500 whitespace-nowrap">
                      {c.year}
                    </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Education */}
                    <div
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
                            <div className="flex items-center justify-between gap-4 mb-6">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-indigo-500/10 text-indigo-400 flex items-center justify-center">
                                        <GraduationCap size={18} />
                                    </div>
                                    <h3 className="text-xl font-medium">Education</h3>
                                </div>

                                {/* Official links */}
                                <div className="flex flex-wrap gap-2 justify-end">
                                    <ExternalAction
                                        label="BITS"
                                        href="https://bits-pilani-wilp.ac.in/"
                                    />
                                    <ExternalAction
                                        label="TechBee"
                                        href="https://www.hcltechbee.com/"
                                    />
                                </div>
                            </div>

                            <div className="space-y-6 text-gray-300">
                                <div className="rounded-xl border border-white/10 bg-black/40 px-5 py-5">
                                    <p className="text-white font-medium">
                                        B.Sc — Birla Institute of Science and Technology, Pilani
                                    </p>
                                    <p className="mt-2 text-sm text-gray-400 leading-relaxed">
                                        4-year specialized course in{" "}
                                        <span className="text-indigo-300">Computing & Design</span>
                                    </p>
                                    <p className="mt-2 text-xs text-gray-500">2021 – 2025</p>
                                </div>

                                <div className="rounded-xl border border-white/10 bg-black/40 px-5 py-5">
                                    <p className="text-white font-medium">HCL TechBee</p>
                                    <p className="mt-2 text-sm text-gray-400 leading-relaxed">
                                        Early-career program that strengthened practical engineering
                                        foundations and industry readiness.
                                    </p>
                                    <p className="mt-2 text-xs text-gray-500">2019 – 2020</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Next anchor */}
                <div className="mt-20 flex justify-center">
                    <ScrollHint href="#contact" text="Let’s build something together" />
                </div>
            </div>
        </section>
    );
}
