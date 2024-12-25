import { createBrowserRouter } from "react-router-dom";

import Layout from "../components/Layout/Layout";

import Home from "../pages/Home";
import Users from "../pages/Users";
import About from "../pages/About";
import UserDetails from "../pages/UserDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,

    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "users",
        children: [
          {
            index: true,
            element: <Users />,
          },
          { path: ":id", element: <UserDetails /> },
        ],
      },
    ],
  },
]);
