import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import ProjectCard from "@/components/ProjectCard";
import Achievements from "@/components/Achievements";


export default function Home() {
    return (
        <main className="bg-black text-white">
            <Navbar/>
            <Hero/>
            <Achievements/>

            <Section id="experience" title="Experience">
                <div className="space-y-16">
                    <div>
                        <h3 className="text-xl font-medium mb-2">
                            Senior Software Engineer
                        </h3>
                        <p className="text-sm text-gray-400 mb-4">
                            Company Name • 2022 – Present
                        </p>
                        <p>
                            Driving backend architecture, cloud-native systems,
                            and performance-critical services across multiple domains.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-xl font-medium mb-2">
                            Software Engineer
                        </h3>
                        <p className="text-sm text-gray-400 mb-4">
                            Company Name • 2019 – 2022
                        </p>
                        <p>
                            Built and scaled distributed systems, contributed to
                            DevOps pipelines, and improved system reliability.
                        </p>
                    </div>
                </div>
            </Section>

            <Section id="skills" title="Focus Areas">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div>
                        <h4 className="font-medium mb-3">Backend & Systems</h4>
                        <ul className="space-y-2 text-gray-300">
                            <li>Distributed systems & APIs</li>
                            <li>Performance & scalability</li>
                            <li>Data modeling & reliability</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-medium mb-3">Cloud & DevOps</h4>
                        <ul className="space-y-2 text-gray-300">
                            <li>AWS / Cloud-native architecture</li>
                            <li>CI/CD pipelines & automation</li>
                            <li>Observability & system health</li>
                        </ul>
                    </div>
                </div>
            </Section>


            <Section id="projects" title="Selected Work" subtle>
                <p className="mb-12 text-gray-400 max-w-3xl">
                    A selection of projects where I focused on solving
                    non-trivial engineering problems with long-term impact.
                </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <ProjectCard
                        title="Project One"
                        description="A brief description of what this project does and why it matters."
                    />
                    <ProjectCard
                        title="Project Two"
                        description="Another project highlighting technical depth and problem-solving."
                    />
                    <ProjectCard
                        title="Project Three"
                        description="Focus on scale, performance, or architectural decisions."
                    />
                </div>
            </Section>

            <Section id="contact" title="Let’s Talk" subtle>
                <div className="space-y-6">
                    <p>
                        If you’ve made it this far, you probably have something
                        specific in mind. I’m always open to conversations around
                        engineering challenges, system design, and impactful work.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <a
                            href="mailto:your.email@example.com"
                            className="px-6 py-3 rounded-full bg-indigo-500 text-white font-medium hover:bg-indigo-600 transition"
                        >
                            Email Me
                        </a>

                        <a
                            href="#"
                            className="px-6 py-3 rounded-full border border-white/20 hover:border-indigo-400 transition"
                        >
                            Download CV
                        </a>
                    </div>
                </div>
            </Section>

            <footer className="mt-32 py-12 border-t border-white/10">
                <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-sm text-gray-400">
                        © {new Date().getFullYear()} Your Name. All rights reserved.
                    </p>

                    <div className="flex gap-6 text-sm">
                        <a href="#" className="hover:text-indigo-400 transition">GitHub</a>
                        <a href="#" className="hover:text-indigo-400 transition">LinkedIn</a>
                        <a href="mailto:your.email@example.com" className="hover:text-indigo-400 transition">
                            Email
                        </a>
                    </div>
                </div>
            </footer>
        </main>
    );
}
