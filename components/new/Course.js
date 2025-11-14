"use client";

import { useState } from "react";
import Image from "next/image";
import PGPTBMStats from "./Stats";
import CoachesSection from "./Specialisation";

const terms = [
  {
    id: 1,
    title: "Term 1 - Curricullum",
    points: [
      "Applied Excel",
      "Managerial Economics",
      "Business Cosultancy",
      "Elevator Pitch",
      "LinkedIn Mastery",
      "Leadership Laboratory",
      "Mancom",
      "Business Storytelling",
      "Startup Blueprint: Designing Innovative Business Models",
      "Financial Reporting and Analysis",
      "Marketing Management",
      "Statistical Methods for Management Decisions",
      "Human Resource Management",
    ],
    image: "https://taxila.in/media/gallery/177.jpg", // replace with your image path
  },
  {
    id: 2,
    title: "Term 2 Curricullum",
     points: [
      "Business Analytics & AI 2",
      "SAP - 2",
      "SAP - 3",
      "Critical Thinking for Management Decision-Making",
      "Mancom",
      "Strategic Negotiation Skills for Managers",
      "Aptitude Skills for Management Careers",
      "Decoding Consumer Behaviour",
      "Managerial Accounting and Decision Making",
      "Operations Management",
      "Gamification & Behavioural Design",
      "Market Research",
    ],
    image: "https://taxila.in/media/gallery/217.jpg",
  },
  {
    id: 3,
    title: "Term 3 Content",
     points: [
      "Specialization Paper 1",
      "Specialization Paper 2",
      "Specialization Paper 1",
      "Specialization Paper 2",
      "Business Analytics and AI 3",
      "Business Analytics and AI 4",
      "Growth Mindset & Resilience Training",
      "The Science of Modern Selling",
      "Managerial Economics",
      "Mancom"
    ],
    image: "https://taxila.in/media/gallery/126.jpg",
  },
  {
    id: 4,
    title: "Term 4 Curricullum",
      points: [
      "Specialization 1 Paper 3",
      "Specialization 1 Paper 4",
      "Specialization 2 Paper 3",
      "Specialization 2 Paper 4",
      "Business Analytics & AI 5",
      "Business Analytics & AI 6",
    ],
    image: "https://taxila.in/media/gallery/172.jpg",
  },
  {
    id: 5,
    title: "Term 5 Curricullum",
     points: [
      "Specialization 1 E",
      "Specialization 1 F",
      "Specialization 2 E",
      "Specialization 2 F",
    ],
    image: "https://taxila.in/media/gallery/140.jpg",
  },
  {
    id: 6,
    title: "Term 6 Curricullum",
     points: [
      "Capstone Projects",
    ],
    image: "https://taxila.in/media/gallery/150.jpg",
  },
];

export default function Roadmap() {
  const [active, setActive] = useState(1);

  return (
    <section id="curicullum">
    <section  className="bg-[#011F5B] text-white py-16 relative font-sans rounded-2xl px-3">
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20 pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Heading */}
        <p className="text-sm text-yellow-400 font-medium mb-2">
          Course Curricullum
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mb-3 leading-snug">
          PGDM + Business Analytics{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
            Triple Specialisation
          </span>
        </h2>
        <p className="text-gray-400 max-w-2xl mb-8">
          Leverage the opportunity to engage in workshops, training, panel
          discussions, counselling sessions, and{" "}
          <span className="font-semibold text-white">
            personalised career progression plans at best mba college.
          </span>
        </p>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {terms.map((term) => (
            <button
              key={term.id}
              onClick={() => setActive(term.id)}
              className={`px-6 py-2 text-sm font-medium transition cursor-pointer ${
                active === term.id
                  ? "bg-blue-800 text-yellow-400"
                  : "bg-blue-900 hover:bg-blue-800 text-gray-300"
              }`}
            >
              Term {term.id}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="bg-blue-900/50 backdrop:backdrop-blur-2xl p-6 rounded-xl shadow-lg">
            <h3 className="text-lg font-semibold text-yellow-400 mb-4">
              {terms[active - 1].title}
            </h3>
            <ul className="grid grid-cols-2 space-y-3">
              {terms[active - 1].points.map((point, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm">
                  <span className="text-yellow-400">✦</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <img
              src={terms[active - 1].image}
              alt="Roadmap Image"
              width={600}
              height={400}
              className="rounded-xl object-cover shadow-lg" 
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
    <PGPTBMStats />
    <CoachesSection />
    </section>
  );
}
