import {
    createBrowserRouter,
   
  } from "react-router-dom";
import Login from "./Pages/Authentication/Login";
import Error from "./Pages/Error/Error";
import Home from "./Pages/Home/Home";
import Register from "./Pages/Authentication/Register";

export const router = createBrowserRouter([
    {
      path: "/",
      errorElement:<Error/>,
      element: <Login/>,
    },
    {
      path:'/register',
      element:<Register/>
    },
    {
      path:"/home",
      element:<Home/>
    }
  ]);