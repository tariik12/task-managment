
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import { router } from './router';
import AuthProvider from './Provider/AuthProvider';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TaskProvider from './Provider/TaskProvider';

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
   <TaskProvider>
   <div className="">
  <RouterProvider router={router} />
  <ToastContainer 
  position="top-center"
  autoClose={5000}
  hideProgressBar={false}
  newestOnTop={false}
  closeOnClick
  rtl={false}
  pauseOnFocusLoss
  draggable
  pauseOnHover
  theme="light"/>
</div> 
   </TaskProvider>
     

  </AuthProvider>
);