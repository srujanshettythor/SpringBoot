import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CnQuiz = () => {
  const [quizData, setQuizData] = useState([]);
  const [userAnswers, setUserAnswers] = useState({});
  const [score, setScore] = useState(null);

  useEffect(() => {
    const fetchQuizData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/quiz/all');
        setQuizData(response.data);
      } catch (error) {
        console.error('Error fetching quiz data:', error);
      }
    };

    fetchQuizData();
  }, []);

  useEffect(() => {
    if (quizData.length > 0) {
      const initialAnswers = {};
      quizData.forEach((question) => {
        initialAnswers[question.id] = '';
      });
      setUserAnswers(initialAnswers);
    }
  }, [quizData]);

  const handleAnswerChange = (questionId, selectedAnswer) => {
    setUserAnswers(prevAnswers => ({ ...prevAnswers, [questionId]: selectedAnswer }));
  };

  const handleSubmit = () => {
    // Calculate score
    let newScore = 0;
    quizData.forEach((question) => {
      if (userAnswers[question.id] === question.answer) {
        newScore++;
      }
    });
    setScore(newScore);
  };

  return (
    <div>
      <h1>Quiz</h1>
      <div>
        {quizData.map((question) => (
          <div key={question.id}>
            <h2>{question.questionTitle}</h2>
            <ul>
              {Object.keys(question.options).map((option) => (
                <li key={option}>
                  <label>
                    <input
                      type="radio"
                      name={`question-${question.id}`}
                      value={option}
                      checked={userAnswers[question.id] === option}
                      onChange={() => handleAnswerChange(question.id, option)}
                    />
                    {question.options[option]}
                  </label>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <button onClick={handleSubmit}>Submit</button>
      {score !== null && <p>Your score: {score}</p>}
    </div>
  );
};

export default CnQuiz;
