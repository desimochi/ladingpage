
import { User2Icon } from 'lucide-react';
import Image from 'next/image';

export default function Testimonials2() {
  const testimonials = [
    {
      quote: "I shortlisted this institute during my research about the top 10 MBA colleges in India, and I was impressed to see that this institution consistently ranked among the top-rated B-schools in India 2026. The academics, industry interface, and alumni connections are well-justified reasons why this institution stands among the best B-schools in India for management education.",
      name: "Sonal Oberoi",
      title: "Batch 2018-2020",
      avatar: "/mohit.jpg",
    },
    {
      quote: "As an aspiring management professional, I needed an AICTE-approved PGDM college in India that embodies learning by doing. What makes this institution one of the top PGDM colleges in India is that it stands apart among the top PGDM institutes due to its robust curriculum and training programs that are in line with the current industry requirements.",
      name: "Prof. Farhad Saeed Khan",
      title: "Batch 2006-2008",
      avatar: "/mohit.jpg",
    },
    {
      quote: "The most beneficial for me was pursuing an MBA in analytics and data science specialization. Accompanying this, innovation is also emphasized at the institute level in terms of pursuing an MBA research and projects focus. For those pursuing an MBA business analytics, this program provides immense value academically. Taxila is among the top mba colleges in india from past few years",
      name: "Suraj Panigrahi",
      title: "Batch 2018-2020",
      avatar: "/mohit.jpg",
    },
    {
      quote: "I had applied in the MBA admission open-2026 intake, and the entire process of admission was clear to me. This college is open for MBA admissions in 2026, along with PGDM admission open-2026, which will be a good option for young management students.",
      name: "Mohit Sachdeva",
      title: "Batch 2022-2024",
      avatar: "/mohit.jpg",
    },
    {
      quote: "This institute is known as the best business school in Jaipur and is popular for its best placement statistics. As one of the top 50 MBA colleges in the country, it is a good value-for-money institution offering PGDM courses with high return on investment and competitive job packages.",
      name: "Nipun Choudhary",
      title: "Batch 2021-2023",
      avatar: "/mohit.jpg",
    },
  ];

  return (
    <section className="bg-white py-12 px-4 sm:px-6 lg:px-8 font-mulish">
        <div className='max-w-7xl mx-auto'>
      <div className=" ">
        <div className="space-y-4">
            <div className="space-y-4">
              <p className="text-gray-600 font-semibold text-sm tracking-wider uppercase">
                
              </p>
              <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                What Our Students{' '}
                <span className="relative inline-block">
                  Say
                  <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 15 Q 150 5, 295 15" stroke="#FCD34D" strokeWidth="8" fill="none" strokeLinecap="round"/>
                  </svg>
                </span>
              </h3>
            </div>
            
            <p className="text-gray-600 text-lg leading-relaxed max-w-xl">
              Study core industry-focused modules to gain practical knowledge and skills for the digital age.
            </p>
          </div>
      </div>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((t, index) => (
          <div key={index} className=" border border-gray-200 p-6 rounded-2xl">
            <p className="text-gray-800  mb-4">{t.quote}</p>
            <div className="flex items-center space-x-4">
              <div className="relative w-10 h-10 flex items-center justify-center bg-[#011F5B] rounded-full">
                <User2Icon className='text-yellow-400' />
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900">{t.name}</p>
                <p className="text-sm text-gray-500">{t.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
}
