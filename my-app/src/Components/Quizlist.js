import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Quizlist.css";

const QuizList = () => {
  const [quizData, setQuizData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchQuizData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/quiz/all");
        setQuizData(response.data);
        setLoading(false);
      } catch (error) {
        setError("Error fetching quiz data");
        setLoading(false);
      }
    };

    fetchQuizData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="quiz-list-container">
      <h1 className="heading">Quiz Lists</h1>
      <div>
        {quizData.map((quiz) => (
          <div key={quiz.id} className="quiz-item">
            <h2 className="quiz-title">{quiz.questionTitle}</h2>
            <ul className="options-list">
              <li>{quiz.option1}</li>
              <li>{quiz.option2}</li>
              <li>{quiz.option3}</li>
              <li>{quiz.option4}</li>
            </ul>
            <p className="answer">Answer: {quiz.answer}</p>
            <p className="difficulty-level">
              Difficulty Level: {quiz.difficultyLevel}
            </p>
            <p className="category">Category: {quiz.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuizList;
