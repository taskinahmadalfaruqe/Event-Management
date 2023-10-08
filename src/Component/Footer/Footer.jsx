import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/Provider";

const Footer = () => {
    const {user}= useContext(AuthContext)
  return (
    <footer className=" mt-7 flex w-full flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 border-t-2 border-purple-500 border-blue-gray-50 py-6 text-center lg:justify-between text-lg font-semibold uppercase font-Roboto text-purple-500">
      <p className="block  leading-relaxed  antialiased">
      &copy; 2023 Community and Cultural Events
      </p>
      <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
        <li>
          <Link
            to={"/"}
            className="block  leading-relaxed  antialiased transition-colors hover:text-pink-500 focus:text-pink-500"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to={"/services"}
            className="block  leading-relaxed  antialiased transition-colors hover:text-pink-500 focus:text-pink-500"
          >
            Services
          </Link>
        </li>
        <li>
          <Link
            to={"/purchased"}
            className="block  leading-relaxed  antialiased transition-colors hover:text-pink-500 focus:text-pink-500"
          >
            Purchased
          </Link>
        </li>
        <li>
          <Link
            to={"/about"}
            className="block  leading-relaxed  antialiased transition-colors hover:text-pink-500 focus:text-pink-500"
          >
            About
          </Link>
        </li>
        <li>
            {
                user?<Link
                to={"/login"}
                className="block  leading-relaxed  antialiased transition-colors hover:text-pink-500 focus:text-pink-500"
              >
                Logout
              </Link>:<Link
            to={"/login"}
            className="block  leading-relaxed  antialiased transition-colors hover:text-pink-500 focus:text-pink-500"
          >
            Login
          </Link>
            }
          
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
