import { Outlet } from "react-router-dom";
import Header from "./Component/Header";
import { useEffect } from "react";
import { useGLobalContext } from "./GlobalContext/GlobalContextProvider";
import SideBar from "./Component/SideBar";

function App() {
  const {
    reducerValues: { theme },
  } = useGLobalContext();

  // toggle Theme

  useEffect(() => {
    if (theme == null || theme === "light") {
      document.body.className = "";
      document.documentElement.classList.remove("dark");
    } else {
      document.body.className =
        "dark:bg-gray-900 dark:text-gray-200 transition-color duration-400";
      document.documentElement.classList.add("dark");
    }
  }, [theme]);

  console.log(theme);

  return (
    <>
      <div className="">
        <Header />
        <SideBar />
        <Outlet />
      </div>
    </>
  );
}

export default App;
