import { NavLink } from "react-router-dom";
import RTK from "../assets/RTK.png";
const Header = () => {
  return (
    <header className="p-4 bg-sky-700 text-slate-200">
      <nav className="">
        <NavLink to="/" className="flex items-center">
          <h1 className="">Redux Users</h1>
          <img src={RTK} className="w-10" />
        </NavLink>
      </nav>
    </header>
  );
};
export default Header;
