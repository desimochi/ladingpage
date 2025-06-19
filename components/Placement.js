import Image from "next/image"
import Link from "next/link"
export default function Placement(){
    return(
        <div className="mt-12 mb-12">
            <div className="max-w-7xl mx-auto p-4">
            <h3 className="font-bold text-3xl mb-4 text-center">Taxila Business School</h3>
            <hr className="border-b-2 border-red-600 w-80 mx-auto mb-12" />
            <div className="flex flex-col gap-4 sm:flex-row">
            <div className="flex-1 bg-white shadow-2xl rounded-md">
          <div className="relative w-full">
          <iframe width="360" height="215" src="https://www.youtube.com/embed/L2EGID9BsEE?si=MFRgmyIc1fwP4Eij" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
          <div>
            <p className="text-center text-black font-bold mt-4 text-xl mb-4 px-2"> Campus Tour Taxila Business School</p>
          </div>
        </div>
       <div className="flex-1 bg-white shadow-2xl rounded-md">
          <div className="relative w-full">
         <iframe width="360" height="215" src="https://www.youtube.com/embed/XbJWE9RfXOI?si=_tnxbKO-c304Ily1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
          <div>
            <p className="text-center text-black font-bold mt-4 text-xl mb-4 px-2"> Sanskar Tripathi Placed at Asian Paints</p>
          </div>
        </div>
        <div className="flex-1 bg-white shadow-2xl rounded-md">
          <div className="relative w-full">
          <iframe width="360" height="215" src="https://www.youtube.com/embed/HAKHZjZm4ts?si=PrBIandro-8KXeJf" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
          <div>
            <p className="text-center text-black font-bold mt-4 text-xl mb-4 px-2"> Pragati Verma Placed at Accenture</p>
          </div>
        </div>
            </div>
            </div>
        </div>
    )
}