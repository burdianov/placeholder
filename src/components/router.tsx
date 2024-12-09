import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./layout";
import Home from "../pages/home";
import About from "../pages/about";
import Contact from "../pages/contact";
import NotFound from "../pages/not-found";
import Todos from "../pages/todos";
import TodoItem from "../pages/todo";

export const navLinks = [
  {
    id: 1,
    text: "Home",
    to: "/",
  },
  {
    id: 2,
    text: "About",
    to: "/about",
  },
  {
    id: 3,
    text: "Contact",
    to: "/contact",
  },
  {
    id: 4,
    text: "Todos",
    to: "/todos",
  },
];

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/todos",
        element: <Todos />,
      },
      {
        path: "/todos/:id",
        element: <TodoItem />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
