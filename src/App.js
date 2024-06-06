import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Main from "./Components/Main/Main";
import Skill from "./Components/Skill/Skill";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Main />
        <Skill/>
      </div>
    </>
  );
}

export default App;
