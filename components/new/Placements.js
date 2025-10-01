// app/components/AlumniSection.js
import { ArrowRightIcon, Linkedin } from "lucide-react";
import Companies from "./Companies";

const alumniData = [
  {
    name: "Mohit Sachdeva",
    exp: "PricewaterhouseCoopers International Limited",
    role: "Senior Analyst",
    prev: "Analyst",
    img: "https://admission.taxila.in/_next/image?url=%2Fmohit.jpg&w=384&q=75",
    linkedin: "#",
  },
  {
    name: "Yaksh Redhu",
    exp: "Pre-MBA Work Exp: 2 years",
    role: "01.00 Cr. Package*",
    prev: "Real Estate",
    img: "https://admission.taxila.in/_next/image?url=%2Fyaksh.jpg&w=384&q=75",
    linkedin: "#",
  },
  {
    name: "Kamya Sethi",
    exp: "PricewaterhouseCoopers International Limited",
    role: "Senior Analyst",
    prev: "Consulting",
    img: "https://admission.taxila.in/_next/image?url=%2Fkamya.jpg&w=384&q=75",
    linkedin: "#",
  },
  {
    name: "Nipun Choudhary",
    exp: "HUL",
    role: "Marketing Analyst",
    prev: "Marketing",
    img: "https://admission.taxila.in/_next/image?url=%2Fnipun.jpg&w=384&q=75",
    linkedin: "#",
  },
  {
    name: "Venkata Shriraj",
    exp: "Pre-MBA Work Exp: 2.1 years",
    role: "28.60 LPA",
    prev: "Real Estate",
    img: "https://admission.taxila.in/_next/image?url=%2FVenkata-Sriraj.jpg&w=384&q=75",
    linkedin: "#",
  },
  {
    name: "Akash Kumar",
    exp: "Policy Bazaar",
    role: "Sr. Business Analyst",
    prev: "Finance",
    img: "https://taxila.in/img/placements/2025/akasha-kumar-placement.jpg",
    linkedin: "#",
  },
  {
    name: "Siddarth Kaushik",
    exp: "Berger Paints",
    role: "Senior Sales Officer",
    prev: "Sales",
    img: "https://taxila.in/img/placements/2024/Siddarth.jpg",
    linkedin: "#",
  },
  {
    name: "Aarushi Rastogi",
    exp: "Zoroastrian Bank",
    role: "Relationship Manager",
    prev: "Banking",
    img: "https://admission.taxila.in/_next/image?url=%2Faarushi.jpg&w=384&q=75",
    linkedin: "#",
  },
];

export default function AlumniSection() {
  return (
    <>
    <section id="placements" className="bg-white py-16 relative font-sans">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-10">
          <div>
            <p className="text-gray-500 font-semibold text-sm">
            Taxila PGDM Success Stories
            </p>
            <h2 className="text-3xl font-bold text-black">PGDM Placements 2025</h2>
          </div>
             <p
              className="group bg-gray-100 border-gray-300 px-6 py-3 justify-center rounded-full text-black  hover:opacity-90 transition flex items-center gap-1 hover:gap-2 "
            >
              MBA Admissions 2025 <span className="group-hover:bg-[#011F5B] group-hover:p-1 group-hover:rounded-full transition-all "><ArrowRightIcon className="h-5 w-5 group-hover:text-white group-hover:-rotate-45 transition" /></span>
            </p>
        </div>

        {/* Alumni Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {alumniData.map((alum, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition"
            >
              <div className="relative">
                <img
                  src={alum.img}
                  alt={alum.name}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <a
                  href={alum.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-2 right-2 bg-white p-2 rounded-full shadow hover:bg-gray-100"
                >
                  <Linkedin className="text-black w-5 h-5" />
                </a>
              </div>

              <div className="p-4">
                <div className="flex justify-between items-center border-b-1 pb-2 mb-2 border-gray-300">

                 <div className=" bg-[#011F5B] text-gray-50 text-xs px-2 py-1 rounded w-fit">
                 {" "}
                  <span className="font-semibold">{alum.prev}</span>
                </div>
                
                <p className="mt-2 font-semibold text-black">{alum.role}</p>
                </div>
                <h3 className="font-semibold text-lg">{alum.name}</h3>
                <p className="text-sm text-gray-600">{alum.exp}</p>
               
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    <Companies />
    </>
  );
}
