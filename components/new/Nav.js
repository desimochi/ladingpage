"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function NAVBars() {
  const [isSticky, setIsSticky] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [activeSection, setActiveSection] = useState("highlights"); // 👈 default

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const handleScroll = () => {
      setIsSticky(window.scrollY > 10);

      const scrollBottom =
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 150;
      setIsVisible(!scrollBottom);

      // fallback: nearest section to top
      let current = "highlights"; // 👈 default stays as highlights until passed
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom >= 120) {
          current = section.id;
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);

    // observer (extra smooth update)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: "-80px 0px -50% 0px", // 👈 offset for sticky navbar
      }
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
      className={`bg-[#011F5B] border-t pl-40 sm:pl-0 border-b border-blue-800 font-sans text-gray-400 overflow-x-auto sm:overflow-visible sticky top-0 z-50 transition-all duration-300 ${
        isSticky ? "shadow-lg" : ""
      } ${isVisible ? "opacity-100" : "opacity-0 pointer-events-none"}`}
    >
      <div className="max-w-7xl mx-auto flex justify-center gap-4 sm:gap-6 py-3 text-sm font-medium">
        {links.map((link) => (
          <Link
            key={link.id}
            href={`#${link.id}`}
            className={`relative transition-colors whitespace-nowrap ${
              activeSection === link.id
                ? "text-yellow-400 font-semibold"
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
