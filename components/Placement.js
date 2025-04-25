import Image from "next/image"
import Link from "next/link"
export default function Placement(){
    return(
        <div className="bg-white mt-12 mb-12">
            <div className="max-w-7xl mx-auto p-4">
            <h3 className="font-bold text-3xl mb-4 text-center">Placement 2023-25</h3>
            <hr className="border-b-2 border-red-600 w-80 mx-auto mb-12" />
            <div className="flex flex-col gap-4 sm:flex-row">
            <div className="flex-1 bg-white shadow-2xl rounded-md">
          <div className="relative w-full">
            <Image
              src="/pragati-youtube.jpg"
              alt="Cohort Video"
              width={400}
              height={400}
              objectFit="cover"
              className="rounded"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <Link href="https://youtu.be/jcsV5HJN9Rw?si=swivOe8-z9uVX0s7" target='_blank' className="bg-red-600 text-white px-4 py-3 rounded-full shadow-lg text-xl cursor-pointer">
                ▶
              </Link>
            </div>
          </div>
          <div>
            <p className="text-center font-bold mt-4 text-xl mb-4">Pragati Verma Placed at Accenture</p>
          </div>
        </div>
        <div className="flex-1 bg-white shadow-2xl rounded">
          <div className="relative w-full">
            <Image
              src="/vish.png"
              alt="Cohort Video"
              width={400}
              height={400}
              objectFit="cover"
              className="rounded"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <Link href="https://youtu.be/jcsV5HJN9Rw?si=swivOe8-z9uVX0s7" target='_blank' className="bg-red-600 text-white px-4 py-3 rounded-full shadow-lg text-xl cursor-pointer">
                ▶
              </Link>
            </div>
          </div>
          <div>
            <p className="text-center font-bold mt-4 text-xl mb-4">Vishnu Priya Placed at Zoroastrian Bank</p>
          </div>
        </div>
        <div className="flex-1 bg-white shadow-2xl rounded">
          <div className="relative w-full">
            <Image
              src="/aarushi-youtube.jpg"
              alt="Cohort Video"
              width={400}
              height={400}
              objectFit="cover"
              className="rounded"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <Link href="https://youtu.be/jcsV5HJN9Rw?si=swivOe8-z9uVX0s7" target='_blank' className="bg-red-600 text-white px-4 py-3 rounded-full shadow-lg text-xl cursor-pointer">
                ▶
              </Link>
            </div>
          </div>
          <div>
            <p className="text-center font-bold mt-4 text-xl mb-4">Aarushi Rastogi Placed at Zoroastrian Bank</p>
          </div>
        </div>
        <div className="flex-1 bg-white shadow-2xl rounded">
          <div className="relative w-full">
            <Image
              src="/big4.jpg"
              alt="Cohort Video"
              width={400}
              height={400}
              objectFit="cover"
              className="rounded"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <Link href="https://youtu.be/jcsV5HJN9Rw?si=swivOe8-z9uVX0s7" target='_blank' className="bg-red-600 text-white px-4 py-3 rounded-full shadow-lg text-xl cursor-pointer">
                ▶
              </Link>
            </div>
          </div>
          <div>
            <p className="text-center font-bold mt-4 text-xl mb-4">Students Placed at Big 4 - Cracked PwC Interview</p>
          </div>
        </div>
            </div>
            </div>
        </div>
    )
}