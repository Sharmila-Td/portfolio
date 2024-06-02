
import './App.css';
import Contact from './Components/Contact';
import Main from './Components/Main';
import Navbar from './Components/Navbar';
import Project from './Components/Project';
import Skill from './Components/Skill';

function App() {
  return (
    <div className="container">
          <Navbar/>
          <Main/>
          <Project/>
          <Skill/>
          <Contact/>
    </div>
  );
}

export default App;
