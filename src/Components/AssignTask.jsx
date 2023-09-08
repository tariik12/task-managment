import { useForm } from "react-hook-form";
import { useTaskContext } from "../Provider/TaskProvider";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useNavigate } from "react-router-dom";


const AssignTask = () => {
    const { title } = useTaskContext();
    const { user} = useContext(AuthContext);
    const { register, handleSubmit, reset } = useForm();
    const [assignUsers, setAssignUsers] = useState([])
    const [allUsers, setAllUsers] = useState([])
    const navigate = useNavigate()
console.log("assignUsers",assignUsers)
console.log("allUsers",allUsers)
const onSubmit = (data) => {
    data.assignAthEmail = user.email
    data.role = 'pending'
        console.log("data",data)
   
    saveAssignToLocalStorage(data);
    // createTask(data);
    navigate('assign')
    reset();
   
  };


  const saveAssignToLocalStorage = (task) => {
    const existingTasks = JSON.parse(localStorage.getItem('assignUsers')) || [];
    existingTasks.push(task);
    localStorage.setItem('assignUsers', JSON.stringify(existingTasks));
  };

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('assignUsers')) || [];
    setAssignUsers(storedTasks);
  }, []);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('users')) || [];
    setAllUsers(storedTasks);
  }, []);

  const tasks = assignUsers.filter((task) => task.assignAthEmail === user.email && task.assignTitle  ===  title.title );
  console.log(tasks)
    return (
        <div>
             <li className="p-5 shadow-xl">
              <h3 className="font-serif text-2xl ">{title.title}</h3>
              <p>{title.description}</p>
              <p>Due Date: {title.dueDate}</p>
              <p>Priority: {title.priority}</p>
            </li>
<button className="" onClick={()=>document.getElementById('my_modal_5').showModal()}>Add another</button>
<dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Add another</h3>
    {/* <p className="py-4">Press ESC key or click the button below to close</p> */}
    <form onSubmit={handleSubmit(onSubmit)}>
    <div className="mb-4">
          <input
            {...register('assignTitle')}
            type="text"
            name="assignTitle"
            readOnly
            value={title.title}
            className="form-input mt-1 block w-full"
            placeholder="Enter task dueDate"
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
    another assign
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
    
  <div className="modal-action">
      <form method="dialog">
        <button className="">X</button>
      </form>
    </div>
  </div>
</dialog>

<ul className="grid grid-cols-3">
          {tasks.map((task, index) => (
            <li key={index} className="p-5 shadow-xl">
              <h3 className="font-serif text-2xl ">{task.assignTitle}</h3>
              <h3 className="font-serif text-2xl ">{task.assignPerEmail}</h3>
              <p>{task.des}</p>
              <p>Due Date: {task.duDate}</p>
              <p>Priority: {task.priority}</p>
              
             
            </li>
          ))}
        </ul>
        </div>
    );
};

export default AssignTask;