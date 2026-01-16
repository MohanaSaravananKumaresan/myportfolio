"use client";

import { ArrowDown, GraduationCap, BadgeCheck } from "lucide-react";

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

export default function Credentials() {
    return (
        <section id="credentials" className="px-6 py-32 bg-black text-white">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="max-w-3xl mb-16">
                    <h2 className="text-3xl md:text-4xl font-semibold mb-6">
                        Credentials
                    </h2>
                    <p className="text-lg text-gray-400 leading-relaxed">
                        Certifications that reflect continuous learning, and education that shaped
                        my foundation in computing + design.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Certifications */}
                    <div
                        className="
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

                    {/* Education */}
                    <div
                        className="
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
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-full bg-indigo-500/10 text-indigo-400 flex items-center justify-center">
                                <GraduationCap size={18} />
                            </div>
                            <h3 className="text-xl font-medium">Education</h3>
                        </div>

                        <div className="space-y-6 text-gray-300">
                            <div className="rounded-xl border border-white/10 bg-black/40 px-5 py-5">
                                <p className="text-white font-medium">
                                    B.Sc — Birla Institute of Science and Technology, Pilani
                                </p>
                                <p className="mt-2 text-sm text-gray-400 leading-relaxed">
                                    4-year specialized course in <span className="text-indigo-300">Computing & Design</span>
                                </p>
                                <p className="mt-2 text-xs text-gray-500">2021 – 2025</p>
                            </div>

                            <div className="rounded-xl border border-white/10 bg-black/40 px-5 py-5">
                                <p className="text-white font-medium">HCL TechBee</p>
                                <p className="mt-2 text-sm text-gray-400 leading-relaxed">
                                    Early-career program that strengthened practical engineering foundations
                                    and industry readiness.
                                </p>
                                <p className="mt-2 text-xs text-gray-500">2019 – 2020</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Next anchor */}
                <div className="mt-20 flex justify-center">
                    <a
                        href="#contact"
                        className="
              inline-flex items-center gap-2
              text-sm text-gray-500
              hover:text-indigo-400
              transition
            "
                    >
                        Next: Contact <ArrowDown size={16} />
                    </a>
                </div>
            </div>
        </section>
    );
}
