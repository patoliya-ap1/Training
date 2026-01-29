import { createContext, useContext, useReducer } from "react";

const GlobalContext = createContext();
export const useGLobalContext = () => useContext(GlobalContext);

const GlobalContextProvider = ({ children }) => {
  //   toggle Theme reducer

  const contextReducer = (prev, action) => {
    const { type } = action;

    switch (type) {
      case "toggleTheme": {
        return { ...prev, theme: prev.theme === "light" ? "dark" : "light" };
      }
      case "toggleSidebar": {
        return { ...prev, sidebarStatus: !prev.sidebarStatus };
      }
      default: {
        return prev;
      }
    }
  };

  const [reducerValues, dispatch] = useReducer(contextReducer, {
    theme: "light",
    sidebarStatus: false,
    isLoggedIn: true,
  });

  const toggleThemeHandler = () => {
    dispatch({ type: "toggleTheme" });
  };

  const toggleSidebar = () => {
    dispatch({ type: "toggleSidebar" });
  };

  const contextValue = { reducerValues, toggleThemeHandler, toggleSidebar };

  return <GlobalContext value={contextValue}>{children}</GlobalContext>;
};

export default GlobalContextProvider;
