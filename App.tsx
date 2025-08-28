
import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-gray-200 font-sans">
      <div className="text-center p-8 bg-gray-800 rounded-lg shadow-2xl">
        <svg
          className="w-16 h-16 mx-auto mb-4 text-blue-500 animate-pulse"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
        <h1 className="text-3xl font-bold mb-2">Ready to Build</h1>
        <p className="text-lg text-gray-400">
          I am waiting for your instructions.
        </p>
      </div>
    </div>
  );
};

export default App;
