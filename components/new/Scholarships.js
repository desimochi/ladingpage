import FormWidget from "@/components/NPFForm";

export default function Scholarships2() {
  return (
    <section id="scholarships" className="bg-white font-sans max-w-7xl mx-auto p-3">
    <div>
            <p className="text-gray-500 font-semibold text-sm">
            Scholarships at Top Management College in India
            </p>
            <h2 className="text-3xl font-bold text-black">Scholarships for PGDM Admisisons 2026</h2>
          </div>
    <div className=" mt-6 grid md:grid-cols-2 gap-6 text-sm text-gray-800">
      {/* Based on Entrance Exam */}
      <div>
      <div className=" border border-gray-200 rounded-2xl">
        <div className="bg-[#011F5B] text-yellow-300 font-semibold px-4 py-2 text-center">
          Based on Entrance Exam
        </div>
        <table className="w-full border border-collapse rounded-2xl">
          <tbody>
            <tr className="border border-gray-300 rounded-2xl">
              <td className="p-2 border border-gray-300 rounded-2xl">CAT/XAT 90% And Above</td>
              <td className="p-2 border border-gray-300 rounded-2xl">2 Lakh</td>
            </tr>
            <tr className="border rounded-2xl">
              <td className="p-2 border border-gray-300 rounded-2xl">CMAT 90% And Above</td>
              <td className="p-2 border border-gray-300 rounded-2xl">1 Lakh</td>
            </tr>
            <tr className="border rounded-2xl">
              <td className="p-2 border border-gray-300 rounded-2xl">CAT/XAT 80% And Above</td>
              <td className="p-2 border border-gray-300 rounded-2xl">1 Lakh</td>
            </tr>
            <tr className="border rounded-2xl">
              <td className="p-2 border border-gray-300 rounded-2xl">CMAT 80% And Above</td>
              <td className="p-2 border border-gray-300 rounded-2xl">50,000</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Based on Academic Performance */}
      <div className=" border border-gray-300 mt-4 mb-4">
        <div className="bg-[#011F5B] text-yellow-300 text-center font-semibold px-4 py-2">
          Based on Academic Performance
        </div>
        <table className="w-full border border-collapse">
          <tbody>
            <tr className="border border-gray-300">
              <td className="p-2 border border-gray-300">
                Student Score of more than 75% in 10th, 12th and Graduation
              </td>
              <td className="p-2 border border-gray-300">1 Lakh</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Based on Work Experience */}
      <div className=" border border-gray-200 col-span-full md:col-span-2">
        <div className="bg-[#011F5B] text-yellow-300 text-center font-semibold px-4 py-2">
          Based on Work Experience
        </div>
        <table className="w-full border border-collapse">
          <tbody>
            <tr className="border">
              <td className="p-2 border border-gray-300">Corporate Experience Minimum 3 Years</td>
              <td className="p-2 border border-gray-300">2 Lakh</td>
            </tr>
            <tr className="border">
              <td className="p-2 border border-gray-300">Corporate Experience Minimum 2 Years</td>
              <td className="p-2 border border-gray-300">1 Lakh</td>
            </tr>
            <tr className="border">
              <td className="p-2 border border-gray-300">Own startup Minimum 3 Years</td>
              <td className="p-2 border border-gray-300">2 Lakh</td>
            </tr>
            <tr className="border">
              <td className="p-2 border border-gray-300">Own startup Minimum 2 Years</td>
              <td className="p-2 border border-gray-300">1 Lakh</td>
            </tr>
          </tbody>
        </table>
      </div>
</div>
<FormWidget />
    </div>
    </section>
  )
}
