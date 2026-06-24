"use client";

import { useState } from "react";

export default function PredictorPage() {
  const [rank, setRank] = useState("");
  const [result, setResult] = useState([]);

  const predictCollege = () => {
  const r = Number(rank);

  if (r <= 5000) {
    setResult([
      "IIT Hyderabad",
      "IIT Bombay",
      "IIT Delhi",
      "IIIT Hyderabad",
    ]);
  } else if (r <= 10000) {
    setResult([
      "NIT Warangal",
      "NIT Trichy",
      "IIIT Hyderabad",
      "BITS Pilani",
    ]);
  } else if (r <= 20000) {
    setResult([
      "VIT Vellore",
      "SRM University",
      "Aditya University",
      "Manipal Institute of Technology",
    ]);
  } else if (r <= 50000) {
    setResult([
      "Aditya University",
      "Amrita Vishwa Vidyapeetham",
      "NIT Calicut",
      "Jadavpur University",
    ]);
  } else {
    setResult([
      "Aditya University",
      "SRM University",
      "Amrita Vishwa Vidyapeetham",
      "Manipal Institute of Technology",
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