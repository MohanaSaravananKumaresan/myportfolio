"use client";

import { ArrowDown } from "lucide-react";

export default function ScrollHint({
                                       href,
                                       text,
                                   }: {
    href: string;
    text: string;
}) {
    return (
        <div className="mt-20 flex justify-center">
            <a
                href={href}
                className="
          group inline-flex items-center gap-2
          text-sm text-gray-500
          hover:text-indigo-300
          transition
        "
            >
        <span
            className="
            inline-flex items-center gap-2
            rounded-full
            bg-white/5
            border border-white/10
            px-5 py-2.5
            backdrop-blur-xl
            shadow-lg shadow-black/30
            transition
            group-hover:border-indigo-400/30
            group-hover:shadow-indigo-500/10
            group-hover:-translate-y-0.5
          "
        >
          {text}
            <ArrowDown size={16} className="opacity-70 group-hover:opacity-100" />
        </span>
            </a>
        </div>
    );
}
