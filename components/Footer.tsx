"use client";

import { Github, Linkedin, Mail, Instagram, MessageCircle } from "lucide-react";

export default function Footer() {
    return (
        <footer className="mt-32 border-t border-white/10">
            <div className="max-w-6xl mx-auto px-6 py-14">
                {/* Narrative / Tech stack line */}
                <p className="text-sm text-gray-400 leading-relaxed max-w-3xl">
                    Built with <span className="text-white/80">Next.js</span>,{" "}
                    <span className="text-white/80">TypeScript</span>,{" "}
                    <span className="text-white/80">Tailwind CSS</span>,{" "}
                    <span className="text-white/80">Framer Motion</span> — deployed as a
                    fast, responsive, recruiter-friendly portfolio.
                </p>

                {/* Divider */}
                <div className="mt-10 h-px w-full bg-white/10" />

                {/* Bottom row */}
                <div className="mt-8 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                    <p className="text-sm text-gray-500">
                        © {new Date().getFullYear()} Mohana Saravanan. All rights reserved.
                    </p>

                    {/* Icons only */}
                    <div className="flex items-center gap-5">
                        {/* Email */}
                        <a
                            href="mailto:mohanasaravanankumaresan@gmail.com"
                            aria-label="Email"
                            title="Email"
                            className="
                w-10 h-10 rounded-full
                bg-white/5 border border-white/10
                flex items-center justify-center
                text-gray-300
                hover:text-indigo-300 hover:border-indigo-400/30
                transition
              "
                        >
                            <Mail size={18} />
                        </a>

                        {/* LinkedIn */}
                        <a
                            href="https://www.linkedin.com/in/mohana-saravanan-kumaresan-5134aa197/"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="LinkedIn"
                            title="LinkedIn"
                            className="
                w-10 h-10 rounded-full
                bg-white/5 border border-white/10
                flex items-center justify-center
                text-gray-300
                hover:text-indigo-300 hover:border-indigo-400/30
                transition
              "
                        >
                            <Linkedin size={18} />
                        </a>

                        {/* WhatsApp (no number shown, but link works) */}
                        <a
                            href="https://wa.me/917708299009"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="WhatsApp"
                            title="WhatsApp"
                            className="
                w-10 h-10 rounded-full
                bg-white/5 border border-white/10
                flex items-center justify-center
                text-gray-300
                hover:text-indigo-300 hover:border-indigo-400/30
                transition
              "
                        >
                            <MessageCircle size={18} />
                        </a>

                        {/* Instagram */}
                        <a
                            href="https://instagram.com/saravananssa"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="Instagram"
                            title="Instagram"
                            className="
                w-10 h-10 rounded-full
                bg-white/5 border border-white/10
                flex items-center justify-center
                text-gray-300
                hover:text-indigo-300 hover:border-indigo-400/30
                transition
              "
                        >
                            <Instagram size={18} />
                        </a>

                        {/* GitHub (I don't know your URL yet, so keeping it safe) */}
                        <a
                            href="https://github.com/MohanaSaravananKumaresan"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="GitHub"
                            title="GitHub"
                            className="
                w-10 h-10 rounded-full
                bg-white/5 border border-white/10
                flex items-center justify-center
                text-gray-300
                hover:text-indigo-300 hover:border-indigo-400/30
                transition
              "
                        >
                            <Github size={18} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
