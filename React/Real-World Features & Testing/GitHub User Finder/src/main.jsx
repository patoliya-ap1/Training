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
import SignUp from "./Pages/SignUp.jsx";
import LoggedProtectedRoute from "./Component/LoggedProtectedRoute.jsx";
import ViewProfile from "./Component/ViewProfile.jsx";
import RepositoryDetails from "./Component/RepositoryDetails.jsx";

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
          <LoggedProtectedRoute>
            <Login />
          </LoggedProtectedRoute>
        ),
      },
      {
        path: "signup",
        element: (
          <LoggedProtectedRoute>
            <SignUp />
          </LoggedProtectedRoute>
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
        path: "view-profile/:username",
        element: (
          <ProtectedRoute>
            <ViewProfile />
          </ProtectedRoute>
        ),
      },
      {
        path: "repositoryDetails/:repositoryId",
        element: (
          <ProtectedRoute>
            <RepositoryDetails />
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
