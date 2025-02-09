import React, { useState } from 'react';
import { Target, CheckCircle2 } from 'lucide-react';

interface Goal {
  id: string;
  title: string;
  deadline: string;
  completed: boolean;
}

function Goals() {
  const [goals, setGoals] = useState<Goal[]>([]);
  const [newGoal, setNewGoal] = useState({
    title: '',
    deadline: ''
  });

  const addGoal = (e: React.FormEvent) => {
    e.preventDefault();
    const goal: Goal = {
      id: Date.now().toString(),
      ...newGoal,
      completed: false
    };
    setGoals([...goals, goal]);
    setNewGoal({ title: '', deadline: '' });
  };

  const toggleGoal = (id: string) => {
    setGoals(goals.map(goal =>
      goal.id === id ? { ...goal, completed: !goal.completed } : goal
    ));
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-2">
        <Target className="w-6 h-6 text-green-600" />
        <h1 className="text-2xl font-bold text-gray-900">Study Goals</h1>
      </div>

      <form onSubmit={addGoal} className="bg-white p-6 rounded-xl shadow-sm space-y-4">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">
            Goal Title
          </label>
          <input
            type="text"
            id="title"
            value={newGoal.title}
            onChange={(e) => setNewGoal({ ...newGoal, title: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-300 focus:ring focus:ring-green-200 focus:ring-opacity-50"
            required
          />
        </div>

        <div>
          <label htmlFor="deadline" className="block text-sm font-medium text-gray-700">
            Target Date
          </label>
          <input
            type="date"
            id="deadline"
            value={newGoal.deadline}
            onChange={(e) => setNewGoal({ ...newGoal, deadline: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-300 focus:ring focus:ring-green-200 focus:ring-opacity-50"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
        >
          Add Goal
        </button>
      </form>

      <div className="space-y-4">
        {goals.map(goal => (
          <div
            key={goal.id}
            className={`bg-white p-4 rounded-lg shadow-sm flex items-center justify-between ${
              goal.completed ? 'bg-gray-50' : ''
            }`}
          >
            <div className="flex items-center space-x-4">
              <button
                onClick={() => toggleGoal(goal.id)}
                className={`p-1 rounded-full ${
                  goal.completed ? 'text-green-600' : 'text-gray-400 hover:text-green-600'
                }`}
              >
                <CheckCircle2 className="w-6 h-6" />
              </button>
              <div className={goal.completed ? 'line-through text-gray-500' : ''}>
                <h3 className="font-medium">{goal.title}</h3>
                <p className="text-sm text-gray-500">
                  Target: {new Date(goal.deadline).toLocaleDateString()}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Goals;