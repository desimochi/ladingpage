export default function Fees() {
  return (
    <section >
    <h3 className="px-12 text-3xl font-bold text-gray-800">Fees</h3>
    <div className="max-w-6xl mx-auto p-6 grid md:grid-cols-2 gap-6 text-sm text-gray-800">
      {/* Based on Entrance Exam */}
      <div className="shadow-md border border-gray-200">
        <div className="bg-red-700 text-white font-semibold px-4 py-2">
          Tution Fee : Plan-1
        </div>
        <table className="w-full border border-collapse">
          <tbody>
            <tr className="border">
              <td className="p-2 border">Registration Fee</td>
              <td className="p-2 border">Rs. 50,000/-</td>
            </tr>
            <tr className="border">
              <td className="p-2 border">Lump Sum (One Time)</td>
              <td className="p-2 border">Rs. 9,00,000/-</td>
            </tr>
            <tr className="border">
              <td className="p-2 border">Total</td>
              <td className="p-2 border">Rs. 9,50,000/-</td>
            </tr>
            <tr className="border">
              <td className="p-2 border">Caution Deposit (Refundable)</td>
              <td className="p-2 border">Rs. 10,000</td>
            </tr>
          </tbody>
        </table>
      </div>
<div className="shadow-md border border-gray-200">
        <div className="bg-red-700 text-white font-semibold px-4 py-2">
          Tution Fee : Plan-2
        </div>
        <table className="w-full border border-collapse">
          <tbody>
            <tr className="border">
              <td className="p-2 border">Registration Fee</td>
              <td className="p-2 border">Rs. 50,000/-</td>
            </tr>
            <tr className="border">
              <td className="p-2 border">1st Installment</td>
              <td className="p-2 border">Rs. 4,85,000/-</td>
            </tr>
            <tr className="border">
              <td className="p-2 border">2nd Installment</td>
              <td className="p-2 border">Rs. 4,85,000/-</td>
            </tr>
            <tr className="border">
              <td className="p-2 border">Total</td>
              <td className="p-2 border">Rs. 10,20,000.00/-</td>
            </tr>
            <tr className="border">
              <td className="p-2 border">Caution Deposit (Refundable)</td>
              <td className="p-2 border">Rs. 10,000</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    </section>
  )
}
