import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import "./App.css";
import LoginForm from "./Components/Login";
import RegistrationForm from "./Components/RegistrationForm";
import StdHompage from "./Components/hm/Stdhome";
import Quiz from "./Components/Conduct";
import QuizH from "./Components/Hist";
import QuizP from "./Components/Program";
import QuizB from "./Components/Bio";
import QuizM from "./Components/Maths";
import FeedbackForm from "./Components/Feedback";
// import "./style/dark.scss"
import Quadrants from "./Components/Division";
import QuizForm from "./Components/quizzAdd";
// import Conduct from "./Components/Conduct";
import Hompage from "./Components/hm/Hompage";
import UserDetails from "./Components/Users";
import QuizList from "./Components/Quizlist";
function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/Login" element={<LoginForm />} />
          <Route path="/RegistrationForm" element={<RegistrationForm />} />
          <Route path="/Hompage" element={<Hompage />} />
          <Route path="/quizzAdd" element={<QuizForm />} />
          <Route path="/Users" element={<UserDetails />} />
          <Route path="/Quizlist" element={<QuizList />} />
          <Route path="/Stdhome" element={<StdHompage />} />
          <Route path="/Conduct" element={<Quiz />} />
          <Route path="/Division" element={<Quadrants />} />
          <Route path="/Hist" element={<QuizH />} />
          <Route path="/Program" element={<QuizP />} />
          <Route path="/Bio" element={<QuizB />} />
          <Route path="/Maths" element={<QuizM />} />
          <Route path="/Feedback" element={<FeedbackForm />} />
          <Route path="*" element={<Navigate to="/Login" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
