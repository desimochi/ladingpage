export default function PlacementNew(){
    return(
        <>
         <h3 className="uppercase text-center text-white font-bold text-4xl pt-12">Placements</h3>
         <hr className="border border-b-2 border-orange-600 w-[120px] mx-auto" />
        <div className=" max-w-7xl mx-auto text-black items-center py-8 gap-6">
           
            <div className="max-w-7xl mx-auto flex flex-col sm:flex-row gap-4 px-4">
                <div className="border bg-white px-4 py-6 rounded-xl text-center">
                    <h5 className="text-orange-600 font-bold text-3xl sm:text4xl">Rs. 28.60 LPA</h5>
                    <p className="text-xl font-bold text-black">Highest Package</p>
                </div>
                <div className="border bg-white px-4 py-6 rounded-xl text-center">
                    <h5 className="text-orange-600 font-bold text-3xl sm:text4xl">Rs. 11.50 LPA</h5>
                    <p className="text-xl font-bold text-black">Average Package</p>
                </div>
                <div className="border bg-white px-4 py-6 rounded-xl text-center">
                    <h5 className="text-orange-600 font-bold text-3xl sm:text4xl">Rs. 25.60 LPA</h5>
                    <p className="text-xl font-bold text-black">Highest Domestic Package</p>
                </div>
                <div className="border bg-white px-4 py-6 rounded-xl text-center ">
                    <h5 className="text-orange-600 font-bold text-3xl sm:text4xl">80+</h5>
                    <p className="text-xl font-bold text-black">Global Recruiters</p>
                </div>
            </div>
        </div>
        </>
    )
}