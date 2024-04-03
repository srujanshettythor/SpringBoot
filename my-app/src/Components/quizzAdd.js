import React, { useState } from 'react';
import axios from 'axios';
import './QuizForm.css'; // Import CSS file

const QuizForm = () => {
  const [formData, setFormData] = useState({
    question: '',
    option1: '',
    option2: '',
    option3: '',
    option4: '',
    answer: '',
    difficulty_level: '',
    question_title: '',
    category: ''
  });

  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8000/quiz/add', formData);
      setSuccessMessage('Quiz added successfully!');
      setFormData({
        question: '',
        option1: '',
        option2: '',
        option3: '',
        option4: '',
        answer: '',
        difficulty: '',
        category: ''
      });
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <div className="quiz-form-container">
      <div className="background-image"></div>
      <div className="form-content">
        <h2>Add Quiz</h2>
        <form onSubmit={handleSubmit} className="quiz-form">
          <div className="form-group">
            <label>Question:</label>
            <input type="text" name="question" value={formData.question} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Option 1:</label>
            <input type="text" name="option1" value={formData.option1} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Option 2:</label>
            <input type="text" name="option2" value={formData.option2} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Option 3:</label>
            <input type="text" name="option3" value={formData.option3} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Option 4:</label>
            <input type="text" name="option4" value={formData.option4} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Answer:</label>
            <input type="text" name="answer" value={formData.answer} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Difficulty:</label>
            <input type="text" name="difficulty" value={formData.difficulty} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Category:</label>
            <input type="text" name="category" value={formData.category} onChange={handleChange} />
          </div>
          <button type="submit" className="submit-btn">Submit</button>
        </form>
        {successMessage && <p className="success-message">{successMessage}</p>}
        {errorMessage && <p className="error-message">Error: {errorMessage}</p>}
      </div>
    </div>
  );
};

export default QuizForm;
