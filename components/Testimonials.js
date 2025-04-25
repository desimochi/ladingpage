
import Image from 'next/image';

export default function Testimonials() {
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
    {
      quote: "The place where I am right now is all because of one reason and it's Taxila. I'm really grateful that I got admission in Taxila, which lead me to a bright future. The wisdom and experience of faculty have guided me to choose the right path in my career. I would like to thank the Management and faculties in Taxila for being supportive & for helping me achieve my dream.",
      name: "Geetha M",
      title: "Batch 2018-2020",
      avatar: "/mohit.jpg",
    },
    {
      quote: "Taxila - named derived from Takshashila University, famous for leaders like Chandragupta Maurya and Chanakya. Modern Taxila also works on similar grounds, leadership skills that I have inculcated during my MBA in Taxila, has made me what I am today. Taxila gave me a platform to express myself freely and implement new ideas. I would like to thank Anuradha ma'am who is like a mother to me and has given me freedom to do what my heart desires and has made me believe that girl you have got all wings to fly.",
      name: "Mansi Gandhi",
      title: "Batch 2017-2019",
      avatar: "/mohit.jpg",
    },
  ];

  return (
    <section className="bg-white py-12 px-4 sm:px-6 lg:px-8">
        <div className='max-w-7xl mx-auto'>
      <div className=" text-center">
        <h2 className="text-3xl font-bold text-gray-900">What Our Students Say</h2>
        <hr className="border-b-2 border-red-600 w-80 mx-auto mt-4 mb-6" />
        <p className="mt-4 text-lg text-gray-500">
          Explore the whole collection of open-source web components and elements built with the utility classes from Tailwind
        </p>
      </div>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((t, index) => (
          <div key={index} className="bg-gray-50 border border-gray-200 p-6 rounded-lg shadow-sm">
            <p className="text-gray-700 italic mb-4">{t.quote}</p>
            <div className="flex items-center space-x-4">
              <div className="relative w-10 h-10">
                <Image
                  src={t.avatar}
                  alt={t.name}
                  layout="fill"
                  className="rounded-full object-cover"
                />
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
