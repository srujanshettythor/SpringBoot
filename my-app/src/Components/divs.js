import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, withRouter } from 'react-router-dom'; // Import withRouter
import axios from 'axios';
import Quiz from './Conduct';
import QuizB from './QuizB';

const Quadrants = ({ history }) => { // Destructure history from props
  const [quizCategory, setQuizCategory] = useState(null);

  const handleImageClick = (imageName) => { // Remove the history parameter
    alert(`Clicked on ${imageName}`);
    if (imageName === 'bio.jpeg') {
      axios.get('http://localhost:8000/quiz/category/Biology')
        .then(response => {
          // Handle the response data
          setQuizCategory(response.data.questions);
          history.push('/bio-quiz'); // Use history from props to navigate
        })
        .catch(error => {
          // Handle errors
          console.error('Error fetching biology questions:', error);
        });
    }
    // You can add similar logic for other image names
  };

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', width: '100%', height: '100vh', backgroundColor: 'blue', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ width: '50%', height: '50%', backgroundColor: 'rgb(0,0,0)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <img src={require('./bio.jpeg')} alt="Bio" style={{ width: '80%', height: '80%' }} onClick={() => handleImageClick('Bio')} />
      </div>
      <div style={{ width: '50%', height: '50%', backgroundColor: 'rgb(240, 255, 255)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <img src={require('./hist.png')} alt="History" style={{ width: '80%', height: '80%' }} onClick={() => handleImageClick('History')} />
      </div>
      <div style={{ width: '50%', height: '50%', backgroundColor: 'rgb(240, 255, 255)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <img src={require('./prgm.png')} alt="Programming" style={{ width: '80%', height: '80%' }} onClick={() => handleImageClick('Programming')} />
      </div>
      <div style={{ width: '50%', height: '50%', backgroundColor: 'rgb(0, 0, 0)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <img src={require('./math.png')} alt="Mathematics" style={{ width: '80%', height: '80%' }} onClick={() => handleImageClick('Mathematics')} />
      </div>
      {quizCategory && <Quiz quizData={quizCategory} />}
    </div>
  );
};

// Wrap the Quadrants component with withRouter to pass history as a prop
export default withRouter(Quadrants);
