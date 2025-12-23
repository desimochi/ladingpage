// app/page.js
import { ArrowBigLeft, ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import FormWidget from "./Form2";
import VideoCard from "./VideoCard";
import NAVBars from "./Nav";

export default function Hero1() {
  return (
    <div className="bg-[#011F5B] text-white  font-mulish">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto px-6 py-16">
        {/* Left Content */}
        <div className="space-y-4 max-w-2xl">
            <p className="px-4 py-1 rounded-full bg-gray-100/10 w-fit text-gray-200 text-sm border border-gray-400">Admisisons Open 2026-28</p>
          <h1 className="text-4xl md:text-5xl line-height-1">
            PGDM + Business Analytics <br />
            <span className="text-white mt-1">with Triple Specialization</span> <br />
          </h1>
          <p className="text-gray-400">
            <span className="text-[#dab155] font-bold" >SAP S4 HANA</span> FINANCIAL ACCOUTING (FI) & <br />
             COST ACCOUTING (CI) CONSULTANT LEVEL TRAINING
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link
              href="#apply"
              className="group bg-[#dab155] px-6 py-3 justify-center rounded-full text-black  hover:opacity-90 transition flex items-center gap-1 hover:gap-2 "
            >
              Apply Now <div className="group-hover:bg-[#011F5B] group-hover:p-1 group-hover:rounded-full transition-all "><ArrowRightIcon className="h-5 w-5 group-hover:text-white group-hover:-rotate-45 transition" /></div>
            </Link>
          </div>
        </div>

        {/* Right Video Thumbnail */}
        <div className="mt-10 md:mt-0 w-90 sm:w-100">
         <div className="bg-gray-100 rounded-xl p-2 shadow">
                <FormWidget />
              </div>
        </div>
      </section>
   
    </div>
  );
}
