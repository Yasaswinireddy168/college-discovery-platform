"use client";

import { useState } from "react";
import colleges from "@/data/colleges.json";

export default function ComparePage() {
  const [college1, setCollege1] = useState(colleges[0]);
  const [college2, setCollege2] = useState(colleges[1]);

  return (
    <div className="p-10 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-8">
        Compare Colleges
      </h1>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <select
          className="p-3 border rounded-lg bg-white"
          onChange={(e) =>
            setCollege1(
              colleges.find(
                (c) => c.id === Number(e.target.value)
              )
            )
          }
        >
          {colleges.map((college) => (
            <option key={college.id} value={college.id}>
              {college.name}
            </option>
          ))}
        </select>

        <select
          className="p-3 border rounded-lg bg-white"
          onChange={(e) =>
            setCollege2(
              colleges.find(
                (c) => c.id === Number(e.target.value)
              )
            )
          }
        >
          {colleges.map((college) => (
            <option key={college.id} value={college.id}>
              {college.name}
            </option>
          ))}
        </select>
      </div>

      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="bg-blue-600 text-white">
              <th className="p-4 text-left">Feature</th>
              <th className="p-4 text-left">{college1.name}</th>
              <th className="p-4 text-left">{college2.name}</th>
            </tr>
          </thead>

          <tbody>
            <tr className="border-b">
              <td className="p-4 font-bold">Location</td>
              <td className="p-4">{college1.location}</td>
              <td className="p-4">{college2.location}</td>
            </tr>

            <tr className="border-b">
              <td className="p-4 font-bold">Rating</td>
              <td className="p-4">⭐ {college1.rating}</td>
              <td className="p-4">⭐ {college2.rating}</td>
            </tr>

            <tr className="border-b">
              <td className="p-4 font-bold">Fees</td>
              <td className="p-4">₹{college1.fees}</td>
              <td className="p-4">₹{college2.fees}</td>
            </tr>

            <tr>
              <td className="p-4 font-bold">Courses</td>
              <td className="p-4">
                {college1.courses.join(", ")}
              </td>
              <td className="p-4">
                {college2.courses.join(", ")}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}