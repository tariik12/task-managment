import { useForm } from 'react-hook-form';



import { useTaskContext } from '../../Provider/TaskProvider';
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
const TaskForm = () => {
    const { createTask } = useTaskContext();
    const { register, handleSubmit, reset } = useForm();
    const {user} = useContext(AuthContext)
    console.log(user)


  const onSubmit = (data) => {
    data.email = user.email
        console.log(data)
    console.log(data)
    saveTaskToLocalStorage(data);
    createTask(data);
    reset();
   
  };


  const saveTaskToLocalStorage = (task) => {
    const existingTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    existingTasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(existingTasks));
  };

    return (
        <div className="max-w-md mx-auto p-4 mt-5 border rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-4">Create a New Task</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label htmlFor="title" className="block font-medium text-gray-700">
            Title
          </label>
          <input
            {...register('title')}
            type="text"
            name="title"
            className="form-input mt-1 block w-full"
            placeholder="Enter task title"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="description"
            className="block font-medium text-gray-700"
          >
            Description
          </label>
          <textarea
            {...register('description')}
            name="description"
            className="form-textarea mt-1 block w-full"
            placeholder="Enter task description"
            rows="4"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="dueDate"
            className="block font-medium text-gray-700"
          >
            Due Date
          </label>
          <input
            {...register('dueDate')}
            type="date"
            name="dueDate"
            className="form-input mt-1 block w-full"
            placeholder="Enter task dueDate"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="priority"
            className="block font-medium text-gray-700"
          >
            Priority
          </label>
          <select
            {...register('priority')}
            name="priority"
            className="form-select mt-1 block w-full"
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg"
        >
          Create Task
        </button>
      </form>
    </div>
    );
};

export default TaskForm;