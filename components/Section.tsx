"use client";

import {motion, Variants} from "framer-motion";

type SectionProps = {
    id: string;
    title: string;
    children: React.ReactNode;
    subtle?: boolean;
};

const sectionVariants: Variants = {
    hidden: {opacity: 0, y: 40},
    visible: {
        opacity: 1,
        y: 0,
        transition: {duration: 0.6, ease: "easeOut"},
    },
};

export default function Section({
                                    id,
                                    title,
                                    children,
                                    subtle = false,
                                }: SectionProps) {
    return (
        <motion.section
            id={id}
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{once: true, amount: 0.2}}
            className={subtle ? "bg-white/[0.02]" : ""}
        >
            <div className="max-w-6xl mx-auto px-6 py-32">
                <div className="w-4 h-px bg-white/[0.03] mb-20" />
                <h2 className="text-3xl font-semibold mb-12">
                    {title}
                </h2>

                <div className="relative max-w-3xl pl-8 leading-relaxed text-gray-300">
                    {/* timeline rail */}
                    <div className="absolute left-0 top-1 bottom-1 w-px bg-white/[0.06]" />
                    {children}
                </div>

            </div>
        </motion.section>
    );
}
