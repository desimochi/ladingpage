// components/AboutTaxila.jsx
import Image from 'next/image';
import Link from 'next/link';

export default function AboutTaxila() {
  return (
    <>
    <div className=" bg-white px-4 py-20">
      {/* Awards and Fact Sheet Section */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Awards Section */}
        <div className="text-center">
            <div className=" grid grid-cols-2 gap-4 items-center justify-center text-sm text-black px-4">
              <div className="mb-2">🏆 Excellence in Placements by ASSOCHAM & IIRF in 2017, 2018, 2019, 2022 & 2023</div>
              <div className="mb-2">🏆 RANKED 22nd AMONG THE TOP PGDM COLLEGES IN INDIA - BY IIRF (PRIVATE)</div>
              <div className="mb-2">🏆 RANKED 12TH IN A+++ CATEGORY BY SILICONINDIA B-SCHOOL SURVEY 2022</div>
              <div>🏆 Ranked 10th OUTLOOK-ICARE INDIA’S BEST B-SCHOOL 2024</div>
            </div>
        </div>

        {/* Fact Sheet */}
        <div className="space-y-4 text-gray-800">
          <h2 className="text-2xl font-semibold">Fact Sheet</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Garima Singh Class-2010 Appointed as India Head at Citi Bank.</li>
            <li>Urvashi Parmar Class-2010 Appointed as Vice President at RBL Bank.</li>
            <li>More than 30% batch is placed internationally in Year 2025.</li>
            <li>Best Placement in MBA by Private Institute in Rajasthan.</li>
            <li>Three Taxila professors have been rated among the top 100 Professors in India.</li>
          </ul>
        </div>
      </div>

      {/* Cohort Section */}
      
    </div>
    <div>
        <div className="max-w-6xl mx-auto mt-16 flex flex-col md:flex-row items-center gap-6">
        <div className="flex-1">
          <div className="relative w-full h-64 md:h-72">
            <Image
              src="/thumb.jpg"
              alt="Cohort Video"
              width={400}
              height={400}
              objectFit="cover"
              className="rounded"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <Link href="https://youtu.be/L2EGID9BsEE?si=CzaLpSmFvDVtByE2" target='_blank' className="bg-red-600 text-white px-4 py-3 rounded-full shadow-lg text-xl cursor-pointer">
                ▶
              </Link>
            </div>
          </div>
        </div>

        <div className="flex-1 bg-white p-6 rounded shadow relative">
          <div className="absolute bottom-0 right-0 w-6 h-6 bg-red-600" />
          <h3 className="text-xl font-bold text-red-600 mb-2">Cohort at Taxila</h3>
          <p className="text-sm text-gray-700">
            Cohort at Taxila is small and from diverse industries, culture and backgrounds.
            This enhances the cross-culture learning from peer groups to the next level.
            The school boasts about the intellect level of the students which comes from
            PAN India almost from every state. The school has been in limelight for its
            industrial relations and placements.
          </p>
        </div>
      </div>
    </div>
    </>
  );
}
