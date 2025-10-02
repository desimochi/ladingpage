

import Roadmap from "@/components/new/Course";
import FeeStructure from "@/components/new/Fees";
import Hero1 from "@/components/new/Hero1";
import Highlights from "@/components/new/HighLights";
import NAVBars from "@/components/new/Nav";
import AlumniSection from "@/components/new/Placements";
import Ranking2 from "@/components/new/Rankings";
import Scholarships2 from "@/components/new/Scholarships";
import Testimonials2 from "@/components/new/Testimonials";
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
   <>
    <Hero1 />
        <NAVBars />
        <Highlights/>
        <AlumniSection />
        <Roadmap />
        <FeeStructure/>
        <Scholarships2 />
        <Ranking2/>
        <Testimonials2/>
   </>
  );
}

