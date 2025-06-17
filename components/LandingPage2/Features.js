import award from '@/public/award.png'
export default function Features(){
    return(
       <div className="py-12 bg-white">
  <h3 className="font-bold text-3xl text-gray-900 text-center mb-6">Specialization</h3>
  <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 max-w-8xl mx-auto px-4 sm:px-20 flex-wrap">
    <div className="pt-3 pb-8 px-5 border bg-gray-100 rounded-md shadow-2xl">
      <h4 className="text-2xl pt-4 text-orange-700 font-bold">Business Analytics</h4>
      <hr className="border border-b.5 border-orange-600 mt-2 mb-3" />
      <p className="mt-1 text-gray-800 text-sm">Students engage in live AI-driven projects, learning tools like Python, Power BI, and Tableau, preparing for roles in predictive analytics, data strategy, and business intelligence consulting.</p>
    </div>
    <div className="py-3 px-5 border bg-gray-100 rounded-md shadow-2xl">
      <h4 className="text-2xl pt-4 text-orange-700 font-bold">Marketing</h4>
      <hr className="border border-b.5 border-orange-600 mt-2 mb-3" />
      <p className="mt-1 text-gray-800 text-sm">Marketing specialization focuses on digital strategy, consumer behavior, brand management, and performance marketing, with students working on live campaigns and analytics tools like Google Ads and Meta Suite.</p>
    </div>
    <div className="py-3 px-5 border bg-gray-100 rounded-md shadow-2xl">
      <h4 className="text-2xl pt-4 text-orange-700 font-bold">Finance</h4>
      <hr className="border border-b.5 border-orange-600 mt-2 mb-3" />
      <p className="mt-1 text-gray-800 text-sm">Finance students gain expertise in investment banking, fintech, and financial modeling using tools like Bloomberg Terminal and Excel VBA, securing both domestic and international roles in top firms.</p>
    </div>
    <div className="py-3 px-5 border bg-gray-100 rounded-md shadow-2xl">
      <h4 className="text-2xl pt-4 text-orange-700 font-bold">Human Resource</h4>
      <hr className="border border-b.5 border-orange-600 mt-2 mb-3" />
      <p className="mt-1 text-gray-800 text-sm">The HR program focuses on strategic talent management, organizational behavior, and HR analytics. Students work on live assessment centers and digital HR platforms during internships and projects.</p>
    </div>
    <div className="py-3 px-5 border bg-gray-100 rounded-md shadow-2xl">
      <h4 className="text-2xl pt-4 text-orange-700 font-bold">Operations</h4>
      <hr className="border border-b.5 border-orange-600 mt-2 mb-3" />
      <p className="mt-1 text-gray-800 text-sm">Operations specialization emphasizes supply chain strategy, lean systems, and ERP tools like SAP. Students apply Six Sigma methodologies in real-world logistics and manufacturing environments.</p>
    </div>
    <div className="py-3 px-5 border bg-gray-100 rounded-md shadow-2xl">
      <h4 className="text-2xl pt-4 text-orange-700 font-bold">Consultancy</h4>
      <hr className="border border-b.5 border-orange-600 mt-2 mb-3" />
      <p className="mt-1 text-gray-800 text-sm">This track builds analytical thinking and business acumen. Students solve real client problems, simulate boardroom consulting cases, and work closely with consulting firms on capstone projects.</p>
    </div>
  </div>
</div>

    )
}