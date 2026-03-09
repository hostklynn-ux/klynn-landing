'use client';

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

const footerData = [
  {
    title: "Producto",
    links: [
      { label: "Cómo funciona", href: "#solution" },
      { label: "Precios", href: "#pricing" }
    ]
  },
  {
    title: "Empresa",
    links: [
      { label: "Trabaja con nosotros", href: "#cleaner" }
    ]
  },
  {
    title: "Legal",
    links: [
      { label: "Privacidad", href: "privacy" },
      { label: "Términos", href: "#terms" }
    ]
  }
];

const Footer = () => {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (title: string) => {
    setOpenSection(openSection === title ? null : title);
  };

  return (
    <footer className="bg-[#020617] text-slate-400 pt-16 pb-8 px-6 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto">

        <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-16 mb-12">

          <div className="md:w-1/4 flex flex-col items-start">
            <a href="#hero" className="hover:opacity-90 transition-opacity block mb-6">
              <Image
                priority
                width={80}
                height={32}
                src="/assets/logos/logo-horizontal-dark.png"
                alt="KLYNN Logo"
                className="h-8 w-auto object-contain"
              />
            </a>
          </div>

          <div className="md:w-3/4 grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-8">
            {footerData.map((section, index) => {
              const isOpen = openSection === section.title;

              return (
                <div key={index} className="border-b border-slate-800 md:border-none">

                  <button
                    onClick={() => toggleSection(section.title)}
                    className="md:hidden w-full py-5 flex justify-between items-center text-white font-bold text-sm tracking-widest uppercase focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    {section.title}
                    <ChevronDown
                      className={`w-4 h-4 text-slate-500 transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"}`}
                    />
                  </button>

                  <h4 className="hidden md:block font-bold text-white mb-6 text-sm tracking-widest uppercase">
                    {section.title}
                  </h4>

                  <div
                    className={`md:block overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-40 pb-5 opacity-100" : "max-h-0 opacity-0 md:max-h-full md:opacity-100"
                      }`}
                  >
                    <ul className="space-y-4 text-[15px]">
                      {section.links.map((link, i) => (
                        <li key={i}>
                          <Link
                            href={link.href}
                            className="text-slate-400 hover:text-[#00d2ff] transition-colors"
                          >
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-center gap-4 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} KLYNN. Todos los derechos reservados.</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;