import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './QuizComponent.css'; // Import CSS file

const QuizComponent = () => {
  const [quizData, setQuizData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchQuizData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/quiz/all');
        setQuizData(response.data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchQuizData();
  }, []);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  return (
    <div className="quiz-container">
      {quizData.map((question) => (
        <div key={question.id} className="question-card">
          <h2>{question.questionTitle}</h2>
          <ul className="options-list">
            <li>{question.option1}</li>
            <li>{question.option2}</li>
            <li>{question.option3}</li>
            <li>{question.option4}</li>
          </ul>
          <p className="answer">Answer: {question.answer}</p>
          <p className="difficulty">Difficulty Level: {question.difficultyLevel}</p>
          <p className="category">Category: {question.category}</p>
        </div>
      ))}
    </div>
  );
};

export default QuizComponent;
