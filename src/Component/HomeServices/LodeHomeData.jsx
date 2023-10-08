import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const LodeHomeData = ({ singleData }) => {
  const { image, title, description, id,price } = singleData;
  return (
    <div className="card  border border-purple-500 flex flex-col justify-between">
      <figure className="h-64 w-full relative">
        <img src={image} alt="car!"  className="h-full w-full "/>
        <div className="absolute rounded-md bottom-2 right-2 bg-purple-600 opacity-70">
        <p className="text-2xl font-bold uppercase  text-white p-2 px-4 ">{price} BDT</p>
        </div>
      </figure>
      <div className="card-body space-y-5">
        <h2 className="card-title text-purple-500 font-semibold font-Oswald">{title}</h2>
        <p>{description.length > 200 ? <div>{description.slice(0,200)}.....</div> : description}</p>
        <div className="card-actions justify-end">
          <Link to={`/cultural/${id}`}>
          <button
            className="select-none rounded-lg bg-purple-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-purple-500/20 transition-all hover:shadow-lg hover:shadow-purple-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none flex flex-row gap-2"
            type="button"
            data-ripple-dark="true"
          >
           Details
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
    </div>
  );
};

LodeHomeData.propTypes = {
  singleData: PropTypes.object.isRequired,
};

export default LodeHomeData;
