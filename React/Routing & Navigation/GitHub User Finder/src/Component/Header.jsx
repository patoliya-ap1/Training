import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-slate-600 p-4 flex justify-center">
      <div className="flex justify-between w-[90%]">
        <h1 className="text-slate-100">
          <NavLink>Github User Finder</NavLink>
        </h1>
        <nav>
          <ul className="flex text-slate-200 space-x-3">
            <li>
              <NavLink to={"/"}>Home</NavLink>{" "}
            </li>
            <li>
              <NavLink to={"/profile"}>Profile</NavLink>{" "}
            </li>
            <li>
              <NavLink to={"/contact"}>Contact</NavLink>{" "}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
export default Header;
