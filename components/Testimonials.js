// components/PureSlider.js

export default function PureSlider() {
    return (
      <div className="w-full max-w-xl mx-auto mt-10 relative">
        {/* Radio Buttons for Slides */}
        <input type="radio" name="slider" id="slide1" className="hidden peer/slide1" defaultChecked />
        <input type="radio" name="slider" id="slide2" className="hidden peer/slide2" />
        <input type="radio" name="slider" id="slide3" className="hidden peer/slide3" />
  
        {/* Slides */}
        <div className="relative h-64 overflow-hidden rounded-lg shadow-lg">
          <div className="absolute inset-0 flex transition-all duration-500">
            {/* Slide 1 */}
            <div className="w-full shrink-0 peer-checked/slide1:translate-x-0 peer-checked/slide2:-translate-x-full peer-checked/slide3:-translate-x-[200%] transition-transform">
              <div className="h-full bg-red-400 flex items-center justify-center text-white text-2xl font-bold">
                Slide 1
              </div>
            </div>
            {/* Slide 2 */}
            <div className="w-full shrink-0 peer-checked/slide1:translate-x-full peer-checked/slide2:translate-x-0 peer-checked/slide3:-translate-x-full transition-transform">
              <div className="h-full bg-blue-400 flex items-center justify-center text-white text-2xl font-bold">
                Slide 2
              </div>
            </div>
            {/* Slide 3 */}
            <div className="w-full shrink-0 peer-checked/slide1:translate-x-[200%] peer-checked/slide2:translate-x-full peer-checked/slide3:translate-x-0 transition-transform">
              <div className="h-full bg-green-400 flex items-center justify-center text-white text-2xl font-bold">
                Slide 3
              </div>
            </div>
          </div>
        </div>
  
        {/* Navigation Dots */}
        <div className="flex justify-center gap-2 mt-4">
          <label htmlFor="slide1" className="w-4 h-4 bg-gray-300 rounded-full cursor-pointer peer-checked/slide1:bg-gray-700" />
          <label htmlFor="slide2" className="w-4 h-4 bg-gray-300 rounded-full cursor-pointer peer-checked/slide2:bg-gray-700" />
          <label htmlFor="slide3" className="w-4 h-4 bg-gray-300 rounded-full cursor-pointer peer-checked/slide3:bg-gray-700" />
        </div>
      </div>
    );
  }
  