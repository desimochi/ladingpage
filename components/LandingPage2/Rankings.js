import Image from "next/image";
import award from '@/public/award.png'
export default function Rankings() {
  return (
    <section className="relative bg-cover bg-center bg-no-repeat text-white py-16 px-4 text-center"
      style={{ backgroundImage: "url('https://taxila.in/img/taxila.jpg')" }} // Replace with your image path
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#791616]/90 z-0"></div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 border-b-4 inline-block  pb-2">
          RANKINGS
        </h2>

        {/* Grid with lines */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 ">
          {[
            {
              title: '#2',
              subtitle: 'in Rajasthan State',
              text: '#28 in India\nIIRF Ranking, 2024',
            },
            {
              title: '#07',
              subtitle: 'in North Zone',
              text: 'IIRF Ranking, 2024',
            },
            {
              title: '#01',
              subtitle: 'in Jaipur',
              text: 'IIRF Ranking 2024',
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
              className=" border-red-500 p-6 flex flex-col items-center justify-center text-sm md:text-base"
            >
              <Image src={award} height={200} width={80} alt="award" />
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
