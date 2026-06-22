"use client";

import { useState } from "react";
import Link from "next/link";

export default function SearchableCollegeList({ colleges }) {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");

  const locations = [
    ...new Set(colleges.map((college) => college.location)),
  ];

  const filteredColleges = colleges.filter((college) => {
    const matchesSearch = college.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesLocation =
      location === "" ||
      college.location === location;

    return matchesSearch && matchesLocation;
  });

  return (
    <>
      <input
        type="text"
        placeholder="Search colleges..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full p-3 border rounded-lg mb-4"
      />

      <select
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className="w-full p-3 border rounded-lg mb-6"
      >
        <option value="">All Locations</option>

        {locations.map((loc) => (
          <option key={loc} value={loc}>
            {loc}
          </option>
        ))}
      </select>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredColleges.map((college) => (
          <Link
            href={`/colleges/${college.id}`}
            key={college.id}
          >
            <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition duration-300 cursor-pointer">
              <h2 className="text-2xl font-bold mb-2">
                {college.name}
              </h2>

              <p>📍 {college.location}</p>

              <p>⭐ {college.rating}</p>

              <p className="text-green-600 font-bold">
                💰 ₹{college.fees}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}