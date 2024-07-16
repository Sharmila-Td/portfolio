import "./App.css";
import "./index.css";
import Navbar from "./Components/Navbar/Navbar";
import Home from './Components/Home/Home';
// import About from "./Components/About/About";
// import Service from './Components/Service/Service';
// import Skill from "./Components/Skill/Skill";
import Contact from './Components/Contact/Contact';


function App() {
  return (
    <>
      <Navbar/>
       <div className="main">
      <Home/>
      {/* <About/> */}
      {/* <Service/> */}
      {/* <Skill/> */}
      <Contact/>
      </div>
      
    </>
  );
}

export default App;
