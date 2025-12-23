import { IndianRupee } from "lucide-react";
import Link from "next/link";

export default function FeeStructure() {
  const feeData = [
    {
      round: 'Registration Fee	',
      admission: '₹50,000/-',
    },
    {
      round: 'Lump Sum (One Time)	',
      admission: '₹9,00,000/-',
    },
    {
      round: 'Total',
      admission: '₹9,50,000/-',
    }
  ];
  const feeData2 = [
    {
      round: 'Registration Fee	',
      admission: '₹50,000/-',
    },
    {
      round: '1st and 2nd Installment Each',
      admission: '₹4,85,000/-',
    },
    {
      round: 'Total',
      admission: '₹10,20,000/-',
    }
  ];

  return (
    <section id="scholarships" className=" bg-[#011F5B] flex items-center justify-center p-8 font-mulish my-12 rounded-2xl">
      <div className="max-w-7xl w-full space-y-4 flex justify-between items-center">
        {/* Title with colorful underline */}
        <div className="mb-8">
           <p className="bg-red-600 text-white w-fit px-4 py-1 rounded-2xl mb-2 animate-pulse"></p>
          <h2 className="text-white text-3xl md:text-4xl font-bold mb-2 line-height-3 ">
            Scholarship Available of <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400"> ₹ 50 Thousand to ₹ 2 Lakh</span>
          </h2>
          
          <svg className="w-64 h-3" viewBox="0 0 300 12" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="underlineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style={{stopColor: '#10B981', stopOpacity: 1}} />
                <stop offset="33%" style={{stopColor: '#3B82F6', stopOpacity: 1}} />
                <stop offset="66%" style={{stopColor: '#F59E0B', stopOpacity: 1}} />
                <stop offset="100%" style={{stopColor: '#EF4444', stopOpacity: 1}} />
              </linearGradient>
            </defs>
            <path 
              d="M 0 6 Q 75 2, 150 6 T 300 6" 
              stroke="url(#underlineGradient)" 
              strokeWidth="6" 
              fill="none" 
              strokeLinecap="round"
            />
          </svg>
        </div>

        {/* Fee Table */}
      
        
        <div className=" w-full sm:w-1/3">
          <Link href={'https://taxila.in/pgdm-with-business-analytics/scholarships-and-grants/'} className="bg-[#dab155] text-black font-semibold px-18 py-3 rounded-full hover:bg-yellow-500 transition w-full">
            Apply Now
          </Link>
        </div>

        {/* GST Note */}
        
      </div>
    </section>
  );
}