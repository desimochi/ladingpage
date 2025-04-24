import Image from 'next/image';
import logo from '@/public/taxila.png'
import aicte from '@/public/aicte-appproved-logo.png'

const Navbar = () => {
  return (
    <>
    <header className="bg-white shadow">
      <div className="max-w-screen-xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Left: Logo */}
        <div className="text-center">
          <Image src={logo} alt="Taxila Logo" width={120} height={80} />
        </div>

        {/* Center: Title */}
        <h2 className="text-2xl md:text-3xl font-normal font-mulish text-center flex-1 hidden sm:block">
          TAXILA BUSINESS SCHOOL
        </h2>
        
        {/* Right: AICTE Approved */}
        <div className="text-center">
          <Image src={aicte} alt="AICTE Approved" width={120} height={80} className="mx-auto" />
        </div>
      </div>
    </header>
    <h3 className="text-xl md:text-3xl font-normal font-mulish text-center flex-1 block sm:hidden bg-red-600 py-2 text-white">
    TAXILA BUSINESS SCHOOL
  </h3>
  </>
  );
};

export default Navbar;