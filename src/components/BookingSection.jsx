import TravelImage from "../assets/travel.png";
import { motion } from "framer-motion";
import { MdPlace, MdCalendarToday, MdAttachMoney } from "react-icons/md";

export default function BookingSection() {
  return (
    <section className="w-full px-5 md:px-10 py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">

        {/* Left Image */}
        <div className="md:w-1/2 w-full flex justify-center">
          <div className="relative w-full h-80 md:h-[400px]">
            <img
              src={TravelImage}
              alt="Travel Destination"
              className="w-full h-full object-cover shadow-lg"
              style={{
                borderRadius: "50px 10px 50px 10px",
                clipPath: "polygon(0% 0%, 100% 0%, 100% 85%, 0% 100%)"
              }}
            />
          </div>
        </div>

        {/* Right Form */}
        <motion.div
          className="md:w-1/2 w-full bg-white shadow-xl rounded-2xl p-6 md:p-8 flex flex-col gap-4 font-serif items-center"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {/* Location */}
          <div className="w-full max-w-xs">
            <label className="flex items-center gap-2 text-gray-800 font-medium text-sm">
              <MdPlace className="text-blue-500 text-base" />
              Location
            </label>
            <input
              type="text"
              placeholder="France, Paris"
              className="mt-1 w-full border border-gray-300 rounded-md px-2 py-1 text-sm
              focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Date & Price Side by Side */}
          <div className="flex flex-row gap-3 w-full max-w-xs">
            {/* Date */}
            <div className="flex-1">
              <label className="flex items-center gap-2 text-gray-800 font-medium text-sm">
                <MdCalendarToday className="text-blue-500 text-base" />
                Date
              </label>
              <input
                type="date"
                className="mt-1 w-full border border-gray-300 rounded-md px-2 py-1 text-sm
                focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Price */}
            <div className="flex-1">
              <label className="flex items-center gap-2 text-gray-800 font-medium text-sm">
                <MdAttachMoney className="text-blue-500 text-base" />
                Price
              </label>
              <input
                type="text"
                placeholder="DA"
                className="mt-1 w-full border border-gray-300 rounded-md px-2 py-1 text-sm
                focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-row gap-2 w-full max-w-xs mt-3">
            <button className="flex-1 border border-gray-300 px-3 py-1.5 rounded-md text-sm hover:bg-gray-100 transition">
              Preview Hotel
            </button>
            <button className="flex-1 bg-blue-700 text-white px-3 py-1.5 rounded-md text-sm hover:bg-blue-800 transition">
              Book Now
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
