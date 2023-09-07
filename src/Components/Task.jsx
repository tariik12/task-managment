import { useEffect, useState } from "react";


const Task = () => {
    const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // Fetch tasks from local storage when the component mounts
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(storedTasks);
  }, []);
  console.log(tasks)
    return (
        <div>
        <h2>Task List</h2>
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>
              <h3>{task.title}</h3>
              <p>{task.description}</p>
              <p>Due Date: {task.dueDate}</p>
              <p>Priority: {task.priority}</p>
            </li>
          ))}
        </ul>
      </div>
    );
};

export default Task;