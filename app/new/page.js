
import Companies from "@/components/new/Companies";
import Roadmap from "@/components/new/Course";
import FeeStructure from "@/components/new/Fees";
import Hero1 from "@/components/new/Hero1";
import Highlights from "@/components/new/HighLights";
import NAVBars from "@/components/new/Nav";
import AlumniSection from "@/components/new/Placements";
import Ranking2 from "@/components/new/Rankings";
import Scholarships2 from "@/components/new/Scholarships";
import CoachesSection from "@/components/new/Specialisation";
import PGPTBMStats from "@/components/new/Stats";
import Testimonials2 from "@/components/new/Testimonials";

export default function Page(){
    return(
        <>
        <Hero1 />
        <NAVBars />
        <Highlights/>
        <AlumniSection />
        <Roadmap />
        <PGPTBMStats />
        <CoachesSection />
        <FeeStructure/>
        <Scholarships2 />
        <Ranking2/>
        <Testimonials2/>
        </>
    )
}