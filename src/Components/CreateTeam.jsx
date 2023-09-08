import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { useContext, useEffect, useState } from "react";


const CreateTeam = () => {
    const { user} = useContext(AuthContext);
    const { register, handleSubmit, reset } = useForm();
    const navigate = useNavigate()
    const [allUsers, setAllUsers] = useState([])
const onSubmit = (createTeam) => {
    createTeam.teamCreateEmail = user.email

   
    saveTeamToLocalStorage(createTeam);
    // createTask(data);
    navigate('assign')
    reset();
   
  };


  const saveTeamToLocalStorage = (createTeam) => {
    const existingTasks = JSON.parse(localStorage.getItem('teams')) || [];
    existingTasks.push(createTeam);
    localStorage.setItem('teams', JSON.stringify(existingTasks));
  };

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('users')) || [];
    setAllUsers(storedTasks);
  }, []);
    return (
        <div>
          

    <h3 className="font-bold text-lg">Add another</h3>
    {/* <p className="py-4">Press ESC key or click the button below to close</p> */}
    <form onSubmit={handleSubmit(onSubmit)}>
    <div className="mb-4">
          <input
            {...register('teamName')}
            type="text"
            name="teamName"
            required
            className="form-input mt-1 block w-full"
            placeholder="Create Team Name"
          />
        </div>
    <div className="mb-4">
    <select
  {...register('assignPerEmail')}
  name="assignPerEmail"
  className="form-select mt-1 block w-full"
  required
>
  <option value="" disabled hidden>
    invite another
  </option>
  {allUsers.map((singleUser, index) => (
    <option key={index} value={singleUser.email}>
      {singleUser.email}
    </option>
  ))}
</select>

        </div>
        <div className="mb-4">
          <textarea
            {...register('des')}
            name="des"
            required
            className="form-textarea mt-1 block w-full"
            placeholder="Enter task description"
            rows="4"
          />
        </div>
        <div className="mb-4">
          <input
            {...register('duDate')}
            type="date"
            name="duDate"
            required
            className="form-input mt-1 block w-full"
            placeholder="Enter task dueDate"
          />
        </div>
        <button
          type="submit"
          
          className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-4 rounded-lg"
        >
           assign
        </button>
      </form>

        </div>
    );
};

export default CreateTeam;