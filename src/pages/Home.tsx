import React from 'react';
import { Link } from 'react-router-dom';
import { ListTodo, Target, Clock, BookOpen, Calendar } from 'lucide-react';

const features = [
  {
    icon: ListTodo,
    title: 'Task Management',
    description: 'Organize and track your study tasks efficiently',
    path: '/tasks',
    color: 'bg-blue-500',
  },
  {
    icon: Target,
    title: 'Study Goals',
    description: 'Set and achieve your academic goals',
    path: '/goals',
    color: 'bg-green-500',
  },
  {
    icon: Clock,
    title: 'Pomodoro Timer',
    description: 'Stay focused with timed study sessions',
    path: '/timer',
    color: 'bg-purple-500',
  },
  {
    icon: BookOpen,
    title: 'Study Resources',
    description: 'Access and organize learning materials',
    path: '/resources',
    color: 'bg-yellow-500',
  },
  {
    icon: Calendar,
    title: 'Study Calendar',
    description: 'Plan your study schedule',
    path: '/calendar',
    color: 'bg-pink-500',
  },
];

function Home() {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Welcome to StudyTime
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Your personal study companion for better time management and academic success
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map(({ icon: Icon, title, description, path, color }) => (
          <Link
            key={path}
            to={path}
            className="block p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
          >
            <div className={`inline-block p-3 rounded-lg ${color} text-white mb-4`}>
              <Icon className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
            <p className="text-gray-600">{description}</p>
          </Link>
        ))}
      </div>

      <div className="bg-indigo-50 rounded-xl p-8 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Track Your Progress
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="text-2xl font-bold text-indigo-600">0</div>
            <div className="text-gray-600">Tasks Completed</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="text-2xl font-bold text-green-600">0</div>
            <div className="text-gray-600">Goals Achieved</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="text-2xl font-bold text-purple-600">0</div>
            <div className="text-gray-600">Study Hours</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="text-2xl font-bold text-yellow-600">0</div>
            <div className="text-gray-600">Focus Sessions</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;