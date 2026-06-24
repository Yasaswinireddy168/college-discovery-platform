"use client";

import { useState } from "react";

export default function PredictorPage() {
  const [rank, setRank] = useState("");
  const [result, setResult] = useState([]);

  const predictCollege = () => {
    const r = Number(rank);

    if (r <= 5000) {
      setResult(["IIT Hyderabad"]);
    } else if (r <= 10000) {
      setResult(["NIT Warangal"]);
    } else if (r <= 20000) {
      setResult([
        "Aditya University",
        "NIT Warangal",
      ]);
    } else {
      setResult([
        "Aditya University",
      ]);
    }
  };

  return (
    <div className="p-10 min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-8 text-center">
        College Predictor
      </h1>

      <div className="max-w-md mx-auto bg-white p-6 rounded-xl shadow-lg">
        <input
          type="number"
          placeholder="Enter Rank"
          value={rank}
          onChange={(e) => setRank(e.target.value)}
          className="w-full p-3 border rounded-lg mb-4"
        />

        <button
          onClick={predictCollege}
          className="w-full bg-blue-600 text-white p-3 rounded-lg"
        >
          Predict Colleges
        </button>

        {result.length > 0 && (
          <div className="mt-6">
            <h2 className="text-xl font-bold mb-2">
              Recommended Colleges
            </h2>

            <ul>
              {result.map((college) => (
                <li key={college}>
                  🎓 {college}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}