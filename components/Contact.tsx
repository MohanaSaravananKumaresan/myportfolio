"use client";

import Section from "@/components/Section";

export default function Contact() {
    return (
        <Section id="contact" title="Let’s Talk" subtle>
            <div className="space-y-6">
                <p className="text-gray-300 leading-relaxed">
                    If you’ve made it this far, you probably have something specific in
                    mind. I’m open to conversations around backend engineering,
                    architecture, and impactful work.
                </p>

                <div className="flex flex-wrap gap-4">
                    <a
                        href="https://mail.google.com/mail/?view=cm&fs=1&to=mohanasaravanankumaresan@gmail.com&su=Portfolio%20Contact&body=Hi%20MohanaSaravanan%2C%0A%0AI%20went%20through%20your%20portfolio%20and%20wanted%20to%20connect.%0A%0A-%20"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
    px-6 py-3 rounded-full
    bg-indigo-500 text-white font-medium
    hover:bg-indigo-600 transition
  "
                    >
                        Email Me
                    </a>



                    <a
                        href="/MohanaSaravanan_CV.pdf"
                        download
                        className="
              px-6 py-3 rounded-full
              border border-white/20
              text-white font-medium
              hover:border-indigo-400 hover:text-indigo-300
              transition
            "
                    >
                        Download CV
                    </a>
                </div>
            </div>
        </Section>
    );
}
