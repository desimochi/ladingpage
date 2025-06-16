import React from "react";
import Image from "next/image";
import sap from '@/public/sap.jpg'
import FormWidget from "@/components/NPFForm";
import Placement from "@/components/Placement";
import Place2 from "@/components/Place2";
import Faculty from "@/components/Faculty";
import AboutTaxila from "@/components/About";

export default function LPULandingPage() {
  return (
    <main className="bg-[#fefae0] text-[#1c1c1c] font-sans">
       <div className="block sm:hidden">
           <FormWidget  />
           </div>
      <div className="relative text-white">
        <div className="relative flex flex-col  justify-center  text-center bg-opacity-70 bg-cover bg-center" style={{ backgroundImage: "url('https://taxila.in/img/taxila.jpg')" }}>
            <div className="z-10 bg-black/80  h-80 sm:min-h-screen w-full ">
                <div className="flex text-start items-center max-w-7xl mt-12 mx-auto">            
                    <div className="w-full sm:w-1/2 p-2">
            <div className="mb-4">
            <span className="inline-block rounded-full bg-white/10 px-4 py-1 text-sm text-white ring-1 ring-white/20 backdrop-blur-sm">
              Taxila Buiness School Admisisons Open
            </span>
          </div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-2xl lg:text-5xl">
            PGDM Business Analytics,<br className="hidden sm:block" />
with Triple Specialization

          </h1>
        <hr className="border border-b-2 border-yellow-400 mt-4 mb-6 w-40"/>
        
          </div>
          <div className="w-full hidden sm:block sm:w-1/2 p-2">
          <FormWidget />
          </div>
            </div>
          </div>
        </div>
      </div>

      {/* Rankings Section */}
      <section className="py-12 px-6 text-center">
        <h2 className="text-2xl md:text-5xl font-bold mb-2">Taxila Business School</h2>
        <p>Your Launchpad to Exceptional Careers</p>
        <hr className="border border-b-0.5 w-78 mx-auto mt-3 text-gray-200" />
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mt-8">
          <div>
            <h3 className="text-3xl font-bold">28.60 Lakhs</h3>
            <p>Highest Package</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold">11.50 Lakhs</h3>
            <p>Average Package</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold">25.80</h3>
            <p>Highest Domestic Package</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold">80+</h3>
            <p>Placement Partners</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold">1,640+</h3>
            <p>Placements</p>
          </div>
        </div>
      </section>

      {/* MBA Programme */}
      <section className="bg-white py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Taxila Business School PGDM Business Analytics,
with Triple Specialization</h2>
            <div className="flex gap-2">
<p className="mb-2 bg-red-100 text-red-700 w-fit px-4 py-1 rounded">AICTE Approved</p>
               <p className="mb-2 bg-red-100 text-red-700 w-fit px-4 py-1 rounded">Record Breaking Package: ₹28.60 LPA</p>
            </div>
              
              <ul className="list-disc pl-6 mt-4 text">
                <li>Specialisations in Business Analytics, Marketing, HR, Finance, Operations and Consulting.</li>
                <li>Industry aligned curriculum</li>
                <li>Live Projects and 2 Internships</li>
                <li>Hands on 2 Months Training on SAP - S4 HANA Financial Accounting</li>
                <li>Extensive Industry Sessions </li>
                <li>Professional and Industry Certifications</li>
                <li>Excellent Placements & Top Packages</li>
              </ul>
            </div>
            <div className="border p-8 rounded-md border-gray-200 text-center bg-[#5c1f1f] shadow-xl">
              <h3 className="font-semibold text-xl text-white">PGDM + Business Analytics with Triple Specialization</h3>
                <p className="text-[#fefae0] mt-4 text-sm">Applications Open for 2025</p>
                <p className="text-sm font-semibold text-white mt-3">Gain the skills you need to succeed in the data-driven economy.</p>
                <p className="text text-[#fefae0] mt-4 font-bold">2 Months SAP - S4 HANA Financial Accounting & Cost Accounting Corporate Training</p>
                <button className="bg-[#fefae0] p-2 px-8 mt-3 rounded-sm">Apply Now</button>
            </div>
          </div>
        </div>
      </section>

      {/* Top Recruiters */}
      <section className="py-12 px-6 bg-[#fff5e1]">
       <div className="mt-8 text-center max-w-6xl mx-auto">
        <h3 className="font-bold text-2xl mb-4">Top Recruiters of Taxila Business School</h3>
        <hr className="border-b-.5 border-gray-200 w-80 mb-12 mx-auto" />
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 justify-center">
          {[
            '/pwc-logo.png', '/hul-logo.png', '/asianpaints.png', '/accenture.png', '/5.png', '/property-pistol.png',
            '/berger-paints.png', '/9.png', '/Deloitte_Logo.png', '/KPMG_logo.svg','/zorastian.jpg', '/yesbank.png'
          ].map((logo, idx) => (
            <div key={idx} className="p-2 border border-gray-200 rounded-md shadow-sm flex items-center justify-center h-16 bg-white">
              <Image src={logo} alt={logo} width={100} height={40} className="object-contain" />
            </div>
          ))}
        </div>
      </div>
      </section>

      {/* Why Choose MBA */}
      <section className="py-12 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div>
            <Image src={sap} alt={sap}width={500} height={500} />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4">Why Choose MBA at Taxila Business School?</h2>
            <p>Taxila Business School offers SAP S/4HANA Financial Accounting & Cost Accounting, a globally recognized ERP solution that enhances financial management skills with PGDM course. This program provides hands-on training in real-time financial reporting, asset accounting, and compliance management. Students gain expertise in automation, analytics, and integration with business processes.</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Premium Internationally Certified Faculty</li>
              <li>Excellent Placement & Top Recruiters</li>
              <li>Strong Alumni Network</li>
              <li>Entrepreneurial Ecosystem</li>
              <li>Global Exposure</li>
            </ul>
          </div>
          
        </div>
         <div className="mt-8 border border-dashed max-w-6xl mx-auto mb-8 border-gray-300 p-4 grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { icon: <svg fill="#000" width="50px" height="50px" viewBox="-1.68 -1.68 17.36 17.36" role="img" focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff" strokeWidth="0.21000000000000002"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="m 12.499079,12.25525 c 0.0968,0 0.188377,-0.0436 0.249339,-0.11884 0.06096,-0.0752 0.08473,-0.17385 0.06473,-0.26853 l -0.202146,-0.95662 c 0.115125,-0.11137 0.187491,-0.26686 0.187491,-0.43975 0,-0.182 -0.08106,-0.34343 -0.206876,-0.45558 l 0,-3.32202 -0.810333,0.50146 0,2.82056 c -0.125815,0.11215 -0.2069,0.27358 -0.2069,0.45558 0,0.17291 0.07239,0.32841 0.187515,0.43975 l -0.20217,0.95662 c -0.02,0.0947 0.0038,0.19335 0.06473,0.26853 0.06096,0.0752 0.152539,0.11884 0.249339,0.11884 l 0.625281,0 z M 12.773741,4.75539 7.5021019,1.49209 C 7.3477151,1.39699 7.1736728,1.34925 6.9996305,1.34925 c -0.1740423,0 -0.3482077,0.0477 -0.5016586,0.14284 l -5.271713,3.2633 C 1.0854931,4.84249 0.99999905,4.99633 0.99999905,5.1619 c 0,0.1656 0.085494,0.31949 0.22625985,0.40673 l 5.2716883,3.26333 c 0.153451,0.0952 0.3276163,0.14284 0.5016586,0.14284 0.1740423,0 0.3481092,-0.0477 0.5024714,-0.14284 L 12.773741,5.56863 c 0.140766,-0.0872 0.22626,-0.24113 0.22626,-0.40673 0,-0.16557 -0.08549,-0.31946 -0.22626,-0.40651 z M 6.9996059,9.78508 c -0.3283798,0 -0.6488777,-0.0912 -0.928242,-0.26411 l -3.0750017,-1.90368 0,3.27796 c 0,0.97016 1.7931578,1.7555 4.0032436,1.7555 2.2108742,0 4.0038842,-0.78536 4.0038842,-1.7555 l 0,-3.27796 -3.0748786,1.90368 C 7.6492472,9.69388 7.3279857,9.78508 6.9996059,9.78508 Z"></path></g></svg>, title: '22', subtitle: 'Years of Legacy' },
          { icon: <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="#000" width="50px" height="50px"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <rect x="0" fill="none" width="20" height="20"></rect> <g> <path d="M4.46 5.16L5 7.46l-.54 2.29 2.01 1.24L7.7 13l2.3-.54 2.3.54 1.23-2.01 2.01-1.24L15 7.46l.54-2.3-2-1.24-1.24-2.01-2.3.55-2.29-.54-1.25 2zm5.55 6.34C7.79 11.5 6 9.71 6 7.49c0-2.2 1.79-3.99 4.01-3.99 2.2 0 3.99 1.79 3.99 3.99 0 2.22-1.79 4.01-3.99 4.01zm-.02-1C8.33 10.5 7 9.16 7 7.5c0-1.65 1.33-3 2.99-3S13 5.85 13 7.5c0 1.66-1.35 3-3.01 3zm3.84 1.1l-1.28 2.24-2.08-.47L13 19.2l1.4-2.2h2.5zm-7.7.07l1.25 2.25 2.13-.51L7 19.2 5.6 17H3.1z"></path> </g> </g></svg>, title: 'Ranked 22', subtitle: 'Business School By IIRF' },
          { icon: <svg fill="#000" viewBox="0 0 32.00 32.00" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff" strokeWidth="0.00032" width="50px" height="50px"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#CCCCCC" strokeWidth="0.128"></g><g id="SVGRepo_iconCarrier"> <path d="M31,7H1A1,1,0,0,0,0,8V24a1,1,0,0,0,1,1H31a1,1,0,0,0,1-1V8A1,1,0,0,0,31,7ZM25.09,23H6.91A6,6,0,0,0,2,18.09V13.91A6,6,0,0,0,6.91,9H25.09A6,6,0,0,0,30,13.91v4.18A6,6,0,0,0,25.09,23ZM30,11.86A4,4,0,0,1,27.14,9H30ZM4.86,9A4,4,0,0,1,2,11.86V9ZM2,20.14A4,4,0,0,1,4.86,23H2ZM27.14,23A4,4,0,0,1,30,20.14V23Z"></path> <path d="M7.51.71a1,1,0,0,0-.76-.1,1,1,0,0,0-.61.46l-2,3.43a1,1,0,0,0,1.74,1L7.38,2.94l5.07,2.93a1,1,0,0,0,1-1.74Z"></path> <path d="M24.49,31.29a1,1,0,0,0,.5.14.78.78,0,0,0,.26,0,1,1,0,0,0,.61-.46l2-3.43a1,1,0,1,0-1.74-1l-1.48,2.56-5.07-2.93a1,1,0,0,0-1,1.74Z"></path> <path d="M16,10a6,6,0,1,0,6,6A6,6,0,0,0,16,10Zm0,10a4,4,0,1,1,4-4A4,4,0,0,1,16,20Z"></path> </g></svg>, title: '100%', subtitle: 'Education Loan Available Without Collateral' },
          { icon: <svg fill="#000" viewBox="0 0 32.00 32.00" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff" strokeWidth="0.00032" width="50px" height="50px"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#CCCCCC" strokeWidth="0.128"></g><g id="SVGRepo_iconCarrier"> <path d="M31,7H1A1,1,0,0,0,0,8V24a1,1,0,0,0,1,1H31a1,1,0,0,0,1-1V8A1,1,0,0,0,31,7ZM25.09,23H6.91A6,6,0,0,0,2,18.09V13.91A6,6,0,0,0,6.91,9H25.09A6,6,0,0,0,30,13.91v4.18A6,6,0,0,0,25.09,23ZM30,11.86A4,4,0,0,1,27.14,9H30ZM4.86,9A4,4,0,0,1,2,11.86V9ZM2,20.14A4,4,0,0,1,4.86,23H2ZM27.14,23A4,4,0,0,1,30,20.14V23Z"></path> <path d="M7.51.71a1,1,0,0,0-.76-.1,1,1,0,0,0-.61.46l-2,3.43a1,1,0,0,0,1.74,1L7.38,2.94l5.07,2.93a1,1,0,0,0,1-1.74Z"></path> <path d="M24.49,31.29a1,1,0,0,0,.5.14.78.78,0,0,0,.26,0,1,1,0,0,0,.61-.46l2-3.43a1,1,0,1,0-1.74-1l-1.48,2.56-5.07-2.93a1,1,0,0,0-1,1.74Z"></path> <path d="M16,10a6,6,0,1,0,6,6A6,6,0,0,0,16,10Zm0,10a4,4,0,1,1,4-4A4,4,0,0,1,16,20Z"></path> </g></svg>, title: '29%', subtitle: 'of the batch placed internationally in 2024 with the highest CTC of ₹28.6 Lakh' },
        ].map((item, idx) => (
          <div key={idx} className="bg-[#fff5e1] hover:bg-[#5c1f1f] transition-colors text-black hover:text-white p-4 rounded text-center space-y-2">
            <div className="flex justify-center">{item.icon}</div>
            <div className="text-3xl font-bold">{item.title}</div>
            <div className="text-sm">{item.subtitle}</div>
          </div>
        ))}
      </div>
      </section>

      {/* Testimonials Section */}
      <section className=" bg-[#fff5e1] text-black py-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">MBA Success: From Classroom to Career</h2>
        <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
            <div className="bg-white text-black p-6 rounded-xl w-80">
              <p className="text-md italic">Learning is the essence of life. Taxila is one of the places that has always encouraged me and boosted my skills. I had an exciting experience in this college. In every aspect, Taxila if not top then one of the top colleges for MBA in Jaipur. I would like to thank each and everyone who made my journey far better including students, staff members, and faculties.</p>
              <div className="mt-4 font-bold">Sonal Oberoi</div>
              <p className="text-sm text-gray-600">Batch 2018-2020</p>
            </div>
            <div className="bg-white text-black p-6 rounded-xl w-80">
              <p className="text-md italic">The place where I am right now is all because of one reason and its Taxila. I am really grateful that I got admission in Taxila, which lead me to a bright future. The wisdom and experience of faculty have guided me to choose the right path in my career. I would like to thank the Management and faculties in Taxila for being supportive & for helping me achieve my dream.</p>
              <div className="mt-4 font-bold">Geetha M</div>
              <p className="text-sm text-gray-600">Batch 2018-2020</p>
            </div>
            <div className="bg-white text-black p-6 rounded-xl w-80">
              <p className="text-md italic">Taxila has provided me a platform to realize my potential and how to make the best use of my strengths. The guidance and the support of the professors throughout our course were incredible. Also, Till now If I face any tricky situation and seeking for help they are always ready with their guidance. For me, Taxila is on the list of top MBA colleges in India I feel fortunate to be a part of this.</p>
              <div className="mt-4 font-bold">Suraj Panigrahi </div>
              <p className="text-sm text-gray-600">Batch 2018-2020</p>
            </div>
        </div>
      </section>

      {/* Scholarships & Credit Transfer */}
      <section className="bg-[#5c1f1f] py-12 text-white px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-6">Scholarship Benefit Upto ₹2.00 Lakh Per Student</h2>
          <p className="mb-6">Students have been awarded with scholarships Based on thier CAT/XAT/MAT, Work Experinece and Acaedmic Performance</p>
          <h2 className="text-2xl font-bold mt-10 mb-4">100% Education Loan Available</h2>
          <p>Global Education, Local Roots</p>
        </div>
      </section>
        <Placement/>
        <Place2/>
        <Faculty />
<AboutTaxila/>

    </main>
  );
}
