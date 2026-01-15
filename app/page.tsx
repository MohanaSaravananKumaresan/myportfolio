import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import ProjectCard from "@/components/ProjectCard";

export default function Home() {
    return (
        <main className="bg-black text-white">
            <Navbar/>
            <Hero/>

            <Section id="experience" title="Experience">
                <p>
                    This section will describe my professional experience,
                    responsibilities, and impact.
                </p>
            </Section>

            <Section id="projects" title="Projects">
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
        </main>
    );
}
