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
    <div id="fees" className=" bg-[#011F5B] flex items-center justify-center p-8 font-sans my-12 rounded-2xl">
      <div className="max-w-7xl w-full space-y-4">
        {/* Title with colorful underline */}
        <div className="mb-8">
          <h2 className="text-white text-3xl md:text-4xl font-bold mb-2">
            Fee Structure <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">(PGDM Course 2025)</span>
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
        <div className="flex flex-col sm:flex-row gap-3 w-full">
            <div className="border border-gray-700 rounded-2xl overflow-hidden backdrop-blur-sm bg-gray-900/30 w-full sm:w-1/3">
          {/* Table Header */}
          <div className="grid grid-cols-2 bg-gradient-to-r from-gray-800/50 to-gray-900/50 border-b border-gray-700">
            <div className="px-6 py-4 text-yellow-400 font-semibold text-sm">
              Type
            </div>
            <div className="px-6 py-4 text-cyan-400 font-semibold text-sm">
              Amount
            </div> 
          </div>

          {/* Table Body */}
          <div className="bg-white">
            {feeData.map((row, idx) => (
              <div 
                key={idx}
                className={`grid grid-cols-2 ${idx !== feeData.length - 1 ? 'border-b border-gray-200' : ''}`}
              >
                <div className="px-6 py-5 text-gray-900 font-medium">
                  {row.round}
                </div>
                <div className="px-6 py-5 text-gray-700">
                  {row.admission}
                </div>
                <div className="px-6 py-5 text-gray-700">
                  {row.tuition}
                </div>
                <div className="px-6 py-5 text-gray-900 font-medium">
                  {row.total}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="border border-gray-700 rounded-2xl overflow-hidden backdrop-blur-sm bg-gray-900/30 w-full sm:w-1/3">
          {/* Table Header */}
          <div className="grid grid-cols-2 bg-gradient-to-r from-gray-800/50 to-gray-900/50 border-b border-gray-700">
            <div className="px-6 py-4 text-yellow-400 font-semibold text-sm">
              Type
            </div>
            <div className="px-6 py-4 text-cyan-400 font-semibold text-sm">
              Amount
            </div> 
          </div>

          {/* Table Body */}
          <div className="bg-white">
            {feeData2.map((row, idx) => (
              <div 
                key={idx}
                className={`grid grid-cols-2 ${idx !== feeData.length - 1 ? 'border-b border-gray-200' : ''}`}
              >
                <div className="px-6 py-5 text-gray-900 font-medium">
                  {row.round}
                </div>
                <div className="px-6 py-5 text-gray-700">
                  {row.admission}
                </div>
                <div className="px-6 py-5 text-gray-700">
                  {row.tuition}
                </div>
                <div className="px-6 py-5 text-gray-900 font-medium">
                  {row.total}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="border border-gray-700 rounded-xl px-6 py-4 bg-gray-900/30 backdrop-blur-sm w-full sm:w-1/3">
          <p className="text-gray-300 text-sm flex items-start gap-3">
            <span className="text-cyan-400 mt-0.5">☞</span>
            <span>
              Any Government taxes like GST or others taxes if levied at any time will be paid by the student. 
            </span>
          </p>
           <p className="text-gray-300 text-sm flex items-start gap-3 mt-3">
            <span className="text-cyan-400 mt-0.5">☞</span>
            <span>
              Students have to submit 10,000/- as caution money which is refundable.
            </span>
          </p>
          <p className="text-gray-300 text-sm flex items-start gap-3 mt-3">
            <span className="text-cyan-400 mt-0.5">☞</span>
            <span>
             Books Charges  20,000/-, Uniform Charges  9,000/-.
            </span>
          </p>
          <p className="text-gray-300 text-sm flex items-start gap-3 mt-3">
            <span className="text-cyan-400 mt-0.5">☞</span>
            <span>
              Payments: to be made on Taxila Business School payable at Jaipur towards Registration and tuition fee.
            </span>
          </p>
           <p className="text-gray-300 text-sm flex items-start gap-3 mt-3">
            <span className="text-cyan-400 mt-0.5">☞</span>
            <span>
              Tuition Fee refund: as per AICTE norms.
            </span>
          </p>
        </div>
        </div>

        {/* GST Note */}
        
      </div>
    </div>
  );
}