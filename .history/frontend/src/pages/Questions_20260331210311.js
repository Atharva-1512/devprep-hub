import questions from "../data/questions";
import { useState } from "react";
import { Link } from "react-router-dom";

function Questions() {
  return (
    <div>
      <h2>DSA Questions</h2>
      {questions.map((q) => (
        <div key={q.id}>
          <Link to={`/questions/${q.id}`}>
            <h3>{q.title}</h3>
          </Link>
          <p>{q.category} | {q.difficulty}</p>
        </div>
      ))}
    </div>
  );
}

export default Questions;