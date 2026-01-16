import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Achievements from "@/components/Achievements";
import Work from "@/components/Work";
import Credentials from "@/components/Credentials";
import Contact from "@/components/Contact";
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
            <Contact />

            {/* FOOTER */}
            <Footer />
        </main>
    );
}
