import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import NavBar from "./landing page components/navbar";
import Exercises from "./components/Exercises";
import { Custom } from "./components/Custom";
import { Pop_Up } from "./components/pop-up";
import { AddExercise } from "./components/add-exercise";
import Testing from "./components/Testing";
import { BeforeStarting } from "./components/before-starting";
import { TrainingPage } from "./components/trainingPage";
import { StartedTraining } from "./components/started-training";
import { Timer } from "./components/timer";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="parent-container">
          <Routes>
            <Route path="/navbar" element={<NavBar />}></Route>
            <Route path="/" element={<Custom />}></Route>
            <Route path="/testing" element={<Testing />}></Route>
            <Route
              path="/started-training"
              element={<StartedTraining />}
            ></Route>
            <Route path="/exercises" element={<Exercises />}></Route>
            <Route path="/add-exercise" element={<AddExercise />}></Route>
            <Route path="/before-starting" element={<BeforeStarting />}></Route>
            <Route path="/trainingPage" element={<TrainingPage />}></Route>
            <Route path="/timer" element={<Timer />}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
