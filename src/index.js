import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Books from "./Componenets/Common/Book/book";
import Music from "./Componenets/Common/Music/music";
import ErrorPage from "./ErrorPage/ErrorPage";
import ClientLogin from "./Componenets/Client/ClientLogin";
import Movie from "./Componenets/Common/Movies/Movie";
import Layout from "./Componenets/Layout";
import { LoginContext } from "./Componenets/Client/LoginContext";
import Footer from "./Componenets/Footer/Footer";
import Home from "./Componenets/Home/Home";
import ProfilePage from "./Componenets/Client/Profile/ProfilePage";
import "@radix-ui/themes/styles.css";
import { Skeleton, Theme } from "@radix-ui/themes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
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
        element: <Movie />,
      },
      {
        path: "clientlogin",
        element: <ClientLogin />,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "profile",
        element: <ProfilePage />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <LoginContext>
      <Theme>
        <Skeleton>
          <RouterProvider router={router} />
        </Skeleton>
      </Theme>
    </LoginContext>
    <Footer />
  </React.StrictMode>
);

reportWebVitals();
