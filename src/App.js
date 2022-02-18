import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header";
import Howitworks from "./Components/Howitworks";
import About from "./Components/About";
import Agent from "./Components/Agent";
import Properties from "./Components/Properties";
import Contact from "./Components/Contact";

function App() {
  return (
    <div className="App">
      <Header />
      <Howitworks />
      <About />
      <Agent />
      <Properties />
      <Contact />
    </div>
  );
}

export default App;
