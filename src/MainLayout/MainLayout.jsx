import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Home/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";


const MainLayout = () => {
    const {user} = useContext(AuthContext);
    return (
        <div className="bg-red-400" >
            {
                user&& <Navbar></Navbar>
            }
            
            <Outlet></Outlet>
            
        </div>
    );
};

export default MainLayout;