import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Conduct.css'; 

const Quiz = () => {
  const [quizData, setQuizData] = useState([]);
  const [userAnswers, setUserAnswers] = useState({});
  const [score, setScore] = useState(null);
  const [submitted, setSubmitted] = useState(false);

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

  const handleAnswerChange = (questionId, selectedAnswer) => {
    setUserAnswers({ ...userAnswers, [questionId]: selectedAnswer });
  };

  const handleSubmit = () => {
    const answeredQuestions = Object.keys(userAnswers).length;
    if (answeredQuestions < quizData.length) {
      alert(`Please answer all questions before submitting.`);
      return;
    }

    let newScore = 0;
    const updatedUserAnswers = { ...userAnswers };

    quizData.forEach((question) => {
      if (updatedUserAnswers[question.id] === question.answer) {
        newScore++;
      } else {
        updatedUserAnswers[question.id] = question.answer;
      }
    });

    setScore(newScore);
    setUserAnswers(updatedUserAnswers);
    setSubmitted(true); // Mark quiz as submitted
  };

  return (
   <div className="conbody">
     <div className="quiz-container">
      <h1 className="heading">Quiz</h1>
      <div>
        {quizData.map((question) => (
          <div key={question.id} className="question-container">
            <h2 className="question-title">{question.questionTitle}</h2>
            <ul className="option-list">
              {['option1', 'option2', 'option3', 'option4'].map((option, index) => (
                <li
                  key={index}
                  className={
                    (submitted && userAnswers[question.id] === question[option] && userAnswers[question.id] !== question.answer)
                      ? 'selected-answer incorrect-answer'
                      : userAnswers[question.id] === question[option]
                      ? 'selected-answer'
                      : ''
                  }
                  onClick={() => handleAnswerChange(question.id, question[option])}
                >
                  {question[option]}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="submit-container">
        <button className="submit-button" onClick={handleSubmit}>Submit</button>
      </div>
      {score !== null ? (
        <div className="result">
          <h3>Your score:</h3>
          <p><span className="score">{score}</span> out of <span>{quizData.length}</span></p>
        </div>
      ) : (
        <p className="total-questions">Total Questions: {quizData.length}</p>
      )}
    </div>
   </div>
  );
};
export default Quiz;
