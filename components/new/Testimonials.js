
import { User2Icon } from 'lucide-react';
import Image from 'next/image';

export default function Testimonials2() {
  const testimonials = [
    {
      quote: "Learning is the essence of life. Taxila is one of the places that has always encouraged me and boosted my skills. I had an exciting experience in this college. In every aspect, Taxila if not top then one of the top colleges for MBA in Jaipur. I would like to thank each and everyone who made my journey far better including students, staff members, and faculties. ",
      name: "Sonal Oberoi",
      title: "Batch 2018-2020",
      avatar: "/mohit.jpg",
    },
    {
      quote: "I am very lucky to get a chance to study at Taxila. It is among the top mba colleges in India. Taxila is a place where I shine and discover my potential. Taxila made me believe in my capabilities and push me to do the best every single time.   I am thankful to Prof. A K Pathak sir, Kishore sir, Anuradha Ma'am, and Rajat Bohra sir for guiding me throughout this journey. No doubt that Taxila is one of the top MBA colleges in Jaipur. Best of luck to all my juniors. Give your best and rest leave on God.",
      name: "Prof. Farhad Saeed Khan",
      title: "Batch 2006-2008",
      avatar: "/mohit.jpg",
    },
    {
      quote: "Taxila has provided me a platform to realize my potential and how to make the best use of my strengths. The guidance and the support of the professors throughout our course were incredible. Also, Till now If I face any tricky situation and seeking for help they are always ready with their guidance. It was an eye-opening experience for me. For me, Taxila is on the list of top MBA colleges in Rajasthan I feel fortunate to be a part of this wonderful institution.",
      name: "Suraj Panigrahi",
      title: "Batch 2018-2020",
      avatar: "/mohit.jpg",
    },
  ];

  return (
    <section className="bg-white py-12 px-4 sm:px-6 lg:px-8 font-sans">
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
