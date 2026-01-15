"use client";

import { motion } from "framer-motion";

type ProjectCardProps = {
    title: string;
    description: string;
};

export default function ProjectCard({ title, description }: ProjectCardProps) {
    return (
        <motion.div
            className="border border-white/10 rounded-xl p-6 hover:border-indigo-400 transition"
            whileHover={{ y: -6 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
        >

        <h3 className="text-xl font-semibold mb-3">
                {title}
            </h3>

            <p className="text-gray-400 text-sm">
                {description}
            </p>
        </motion.div>
    );
}
