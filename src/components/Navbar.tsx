import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, ListTodo, Target, Clock, BookOpen, Calendar } from 'lucide-react';

const navItems = [
  { path: '/', icon: Home, label: 'Home' },
  { path: '/tasks', icon: ListTodo, label: 'Tasks' },
  { path: '/goals', icon: Target, label: 'Goals' },
  { path: '/timer', icon: Clock, label: 'Timer' },
  { path: '/resources', icon: BookOpen, label: 'Resources' },
  { path: '/calendar', icon: Calendar, label: 'Calendar' },
];

function Navbar() {
  const location = useLocation();

  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Clock className="w-8 h-8 text-indigo-600" />
            <span className="text-xl font-bold text-gray-900">StudyTime</span>
          </Link>
          <div className="hidden md:flex space-x-4">
            {navItems.map(({ path, icon: Icon, label }) => (
              <Link
                key={path}
                to={path}
                className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium ${
                  location.pathname === path
                    ? 'text-indigo-600 bg-indigo-50'
                    : 'text-gray-700 hover:text-indigo-600 hover:bg-indigo-50'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{label}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar