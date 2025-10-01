
import { Building, Square, FileText, SheetIcon, Megaphone, IndianRupee, PersonStandingIcon, UserCheck, Podcast } from "lucide-react";

export default function CoachesSection() {
  const modules = [
    { code: 'AIML', title: 'AI & ML', color: 'from-yellow-400 to-yellow-500' },
    { code: 'COMM', title: 'Communication &\nSelf Development', color: 'from-gray-700 to-gray-800' },
    { code: 'FIFI', title: 'Finance and\nFintech', color: 'from-gray-800 to-gray-900' },
    { code: 'MAST', title: 'Management &\nStrategy', color: 'from-yellow-600 to-orange-600' },
    { code: 'SAMA', title: 'Sales & Marketing', color: 'from-gray-700 to-gray-800' }
  ];
  const coaches = [
    {
      icon: <SheetIcon className="w-6 h-6 text-gray-100" />,
      title: "Business Analytics",
      description:
        "Students engage in live AI-driven projects, learning tools like Python, Power BI, and Tableau, preparing for roles in predictive analytics, data strategy, and business intelligence consulting.",
    },
    {
      icon: <Megaphone className="w-6 h-6 text-gray-100" />,
      title: "Marketing",
      description:
        "Marketing specialization focuses on digital strategy, consumer behavior, brand management, and performance marketing, with students working on live campaigns and analytics tools like Google Ads and Meta Suite.",
    },
    {
      icon: <IndianRupee className="w-6 h-6 text-gray-100" />,
      title: "Finance",
      description:
        "Finance students gain expertise in investment banking, fintech, and financial modeling using tools like Bloomberg Terminal and Excel VBA, securing both domestic and international roles in top firms.",
    },
    {
      icon: <PersonStandingIcon className="w-6 h-6 text-gray-100" />,
      title: "Human Resource",
      description:
        "The HR program focuses on strategic talent management, organizational behavior, and HR analytics. Students work on live assessment centers and digital HR platforms during internships and projects.",
    },
    {
      icon: <UserCheck className="w-6 h-6 text-gray-100" />,
      title: "Operations",
      description:
        "Operations specialization emphasizes supply chain strategy, lean systems, and ERP tools like SAP. Students apply Six Sigma methodologies in real-world logistics and manufacturing environments.",
    },
    {
      icon: <Podcast className="w-6 h-6 text-gray-100" />,
      title: "Consultancy",
      description:
        "This track builds analytical thinking and business acumen. Students solve real client problems, simulate boardroom consulting cases, and work closely with consulting firms on capstone projects.",
    },
  ];

  return (
    <>
    <div className=" flex items-center justify-center p-8 font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-4">
            <div className="space-y-4">
              <p className="text-gray-600 font-semibold text-sm tracking-wider uppercase">
                ★ INNOVATIVE SPECIALISATIONS
              </p>
              <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                Explore a Future-Ready{' '}
                <span className="relative inline-block">
                  Curriculum
                  <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 15 Q 150 5, 295 15" stroke="#FCD34D" strokeWidth="8" fill="none" strokeLinecap="round"/>
                  </svg>
                </span>
              </h3>
            </div>
            
            <p className="text-gray-600 text-lg leading-relaxed max-w-xl">
              Study core industry-focused modules to gain practical knowledge and skills for the digital age.
            </p>
          </div>

          {/* Right Module Cards */}
          <div className="relative">
          

            {/* Decorative Elements */}
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-yellow-300 rounded-full opacity-20 blur-3xl"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-orange-300 rounded-full opacity-20 blur-3xl"></div>
          </div>
        </div>
      </div>
    </div>
      <div className="max-w-7xl mx-auto px-6 lg:px-4   ">
      

        <div className="grid md:grid-cols-3 gap-12">
          {coaches.map((coach, index) => (
            <div key={index} className="flex flex-col ">
              {/* Icon with gradient border */}
              <div className="w-14 h-14 flex items-center justify-center rounded-full border-2 border-gradient-to-r from-blue-100 to-yellow-200 bg-gray-900 mb-4">
                {coach.icon}
              </div>
              <h3 className="font-semibold text-lg mb-2 text-gray-900">{coach.title}</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                {coach.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
