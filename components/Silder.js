
import Image from 'next/image';

const images = [
  { image: '/yaksh.jpg', name: 'Yaksh Redhu', year: '2019-20', package: '01.00 Crore' },
  { image: '/Venkata-Sriraj.jpg', name: 'Venkata Shriraj', year: '2020-22', package: '28.6 LPA' },
  { image: '/nipun.jpg', name: 'Nipun Choudhary', year: '2023-24', package: 'HUL' },
  { image: '/bharat.jpg', name: 'Bharat Bairagi', year: '2022-23', package: 'Vedanta Limited' },
  { image: '/mohit.jpg', name: 'Mohit Sachdeva', year: '2023-24', package: 'PwC' },
  { image: '/aarushi.jpg', name: 'Aarushi Rastogi', year: '2023-24', package: 'Zoroastrian Bank' },
  { image: '/kamya.jpg', name: 'Kamya Sethi', year: '2023-24', package: 'PwC' },
  { image: '/shruti-gupta.jpg', name: 'Shruti Gupta', year: '2024-26', package: 'Mahima Group' },
  
];

export default function Slider() {

  return (
    <div className='bg-white pb-8 pt-8'>
      <h3 className="font-bold text-red-900 text-3xl mb-4 mt-4 text-center">Placement Taxila Business School</h3>
      <hr className="border-b-2 border-red-600 w-80 mx-auto mb-12" />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4  max-w-7xl mx-auto p-6">
  {images.map((src, idx) => (
    <div key={idx} className="flex flex-col items-center bg-white border-r-2 border-b-2 border-dashed border-gray-300 shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
      <Image
        src={src.image}
        alt={`${src.name} from ${src.year} batch placed at ${src.package}`}
        className="object-cover "
        width={300}
        height={200}
      />
      <div className="px-6 py-4 flex flex-col items-center text-center space-y-2">
        <p className="text-2xl px-2 font-bold text-red-600">{src.package}</p>
        <p className="text-xs px-2 font-bold text-red-600">══════════════════</p>
        <p className="text-xl font-bold text-black">{src.name}</p>
      </div>
    </div>
  ))}
</div>

    </div>
  );
}
