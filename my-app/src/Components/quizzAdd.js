import React, { useState } from "react";
import axios from "axios";
import "./QuizForm.css";

const QuizForm = () => {
  const [formData, setFormData] = useState({
    question: "",
    option1: "",
    option2: "",
    option3: "",
    option4: "",
    answer: "",
    difficultyLevel: "",
    questionTitle: "",
    category: "",
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Simple validation
    const validationErrors = {};
    if (!formData.question.trim())
      validationErrors.question = "Question is required";
    if (!formData.option1.trim())
      validationErrors.option1 = "Option 1 is required";
    if (!formData.option2.trim())
      validationErrors.option2 = "Option 2 is required";
    if (!formData.option3.trim())
      validationErrors.option3 = "Option 3 is required";
    if (!formData.option4.trim())
      validationErrors.option4 = "Option 4 is required";
    if (!formData.answer.trim()) validationErrors.answer = "Answer is required";
    if (!formData.difficultyLevel.trim())
      validationErrors.difficultyLevel = "Difficulty is required";
    if (!formData.questionTitle.trim())
      validationErrors.questionTitle = "Question title is required";
    if (!formData.category.trim())
      validationErrors.category = "Category is required";

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      try {
        await axios.post("http://localhost:8000/quiz/add", formData);
        setSuccessMessage("Quiz added successfully!");
        setFormData({
          question: "",
          option1: "",
          option2: "",
          option3: "",
          option4: "",
          answer: "",
          difficultyLevel: "",
          questionTitle: "",
          category: "",
        });
      } catch (error) {
        setErrorMessage(error.message);
      }
    }
  };

  return (
    <div className="addbody">
      <div className="quiz-form-container">
        <div className="background-image"></div>
        <div className="form-content">
          <h2>Add Quiz</h2>
          <form onSubmit={handleSubmit} className="quiz-form">
            <div className="form-group">
              <label>Question:</label>
              <input
                type="text"
                name="question"
                value={formData.question}
                onChange={handleChange}
              />
              {errors.question && (
                <p className="error-message">{errors.question}</p>
              )}
            </div>
            <div className="form-group">
              <label>Option 1:</label>
              <input
                type="text"
                name="option1"
                value={formData.option1}
                onChange={handleChange}
              />
              {errors.option1 && (
                <p className="error-message">{errors.option1}</p>
              )}
            </div>
            <div className="form-group">
              <label>Option 2:</label>
              <input
                type="text"
                name="option2"
                value={formData.option2}
                onChange={handleChange}
              />
              {errors.option2 && (
                <p className="error-message">{errors.option2}</p>
              )}
            </div>
            <div className="form-group">
              <label>Option 3:</label>
              <input
                type="text"
                name="option3"
                value={formData.option3}
                onChange={handleChange}
              />
              {errors.option3 && (
                <p className="error-message">{errors.option3}</p>
              )}
            </div>
            <div className="form-group">
              <label>Option 4:</label>
              <input
                type="text"
                name="option4"
                value={formData.option4}
                onChange={handleChange}
              />
              {errors.option4 && (
                <p className="error-message">{errors.option4}</p>
              )}
            </div>
            <div className="form-group">
              <label>Answer:</label>
              <input
                type="text"
                name="answer"
                value={formData.answer}
                onChange={handleChange}
              />
              {errors.answer && (
                <p className="error-message">{errors.answer}</p>
              )}
            </div>
            <div className="form-group">
              <label>Difficulty:</label>
              <input
                type="text"
                name="difficultyLevel"
                value={formData.difficultyLevel}
                onChange={handleChange}
              />
              {errors.difficultyLevel && (
                <p className="error-message">{errors.difficultyLevel}</p>
              )}
            </div>
            <div className="form-group">
              <label>Question Title:</label>
              <input
                type="text"
                name="questionTitle"
                value={formData.questionTitle}
                onChange={handleChange}
              />
              {errors.questionTitle && (
                <p className="error-message">{errors.questionTitle}</p>
              )}
            </div>
            <div className="form-group">
              <label>Category:</label>
              <input
                type="text"
                name="category"
                value={formData.category}
                onChange={handleChange}
              />
              {errors.category && (
                <p className="error-message">{errors.category}</p>
              )}
            </div>
            <button type="submit" className="submit-btn">
              Submit
            </button>
          </form>
          {successMessage && (
            <p className="success-message">{successMessage}</p>
          )}
          {errorMessage && (
            <p className="error-message">Error: {errorMessage}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuizForm;
