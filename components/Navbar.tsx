"use client";

import { useEffect, useState } from "react";

const SECTION_META: Record<string, { title: string; icon: string }> = {
    overview: {
        title: "Mohana Saravanan’s Portfolio",
        icon: "https://cdn.jsdelivr.net/npm/lucide-static@0.451.0/icons/layout-dashboard.svg",
    },
    about: {
        title: "About",
        icon: "https://cdn.jsdelivr.net/npm/lucide-static@0.451.0/icons/user.svg",
    },
    achievements: {
        title: "Achievements",
        icon: "https://cdn.jsdelivr.net/npm/lucide-static@0.451.0/icons/trophy.svg",
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
    const [active, setActive] =
        useState<keyof typeof SECTION_META>("overview");
    const [scrolled, setScrolled] = useState(false);
    const [hovered, setHovered] = useState(false);
    const [mobileMenu, setMobileMenu] = useState(false);

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
                "about",
                "achievements",
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
        <>
            {/* ================= DESKTOP NAVBAR ================= */}
            <nav
                className={`
                    hidden md:block
                    fixed top-6 z-[100] isolate
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
                        bg-black/70
                        backdrop-blur-xl
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
                    <span className="text-base font-medium tracking-wide text-white whitespace-nowrap">
                        {meta.title}
                    </span>

                    {expanded && (
                        <>
                            <div className="w-px h-6 bg-white/30" />

                            <div className="flex items-center gap-10 text-sm whitespace-nowrap">
                                <a href="#about" className="hover:text-indigo-400">About</a>
                                <a href="#achievements" className="hover:text-indigo-400">Achievements</a>
                                <a href="#projects" className="hover:text-indigo-400">Work</a>
                            </div>

                            <div className="w-px h-6 bg-white/30" />

                            <a
                                href="/MohanaSaravanan_CV.pdf"
                                target="_blank"
                                className="hover:text-indigo-400 text-sm"
                            >
                                Download CV
                            </a>

                            <a
                                href="#contact"
                                className="
                                    ml-4
                                    px-6 py-2.5
                                    rounded-full
                                    bg-indigo-500/90
                                    text-sm font-medium text-white
                                    hover:bg-indigo-500
                                "
                            >
                                Contact
                            </a>
                        </>
                    )}
                </div>
            </nav>

            {/* ================= MOBILE NAVBAR ================= */}
            <nav className="md:hidden fixed top-4 right-4 z-[100]">
                <button
                    onClick={() => setMobileMenu(true)}
                    className="
                        w-12 h-12
                        flex items-center justify-center
                        rounded-full
                        bg-black/70
                        backdrop-blur-xl
                        border border-white/20
                        shadow-lg
                        text-white text-xl
                    "
                    aria-label="Open menu"
                >
                    ☰
                </button>
            </nav>

            {/* ================= MOBILE MENU ================= */}
            {mobileMenu && (
                <div className="md:hidden fixed inset-0 z-[90] bg-black/80 backdrop-blur-md">
                    <div className="h-full flex flex-col items-center justify-center gap-8 text-lg text-white">
                        <a href="#about" onClick={() => setMobileMenu(false)}>About</a>
                        <a href="#achievements" onClick={() => setMobileMenu(false)}>Achievements</a>
                        <a href="#projects" onClick={() => setMobileMenu(false)}>Work</a>
                        <a
                            href="/MohanaSaravanan_CV.pdf"
                            target="_blank"
                            className="text-indigo-400"
                        >
                            Download CV
                        </a>
                        <a
                            href="#contact"
                            onClick={() => setMobileMenu(false)}
                            className="mt-4 px-8 py-3 rounded-full bg-indigo-500 text-white"
                        >
                            Contact
                        </a>
                        <button
                            onClick={() => setMobileMenu(false)}
                            className="mt-6 text-sm text-gray-400"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}
