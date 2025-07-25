import React from "react";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-5xl font-bold text-red-800 mb-4">
          Hello Electron + React!
        </h1>
        <p className="text-gray-600 mb-4">
          This is your Electron app with React, TypeScript, and Tailwind CSS.
        </p>
        <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Click me!
        </button>
      </div>
    </div>
  );
};

export default App;
