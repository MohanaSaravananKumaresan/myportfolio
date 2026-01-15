"use client";

import {motion, Variants} from "framer-motion";

const sectionVariants: Variants = {
    hidden: {
        opacity: 0,
        y: 40,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut",
        },
    },
};

type SectionProps = {
    id: string;
    title: string;
    children: React.ReactNode;
};

export default function Section({id, title, children}: SectionProps) {
    return (
        <motion.section
            id={id}
            className="max-w-6xl mx-auto px-6 py-24"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{once: true, amount: 0.2}}
        >

            <h2 className="text-3xl font-semibold mb-12">
                {title}
            </h2>

            <div className="text-gray-300">
                {children}
            </div>
        </motion.section>
    );
}
