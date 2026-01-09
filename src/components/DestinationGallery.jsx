import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { MdArrowBack } from "react-icons/md";

const galleries = {
  Paris: [
    "https://res.cloudinary.com/dsz0x4wlj/image/upload/v1767992359/paris1_lm7az7.jpg",
    "https://res.cloudinary.com/dsz0x4wlj/image/upload/v1767992350/paris2_fyw1q7.jpg",
    "https://res.cloudinary.com/dsz0x4wlj/image/upload/v1767992314/france3_nnyiqc.jpg",
    "https://res.cloudinary.com/dsz0x4wlj/image/upload/v1767992304/france_nqpojg.jpg",
    "https://res.cloudinary.com/dsz0x4wlj/image/upload/v1767992290/france1_s0p23d.jpg",
    "https://res.cloudinary.com/dsz0x4wlj/image/upload/v1767992290/france2_qiobwt.jpg",
  ],
  Tokyo: [
    "https://res.cloudinary.com/dsz0x4wlj/image/upload/v1767992415/tokyo1_v1jgmm.jpg",
    "https://res.cloudinary.com/dsz0x4wlj/image/upload/v1767992414/tokyo6_kk1qw2.jpg",
    "https://res.cloudinary.com/dsz0x4wlj/image/upload/v1767992427/tokyo3_cdki8i.jpg",
    "https://res.cloudinary.com/dsz0x4wlj/image/upload/v1767992419/tokyo5_plyfjd.jpg",
    "https://res.cloudinary.com/dsz0x4wlj/image/upload/v1767992414/tokyo4_r4t0cv.jpg",
    "https://res.cloudinary.com/dsz0x4wlj/image/upload/v1767992405/tokyo2_k4mmhz.jpg",
  ],
  Dubai: [
    "https://res.cloudinary.com/dsz0x4wlj/image/upload/v1767992469/dubai1_vccn4i.jpg",
    "https://res.cloudinary.com/dsz0x4wlj/image/upload/v1767992471/dubai2_lc07ja.jpg",
    "https://res.cloudinary.com/dsz0x4wlj/image/upload/v1767992279/dubai3_svbkpi.jpg",
    "https://res.cloudinary.com/dsz0x4wlj/image/upload/v1767992283/dubai4_jx1m9j.jpg",
  ],
  London: [
    "https://res.cloudinary.com/dsz0x4wlj/image/upload/v1767992333/London1_dcozfg.jpg",
    "https://res.cloudinary.com/dsz0x4wlj/image/upload/v1767992327/London4_wp5dxf.jpg",
    "https://res.cloudinary.com/dsz0x4wlj/image/upload/v1767992332/London2_vypsfg.jpg",
    "https://res.cloudinary.com/dsz0x4wlj/image/upload/v1767992323/London3_bgxg84.jpg",
    "https://res.cloudinary.com/dsz0x4wlj/image/upload/v1767992319/London_sv2cou.jpg",
  ],
};

export default function DestinationGallery() {
  const { name } = useParams();
  const navigate = useNavigate();
  const images = galleries[name] || [];

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">

    
      <div className="flex items-center justify-center px-6 py-4 shadow-md bg-white sticky top-0 z-50">
        <button
          onClick={() => navigate(-1)}
          className="absolute left-6 text-gray-700 hover:text-gray-900"
        >
          <MdArrowBack size={28} />
        </button>
        <h1 className="text-xl font-bold text-gray-800">{name}</h1>
      </div>

      
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
                loading="lazy" 
                className="rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}