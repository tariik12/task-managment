import  { createContext, useContext, useState } from 'react';

const TaskContext = createContext();

export const useTaskContext = () => {
    return useContext(TaskContext);
  };

const TaskProvider = ({ children }) => {
    const [tasks, setTasks] = useState([]);
    const [title, setTitle] = useState([]);

    const createTask = (task) => {
        task.id = Date.now().toString();
        setTasks([...tasks, task]);
      };
    
      const taskAssign = (title) =>{
        console.log(title)
        setTitle(title) 
      }
      const updateTaskStatus = (taskId, status) => {
        const updatedTasks = tasks.map((task) =>
          task.id === taskId ? { ...task, status } : task
        );
        setTasks(updatedTasks);
      };
    
    return (
        <div>
         <TaskContext.Provider value={{ tasks,title, createTask, updateTaskStatus,taskAssign }}>
      {children}
    </TaskContext.Provider>    
        </div>
    );
};

export default TaskProvider;