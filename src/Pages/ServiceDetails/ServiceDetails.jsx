import { useContext, useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import NavBar from "../../Component/NavBar/NavBar";
import { AuthContext } from "../../Provider/Provider";
import Swal from 'sweetalert2'
import Footer from "../../Component/Footer/Footer";


const ServiceDetails = () => {
  const { isLoading, handelPurchasedData } = useContext(AuthContext);

  const [data, setData] = useState({});
  const singleData = useLoaderData();
  const { id } = useParams();

  const handelPurchasedBTN = (data) => {
    const addCardInStorage = [];
    const localStorageCard = JSON.parse(localStorage.getItem("items"));
    if (!localStorageCard) {
      handelPurchasedData(data);
      addCardInStorage.push(data);
      localStorage.setItem("items", JSON.stringify(addCardInStorage));
    } else {
      const isExist = localStorageCard.find((val) => val.id == id);
      if (isExist) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'You Are Already Purchased This',
          footer: '<a href="">Why do I have this issue?</a>'
      });
      } else {
        handelPurchasedData(data);
        addCardInStorage.push(...localStorageCard, data);
        localStorage.setItem("items", JSON.stringify(addCardInStorage));
      }
    }
  };

  useEffect(() => {
    const findData = singleData.find((value) => value.id == id);
    setData(findData);
  }, [id, singleData]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-[100vh] w-full">
        <span className="loading loading-spinner loading-lg text-red-500"></span>
      </div>
    );
  }

  const { description, title, image, price, willDo } = data;
  let count = 0;

  return (
    <div>
      <NavBar></NavBar>
      <div className=" mt-5 flex w-full flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
        
        <div className="p-2 md:p-5  overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
          <img
            src={image}
            alt="profile-picture"
            className="rounded-md mx-auto"
          />
        </div>

        <div className="p-2 md:p-6 space-y-6">
          <h4 className="mb-2 block font-sans text-md text-purple-500 font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
            COMMUNITY AND CULTURAL EVENTS
          </h4>
          <h2 className="mb-2 block font-sans text-2xl md:text-3xl lg:text-4xl text-pink-500 font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
            {title}
          </h2>
          <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
            {description}
          </p>

          <div className="text-base">
            <h2 className="text-xl font-semibold  text-purple-500">
              We Will Do For You
            </h2>
            {willDo?.map((data, index) => (
              <p className="pl-3  font-medium" key={index}>
                {++count}: {data}
              </p>
            ))}
          </div>

        </div>

        <div className="p-6 pt-0 flex flex-col md:flex-row justify-between gap-5 ">
          <button
            className="select-none rounded-lg bg-pink-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none flex flex-row gap-2"
            type="button"
            data-ripple-dark="true"
            onClick={() => {
              handelPurchasedBTN(data);
            }}
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
          <button className="select-none rounded-lg bg-pink-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none flex flex-row gap-2">
            Price {price} bdt
          </button>
        </div>

      </div>
      <Footer></Footer>
    </div>
  );
};

export default ServiceDetails;
