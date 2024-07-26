import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom"; // Import Router
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Books from "./Componenets/Common/Book/book";
import Music from "./Componenets/Common/Music/music";
import ErrorPage from "./ErrorPage";
import ClientLogin from "./Componenets/Client/ClientLogin";
import Movies from "./Componenets/Common/Movies/Movies";
import SignUp from "./Componenets/Client/Sign-Up";
import Login from "./Componenets/Client/Sign-In";
import Layout from "./Componenets/Layout";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/books",
        element: (
          <Books />
        ),
      },
      {
        path: "/music",
        element: <Music />,
      },
      {
        path: "/movies",
        element: <Movies />,
      },
      {
        path: "/clientlogin",
        element: <ClientLogin />,
      },
      {
        path: "/sign-up",
        element: <SignUp />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },

  
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
