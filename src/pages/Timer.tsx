import React, { useState, useEffect } from 'react';
import { Clock, Play, Pause, RotateCcw } from 'lucide-react';

function Timer() {
  const [timeLeft, setTimeLeft] = useState(25 * 60); // 25 minutes in seconds
  const [isRunning, setIsRunning] = useState(false);
  const [sessionType, setSessionType] = useState<'focus' | 'break'>('focus');

  useEffect(() => {
    let interval: number | undefined;

    if (isRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((time) => time - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      new Audio('https://assets.mixkit.co/active_storage/sfx/2869/2869-preview.mp3').play();
      if (sessionType === 'focus') {
        setSessionType('break');
        setTimeLeft(5 * 60); // 5 minute break
      } else {
        setSessionType('focus');
        setTimeLeft(25 * 60); // 25 minute focus session
      }
      setIsRunning(false);
    }

    return () => clearInterval(interval);
  }, [isRunning, timeLeft, sessionType]);

  const toggleTimer = () => {
    setIsRunning(!isRunning);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setTimeLeft(25 * 60);
    setSessionType('focus');
  };

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-2">
        <Clock className="w-6 h-6 text-purple-600" />
        <h1 className="text-2xl font-bold text-gray-900">Pomodoro Timer</h1>
      </div>

      <div className="bg-white p-8 rounded-xl shadow-sm text-center">
        <div className="mb-8">
          <h2 className="text-lg font-medium text-gray-700 mb-2">
            {sessionType === 'focus' ? 'Focus Session' : 'Break Time'}
          </h2>
          <div className="text-6xl font-bold text-purple-600">
            {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
          </div>
        </div>

        <div className="flex justify-center space-x-4">
          <button
            onClick={toggleTimer}
            className="inline-flex items-center px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
          >
            {isRunning ? (
              <>
                <Pause className="w-5 h-5 mr-2" />
                Pause
              </>
            ) : (
              <>
                <Play className="w-5 h-5 mr-2" />
                Start
              </>
            )}
          </button>
          <button
            onClick={resetTimer}
            className="inline-flex items-center px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
          >
            <RotateCcw className="w-5 h-5 mr-2" />
            Reset
          </button>
        </div>
      </div>

      <div className="bg-purple-50 p-6 rounded-xl">
        <h3 className="font-medium text-purple-900 mb-4">How to use the Pomodoro Technique</h3>
        <ol className="list-decimal list-inside space-y-2 text-purple-800">
          <li>Work for 25 minutes (one "Pomodoro")</li>
          <li>Take a 5-minute break</li>
          <li>After 4 Pomodoros, take a longer 15-30 minute break</li>
          <li>Repeat the cycle</li>
        </ol>
      </div>
    </div>
  );
}

export default Timer;