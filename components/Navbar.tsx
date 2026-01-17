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

    // compact mode for narrow screens (icon-only pill)
    const [isCompact, setIsCompact] = useState(false);

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

    // ===== Responsive compact detection =====
    useEffect(() => {
        const update = () => {
            // compact layout for very narrow phones
            setIsCompact(window.innerWidth < 380);
        };

        update();
        window.addEventListener("resize", update);
        return () => window.removeEventListener("resize", update);
    }, []);

    const expanded = !scrolled || hovered;
    const meta = SECTION_META[active];

    // mobile positioning: bottom-center by default; move to top-left when scrolled
    const mobilePositionClass = scrolled
        ? "top-6 left-4 -translate-x-0"
        : "bottom-6 left-1/2 -translate-x-1/2";

    const mobileButtonSizeClass = scrolled
        ? isCompact
            ? "px-2 py-1 text-xs"
            : "px-3 py-1.5 text-sm"
        : "px-3 py-2 text-sm";

    return (
        <>
            {/* ================= DESKTOP NAVBAR ================= */}
            <nav
                className={`
          hidden md:block
          fixed top-6 z-1000 isolate
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
                        className="w-7 h-7 invert opacity-90 shrink-0"
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
                                download
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

            {/* ================= MOBILE NAVBAR (PILL STYLE) ================= */}
            <nav
                className={`md:hidden fixed z-1000 ${mobilePositionClass} transition-all duration-300`}
            >
                <div className="flex items-center justify-center">
                    <button
                        onClick={openMobileMenu}
                        aria-label="Open navigation"
                        aria-expanded={mobileMenuVisible}
                        className={`${mobileButtonSizeClass} flex items-center gap-3 rounded-full bg-black/70 backdrop-blur-xl border border-white/20 text-white transition active:scale-95`}
                    >
                        <img
                            src={meta.icon}
                            alt=""
                            className={`w-5 h-5 invert opacity-90 shrink-0 ${isCompact ? "w-4 h-4" : "w-5 h-5"}`}
                        />

                        {!isCompact && (
                            <span className="text-sm font-medium tracking-wide whitespace-nowrap">
                                {meta.title}
                            </span>
                        )}
                    </button>
                </div>
            </nav>

            {/* ================= MOBILE PILL MENU (COMPACT PANEL ABOVE PILL) ================= */}
            {mobileMenu && (
                <div className="md:hidden fixed inset-0 z-9999">
                    {/* dim overlay */}
                    <div
                        className={`absolute inset-0 bg-black/30 backdrop-blur-sm transition-opacity duration-200 ${
                            mobileMenuVisible ? "opacity-100" : "opacity-0"
                        }`}
                        onClick={closeMobileMenu}
                    />

                    {/* pill panel anchored above bottom center */}
                    <div
                        className={`absolute left-1/2 -translate-x-1/2 bottom-6 w-[calc(100%-48px)] max-w-2xl transition-all duration-200 ease-out ${
                            mobileMenuVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                        }`}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="relative px-2">
                            <div className="overflow-hidden rounded-full bg-white/10 backdrop-blur-2xl border border-white/20 shadow-2xl shadow-black/50">
                                <div className="flex items-center gap-2 px-3 py-2 overflow-x-auto scrollbar-hide">
                                    <a
                                        href="#about"
                                        onClick={closeMobileMenu}
                                        className="shrink-0 px-3 py-2 rounded-full text-sm text-white hover:bg-white/5 transition"
                                    >
                                        About
                                    </a>

                                    <a
                                        href="#achievements"
                                        onClick={closeMobileMenu}
                                        className="shrink-0 px-3 py-2 rounded-full text-sm text-white hover:bg-white/5 transition"
                                    >
                                        Achievements
                                    </a>

                                    <a
                                        href="#projects"
                                        onClick={closeMobileMenu}
                                        className="shrink-0 px-3 py-2 rounded-full text-sm text-white hover:bg-white/5 transition"
                                    >
                                        Work
                                    </a>

                                    <a
                                        href="#credentials"
                                        onClick={closeMobileMenu}
                                        className="shrink-0 px-3 py-2 rounded-full text-sm text-white hover:bg-white/5 transition"
                                    >
                                        Credentials
                                    </a>

                                    <div className="h-6 w-px bg-white/10 mx-1" />

                                    <a
                                        href="/MohanaSaravanan_CV.pdf"
                                        download
                                        className="shrink-0 px-3 py-2 rounded-full text-sm text-white hover:text-indigo-400 transition"
                                    >
                                        CV
                                    </a>

                                    <a
                                        href="#contact"
                                        onClick={closeMobileMenu}
                                        className="shrink-0 ml-auto px-4 py-2 rounded-full bg-indigo-500/90 text-sm font-medium text-white hover:bg-indigo-500 transition"
                                    >
                                        Contact
                                    </a>
                                </div>
                            </div>

                            {/* decorative small handle under panel to match pill look */}
                            <div className="mt-3 mx-auto h-1 w-16 rounded-full bg-white/15" />
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
