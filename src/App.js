import React, { useState } from "react";
import { QUESTIONS } from "./questions";

const App = () => {
  const [score, setScore] = useState(0);
  const [runCount, setRunCount] = useState(0);

  const handleAnswer = (answer) => {
    const yesCount = QUESTIONS.filter((question) => question.answer === answer)
      .length;
    const newScore = (yesCount / QUESTIONS.length) * 100;
    setScore(newScore);
    setRunCount(runCount + 1);
  };

  const handleReset = () => {
    setScore(0);
  };

  return (
    <div className="main__wrap">
      <main className="container">
        <h1>Questionnaire</h1>
        <p>Answer the following questions with Yes or No:</p>
        {QUESTIONS.map((question, index) => (
          <div key={index}>
            <p>{question.text}</p>
            <button onClick={() => handleAnswer("Yes")}>Yes</button>
            <button onClick={() => handleAnswer("No")}>No</button>
          </div>
        ))}
        <p>Score: {score.toFixed(2)}%</p>
        <p>Average Rating: {(score / runCount).toFixed(2)}%</p>
        <button onClick={handleReset}>Reset</button>
      </main>
    </div>
  );
};

export default App;
