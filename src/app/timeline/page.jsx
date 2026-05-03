"use client";
import { useState, useEffect } from "react";
export default function Timeline() {
  const [isMounted, setIsMounted] = useState(false);
  const [history, setHistory] = useState([]);
  useEffect(() => {
    setIsMounted(true);
    const saved = localStorage.getItem("timeline");
    if (saved) {
      setHistory(JSON.parse(saved));
    }
  }, []);
  const clearAllHistory = () => {
    const confirmDelete = window.confirm("do you want to delete all interaction history?");
    if (confirmDelete) {
      localStorage.removeItem("timeline");
      setHistory([]);
    }
  };
  if (!isMounted) {
    return (
      <div className="container mx-auto px-4 py-10 max-w-2xl text-center">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }
  return (
    <div className="container mx-auto px-4 py-10 max-w-2xl">
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        <h1 className="text-4xl font-bold text-green-800">
          Interaction History
        </h1>
        {history.length > 0 && (
          <button
            onClick={clearAllHistory}
            className="btn btn-primary btn-lg bg-green-800 border-none"
          >
            Clear All History
          </button>
        )}
      </div>
      {history.length === 0 ? (
        <div className="text-center text-gray-400 mt-20">
          <p className="text-lg font-medium">No interactions yet</p>
        </div>
      ) : (
        <ul className="steps steps-vertical w-full">
          {history.map((item) => (
            <li key={item.id} className="step step-primary">
              <div className="flex flex-col items-start bg-base-100 p-5 rounded-2xl shadow-sm border border-base-200 mb-6 w-full text-left ml-4 hover:shadow-md transition-shadow">
                <span className="font-bold text-xl text-base-content">
                  {item.friendName}
                </span>
                <div className="flex items-center gap-3 mt-2">
                  <span className="badge badge-primary badge-outline font-bold uppercase text-[10px] tracking-wider bg-green-800 text-white text-xl">
                    {item.type}
                  </span>
                  <span className="text-sm text-gray-500 font-medium">
                    {item.date}
                  </span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}