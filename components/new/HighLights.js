import VideoCard from "./VideoCard";

export default function Highlights(){
    return (
           <section id="highlights" className="bg-gradient-to-r from-blue-100 to-yellow-200 py-16 font-sans">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8">
          {/* Left Image */}
          <div className="rounded-2xl overflow-hidden shadow-lg">
           <VideoCard />
          </div>

          {/* Right Details */}
          <div className="grid grid-cols-2 gap-1 sm:gap-6">
            <div className="bg-white text-black p-6 rounded-xl shadow">
              <h3 className="text-gray-600 border-b-1 border-gray-200">Placements</h3>
              <p className="text-4xl font-bold mt-2 ">28.60/-</p>
              <p className="text-sm text-gray-600">Lakh Highest Package Offered</p>
            </div>

            <div className="bg-white text-black p-6 rounded-xl shadow">
              <h3 className="text-gray-600 border-b-1 border-gray-200">Placements</h3>
              <p className="text-4xl font-bold mt-2">11.50/-</p>
              <p className="text-sm text-gray-600">Lakh Average MBA Placement 2025</p>
            </div>

            <div className="bg-white text-black p-6 rounded-xl shadow">
               <h3 className="text-gray-600 border-b-1 border-gray-200">Rank</h3>
              <p className="text-4xl font-bold mt-2">22<sup>nd</sup></p>
              <p className="text-sm text-gray-600">Best Private B School India 2025</p>
            </div>

            <div className="bg-white text-black p-6 rounded-xl shadow">
               <h3 className="text-gray-600 border-b-1 border-gray-200">Commencement Date</h3>
              <p className="text-2xl font-bold mt-2">July 2026</p>
              <p className="text-sm text-gray-600">For Cohort of T31</p>
            </div>
          </div>
        </div>
      </section>
    )
}