import React, { useState } from 'react';
import { ListTodo, Calendar, Clock } from 'lucide-react';

interface Task {
  id: string;
  title: string;
  duration: number;
  subject: string;
  completed: boolean;
}

function Tasks() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState({
    title: '',
    duration: 30,
    subject: 'math'
  });

  const addTask = (e: React.FormEvent) => {
    e.preventDefault();
    const task: Task = {
      id: Date.now().toString(),
      ...newTask,
      completed: false
    };
    setTasks([...tasks, task]);
    setNewTask({ title: '', duration: 30, subject: 'math' });
  };

  const toggleTask = (id: string) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-2">
        <ListTodo className="w-6 h-6 text-indigo-600" />
        <h1 className="text-2xl font-bold text-gray-900">Study Tasks</h1>
      </div>

      <form onSubmit={addTask} className="bg-white p-6 rounded-xl shadow-sm space-y-4">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">
            Task Title
          </label>
          <input
            type="text"
            id="title"
            value={newTask.title}
            onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            required
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="duration" className="block text-sm font-medium text-gray-700">
              Duration (minutes)
            </label>
            <input
              type="number"
              id="duration"
              value={newTask.duration}
              onChange={(e) => setNewTask({ ...newTask, duration: parseInt(e.target.value) })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              min="1"
              required
            />
          </div>

          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
              Subject
            </label>
            <select
              id="subject"
              value={newTask.subject}
              onChange={(e) => setNewTask({ ...newTask, subject: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            >
              <option value="math">Math</option>
              <option value="science">Science</option>
              <option value="history">History</option>
              <option value="english">English</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Add Task
        </button>
      </form>

      <div className="space-y-4">
        {tasks.map(task => (
          <div
            key={task.id}
            className={`bg-white p-4 rounded-lg shadow-sm flex items-center justify-between ${
              task.completed ? 'bg-gray-50' : ''
            }`}
          >
            <div className="flex items-center space-x-4">
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTask(task.id)}
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <div className={task.completed ? 'line-through text-gray-500' : ''}>
                <h3 className="font-medium">{task.title}</h3>
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <span className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {task.duration} min
                  </span>
                  <span className="capitalize">{task.subject}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tasks;