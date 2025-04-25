import FormWidget from "./NPFForm";
// components/Hero.js
export default function Hero() {
    const stats = [
        { value: "28.60 LPA", label: "Highest Placement" },
        { value: "11.50 LPA", label: "Average Placement" },
        { value: "25.80 LPA", label: "Highest Domestic Placement" },
        { value: "80+", label: "Trusted Placement Partners" },
      ];
    return (
    <>
    <div className="block sm:hidden">
     <FormWidget  />
     </div>
      <div className="relative text-white">
       
        <div className="relative flex flex-col  justify-center  text-center bg-opacity-60 bg-cover bg-center" style={{ backgroundImage: "url('https://taxila.in/img/taxila.jpg')" }}>
            <div className="z-10 bg-black/70   min-h-screen w-full ">
                <div className="flex text-start max-w-7xl mt-12 mx-auto">            
                    <div className="w-full sm:w-1/2 p-2">
            <div className="mb-4">
            <span className="inline-block rounded-full bg-white/10 px-4 py-1 text-sm text-white ring-1 ring-white/20 backdrop-blur-sm">
              Taxila Buiness School Admisisons Open
            </span>
          </div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-2xl lg:text-5xl">
            PGDM Business Analytics,<br className="hidden sm:block" />
with Triple Specialization

          </h1>
        <hr className="border border-b-2 border-yellow-400 mt-4 mb-6 w-40"/>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-yellow-500 bg-opacity-80 text-center p-6 rounded-lg shadow-lg"
          >
            <p className="text-3xl font-bold text-white">{stat.value}</p>
            <p className="mt-2 text-white">{stat.label}</p>
          </div>
        ))}
            </div>
          </div>
          <div className="w-full hidden sm:block sm:w-1/2 p-2">
          <FormWidget />
          </div>
            </div>
          </div>
        </div>
      </div>
      </>
    );
  }
  