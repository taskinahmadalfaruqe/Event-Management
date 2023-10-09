import { useEffect, useState } from "react";
import Footer from "../../Component/Footer/Footer";
import NavBar from "../../Component/NavBar/NavBar";
import LodePurchased from "./LodePurchased";
import cry from "../../assets/cry.png"

const Purchased = () => {
  const [item, setItem] = useState([]);
  const [noItem, setNoItem] = useState("NO DATA FOUND"); // Initialize as a string
  useEffect(() => {
    const getCard = JSON.parse(localStorage.getItem("items"));
    if (getCard) {
      setItem(getCard);
    } else {
      setNoItem("NO DATA FOUND");
    }
  }, []);
  const dataLength = item.length;
  return (
    <div>
      <NavBar></NavBar>
      <div className="min-h-[50vh] flex justify-center items-center flex-col gap-5">
        <h2 className="text-2xl font-semibold font-Roboto my-5 text-center text-purple-500">
          Thank You For Staying With Us...
        </h2>
        {dataLength > 0 ? (
            <div>
              {item.map((singleItem) =><LodePurchased key={singleItem.id} singleItem={singleItem}></LodePurchased> )}
            </div>
          ) : (
            <div className="text-3xl font-semibold text-pink-500 font-Oswald flex justify-center items-center flex-col gap-5 border border-purple-500 p-5 rounded-md">
                <img src={cry} alt="Image"  className="w-20 h-20 rounded-full"/>
                {noItem}
            </div>
          )}
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Purchased;
