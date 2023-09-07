import {
    createBrowserRouter,
   
  } from "react-router-dom";
import Login from "./Pages/Authentication/Login";
import Error from "./Pages/Error/Error";

import Register from "./Pages/Authentication/Register";
import MainLayout from "./MainLayout/MainLayout";
import Home from "./Pages/Home/Home/Home";
import Profile from "./Pages/Profile/Profile";
import TaskForm from "./Pages/TaskForm/TaskForm";
import CreateTeam from "./Components/CreateTeam";
import Task from "./Components/Task";


export const router = createBrowserRouter([
    {
      path: "/",
      errorElement:<Error/>,
      element: <MainLayout/>,
      children:[
        {
         path:'/',
         element:<Login/> 
        },
        {
          path:"/home",
          element:<Home></Home>,
          children:[
            {
              path:'createTeam',
              element:<CreateTeam/>
            },
            {
              path:'createTask',
              element:<TaskForm/>
            },
            {
              path:'task',
              element:<Task/>
            },
          ]
          
        },
        
        {
          path:'/profile',
          element:<Profile/>
        },
        
        
      ]
    },
    {
      path:'/register',
      element:<Register/>
    },
    
    
  
   
  ]);