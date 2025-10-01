import Image from "next/image";
import award from '@/public/award.png'
import { Award } from "lucide-react";
export default function Ranking2() {
  return (
    <section id="rankings" className="relative bg-cover bg-center bg-no-repeat text-white py-16 px-4 font-sans rounded-2xl"
      style={{ backgroundImage: "url('https://taxila.in/img/taxila.jpg')" }} // Replace with your image path
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#000]/98 z-0 rounded-2xl"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <p className="text-sm text-yellow-400 font-medium mb-2">
          MBA Rankings
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mb-3 leading-snug">
          Rankings and Awards of{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
            Taxila Business School
          </span>
        </h2>
        <p className="text-gray-400 max-w-2xl mb-8">
          Leverage the opportunity to engage in workshops, training, panel
          discussions, counselling sessions, and{" "}
          <span className="font-semibold text-white">
            personalised career progression plans at best mba college.
          </span>
        </p>

        {/* Grid with lines */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 ">
          {[
            {
              title: '#2',
              subtitle: 'in Rajasthan State',
              text: '#22 in India\nIIRF Ranking of Best Private B School, 2025',
            },
            {
              title: '#07',
              subtitle: 'in North Zone',
              text: 'IIRF Ranking of Best MBA College, 2025',
            },
            {
              title: '#01',
              subtitle: 'in Jaipur',
              text: 'IIRF Ranking MBA in Business Analytics',
            },
            {
              title: 'Winner of IIRF Education Impact Award 2025',
              subtitle: '',
              text: 'for Education Excellency',
            },
            {
              title: 'Best Placements in Dual Specialization in North India',
              subtitle: '',
              text: 'Asia Pacific Education and Technology Awards',
            },
            {
              title: ' World Education Congress Award',
              subtitle: '',
              text: 'Best Educational Institution 2023',
            },
          ].map((item, index) => (
            <div
              key={index}
              className=" border-red-500 p-6 flex flex-col text-sm md:text-base"
            >
              <h3 className="text-xl font-bold">{item.title}</h3>
              {item.subtitle && <p className="font-semibold">{item.subtitle}</p>}
              {item.text && <p className="whitespace-pre-line">{item.text}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
