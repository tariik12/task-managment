import {   useContext, useEffect, useState } from "react";
import { Link,  } from "react-router-dom";
import { useTaskContext } from "../Provider/TaskProvider";
import { AuthContext } from "../Provider/AuthProvider";




const Task = () => {
    const [allTasks, setTasks] = useState([]);
    const { taskAssign } = useTaskContext();
    const {user} = useContext(AuthContext)
console.log(user)
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(storedTasks);
  }, []);

  const tasks = allTasks.filter((task) => task.email === user.email);
  console.log(tasks)
  const handleAssign = (taskTitle) => {
   
    const assignedTask = tasks.find((task) => task.title === taskTitle);
   taskAssign(assignedTask)
    console.log(`Assigned task: ${assignedTask.title}`);
    
  };
    return (
        <div>
        <h2>Task List</h2>
        <ul className="grid grid-cols-3">
          {tasks.map((task, index) => (
            <li key={index} className="p-5 shadow-xl">
              <h3 className="font-serif text-2xl ">{task.title}</h3>
              <p>{task.description}</p>
              <p>Due Date: {task.dueDate}</p>
              <p>Priority: {task.priority}</p>
              
              <Link
     
              className="bg-red-400"
              to='/home/assign'
              onClick={() => handleAssign(task.title)} props={task.title}
            >
              Assign Task
            </Link>
            </li>
          ))}
        </ul>
      </div>
    );
};

export default Task;