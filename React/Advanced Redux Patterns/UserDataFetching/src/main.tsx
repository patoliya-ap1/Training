import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { Provider } from "react-redux";
import { store } from "./app/store.ts";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import UsersList from "./features/users/UsersList.tsx";
import ProfileDetails from "./features/Profile/ProfileDetails.tsx";

const route = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <UsersList />,
      },
      {
        path: "/profileDetails/:profileId",
        element: <ProfileDetails />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <RouterProvider router={route} />
  </Provider>,
);
