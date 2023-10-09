import { Link, NavLink } from "react-router-dom";
import { LiaBarsSolid } from "react-icons/lia";
import { useContext } from "react";
import { AuthContext } from "../../Provider/Provider";

const NavBar = () => {
  const { user, logout } = useContext(AuthContext);
  const NavBar = (
    <div className="flex flex-col gap-5 lg:flex-row justify-start lg:justify-center lg:items-center">
      <NavLink
        to={"/"}
        className={({ isActive }) =>
          isActive
            ? "bg-purple-500 font-semibold text-lg uppercase text-white p-1 px-3 rounded-md"
            : " hover:bg-purple-300 font-semibold text-lg uppercase text-black p-1 px-3 round" +
              "ed-md"
        }
      >
        Home
      </NavLink>
      <NavLink
        to={"/services"}
        className={({ isActive }) =>
          isActive
            ? "bg-purple-500 font-semibold text-lg uppercase text-white p-1 px-3 rounded-md"
            : " hover:bg-purple-300 font-semibold text-lg uppercase text-black p-1 px-3 round" +
              "ed-md"
        }
      >
        Services
      </NavLink>
      <NavLink
        to={"/purchased"}
        className={({ isActive }) =>
          isActive
            ? "bg-purple-500 font-semibold text-lg uppercase text-white p-1 px-3 rounded-md"
            : " hover:bg-purple-300 font-semibold text-lg uppercase text-black p-1 px-3 round" +
              "ed-md"
        }
      >
        Purchased
      </NavLink>
      <NavLink
        to={"/about"}
        className={({ isActive }) =>
          isActive
            ? "bg-purple-500 font-semibold text-lg uppercase text-white p-1 px-3 rounded-md"
            : " hover:bg-purple-300 font-semibold text-lg uppercase text-black p-1 px-3 round" +
              "ed-md"
        }
      >
        About
      </NavLink>
      <NavLink
        to={"/contact"}
        className={({ isActive }) =>
          isActive
            ? "bg-purple-500 font-semibold text-lg uppercase text-white p-1 px-3 rounded-md"
            : " hover:bg-purple-300 font-semibold text-lg uppercase text-black p-1 px-3 round" +
              "ed-md"
        }
      >
        contact us
      </NavLink>
      <div className="flex flex-col lg:flex-row gap-5 justify-center items-center">
        <div className="w-14 h-14 rounded-full border border-purple-500 overflow-hidden">
          {user?(user && (user.photoURL? <img className="h-full w-full" src={user.photoURL} alt="User" />: <img src="https://i.ibb.co/2nC8FF4/user.webp"></img> )) :(<img src="https://i.ibb.co/2nC8FF4/user.webp"></img> )}
        </div>
        <div>{user && (user.displayName ? user.displayName : user.email)}</div>
      </div>
      {user ? (
        <Link>
          <button
            onClick={logout}
            className="btn border-purple-700 bg-purple-500 hover:bg-white hover:text-purple-700 hover:border-purple-700 font-semibold text-lg uppercase text-white p-1 px-3 rounded-md"
          >
            logout
          </button>
        </Link>
      ) : (
        <Link to={"/login"}>
          <button className="btn border-purple-700 bg-purple-500 hover:bg-white hover:text-purple-700 hover:border-purple-700 font-semibold text-lg uppercase text-white p-1 px-3 rounded-md">
            login
          </button>
        </Link>
      )}
    </div>
  );
  return (
    <div className=" font-Oswald flex justify-between items-center py-2 ">
      <div className="  logo  text-2xl font-bold text-pink-600">
        <Link to={"/"}>Cultural Event</Link>
      </div>

      <div className="dropdown">
        <label
          tabIndex={0}
          className="btn btn-ghost lg:hidden text-2xl bg-purple-200"
        >
          <LiaBarsSolid></LiaBarsSolid>
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content rounded-md  z-[10000] p-3 shadow bg-slate-100  absolute top-14 w-[50vw] text-center right-0"
        >
          {NavBar}
        </ul>
      </div>

      <div className="hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{NavBar}</ul>
      </div>
    </div>
  );
};

export default NavBar;
