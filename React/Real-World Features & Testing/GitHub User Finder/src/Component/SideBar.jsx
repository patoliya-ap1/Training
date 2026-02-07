import { NavLink } from "react-router-dom";
import { useGLobalContext } from "../GlobalContext/GlobalContextProvider";
import Profile from "../assets/Profle.png";

const SideBar = () => {
  const {
    reducerValues: { sidebarStatus, isLoggedIn },
  } = useGLobalContext();

  return (
    <div
      className={`h-screen fixed bg-slate-700 w-[50%] z-5 top-10 right-0 transform-transition duration-300 transform sm:w-[50%] md:translate-x-full ${!sidebarStatus && "translate-x-full"} p-5`}
    >
      <div className="flex flex-col items-center p-4 space-y-8 mt-5 shadow-md">
        {isLoggedIn && <div className="w-20">
          <img
            src={Profile}
            alt="profile picture"
            className="rounded-full shadow-xl"
          />
        </div>}
        <nav className=" ">
          <ul className="text-slate-300 space-y-5">
            <li className="hover:text-gray-400">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-slate-500" : "text-slate-300"
                }
                to={"/"}
              >
                Home
              </NavLink>{" "}
            </li>
            {isLoggedIn && (
              <li className="hover:text-gray-400">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "text-slate-500" : "text-slate-300"
                  }
                  to={"/profile"}
                >
                  Profile
                </NavLink>{" "}
              </li>
            )}
            <li className=" hover:text-gray-400">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-slate-500" : "text-slate-300"
                }
                to={"/contact"}
              >
                Contact
              </NavLink>{" "}
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
export default SideBar;
