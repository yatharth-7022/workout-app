import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import NavBar from "./landing page components/navbar";
import Exercises from "./components/Exercises";
import { Custom } from "./components/Custom";
import { Pop_Up } from "./components/pop-up";
function App() {
  return (
    <Router>
      <div className="App">
        <div className="parent-container">
          <NavBar />
          <Routes>
            <Route path="/" element={<Custom />}></Route>
            <Route path="/exercises" element={<Exercises />}></Route>
            {/* <Route path="/pop-up" element={<Pop_Up />}></Route> */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
