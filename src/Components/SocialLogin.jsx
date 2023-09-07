

import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { useLocation, useNavigate } from "react-router-dom";

import { toast } from "react-toastify";
import { AuthContext } from "../Provider/AuthProvider";



const SocialLogin = () => {
    const {handleGoogleProvider} = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname ||"/home";
    const handleGoogleSingIn =() =>{
      handleGoogleProvider()
        .then(result =>{
             const loggedUser =(result.user)
             console.log(loggedUser)
                    navigate(from, {replace:true});
                    toast.success('login success')   
        })
        .catch(error =>console.log(error.message))
    }
    return (
        <div className="mt-5">
            <div className="w-[320px]">
            <button onClick={handleGoogleSingIn} className="border mx-auto border-primary text-xs font-thin w-[160px] rounded-3xl flex btn-sm items-center">
           <div className="mx-auto flex items-center">
           <FcGoogle className="text-lg font-serif"/> 
           <p className="ms-1"> Login up with Google  </p>
           </div>
              
            </button>
           
            </div>
            <p className="text-center mt-3 mb-0 pb-0 text-2xl font-serif">-OR-</p>
        </div>
    );
};

export default SocialLogin;