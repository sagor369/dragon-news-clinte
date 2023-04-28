import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/Home/Layout/Layout.jsx";
import Home from "./components/Home/Home/Home.jsx";
import Login from "./components/Home/Header/Auth/Login.jsx";
import Register from "./components/Home/Header/Auth/Register.jsx";
import PriveteRoute from "./components/PrivetRoute/PriveteRoute.jsx";
const router = createBrowserRouter([
  // {
  //   path:'/category:id',
  //   element:<Navigate to='/'></Navigate>,
  //   children:[
  //     {

  //     }
  //   ]
  // },
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader:()=> fetch('http://localhost:5000/news')
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PriveteRoute>
      <RouterProvider router={router} />
    </PriveteRoute>
  </React.StrictMode>
);
