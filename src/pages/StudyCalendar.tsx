import React, { useState } from 'react';
import { Calendar, Clock, Plus } from 'lucide-react';

interface StudySession {
  id: string;
  title: string;
  date: string;
  startTime: string;
  duration: number;
  subject: string;
}

function StudyCalendar() {
  const [sessions, setSessions] = useState<StudySession[]>([]);
  const [newSession, setNewSession] = useState({
    title: '',
    date: '',
    startTime: '',
    duration: 60,
    subject: 'math'
  });

  const addSession = (e: React.FormEvent) => {
    e.preventDefault();
    const session: StudySession = {
      id: Date.now().toString(),
      ...newSession
    };
    setSessions([...sessions, session]);
    setNewSession({
      title: '',
      date: '',
      startTime: '',
      duration: 60,
      subject: 'math'
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-2">
        <Calendar className="w-6 h-6 text-pink-600" />
        <h1 className="text-2xl font-bold text-gray-900">Study Calendar</h1>
      </div>

      <form onSubmit={addSession} className="bg-white p-6 rounded-xl shadow-sm space-y-4">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">
            Session Title
          </label>
          <input
            type="text"
            id="title"
            value={newSession.title}
            onChange={(e) => setNewSession({ ...newSession, title: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-300 focus:ring focus:ring-pink-200 focus:ring-opacity-50"
            required
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="date" className="block text-sm font-medium text-gray-700">
              Date
            </label>
            <input
              type="date"
              id="date"
              value={newSession.date}
              onChange={(e) => setNewSession({ ...newSession, date: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-300 focus:ring focus:ring-pink-200 focus:ring-opacity-50"
              required
            />
          </div>

          <div>
            <label htmlFor="startTime" className="block text-sm font-medium text-gray-700">
              Start Time
            </label>
            <input
              type="time"
              id="startTime"
              value={newSession.startTime}
              onChange={(e) => setNewSession({ ...newSession, startTime: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-300 focus:ring focus:ring-pink-200 focus:ring-opacity-50"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="duration" className="block text-sm font-medium text-gray-700">
              Duration (minutes)
            </label>
            <input
              type="number"
              id="duration"
              value={newSession.duration}
              onChange={(e) => setNewSession({ ...newSession, duration: parseInt(e.target.value) })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-300 focus:ring focus:ring-pink-200 focus:ring-opacity-50"
              min="15"
              step="15"
              required
            />
          </div>

          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
              Subject
            </label>
            <select
              id="subject"
              value={newSession.subject}
              onChange={(e) => setNewSession({ ...newSession, subject: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-300 focus:ring focus:ring-pink-200 focus:ring-opacity-50"
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
          className="inline-flex items-center w-full justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
        >
          <Plus className="w-4 h-4 mr-2" />
          Add Study Session
        </button>
      </form>

      <div className="space-y-4">
        {sessions.map(session => (
          <div
            key={session.id}
            className="bg-white p-4 rounded-lg shadow-sm flex items-center justify-between"
          >
            <div>
              <h3 className="font-medium text-gray-900">{session.title}</h3>
              <div className="flex items-center space-x-4 text-sm text-gray-500">
                <span className="flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  {new Date(session.date).toLocaleDateString()}
                </span>
                <span className="flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  {session.startTime} ({session.duration} min)
                </span>
                <span className="capitalize">{session.subject}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StudyCalendar;