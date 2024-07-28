import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Books from "./Componenets/Common/Book/book";
import Music from "./Componenets/Common/Music/music";
import ErrorPage from "./ErrorPage/ErrorPage";
import ClientLogin from "./Componenets/Client/ClientLogin";
import Movies from "./Componenets/Common/Movies/Movie";
import Layout from "./Componenets/Layout";
import { LoginContext } from "./Componenets/Client/LoginContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "books",
        element: <Books />,
      },
      {
        path: "music",
        element: <Music />,
      },
      {
        path: "movies",
        element: <Movies />,
      },
      {
        path: "clientlogin",
        element: <ClientLogin />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <LoginContext>
      <RouterProvider router={router} />
    </LoginContext>
  </React.StrictMode>
);

reportWebVitals();
