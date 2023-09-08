import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import { useContext } from "react";
import { toast } from "react-toastify";



const Navbar = () => {
    const navigate = useNavigate();
  const { user, logOut } = useContext(AuthContext);

  
    return (
        <div className="navbar bg-red-600">
  <div className="flex-1">
    <a className="btn btn-ghost normal-case text-xl">Task Management</a>
  </div>
 
  <div className="flex-none gap-2">
    
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
      {user && 
            <div className="w-10 rounded-full">
           
            <img src={user?.photoURL} />
          </div>
        }
        
      </label>
      <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
        <li>
        <Link to='/profile'  className="justify-between">
            Profile
          </Link>
          
        </li>
        <li><a>Settings</a></li>
        <div
                  onClick={() => {
                    logOut();
                    toast.success("logout successful");
                    navigate("/");
                  }}
                  className="px-4 py-3 hover:bg-neutral-100 transition font-semibold cursor-pointer duration-1000 "
                >
                  Logout
                </div>
      </ul>
    </div>
  </div>
</div>
    );
};

export default Navbar;