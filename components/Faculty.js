
import Image from 'next/image';

const images = [
  { image: '/sanjoli-mam.jpg', name: 'Dr. Sanjoli Jain', package: 'Ph.D., MBA' },
  { image: '/dr-riddhi-mam.jpg', name: 'Dr. Riddhi Tambi',  package: 'Ph.D., NET, MBA' },
  { image: '/alka-mam.jpg', name: 'Dr. Alka Jain',  package: 'Ph.D., MBA' },
  { image: '/rajat-sir.jpg', name: 'Prof. Rajat Bohra',  package: 'IIM A Alumni, Dean' },
]
export default function Faculty() {

  return (
    <div className='bg-gray-100 pb-8 pt-8'>
      <h3 className="font-bold text-3xl mb-4 mt-4 text-center">Faculty and Research</h3>
      <hr className="border-b-2 border-red-600 w-80 mx-auto mb-12" />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 max-w-7xl mx-auto p-6">
  {images.map((src, idx) => (
    <div key={idx} className="flex flex-col items-center bg-white  shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
      <Image
        src={src.image}
        alt={`${src.name} - ${src.package} faulty at Taxila Business School`}
        className="object-cover border-2 border-gray-900"
        width={300}
        height={200}
      />
      <div className="px-6 py-4 flex flex-col items-center text-center space-y-2">
        <p className="text-2xl px-2 font-bold font-serif text-red-600">{src.name}</p>
        <p className=" font-semibold text-black">{src.package}</p>
      </div>
    </div>
  ))}
</div>

    </div>
  );
}
