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
    credentials: {
        title: "Credentials",
        icon: "https://cdn.jsdelivr.net/npm/lucide-static@0.451.0/icons/graduation-cap.svg",
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

    const [mobileMenu, setMobileMenu] = useState(false);
    const [mobileMenuVisible, setMobileMenuVisible] = useState(false);

    const openMobileMenu = () => {
        setMobileMenu(true);
        requestAnimationFrame(() => setMobileMenuVisible(true));
    };

    const closeMobileMenu = () => {
        setMobileMenuVisible(false);
        setTimeout(() => setMobileMenu(false), 220);
    };

    // ===== Scroll spy =====
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
                "credentials",
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

    // ===== Lock background scroll when menu open =====
    useEffect(() => {
        if (mobileMenu) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        return () => {
            document.body.style.overflow = "";
        };
    }, [mobileMenu]);

    const expanded = !scrolled || hovered;
    const meta = SECTION_META[active];

    return (
        <>
            {/* ================= DESKTOP NAVBAR ================= */}
            <nav
                className={`
          hidden md:block
          fixed top-6 z-[1000] isolate
          transition-all duration-300 ease-out
          ${scrolled ? "left-6 translate-x-0" : "left-1/2 -translate-x-1/2"}
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
                    <img
                        src={meta.icon}
                        alt=""
                        className="w-7 h-7 invert opacity-90 flex-shrink-0"
                    />

                    <span className="text-base font-medium tracking-wide text-white whitespace-nowrap">
            {meta.title}
          </span>

                    {expanded && (
                        <>
                            <div className="w-px h-6 bg-white/30" />

                            <div className="flex items-center gap-10 text-sm whitespace-nowrap">
                                <a href="#about" className="hover:text-indigo-400 transition">
                                    About
                                </a>
                                <a
                                    href="#achievements"
                                    className="hover:text-indigo-400 transition"
                                >
                                    Achievements
                                </a>
                                <a href="#projects" className="hover:text-indigo-400 transition">
                                    Work
                                </a>
                                <a
                                    href="#credentials"
                                    className="hover:text-indigo-400 transition"
                                >
                                    Credentials
                                </a>
                            </div>

                            <div className="w-px h-6 bg-white/30" />

                            <a
                                href="/MohanaSaravanan_CV.pdf"
                                target="_blank"
                                className="hover:text-indigo-400 transition text-sm whitespace-nowrap"
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
                  transition
                  whitespace-nowrap
                "
                            >
                                Contact
                            </a>
                        </>
                    )}
                </div>
            </nav>

            {/* ================= MOBILE NAVBAR ================= */}
            <nav className="md:hidden fixed top-4 right-4 z-[1000]">
                <button
                    onClick={openMobileMenu}
                    className="
            w-12 h-12
            flex items-center justify-center
            rounded-full
            bg-black/70
            backdrop-blur-xl
            border border-white/20
            shadow-lg
            text-white text-xl
            active:scale-95
            transition
          "
                    aria-label="Open menu"
                >
                    ☰
                </button>
            </nav>

            {/* ================= MOBILE MENU (BLUR BACKGROUND) ================= */}
            {mobileMenu && (
                <div className="md:hidden fixed inset-0 z-[9999]">
                    {/* 🔥 BLUR OVERLAY */}
                    <div
                        className={`
              absolute inset-0
              bg-black/25
              backdrop-blur-lg
              transition-opacity duration-200
              ${mobileMenuVisible ? "opacity-100" : "opacity-0"}
            `}
                        onClick={closeMobileMenu}
                    />

                    {/* Glass Panel */}
                    <div
                        className={`
              absolute top-4 left-4 right-4
              transition-all duration-200 ease-out
              ${mobileMenuVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"}
            `}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div
                            className="
                relative overflow-hidden
                rounded-[30px]
                bg-white/10
                backdrop-blur-2xl
                border border-white/20
                shadow-2xl shadow-black/50
              "
                        >
                            {/* Specular highlight */}
                            <div
                                className="
                  pointer-events-none
                  absolute -top-20 left-1/2
                  h-44 w-[520px]
                  -translate-x-1/2
                  rounded-full
                  bg-white/12
                  blur-2xl
                "
                            />

                            {/* Inner edge glow */}
                            <div
                                className="
                  pointer-events-none
                  absolute inset-0
                  rounded-[30px]
                  ring-1 ring-white/15
                "
                            />

                            <div className="relative px-6 py-6">
                                {/* Top row */}
                                <div className="flex items-center justify-between">
                                    <p className="text-sm text-white/80 tracking-wide">
                                        Navigation
                                    </p>

                                    <button
                                        onClick={closeMobileMenu}
                                        className="
                      w-10 h-10
                      rounded-full
                      bg-white/10
                      border border-white/20
                      text-white text-xl
                      flex items-center justify-center
                      hover:border-indigo-400/40
                      transition
                      active:scale-95
                    "
                                        aria-label="Close menu"
                                    >
                                        ✕
                                    </button>
                                </div>

                                {/* Links */}
                                <div className="mt-6 flex flex-col gap-4 text-white">
                                    <a
                                        href="#about"
                                        onClick={closeMobileMenu}
                                        className="py-2 hover:text-indigo-300 transition"
                                    >
                                        About
                                    </a>

                                    <a
                                        href="#achievements"
                                        onClick={closeMobileMenu}
                                        className="py-2 hover:text-indigo-300 transition"
                                    >
                                        Achievements
                                    </a>

                                    <a
                                        href="#projects"
                                        onClick={closeMobileMenu}
                                        className="py-2 hover:text-indigo-300 transition"
                                    >
                                        Work
                                    </a>

                                    <a
                                        href="#credentials"
                                        onClick={closeMobileMenu}
                                        className="py-2 hover:text-indigo-300 transition"
                                    >
                                        Credentials
                                    </a>

                                    <div className="mt-2 h-px bg-white/15" />

                                    <a
                                        href="/MohanaSaravanan_CV.pdf"
                                        target="_blank"
                                        onClick={closeMobileMenu}
                                        className="py-2 text-indigo-200 hover:text-indigo-100 transition"
                                    >
                                        Download CV
                                    </a>

                                    <a
                                        href="#contact"
                                        onClick={closeMobileMenu}
                                        className="
                      mt-2
                      inline-flex items-center justify-center
                      px-6 py-3
                      rounded-full
                      bg-indigo-500/85
                      text-white font-medium
                      hover:bg-indigo-500
                      transition
                      active:scale-95
                    "
                                    >
                                        Contact
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="mt-3 mx-auto h-1 w-16 rounded-full bg-white/15" />
                    </div>
                </div>
            )}
        </>
    );
}
