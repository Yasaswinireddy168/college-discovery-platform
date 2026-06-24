"use client";

import { useState } from "react";

export default function DiscussionsPage() {
  const [question, setQuestion] = useState("");

  const [discussions, setDiscussions] = useState([
    {
      id: 1,
      question: "Is IIT Hyderabad good for CSE?",
      answer: "Yes, it has excellent placements."
    }
  ]);

  const addQuestion = () => {
  if (!question.trim()) return;

  let answer = "Thank you for your question. Community members can answer this discussion.";

  const q = question.toLowerCase();

  if (q.includes("recommend")) {
    answer =
      "IIT Hyderabad, NIT Warangal and IIIT Hyderabad are highly recommended colleges.";
  } else if (
    q.includes("cse") ||
    q.includes("computer science")
  ) {
    answer =
      "IIT Hyderabad and IIIT Hyderabad are excellent choices for CSE.";
  } else if (
    q.includes("placement") ||
    q.includes("placements")
  ) {
    answer =
      "IIT Hyderabad, IIT Bombay and IIT Delhi have excellent placement records.";
  } else if (
    q.includes("best college")
  ) {
    answer =
      "IIT Hyderabad, IIT Bombay and IIT Delhi are among the top colleges in India.";
  }

  setDiscussions([
    ...discussions,
    {
      id: Date.now(),
      question,
      answer,
    },
  ]);

  setQuestion("");
};
  return (
    <div className="p-10 min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-8 text-center">
        College Discussions
      </h1>

      <div className="max-w-2xl mx-auto">
        <div className="bg-white p-6 rounded-xl shadow-lg mb-6">
          <input
            type="text"
            placeholder="Ask a Question"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            className="w-full p-3 border rounded-lg mb-4"
          />

          <button
            onClick={addQuestion}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg"
          >
            Post Question
          </button>
        </div>

        {discussions.map((item) => (
          <div
            key={item.id}
            className="bg-white p-6 rounded-xl shadow-lg mb-4"
          >
            <h2 className="font-bold text-lg">
              ❓ {item.question}
            </h2>

            <p className="mt-2">
              💬 {item.answer}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}