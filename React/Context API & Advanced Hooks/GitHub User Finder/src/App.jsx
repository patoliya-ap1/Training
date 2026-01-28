import { Outlet } from "react-router-dom";
import GithubUserFinder from "./Component/GithubUserFinder";
import Header from "./Component/Header";
import { useEffect, useRef } from "react";
import { useGLobalContext } from "./GlobalContext/GlobalContextProvider";
import SideBar from "./Component/SideBar";

function App() {
  const { reducerValues } = useGLobalContext();

  // toggle Theme

  const onMount = useRef(false);

  useEffect(() => {
    if (!onMount.current) {
      onMount.current = true;
      return;
    }

    if (reducerValues.theme === "light") {
      document.body.className = "";
      document.documentElement.classList.toggle("dark");
    } else {
      document.body.className =
        "dark:bg-gray-900 dark:text-gray-200 transition-color duration-400";
      document.documentElement.classList.toggle("dark");
    }
  }, [reducerValues.theme]);

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
