import "./App.css";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import About from "./components/About";
import ContactMe from "./components/ContactMe";
import Works from "./components/Works";
function App() {
  return (
    <>
      <Navbar />
      <Intro />
      <About />
      <Works />
      <ContactMe />
    </>
  );
}

export default App;
