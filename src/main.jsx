import React from 'react'
import ReactDOM from 'react-dom/client'
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import App from './App.jsx'
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      
    },
    {
        path: "/about",
        element: <About />,
        
      },
      {
        path: "/contact",
        element: <Contact />,
        
      },
  ]);
ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
   
 
)
