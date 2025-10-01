
export default function PGPTBMStats() {
  const stats = [
    {
      value: '29',
      suffix: '%',
      suffixColor: 'text-yellow-400',
      label: 'of the Batch Placed Internationally'
    },
    {
      value: '100',
      suffix: '+',
      suffixColor: 'text-yellow-400',
      label: 'Reputed Global Recruiters'
    },
    {
      value: '25.60',
      suffix: 'L',
      suffixColor: 'text-yellow-400',
      label: 'Highest Domestic Placement'
    }
  ];

  return (
    <div className=" bg-gray-50 flex items-center justify-center p-8 font-sans">
      <div className="max-w-7xl w-full">
        {/* Title with colorful underline */}
        <div className="mb-8">
          <h2 className="text-3xl md:text-3xl font-bold text-gray-900 mb-2">
            For PGDM in Business Analytics
          </h2>
          <svg className="w-48 h-3" viewBox="0 0 200 12" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="statsUnderline" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style={{stopColor: '#06B6D4', stopOpacity: 1}} />
                <stop offset="33%" style={{stopColor: '#10B981', stopOpacity: 1}} />
                <stop offset="66%" style={{stopColor: '#FBBF24', stopOpacity: 1}} />
                <stop offset="100%" style={{stopColor: '#F59E0B', stopOpacity: 1}} />
              </linearGradient>
            </defs>
            <path 
              d="M 0 6 Q 50 3, 100 6 T 200 6" 
              stroke="url(#statsUnderline)" 
              strokeWidth="6" 
              fill="none" 
              strokeLinecap="round"
            />
          </svg>
        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {stats.map((stat, idx) => (
            <div 
              key={idx}
              className="group hover:scale-105 transition-transform duration-300"
            >
              <div className="space-y-4">
                {/* Number with suffix */}
                <div className="flex items-start">
                  <span className="text-5xl md:text-5xl font-bold text-gray-900 leading-none">
                    {stat.value}
                  </span>
                  <span className={`text-xl md:text-xl font-bold ${stat.suffixColor} ml-1 leading-none`}>
                    {stat.suffix}
                  </span>
                </div>
                
                {/* Label */}
                <p className="text-gray-600 text-lg font-medium">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}