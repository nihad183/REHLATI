import React from "react"; // <--- هذا مهم!
import { useParams, useNavigate } from "react-router-dom";
import { MdArrowBack } from "react-icons/md";



/* ===== IMPORT IMAGES ===== */
// Paris
import paris1 from "../assets/paris1.jpg";
import paris2 from "../assets/paris2.jpg";
import france from "../assets/france.jpg";
import france1 from "../assets/france1.jpg";
import france2 from "../assets/france2.jpg";
import france3 from "../assets/france3.jpg";
// Tokyo
import tokyo1 from "../assets/tokyo1.jpg";
import tokyo2 from "../assets/tokyo2.jpg";
import tokyo3 from "../assets/tokyo3.jpg";
import tokyo4 from "../assets/tokyo4.jpg";
import tokyo5 from "../assets/tokyo5.jpg";
import tokyo6 from "../assets/tokyo6.jpg";
// Dubai
import dubai1 from "../assets/dubai1.jpg";
import dubai2 from "../assets/dubai2.jpg";
import dubai3 from "../assets/dubai3.jpg";
import dubai4 from "../assets/dubai4.jpg";
// London
import london1 from "../assets/London1.jpg";
import london2 from "../assets/London2.jpg";
import london3 from "../assets/London3.jpg";
import london4 from "../assets/London4.jpg";

/* ===== DATA ===== */
const galleries = {
  Paris: [paris1, paris2, france, france1, france2, france3],
  Tokyo: [tokyo1, tokyo2, tokyo3, tokyo4, tokyo5, tokyo6],
  Dubai: [dubai1, dubai2, dubai3, dubai4],
  London: [london1, london2, london3, london4],
};

export default function DestinationGallery() {
  const { name } = useParams();
  const navigate = useNavigate();
  const images = galleries[name] || [];

  // اجعل الصفحة تبدأ من الأعلى عند الدخول
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Navbar داخلي */}
      <div className="flex items-center justify-center  px-6 py-4 shadow-md bg-white sticky top-0 z-50">
        {/* سهم الرجوع على اليسار */}
        <button
          onClick={() => navigate(-1)}
          className="absolute left-6 text-gray-700 hover:text-gray-900"
        >
          <MdArrowBack size={28} />
        </button>

        {/* اسم الوجهة في الوسط */}
        <h1 className="text-xl font-bold text-gray-800">{name}</h1>
      </div>

      {/* محتوى المعرض */}
      <div className="px-6 py-8">
        {images.length === 0 ? (
          <p className="text-center text-gray-500 mt-20">
            No images available for this destination.
          </p>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto mt-8">
            {images.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={name}
                className="rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
