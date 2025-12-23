import { Globe, Building2, Briefcase, TrendingUp } from "lucide-react";

export default function PGPTBMStats() {
  const stats = [
    {
      value: "29",
      suffix: "%",
      suffixColor: "text-yellow-400",
      label: "of the Batch Placed Internationally",
      icon: Globe,
    },
    {
      value: "71",
      suffix: "%",
      suffixColor: "text-yellow-400",
      label: "of the Batch Placed Nationally",
      icon: Building2,
    },
    {
      value: "100",
      suffix: "+",
      suffixColor: "text-yellow-400",
      label: "Reputed Global Recruiters",
      icon: Briefcase,
    },
    {
      value: "25.60",
      suffix: "L",
      suffixColor: "text-yellow-400",
      label: "Highest Domestic Placement",
      icon: TrendingUp,
    },
  ];

  return (
    <div className="bg-gray-50 flex items-center justify-center p-8 font-sans">
      <div className="max-w-7xl w-full">
        {/* Title */}
        <div className="mb-8">
          <h2 className="text-3xl md:text-3xl font-bold text-gray-900 mb-2">
            For PGDM in Business Analytics
          </h2>
          <svg className="w-48 h-3" viewBox="0 0 200 12">
            <defs>
              <linearGradient id="statsUnderline" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#06B6D4" />
                <stop offset="33%" stopColor="#10B981" />
                <stop offset="66%" stopColor="#FBBF24" />
                <stop offset="100%" stopColor="#F59E0B" />
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

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="group hover:scale-105 transition-transform duration-300"
              >
                <div className="space-y-4">
                  {/* Icon */}
                  <Icon className="w-10 h-10 text-gray-400 group-hover:text-yellow-400 transition-colors" />

                  {/* Number */}
                  <div className="flex items-start">
                    <span className="text-5xl md:text-5xl font-bold text-gray-900 leading-none">
                      {stat.value}
                    </span>
                    <span
                      className={`text-xl md:text-xl font-bold ${stat.suffixColor} ml-1 leading-none`}
                    >
                      {stat.suffix}
                    </span>
                  </div>

                  {/* Label */}
                  <p className="text-gray-600 text-lg font-medium">
                    {stat.label}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
