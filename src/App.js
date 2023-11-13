import Nav from "./Components/Nav";
import Home from "./Components/Home";
import Project from "./Components/Project";
import Skills from "./Components/skills";
// import Cards from "./components/cards";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
      {/* <Cards/> */}
      <Skills />
      <Project />
    </div>
  );
}

export default App;