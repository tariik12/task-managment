import {  useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";


const Profile = () => {
    const navigate = useNavigate();
const {user} = useContext(AuthContext)
console.log(user)

    const [users, setUsers] = useState([]);
console.log(users)
    useEffect(() => {
    
      const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
      setUsers(storedUsers);
    }, []);

    const userProfile = users.find(us =>us?.email === user?.email)
    console.log(userProfile)
    return (
        <div>
      


  <div className=" w-[300px] rounded-2xl mx-auto shadow-2xl mt-10 bg-slate-200 relative">
    <div className="">
    <div className="avatar pt-5  flex justify-center">
  <div className="w-32 rounded-full  ring ring-primary ring-offset-base-100 ring-offset-2">
    <img className=" " src={userProfile?.photoURL}/>
  </div>
</div>
  <h2 className="text-center mt-5 mb-2">{userProfile?.name}</h2>
    </div>
    <div className="p-3 bg-slate-700">
    <h4 className=" text-2xl ">BIO</h4>
    <p className="py-2 rounded-lg">{userProfile?.addBio}</p>
    </div>
    <div className="">
      <form>
      <button className="btn btn-sm btn-circle bg-slate-50 btn-ghost absolute right-2 top-2"  onClick={() => {
                    
                    
                    navigate("/home");
                  }}>✕</button>
    </form>
    </div>
  </div>

        </div>
    );
};

export default Profile;