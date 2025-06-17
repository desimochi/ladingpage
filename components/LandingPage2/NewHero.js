
import Image from "next/image";
import FormWidget from "../NPFForm";
import her1 from "@/public/hero3.jpg"
// components/Hero.js
export default function NewHero() {
    const stats = [
        { value: "28.60 LPA", label: "Highest Placement" },
        { value: "11.50 LPA", label: "Average Placement" },
        { value: "25.80 LPA", label: "Highest Domestic Placement" },
        { value: "80+", label: "Trusted Placement Partners" },
      ];
    return (
    <>
    <div className="block sm:hidden">
     <FormWidget  />
     </div>
      <div className="relative text-white">
       
        <div className="relative flex flex-col  justify-center  text-center bg-opacity-60 bg-cover bg-center">
            <div className="z-10 w-full ">
                <div className="flex text-start mx-auto">            
                    <div className="w-full sm:w-5/7">
           <Image src={her1} alt="taxila business school" height={600} width={1500} quality={100} />
          
            </div>
          <div className="w-full hidden sm:block sm:w-2/7 p-2">
          <FormWidget />
          </div>
            </div>
          </div>
        </div>
      </div>
      </>
    );
  }
  