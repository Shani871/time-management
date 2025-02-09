import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Tasks from './pages/Tasks';
import Goals from './pages/Goals';
import Timer from './pages/Timer';
import Resources from './pages/Resources';
import StudyCalendar from './pages/StudyCalendar';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tasks" element={<Tasks />} />
            <Route path="/goals" element={<Goals />} />
            <Route path="/timer" element={<Timer />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/calendar" element={<StudyCalendar />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;