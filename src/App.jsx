import './App.css';

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-300 via-purple-300 to-blue-400 p-6">
      <div className="bg-white/90 rounded-3xl shadow-xl p-10 w-full max-w-md text-center">
        <h1 className="text-4xl font-extrabold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent mb-4">
          Vite + React
        </h1>
        <p className="text-gray-700 text-lg mb-6">Welcome to my colorful Section 6 project!</p>
        <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 px-6 rounded-full font-semibold shadow-md hover:from-pink-600 hover:to-purple-600 transition">
          Let's go!
        </button>
      </div>
    </div>
  );
}

export default App;
