import questions from "../data/questions";
import { useState } from "react";
import { Link } from "react-router-dom";

function Questions() {
  import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import questions from "../data/questions";

function QuestionDetail() {
  const { id } = useParams();

  const question = questions.find((q) => q.id === parseInt(id));

  const [showSolution, setShowSolution] = useState(false);
  const [isSolved, setIsSolved] = useState(false);

  // Load solved state from localStorage
  useEffect(() => {
    const solvedQuestions =
      JSON.parse(localStorage.getItem("solved")) || [];

    if (solvedQuestions.includes(parseInt(id))) {
      setIsSolved(true);
    }
  }, [id]);

  // Save solved state
  const markAsSolved = () => {
    const solvedQuestions =
      JSON.parse(localStorage.getItem("solved")) || [];

    if (!solvedQuestions.includes(parseInt(id))) {
      solvedQuestions.push(parseInt(id));
      localStorage.setItem("solved", JSON.stringify(solvedQuestions));
    }

    setIsSolved(true);
  };

  if (!question) return <h2>Question not found</h2>;

  return (
    <div>
      <h2>{question.title}</h2>
      <p><b>Category:</b> {question.category}</p>
      <p><b>Difficulty:</b> {question.difficulty}</p>

      <button onClick={() => setShowSolution(!showSolution)}>
        {showSolution ? "Hide Solution" : "Show Solution"}
      </button>

      <br /><br />

      <button onClick={markAsSolved}>
        {isSolved ? "Solved ✅" : "Mark as Solved"}
      </button>

      {showSolution && (
        <div>
          <h3>Solution:</h3>
          <p>{question.solution}</p>
        </div>
      )}
    </div>
  );
}

}
const [search, setSearch] = useState("");
const [category, setCategory] = useState("All");





export default Questions;