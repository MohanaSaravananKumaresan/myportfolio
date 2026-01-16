"use client";

import { motion, Variants } from "framer-motion";
import ScrollHint from "@/components/ScrollHint";
import { useEffect, useState } from "react";

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.22 },
    },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.9,
            ease: "easeOut",
        },
    },
};

export default function Hero() {
    const [avatarSwitched, setAvatarSwitched] = useState(false);

    useEffect(() => {
        const aboutEl = document.getElementById("about");
        if (!aboutEl) return;

        const observer = new IntersectionObserver(
            (entries) => {
                const entry = entries[0];
                if (!entry) return;

                // Switch ONLY ONCE when About comes into view
                if (entry.isIntersecting && !avatarSwitched) {
                    setAvatarSwitched(true);
                }
            },
            {
                // Trigger when About section enters viewport (tweak if needed)
                threshold: 0.25,
            }
        );

        observer.observe(aboutEl);

        return () => {
            observer.disconnect();
        };
    }, [avatarSwitched]);

    return (
        <section
            id="overview"
            className="
        relative z-0
        min-h-screen px-6
        pt-[120px] pb-32
      "
        >
            <motion.div
                className="max-w-6xl mx-auto flex flex-col"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {/* TOP AREA: Text + Avatar */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* HERO TEXT */}
                    <motion.div variants={itemVariants}>
                        <h1 className="text-3xl md:text-5xl font-semibold leading-tight max-w-4xl">
                            I design backend systems
                            <br />
                            that are meant to{" "}
                            <span className="relative text-indigo-400 tracking-tight">
                last.
                <span
                    className="
                    absolute left-0 -bottom-1
                    w-full h-px
                    bg-gradient-to-r
                    from-indigo-400/0
                    via-indigo-400
                    to-indigo-400/0
                  "
                />
              </span>
                        </h1>

                        <p className="mt-10 text-lg text-gray-400 max-w-2xl leading-relaxed">
                            Not just until launch — but through growth, rewrites, migrations,
                            and the moments where assumptions break.
                        </p>
                    </motion.div>

                    {/* AVATAR */}
                    <motion.div
                        variants={itemVariants}
                        className="flex justify-center md:justify-end"
                    >
                        <motion.div
                            className="relative"
                            animate={{ y: [0, -6, 0] }}
                            transition={{
                                duration: 4.5,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        >
                            <motion.div
                                whileHover={{ scale: 1.03 }}
                                transition={{ type: "spring", stiffness: 180, damping: 14 }}
                                className="
                  relative
                  w-[260px] h-[260px]
                  md:w-[320px] md:h-[320px]
                  rounded-full
                  overflow-hidden
                  border border-white/10
                  bg-black/40
                  backdrop-blur-xl
                  shadow-xl shadow-black/60
                "
                            >
                                {/* Smooth swap */}
                                <motion.img
                                    key={avatarSwitched ? "alt" : "main"}
                                    src={avatarSwitched ? "/thank you.png" : "/hey.png"}
                                    alt="Mohana Saravanan Avatar"
                                    className="w-full h-full object-cover"
                                    initial={{ opacity: 0, scale: 0.98 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.35, ease: "easeOut" }}
                                />
                            </motion.div>

                            {/* Soft glow behind */}
                            <div
                                className="
                  absolute -inset-10
                  rounded-full
                  blur-2xl
                  bg-indigo-500/15
                  -z-10
                "
                            />
                        </motion.div>
                    </motion.div>
                </div>

                {/* QUOTE / THINKING BOX */}
                <motion.div
                    variants={itemVariants}
                    whileHover={{ y: -4 }}
                    className="
            relative
            mt-16 max-w-xl
            rounded-2xl
            bg-black/70
            backdrop-blur-xl
            border border-white/10
            px-8 py-6
            text-gray-300
            transition-all duration-300
            hover:border-indigo-400/40
            hover:shadow-lg hover:shadow-indigo-500/10
            md:ml-24
          "
                >
          <span
              className="
              hidden md:block
              absolute -left-2 top-10
              w-4 h-4
              bg-black/70
              border-l border-b border-white/10
              rotate-45
            "
          />

                    <p className="text-sm leading-relaxed text-center md:text-left">
                        “Design is not just what it looks like and feels like. Design is how
                        it works.”
                    </p>

                    <p className="mt-4 text-xs text-gray-500 text-center">— Steve Jobs</p>
                </motion.div>

                {/* SCROLL HOOK */}
                <ScrollHint
                    href="#about"
                    text="Scroll to see how I think — principles above, practice below"
                />
            </motion.div>
        </section>
    );
}
