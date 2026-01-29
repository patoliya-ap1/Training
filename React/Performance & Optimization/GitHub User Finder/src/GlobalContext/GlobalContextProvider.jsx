import { createContext, useContext, useReducer } from "react";

const GlobalContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useGLobalContext = () => useContext(GlobalContext);

const GlobalContextProvider = ({ children }) => {
  //   toggle Theme reducer

  const contextReducer = (prev, action) => {
    const { type } = action;

    switch (type) {
      case "toggleTheme": {
        const currentTheme =
          prev.theme == null
            ? "dark"
            : prev.theme === "light"
              ? "dark"
              : "light";
        localStorage.setItem("theme", currentTheme);
        return { ...prev, theme: currentTheme };
      }
      case "toggleSidebar": {
        return { ...prev, sidebarStatus: !prev.sidebarStatus };
      }
      case "login": {
        localStorage.setItem("loginStatus", JSON.stringify(true));
        return { ...prev, isLoggedIn: true };
      }
      case "logout": {
        localStorage.setItem("loginStatus", JSON.stringify(false));
        return { ...prev, isLoggedIn: false };
      }
      default: {
        return prev;
      }
    }
  };

  const [reducerValues, dispatch] = useReducer(contextReducer, {
    theme: localStorage.getItem("theme"),
    sidebarStatus: false,
    isLoggedIn: JSON.parse(localStorage.getItem("loginStatus")),
  });

  const toggleThemeHandler = () => {
    dispatch({ type: "toggleTheme" });
  };

  const toggleSidebar = () => {
    dispatch({ type: "toggleSidebar" });
  };

  const handleLogin = (type) => {
    dispatch({ type });
  };

  const contextValue = {
    reducerValues,
    toggleThemeHandler,
    toggleSidebar,
    handleLogin,
  };

  return <GlobalContext value={contextValue}>{children}</GlobalContext>;
};

export default GlobalContextProvider;
