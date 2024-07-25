import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, BrowserRouter as Router, RouterProvider } from 'react-router-dom'; // Import Router
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Books from './Componenets/Common/Book/book';
import Music from './Componenets/Common/Music/music';
import Movies from './Componenets/Common/Movies/movies';
import ErrorPage from './ErrorPage';
import ClientLogin from './Componenets/Client/ClientLogin';
const router = createBrowserRouter([
  {
    path : '/' , 
    element : <App /> ,
     errorElement : <ErrorPage />
  } ,
  {
    path : '/books' ,
    element : <Books />
  } ,
  {
    path : '/music' ,
    element : <Music />
  } ,
  {
    path : '/movies' ,
    element : <Movies />
     
  } ,
  {
    path : '/clientlogin' , 
    element : <ClientLogin />
  }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
