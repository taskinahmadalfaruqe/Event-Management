import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";

const LodeProgram = ({ singleData }) => {
  useEffect(()=>{
    Aos.init();
  },[])
  const { description, id, title, image, price, willDo } = singleData;
  let count = 0;

  return (
    <div data-aos="fade-down-left" data-aos-duration="2000" className=" mt-5 relative flex flex-col  w-full  lg:flex-row rounded-xl bg-white bg-clip-border text-black shadow-md">
      <div className="relative p-2 w-full m-0 lg:w-2/5 shrink-0 overflow-hidden rounded-md rounded-r-none bg-white bg-clip-border">
        <img
          src={image}
          alt="image"
          className="h-full w-full object-cover rounded-md"
        />
        <div className="absolute rounded-md bottom-2 right-2 bg-purple-600 opacity-70">
          <p className="text-2xl font-bold uppercase  text-white p-2 px-4 ">
            {price} BDT
          </p>
        </div>
      </div>

      <div className="p-1 md:p-5 lg:p-6 space-y-5">
        <h6 className="mb-4 block font-sans text-lg font-semibold uppercase leading-relaxed tracking-normal text-purple-500 antialiased">
          Community and Cultural Events
        </h6>

        <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
          {title}
        </h4>
        <div className="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
          {description.length > 100 ? (
            <p>{description.slice(0, 100)}....</p>
          ) : (
            description
          )}
        </div>

        <div className="text-base">
          <h2 className="text-2xl font-semibold  text-purple-500">
            We Will Do For You
          </h2>
          {willDo.map((data, index) => (
            <p className="pl-3  font-medium" key={index}>
              {++count}: {data}
            </p>
          ))}
          And More.......
        </div>

        <Link className="inline-block" to={`/cultural/${id}`}>
          <button
            className="flex select-none items-center gap-2 border border-purple-500 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-purple-500 transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
          >
            Learn More
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
      </div>
    </div>
  );
};

LodeProgram.propTypes = {
  singleData: PropTypes.object.isRequired,
};

export default LodeProgram;
