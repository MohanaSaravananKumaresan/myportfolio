import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Achievements from "@/components/Achievements";
import Work from "@/components/Work";
import Credentials from "@/components/Credentials";
import Section from "@/components/Section";

export default function Home() {
    return (
        <main className="bg-black text-white">
            <Navbar />

            {/* 0) HERO */}
            <Hero />

            {/* 1) ABOUT */}
            <About />

            {/* 2) ACHIEVEMENTS */}
            <Achievements />

            {/* 3) WORK */}
            <Work />

            {/* 4) CREDENTIALS */}
            <Credentials />

            {/* 5) CONTACT */}
            <Section id="contact" title="Let’s Talk" subtle>
                <div className="space-y-6">
                    <p className="text-gray-300 leading-relaxed">
                        If you’ve made it this far, you probably have something
                        specific in mind. I’m open to conversations around backend
                        engineering, architecture, and impactful work.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <a
                            href="mailto:your.email@example.com"
                            className="px-6 py-3 rounded-full bg-indigo-500 text-white font-medium hover:bg-indigo-600 transition"
                        >
                            Email Me
                        </a>

                        <a
                            href="/MohanaSaravanan_CV.pdf"
                            target="_blank"
                            className="px-6 py-3 rounded-full border border-white/20 hover:border-indigo-400 transition"
                        >
                            Download CV
                        </a>
                    </div>
                </div>
            </Section>

            {/* FOOTER */}
            <footer className="mt-32 py-12 border-t border-white/10">
                <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-sm text-gray-400">
                        © {new Date().getFullYear()} Mohana Saravanan. All rights reserved.
                    </p>

                    <div className="flex gap-6 text-sm">
                        <a href="#" className="hover:text-indigo-400 transition">
                            GitHub
                        </a>
                        <a href="#" className="hover:text-indigo-400 transition">
                            LinkedIn
                        </a>
                        <a
                            href="mailto:your.email@example.com"
                            className="hover:text-indigo-400 transition"
                        >
                            Email
                        </a>
                    </div>
                </div>
            </footer>
        </main>
    );
}
