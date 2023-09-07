import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { useNavigate } from "react-router-dom";


const Profile = () => {
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);
    return (
        <div>
         {/* Open the modal using document.getElementById('ID').showModal() method */}

<dialog id="my_modal_5" className="modal  modal-bottom sm:modal-middle">
  <div className="modal-box bg-slate-200">
    <div className="">
    <div className="avatar  flex justify-center">
  <div className="w-32 rounded-full  ring ring-primary ring-offset-base-100 ring-offset-2">
    <img className=" " src={user?.photoURL} />
  </div>
</div>
  <h2 className="text-center mt-5">{user.displayName}</h2>
    </div>
    <h4 className="font-bold text-4xl text-center">BIO</h4>
    <p className="py-4">Press ESC key or click the button below to Press ESC key or click the button below to Press ESC key or click the button below to close</p>
    <div className="modal-action">
      <form method="dialog">
      <button className="btn btn-sm btn-circle bg-slate-50 btn-ghost absolute right-2 top-2"  onClick={() => {
                    
                    
                    navigate("/home");
                  }}>✕</button>
    </form>
    </div>
  </div>
</dialog>
        </div>
    );
};

export default Profile;