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