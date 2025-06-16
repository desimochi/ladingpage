import AboutTaxila from "@/components/About";
import Faculty from "@/components/Faculty";
import Hero from "@/components/Hero";
import Placement from "@/components/Placement";
import PGDMSection from "@/components/Section";
import Slider from "@/components/Silder";
import Testimonials from "@/components/Testimonials";
import PureSlider from "@/components/Testimonials";
import Image from "next/image";
import LPULandingPage from "./test/page";
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

export default function Home() {
  return (
    <>
   <LPULandingPage />
    </>
  );
}
