import { NavLink } from "react-router-dom";
import { useGLobalContext } from "../GlobalContext/GlobalContextProvider";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { LuSunMedium } from "react-icons/lu";
import { IoMdMenu } from "react-icons/io";
import { IoIosCloseCircle } from "react-icons/io";

const Header = () => {
  const {
    reducerValues: { theme, sidebarStatus, isLoggedIn },
    toggleThemeHandler,
    toggleSidebar,
    handleLogin,
  } = useGLobalContext();

  console.log(theme);

  return (
    <header className="bg-slate-600 p-4 flex justify-center dark:bg-gray-800 sticky w-full top-0 z-10">
      <div className="flex justify-between items-center w-[100%] md:w-[90%] ">
        <h1 className="text-slate-100 dark:text-gray-300">
          <NavLink>Github User Finder</NavLink>
        </h1>
        <nav>
          <ul className="flex items-center text-slate-200 dark:text-gray-300 space-x-3">
            <li className="hidden md:block hover:text-gray-400">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-slate-400" : "text-slate-200"
                }
                to={"/"}
              >
                Home
              </NavLink>{" "}
            </li>
            {isLoggedIn && (
              <li className="hidden md:block hover:text-gray-400">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "text-slate-500" : "text-slate-200"
                  }
                  to={"/profile"}
                >
                  Profile
                </NavLink>{" "}
              </li>
            )}
            <li className="hidden md:block hover:text-gray-400">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-slate-500" : "text-slate-200"
                }
                to={"/contact"}
              >
                Contact
              </NavLink>{" "}
            </li>
            {!isLoggedIn && (
              <li className="hidden md:block hover:text-gray-200">
                <NavLink
                  to="login"
                  className=" p-3 bg-sky-800 rounded-md cursor-pointer hover:bg-sky-700"
                >
                  Login
                </NavLink>
              </li>
            )}
            {isLoggedIn && (
              <li className="hidden md:block hover:text-gray-200">
                <button
                  onClick={() => handleLogin("logout")}
                  className="p-3 bg-red-500 rounded-md cursor-pointer hover:bg-red-700"
                >
                  Logout
                </button>
              </li>
            )}
            <li>
              <button
                className="h-8 w-8 flex justify-center bg-slate-500 rounded-full items-center cursor-pointer dark:text-yellow-400"
                onClick={toggleThemeHandler}
              >
                {theme === null ? (
                  <BsFillMoonStarsFill />
                ) : theme === "light" ? (
                  <BsFillMoonStarsFill />
                ) : (
                  <LuSunMedium />
                )}
              </button>
            </li>
            <li className="md:hidden">
              <button
                className="h-10 w-10 flex justify-center bg-slate-500 rounded-full items-center text-xl cursor-pointer"
                onClick={toggleSidebar}
              >
                {sidebarStatus ? <IoIosCloseCircle /> : <IoMdMenu />}
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
export default Header;
