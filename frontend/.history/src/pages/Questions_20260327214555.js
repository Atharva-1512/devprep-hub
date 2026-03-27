import questions from "../data/questions";

function Questions() {
  return (
    <div>
      <h2>DSA Questions</h2>
      {questions.map((q) => (
        <div key={q.id}>
          <h3>{q.title}</h3>
          <p>{q.category} | {q.difficulty}</p>
        </div>
      ))}
    </div>
  );
}

export default Questions;