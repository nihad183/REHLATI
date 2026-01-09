import { FiArrowDown } from "react-icons/fi";

export default function ExploreMore() {
  return (
    <section className="bg-gray-50 py-20 flex flex-col items-center justify-center">
      <h2
        className="text-5xl sm:text-6xl md:text-7xl mb-6"
        style={{ fontFamily: "'Great Vibes', cursive" }}
      >
        Explore More
      </h2>
      <FiArrowDown className="text-gray-800 text-5xl animate-bounce" />
    </section>
  );
}
