import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const LoadingProvider = ({children}) => {
   
        const {user,loading} = useContext(AuthContext)
    const location = useLocation()
    
    if(loading){
        return<progress className="progress progress-error w-56" value="0" max="100"></progress>
    }
    if(user){
        return children;
    }
    return<Navigate to='/login' state={{from:location}} replace ></Navigate>;

};

export default LoadingProvider;