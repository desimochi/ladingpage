export default function AdmissionInfo() {
  return (
    <>
      <h3 className="px-12 text-3xl font-bold text-gray-800">Admission Process</h3>
 
    <div className="max-w-6xl mx-auto px-4 py-8 text-gray-800">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Form Filling Guideline */}
        <div>
          <h2 className="text-2xl font-semibold mb-4 border-b-2 border-red-500 inline-block">
            Form Filling Guideline
          </h2>
          <ul className="space-y-3 text-sm leading-relaxed list-none">
            <li>
              ✅ For filing application for the first time choose Apply Now
            </li>
            <li>
              ✅ To edit your saved application, go to “Login” under Apply Online.
            </li>
            <li>
              ✅ Your password for editing the application form will be sent to your registered email address.
            </li>
            <li>
              ✅ Rows with asterisk (*) are compulsory to fill.
            </li>
            <li>
              ✅ You may fill your application form in multiple events. Once you have entered in your details kindly click “Save” button to save your application for Re-Edit next time. Once you have submitted your form, data cannot be changed.
            </li>
            <li className="text-red-600 font-medium">
              ❌ Payment: The payment for the application form Rs.1200.00/- can be done only after clicking the “Submit” button. The payment can be done through Debit Card, Credit Card or online transfer.
            </li>
          </ul>
        </div>

        {/* Selection & Waiting List */}
        <div>
          <h2 className="text-2xl font-semibold mb-4 border-b-2 border-red-500 inline-block">
            Selection & Waiting List
          </h2>
          <ul className="space-y-3 text-sm leading-relaxed list-none">
            <li>
              ✅ The selected candidates need to deposit Rs.50,000.0/- against registration fee as mentioned in your selection offer email, failing which the candidature will get canceled and the seat will be passed to the next candidate in waiting.
            </li>
            <li>
              ✅ If the name does not appear in the selection list, the candidate may deposit Rs.25000/- (irrevocable) to keep her/his name on the waiting list alive. On the cancellation/ dropout of students, the seat will be offered to such candidates on the priority/ merit basis. In case of non-selection, Rs.25000/- will be refunded back to the student on the 10th day of Batch start. In case of selection Rs. 25000/- will be adjusted against registration fee.
            </li>
            <li>
              ✅ In case of any help required you may call us between 10:00 AM to 9:00 PM on 8404040404, or email us at admission@taxila.in.
            </li>
          </ul>
        </div>
      </div>

      {/* Selection Process */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-4 border-b-2 border-red-500 inline-block">
          Selection Process
        </h2>
        <ul className="space-y-3 text-sm leading-relaxed list-none">
          <li>
            ✅ Personal Interview: Google-Meet/Zoom round: it has 20 marks.
          </li>
          <li>
            ✅ Online case study analysis under controlled environment: it has 20 marks.
          </li>
        </ul>
      </div>
    </div>
    </>
  )
}
