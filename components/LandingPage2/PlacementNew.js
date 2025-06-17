export default function PlacementNew(){
    return(
        <>
         <h3 className="uppercase text-center text-red-700 font-bold text-4xl pt-12">Careers</h3>
         <hr className="border border-b-2 border-orange-600 w-[120px] mx-auto" />
        <div className=" max-w-7xl mx-auto flex flex-col sm:flex-row text-black items-center py-8 gap-6">
           
            <div className="sm:w-1/2 sm:border-r-2 border-gray-300 p-2">
            <p>Taxila Business School ensures consistent 100% placement, offering a strong ROI given placement packages versus program fee . Their international placement percentage is among the highest for non-metro B‑schools in India.</p>
            </div>
            <div className="sm:w-1/2 pl-16 flex flex-col gap-4">
                <div>
                    <h5 className="text-orange-600 font-bold text-4xl">Rs. 28.60 LPA</h5>
                    <p className="text-xl font-bold text-black">Highest Package</p>
                </div>
                <div>
                    <h5 className="text-orange-600 font-bold text-4xl">Rs. 11.50 LPA</h5>
                    <p className="text-xl font-bold text-black">Average Package</p>
                </div>
                <div>
                    <h5 className="text-orange-600 font-bold text-4xl">Rs. 25.60 LPA</h5>
                    <p className="text-xl font-bold text-black">Highest Domestice Package</p>
                </div>
                <div>
                    <h5 className="text-orange-600 font-bold text-4xl">80+</h5>
                    <p className="text-xl font-bold text-black">Recruiters</p>
                </div>
            </div>
        </div>
        </>
    )
}