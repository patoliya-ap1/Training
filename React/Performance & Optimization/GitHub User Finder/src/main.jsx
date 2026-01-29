import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home.jsx";
// import Profile from "./Pages/Profile.jsx";
import NotFoundPage from "./Pages/NotFoundPage.jsx";
import ProtectedRoute from "./Component/ProtectedRoute.jsx";
import ReposList from "./Pages/ReposList.jsx";
import GlobalContextProvider from "./GlobalContext/GlobalContextProvider.jsx";
import { lazy } from "react";
import Login from "./Pages/Login.jsx";
import LoggedProtectredRoute from "./Component/LoggedProtectredRoute.jsx";
import SignUp from "./Pages/SignUp.jsx";

const Profile = lazy(() => import("./Pages/Profile.jsx"));

const route = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "login",
        element: (
          <LoggedProtectredRoute>
            <Login />
          </LoggedProtectredRoute>
        ),
      },
      {
        path: "singup",
        element: (
          <LoggedProtectredRoute>
            <SignUp />
          </LoggedProtectredRoute>
        ),
      },
      {
        path: "profile",
        element: (
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        ),
      },
      {
        path: "repos/:username",
        element: (
          <ProtectedRoute>
            <ReposList />
          </ProtectedRoute>
        ),
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <GlobalContextProvider>
    <RouterProvider router={route} />
  </GlobalContextProvider>,
);
