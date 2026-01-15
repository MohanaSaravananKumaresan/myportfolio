export default function Navbar() {
    return (
        <nav className="fixed top-0 w-full z-50 px-6 py-4
                backdrop-blur border-b border-white/10 bg-black/40">
            <div className="max-w-6xl mx-auto flex justify-between items-center">
        <span className="font-semibold text-lg">
          Mohana Saravanan
        </span>
                <div className="flex gap-6 text-sm">
                    <a href="#experience" className="hover:text-indigo-400 transition">
                        Experience
                    </a>
                    <a href="#projects" className="hover:text-indigo-400 transition">
                        Projects
                    </a>
                    <a href="#contact" className="hover:text-indigo-400 transition">
                        Contact
                    </a>
                </div>
            </div>
        </nav>
    );
}
