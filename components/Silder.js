'use client';

import Image from 'next/image';
import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const images = [
  { image: '/mohit.jpg', name: 'Mohit Sachdeva', year: '2023-24', package: 'PricewaterhouseCoopers' },
  { image: '/kamya.jpg', name: 'Kamya Sethi', year: '2023-24', package: 'PricewaterhouseCoopers' },
  { image: '/sai.jpg', name: 'Sai Bhaskar Reddy', year: '2023-24', package: 'AAJ Enterprises' },
  { image: '/nipun.jpg', name: 'Mohit Sachdeva', year: '2023-24', package: 'PricewaterhouseCoopers' },
  { image: '/sanket.jpg', name: 'Sanket Lunge', year: '2023-24', package: 'PricewaterhouseCoopers' },
  { image: '/aarushi.jpg', name: 'Aarushi Rastogi', year: '2023-24', package: 'Zoroastrian Bank' },
  { image: '/varun.jpg', name: 'Varun Nayak', year: '2022-24', package: 'Hindustan Unilever' },
  { image: '/bharat.jpg', name: 'Bharat Bairagi', year: '2022-23', package: 'Vedanta Limited' },
  { image: '/yaksh.jpg', name: 'Yaksh Redhu', year: '2019-20', package: '01.00 Crore' },
  { image: '/Venkata-Sriraj.jpg', name: 'Venkata Shriraj', year: '2020-22', package: '28.6 LPA' },
];

export default function Slider() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className='bg-yellow-400 pb-8 pt-8'>
      <h3 className="font-bold text-3xl mb-4 text-center">Placement 2023-25</h3>
      <hr className="border-b-2 border-red-600 w-80 mx-auto mb-12" />

      <div className="relative max-w-7xl mx-auto">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          spaceBetween={30}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 2 },
          }}
          className=""
        >
          {images.map((src, idx) => (
            <SwiperSlide key={idx}>
              <div className='flex flex-col sm:flex-row gap-4 h-full'>
                <div className="w-full sm:w-1/2">
                  <Image
                    src={src.image}
                    alt={`${src.name} from ${src.year} batch placed at ${src.package}`}
                    className="object-cover rounded-2xl shadow-2xl w-full h-full"
                    width={400}
                    height={400}
                  />
                </div>
                <div className="w-full sm:w-1/2">
                  <div className="rounded-2xl shadow-2xl bg-white h-full flex justify-center items-center flex-col p-8">
                    <p className="text-2xl font-bold text-red-600">{src.package}</p>
                    <p className="text-lg font-semibold text-black">{src.year}</p>
                    <p className="text-xl font-bold text-black">{src.name}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Arrows */}
        <div className="flex justify-center gap-6 mt-12">
          <button ref={prevRef} className="text-blue-800 bg-white p-2 rounded-full shadow hover:bg-blue-100 transition">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button ref={nextRef} className="text-blue-800 bg-white p-2 rounded-full shadow hover:bg-blue-100 transition">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
