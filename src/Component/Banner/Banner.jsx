import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./banner.css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";

const Banner = () => {
  const [data, setData] = useState([]);
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  useEffect(() => {
    fetch("/cultural.json")
      .then((res) => res.json())
      .then((item) => setData(item));
  }, []);
  return (
    <div className=" h-[80vh] text-center ">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        
        {data.map((singleData, index) => (
          <SwiperSlide key={index} className="rounded-md overflow-hidden">
            <div
              style={{
                backgroundImage: `url(${singleData.image})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            >
              <div className="flex justify-center items-center flex-col bg-black opacity-70 w-[100vw]  text-white text-xl lg:text-2xl text-center h-[90vh] space-y-3  md:space-y-6 p-5">
                <h1 className=" text-2xl lg:text-3xl font-bold font-Roboto tracking-[.15em]">
                  {singleData.title}
                </h1>
                <div className="p-6 pt-0 flex flex-col md:flex-row justify-between gap-5 ">
                  <Link to={`/cultural/${singleData.id}`}>
                    <button
                      className="select-none rounded-lg bg-purple-900 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-purple-900/20 transition-all hover:shadow-lg hover:shadow-purple-900/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none flex flex-row gap-2"
                      type="button"
                      data-ripple-dark="true"
                    >
                      Purchased
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        aria-hidden="true"
                        className="h-4 w-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                        ></path>
                      </svg>
                    </button>
                  </Link>
                  <button className="select-none rounded-lg bg-purple-900 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-purple-900/20 transition-all hover:shadow-lg hover:shadow-purple-900/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none flex flex-row gap-2">
                    Price {singleData.price} bdt
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </div>
  );
};

export default Banner;
