import React from "react";

export default function Header({ viewMode, setViewMode }) {
  return (
    <header className="bg-violet-600 text-black shadow-md py-4 px-6 flex flex-col sm:flex-row sm:items-center sm:justify-between">
      <div>
        <h1 className="text-3xl font-bold"> Earthquake Visualizer</h1>
        <p className="text-lg text-blue-100" >
          Track recent global seismic activity in real-time.
        </p>
      </div>

      <div className="mt-3 sm:mt-0">
        <button
          onClick={() => setViewMode("list")}
          className={`px-4 py-2 rounded-l-lg font-medium transition-colors ${
            viewMode === "list"
              ? "bg-violet-300 text-violet-600 font-bold"
              : "bg-white hover:bg-violet-900 hover:text-white"
          }`}
        >
          List View
        </button>

        <button
          onClick={() => setViewMode("map")}
          className={`px-4 py-2 rounded-r-lg font-medium transition-colors ${
            viewMode === "map"
             ? "bg-violet-300 text-violet-600 font-bold"
              : "bg-white hover:bg-violet-900 hover:text-white"
          }`}
        >
          Map View
        </button>
      </div>
    </header>
  );
}
