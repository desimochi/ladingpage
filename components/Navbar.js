import Image from 'next/image';
import logo from '@/public/taxila.png'
import aicte from '@/public/aicte-appproved-logo.png'

const Navbar = () => {
  return (
    <>
    <header className=" shadow bg-gradient-to-r from-blue-100 to-yellow-200 font-sans">
      <div className="max-w-screen-xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Left: Logo */}
        <div className="text-center">
          <Image src={logo} alt="Taxila Logo" width={100} height={60} />
        </div>
 <div className="text-center">
          <Image src={aicte} alt="AICTE Approved" width={120} height={80} className="mx-auto" />
        </div>
        {/* Center: Title */}
        <h2 className="text-2xl md:text-2xl font-normal font-mulish text-center flex-1 hidden sm:block">
          TAXILA BUSINESS SCHOOL
        </h2>
        
        {/* Right: AICTE Approved */}
        <div className="text-center flex items-center gap-2 ">
          <a href='tel:+918404040404' className='bg-black px-4 text-white rounded-md py-2'>Call Now</a>
          <p className='hidden sm:block'>+91 8404040404</p>
        </div>
      </div>
    </header>
    <h3 className="text-lg md:text-3xl font-normal font-mulish text-center flex-1 block sm:hidden bg-black/90 border-b-1 border-gray-700 py-2 text-white font-sans">
    TAXILA BUSINESS SCHOOL
  </h3>
  </>
  );
};

export default Navbar;