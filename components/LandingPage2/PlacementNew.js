import FormWidget from "../NPFForm";
import her1 from "@/public/hero3.jpg" 
import Image from "next/image";
export default function PlacementNew() {
  return (
    <>
      <section className=" text-white py-12">

        <div className="max-w-7xl items-center mx-auto py-3 sm:py-12 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-10 items-center">
            <div className="w-full lg:w-2/3">
             <h2  className="text-4xl font-sans text-white mb-3 font-semibold">PGDM Business Analytics,
with Triple Specialization</h2>
            <hr className="border border-b-2 border-orange-500 mb-4 w-[180px]" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { label: "Average Package", value: "Rs. 11.50 LPA" },
                { label: "Highest Package", value: "Rs. 28.60 LPA" },
                { label: "Placement Record", value: "100%" },
                { label: "Placed Internationally", value: "29%" },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-xl p-6 text-center shadow hover:shadow-md transition duration-200"
                >
                  <h5 className="text-orange-600 font-bold text-3xl">
                    {item.value}
                  </h5>
                  <p className="text-lg font-semibold text-gray-800 mt-2">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
            </div>
            {/* Form Section */}
            <div className="w-full lg:w-2/3">
              <div className="bg-white rounded-xl p-6 shadow">
                <FormWidget />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
