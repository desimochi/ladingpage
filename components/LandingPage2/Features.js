import award from '@/public/award.png'
export default function Features(){
    return(
        <div className=" py-12 bg-white">
            <div className="flex flex-col sm:flex-row gap-4 max-w-8xl mx-auto px-4 sm:px-20">
                <div className="pt-3 pb-8 px-5 border  bg-gray-100 rounded-md shadow-2xl">
                    <h4 className="text-2xl pt-4 text-orange-700 font-bold">SAP Hana Training</h4>
                      <hr className='border border-b.5 border-orange-600 mt-2 mb-3'/>
                    <p className="mt-1 text-gray-800 text-sm">Taxila Business School offers comprehensive SAP HANA training, covering real-time data processing, analytics, and enterprise solutions. Industry experts guide students through hands-on sessions, enhancing their skills for global opportunities.</p>
                </div>
                <div className="py-3 px-5 border  bg-gray-100 rounded-md shadow-2xl">
                    <h4 className="text-2xl pt-4 text-orange-700 font-bold">Business Analytics</h4>
                      <hr className='border border-b.5 border-orange-600 mt-2 mb-3'/>
                    <p className="mt-1 text-gray-800 text-sm">Taxila Business School’s Business Analytics graduates often work on live AI-driven projects with companies before placement, gaining hands-on experience. Many secure niche roles in predictive modeling, fintech analytics, and AI strategy.</p>
                </div>
                <div className="py-3 px-5 border  bg-gray-100 rounded-md shadow-2xl">
                    <h4 className="text-2xl pt-4 text-orange-700 font-bold">International Placement</h4>
                      <hr className='border border-b.5 border-orange-600 mt-2 mb-3'/>
                    <p className="mt-1 text-gray-800 text-sm">The institute offers 100% placements, with around 30% of students receiving international offers. International roles offer packages up to ₹28.6 LPA, with an average of ₹26.2 LPA.</p>
                </div>
                <div className="py-3 px-5 border  bg-gray-100 rounded-md shadow-2xl">
                    <h4 className="text-2xl pt-4 text-orange-700 font-bold">Upgraded Curriculum</h4>
                    <hr className='border border-b.5 border-orange-600 mt-2 mb-3'/>
                    <p className="mt-1 text-gray-800 text-sm">The curriculum is designed in collaboration with industry experts, ensuring real-world relevance. It integrates live projects, case studies, and the latest tools in analytics, preparing students for immediate industry impact.</p>
                </div>
            </div>
        </div>
    )
}