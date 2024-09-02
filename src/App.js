import "./App.css";
import NavBar from "./landing page components/navbar";
import Slideshow from "./landing page components/slideshow";

function App() {
  return (
    <div className="App">
      <div className="parent-container">
        <NavBar />
        <Slideshow />
        <div className="add-button-container">
          <button id="add-button">+ NEW</button>
        </div>
      </div>
    </div>
  );
}

export default App;
