

import Image from "next/image";
import TimerSection from "@/components/LandingPage2/TimerSection";
import Features from "@/components/LandingPage2/Features";
import Rankings from "@/components/LandingPage2/Rankings";
import Faculty from "@/components/Faculty";
import Placement from "@/components/Placement";
import PlacementNew from "@/components/LandingPage2/PlacementNew";
import Testimonials from "@/components/Testimonials";
import Tabs from "@/components/LandingPage2/Tabs";
import Hero from "@/components/Hero";
import NewHero from "@/components/LandingPage2/NewHero";
import Scholarships from "@/components/LandingPage2/Tabs/Scholarships";
import Link from "next/link";
export const metadata = {
  title: "Taxila Business School PGDM Admisisons 2025 | Apply Now",
  description: "Taxila Business School is the Best MBA/PGDM Colleges in India offers AICTE approved PGDM+Business Analytics with Triple Specialization for all students.",
  keywords: ["Placement", "MBA", "Top Companies", "Recruitment", "Mbaroi", "Success Stories"],
  openGraph: {
    title: "Taxila Business School PGDM Admisisons 2025 | Apply Now",
    description: "Taxila Business School is the Best MBA/PGDM Colleges in India offers AICTE approved PGDM+Business Analytics with Triple Specialization for all students.",
    url: "https://admission.taxila.in/",
    siteName: "Taxila Business School",
    images: [
      {
        url: "https://taxila.in/img/taxila.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};
export default function HomePage() {

  
  return (
    <main className="bg-[#6e0a0a] text-white font-sans">
      <NewHero/>
      <PlacementNew/>
      <div className="bg-white">
         <div className="mt-8 text-center max-w-6xl mx-auto py-12">
        <h3 className="font-bold text-2xl mb-4 text-black">TOP RECRUITERS</h3>
        <hr className="border-b-2 border-white w-80 mb-8 mx-auto" />
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 justify-center">
          {[
            '/pwc-logo.png', '/hul-logo.png', '/asianpaints.png', '/accenture.png', '/5.png', '/property-pistol.png',
            '/berger-paints.png', '/9.png', '/Deloitte_Logo.png', '/KPMG_logo.svg','/zorastian.jpg', '/yesbank.png'
          ].map((logo, idx) => (
            <div key={idx} className="p-2 border rounded-md shadow-sm flex items-center justify-center h-16 bg-white">
              <Image src={logo} alt={logo} width={100} height={40} className="object-contain" />
            </div>
          ))}
        </div>
      </div>
      </div>
     <Scholarships />
      <Rankings />
       <Features />
      <div className="bg-white py-16">
        <h2 className="text-3xl sm:text-4xl text-center text-red-700 font-bold mb-12   pb-2">
          Programme Offered
        </h2>
         <div className="bg-gray-100 border shadow-2xl hover:bg-gray-300 p-6 max-w-5xl mx-auto mt-4 rounded-lg text-center space-y-2 transition-colors">
        <h2 className="font-bold text-blue-900 text-lg">
          PGDM + Business Analytics with Triple Specialization
        </h2>
        <p className="text-red-700 font-bold underline">Applications Open for 2025</p>
        <p className="text-sm font-bold text-gray-600">Gain the skills you need to succeed in the data-driven economy.</p>
        <p className="text-red-700 font-bold">
          2 Months SAP - S4 HANA Financial Accounting & Cost Accounting Corporate Training
        </p>
        <div className="flex justify-center gap-4 pt-2">
          <a href="#form" className="bg-red-700 text-white px-4 py-2 rounded hover:bg-red-500 transition">
            Apply Now
          </a>
         
        </div>
      </div>
      </div>
      
      <div className="bg-white pb-4">
  <Testimonials />
          <p className="text-gray-800 text-center">For More Information Visit Our Website : <a href={'www.taxila.in'} className="text-red-600 underline">www.taxila.in</a></p>
      </div>
    
    </main>
  );
}

