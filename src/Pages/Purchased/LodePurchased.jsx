import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const LodePurchased = ({ singleItem }) => {
  const { price, title, image, id } = singleItem;
  console.log(singleItem);
  return (
    <div className="flex flex-col mt-5 justify-center text-center lg:flex-row lg:justify-between items-center gap-5 border border-purple-500 rounded-md p-5">
      <div className="w-20 h-20 rounded-full overflow-hidden flex justify-center items-center">
        <img src={image} alt="Image" className="w-full h-full " />
      </div>
      <h2 className="text-2xl font-semibold uppercase text-purple-500">
        {title}
      </h2>
      <div className="flex justify-between gap-5 flex-col md:flex-row">
        <button className="select-none rounded-lg bg-pink-500 py-3 px-6 text-center align-middle  text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none flex flex-row gap-2">
          Price {price} bdt
        </button>
        <Link to={`/cultural/${id}`}>
          <button
            className="select-none rounded-lg bg-pink-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none flex flex-row gap-2"
            type="button"
            data-ripple-dark="true"
          >
            Show Details
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

LodePurchased.propTypes = {
  singleItem: PropTypes.object.isRequired,
};

export default LodePurchased;
