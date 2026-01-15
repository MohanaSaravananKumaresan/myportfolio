"use client";

import { useEffect, useState } from "react";

const SECTION_META: Record<string, { title: string; icon: string }> = {
    overview: {
        title: "Mohana Saravanan’s Portfolio",
        icon: "https://cdn.jsdelivr.net/npm/lucide-static@0.451.0/icons/layout-dashboard.svg",
    },
    experience: {
        title: "Experience",
        icon: "https://cdn.jsdelivr.net/npm/lucide-static@0.451.0/icons/briefcase.svg",
    },
    projects: {
        title: "Work",
        icon: "https://cdn.jsdelivr.net/npm/lucide-static@0.451.0/icons/code.svg",
    },
    contact: {
        title: "Contact",
        icon: "https://cdn.jsdelivr.net/npm/lucide-static@0.451.0/icons/mail.svg",
    },
};

export default function Navbar() {
    const [active, setActive] = useState<keyof typeof SECTION_META>("overview");
    const [scrolled, setScrolled] = useState(false);
    const [hovered, setHovered] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            const y = window.scrollY;

            if (y < 80) {
                setScrolled(false);
                setActive("overview");
                return;
            }

            setScrolled(true);

            const sections: (keyof typeof SECTION_META)[] = [
                "experience",
                "projects",
                "contact",
            ];

            for (const id of sections) {
                const el = document.getElementById(id);
                if (!el) continue;

                const r = el.getBoundingClientRect();
                if (r.top <= 140 && r.bottom >= 140) {
                    setActive(id);
                    return;
                }
            }
        };

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const expanded = !scrolled || hovered;
    const meta = SECTION_META[active];

    return (
        <nav
            className={`
                fixed top-6 z-50
                transition-all duration-300 ease-out
                ${scrolled
                ? "left-6 translate-x-0"
                : "left-1/2 -translate-x-1/2"}
            `}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <div
                className="
                    flex items-center gap-12 leading-none
                    px-12 py-3
                    rounded-full
                    bg-black/50
                    backdrop-blur-[28px]
                    border border-white/20
                    shadow-xl shadow-black/60
                    transition-all duration-300
                "
            >
                {/* ICON */}
                <img
                    src={meta.icon}
                    alt=""
                    className="w-7 h-7 invert opacity-90 flex-shrink-0"
                />

                {/* TITLE */}
                <span className="text-base font-medium tracking-wide text-white whitespace-nowrap leading-none">
                    {meta.title}
                </span>

                {/* NAV – only when expanded */}
                {expanded && (
                    <>
                        <div className="w-px h-6 bg-white/30" />

                        <div className="flex items-center gap-10 text-sm whitespace-nowrap">
                            <a href="#experience" className="hover:text-indigo-400 transition">
                                Experience
                            </a>
                            <a href="#projects" className="hover:text-indigo-400 transition">
                                Work
                            </a>
                            <a href="#contact" className="hover:text-indigo-400 transition">
                                Contact
                            </a>
                        </div>

                        <a
                            href="#contact"
                            className="
                                ml-4
                                px-6 py-2.5
                                rounded-full
                                bg-indigo-500/90
                                text-sm font-medium text-white
                                hover:bg-indigo-500
                                transition
                                whitespace-nowrap
                                flex-shrink-0
                            "
                        >
                            Let’s talk
                        </a>
                    </>
                )}
            </div>
        </nav>
    );
}
