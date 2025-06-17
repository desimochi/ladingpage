export default function Scholarships() {
  return (
    <div className="bg-white py-12">
    <h3 className="px-12 text-3xl font-bold text-gray-800 text-center mb-3">Scholarships</h3>
    <div className="max-w-6xl mx-auto p-6 grid md:grid-cols-2 gap-6 text-sm text-gray-800">
      {/* Based on Entrance Exam */}
      <div className="shadow-md border border-gray-200">
        <div className="bg-red-700 text-white font-semibold px-4 py-2">
          Based on Entrance Exam
        </div>
        <table className="w-full border border-collapse">
          <tbody>
            <tr className="border">
              <td className="p-2 border">CAT/XAT 90% And Above</td>
              <td className="p-2 border">2 Lakh</td>
            </tr>
            <tr className="border">
              <td className="p-2 border">CMAT 90% And Above</td>
              <td className="p-2 border">1 Lakh</td>
            </tr>
            <tr className="border">
              <td className="p-2 border">CAT/XAT 80% And Above</td>
              <td className="p-2 border">1 Lakh</td>
            </tr>
            <tr className="border">
              <td className="p-2 border">CMAT 80% And Above</td>
              <td className="p-2 border">50,000</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Based on Academic Performance */}
      <div className="shadow-md border border-gray-200">
        <div className="bg-red-700 text-white font-semibold px-4 py-2">
          Based on Academic Performance
        </div>
        <table className="w-full border border-collapse">
          <tbody>
            <tr className="border">
              <td className="p-2 border">
                Student Score of more than 75% in 10th, 12th and Graduation
              </td>
              <td className="p-2 border">1 Lakh</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Based on Work Experience */}
      <div className="shadow-md border border-gray-200 col-span-full md:col-span-2">
        <div className="bg-red-700 text-white font-semibold px-4 py-2">
          Based on Work Experience
        </div>
        <table className="w-full border border-collapse">
          <tbody>
            <tr className="border">
              <td className="p-2 border">Corporate Experience Minimum 3 Years</td>
              <td className="p-2 border">2 Lakh</td>
            </tr>
            <tr className="border">
              <td className="p-2 border">Corporate Experience Minimum 2 Years</td>
              <td className="p-2 border">1 Lakh</td>
            </tr>
            <tr className="border">
              <td className="p-2 border">Own startup Minimum 3 Years</td>
              <td className="p-2 border">2 Lakh</td>
            </tr>
            <tr className="border">
              <td className="p-2 border">Own startup Minimum 2 Years</td>
              <td className="p-2 border">1 Lakh</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    </div>
  )
}
