"use client";

import { useState } from "react";
import Section from "@/components/Section";

export default function Contact() {
    const email = "mohanasaravanankumaresan@gmail.com";
    const subject = "Portfolio Contact";
    const body = `Hi MohanaSaravanan,\n\nI went through your portfolio and wanted to connect.\n\n- `;
    const mailtoHref = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
        body
    )}`;

    const [copied, setCopied] = useState(false);

    const copyEmail = async () => {
        if (typeof navigator !== "undefined" && navigator.clipboard && navigator.clipboard.writeText) {
            try {
                await navigator.clipboard.writeText(email);
                setCopied(true);
                window.setTimeout(() => setCopied(false), 3000);
                return;
            } catch {
                // fallthrough to fallback
            }
        }

        // Fallback for older browsers
        try {
            const ta = document.createElement("textarea");
            ta.value = email;
            // avoid flashing on screen
            ta.style.position = "fixed";
            ta.style.left = "-9999px";
            document.body.appendChild(ta);
            ta.select();
            document.execCommand("copy");
            document.body.removeChild(ta);
            setCopied(true);
            window.setTimeout(() => setCopied(false), 3000);
        } catch {
            // If copying fails silently, we could show a different UI; keep silent for now
            // Optionally open mail client as a last resort
            window.location.href = mailtoHref;
        }
    };

    return (
        <Section id="contact" title="Let’s Talk" subtle>
            <div className="space-y-6">
                <p className="text-gray-300 leading-relaxed">
                    If you’ve made it this far, you probably have something specific in
                    mind. I’m open to conversations around backend engineering,
                    architecture, and impactful work.
                </p>

                <div className="flex flex-wrap gap-4 items-center">
                    <a
                        href={mailtoHref}
                        // leave target to allow mailto to open in some clients; noopener harmless
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 rounded-full bg-indigo-500 text-white font-medium hover:bg-indigo-600 transition"
                    >
                        Email Me
                    </a>

                    <a
                        href="/MohanaSaravanan_CV.pdf"
                        download
                        className="px-6 py-3 rounded-full border border-white/20 text-white font-medium hover:border-indigo-400 hover:text-indigo-300 transition"
                    >
                        Download CV
                    </a>

                    {/* Fallback copy link for users who can't use mailto */}
                    <a
                        href="#"
                        onClick={(e) => {
                            e.preventDefault();
                            copyEmail();
                        }}
                        role="button"
                        className="ml-2 text-sm text-gray-300 hover:text-white underline"
                    >
                        Having trouble with the button? Click to copy email
                    </a>
                </div>
            </div>

            {/* Navbar-style pill notification when copied */}
            {copied && (
                <div
                    role="status"
                    aria-live="polite"
                    className="fixed top-4 right-4 z-50 transform transition-all duration-200"
                >
                    <div className="bg-indigo-600 text-white px-4 py-2 rounded-full shadow-lg">
                        Email address copied
                    </div>
                </div>
            )}
        </Section>
    );
}
