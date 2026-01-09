import HeroImage from "../assets/hero.png"; 
import backgroundhero from "../assets/background.jpg"; 
import { FiArrowDown } from "react-icons/fi";

export default function Hero() {
  return (
    <section className="relative w-full h-screen">

      {/* Background */}
      <img
        src={backgroundhero}
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-white/80"></div>

      <div className="relative z-10 flex flex-col-reverse md:flex-row items-center justify-between px-5 md:px-10 py-10 md:py-20 h-full">

        {/* Text Section */}
        <div className="md:w-1/2 mt-8 md:mt-0 text-center md:text-left flex flex-col justify-center h-full">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 leading-snug mb-4">
            Travel Memories <br /> You'll Never Forget
          </h1>
          <p className="mt-2 text-gray-600 text-sm sm:text-base md:text-lg">
            Two proximetely switches detect when the value has reached the end of its travel
          </p>

          {/* Centered Explore + Arrow */}
          <div className="mt-8 flex flex-col items-center justify-center gap-2 cursor-pointer">
            <p className="text-blue-700 font-semibold text-lg sm:text-xl md:text-2xl">
              Explore Our Trips
            </p>
            <FiArrowDown className="text-blue-700 text-4xl animate-bounce" />
          </div>
        </div>

        {/* Hero Image */}
        <div className="md:w-1/2 flex justify-center mb-8 md:mb-0">
          <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80">
            <div className="absolute -inset-3 sm:-inset-4 md:-inset-4 rounded-full border-4 border-blue-400 border-dashed animate-spin-slow"></div>
            <div className="w-full h-full rounded-full overflow-hidden relative z-10">
              <img
                src={HeroImage}
                alt="Travel"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
