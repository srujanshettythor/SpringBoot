import { Route, Routes, BrowserRouter} from "react-router-dom";
import "./App.css"
// import Navigate from "./Components/Navigate";
// import Home from "./Components/Home";
// import About from "./Components/About";
// import Contact from "./Components/Contact";
import LoginForm from "./Components/Login";
import RegistrationForm from "./Components/RegistrationForm";
import Contact from "./Components/Contact";
function App() {
  return (
    <div className="App">
      <BrowserRouter >
      <Routes>
            <Route path="/RegistrationForm" element={<RegistrationForm />} />
            <Route path="/Login" element={<LoginForm />} />
            <Route psth="/contact" component={Contact} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;