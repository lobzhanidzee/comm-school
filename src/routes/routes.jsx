import { createBrowserRouter } from "react-router-dom";

import Layout from "../components/Layout/Layout";

import Login from "../pages/Login";
import Home from "../pages/Home";
import Book from "../pages/Book";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,

    children: [
      {
        index: true,
        element: <Home />,
      },
      { path: "login", element: <Login /> },
      { path: "book", children: [{ path: ":id", element: <Book /> }] },
    ],
  },
]);
