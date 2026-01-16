import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Achievements from "@/components/Achievements";
import Work from "@/components/Work";
import Credentials from "@/components/Credentials";
import Section from "@/components/Section";
import Footer from "@/components/Footer";

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
            <Footer/>
        </main>
    );
}
