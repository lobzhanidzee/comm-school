import { createBrowserRouter } from "react-router-dom";

import Layout from "../components/Layout/Layout";

import Login from "../pages/Login";
import Home from "../pages/Home";
import Book from "../pages/Book";
import Favorites from "../pages/Favorites";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,

    children: [
      {
        index: true,
        element: <Home />,
      },
      { path: "search", element: <Home /> },
      { path: "login", element: <Login /> },
      { path: "favorites", element: <Favorites /> },
      { path: "book", children: [{ path: ":id", element: <Book /> }] },
    ],
  },
]);
