import { useParams } from "react-router-dom";
import { useState } from "react";
import questions from "../data/questions";

function QuestionDetail() {
  const { id } = useParams();
  const [showSolution, setShowSolution] = useState(false);

  const question = questions.find((q) => q.id === parseInt(id));
  const [isSolved, setIsSolved] = useState(false);

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

      <button onClick={() => setIsSolved(true)}>
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

export default QuestionDetail;