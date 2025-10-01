"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function NAVBars() {
  const [isSticky, setIsSticky] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 10);

      const scrollBottom =
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 50;
      setIsVisible(!scrollBottom);
    };

    window.addEventListener("scroll", handleScroll);

    // Track active section with IntersectionObserver
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 } // section visible at least 60%
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      window.removeEventListener("scroll", handleScroll);
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const links = [
    { id: "highlights", label: "Highlights" },
    { id: "placements", label: "Placements" },
    { id: "curicullum", label: "Curicullum" },
    { id: "fees", label: "Fees" },
    { id: "scholarships", label: "Scholarships" },
    { id: "rankings", label: "Rankings" },
  ];

  return (
    <nav
      className={`bg-black border-t border-b border-gray-800 font-sans text-gray-400 overflow-x-auto sm:overflow-visible sticky top-0 z-50 transition-all duration-300 ${
        isSticky ? "shadow-lg" : ""
      } ${isVisible ? "opacity-100" : "opacity-0 pointer-events-none"}`}
    >
      <div className="max-w-7xl mx-auto flex justify-center gap-6 py-3 text-sm font-medium">
        {links.map((link) => (
          <Link
            key={link.id}
            href={`#${link.id}`}
            className={`relative transition-colors ${
              activeSection === link.id
                ? "text-yellow-400"
                : "hover:text-yellow-400"
            }`}
          >
            {link.label}
            {activeSection === link.id && (
              <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-yellow-400 rounded-full"></span>
            )}
          </Link>
        ))}
      </div>
    </nav>
  );
}
