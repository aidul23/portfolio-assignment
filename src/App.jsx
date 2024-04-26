import "./App.css";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About/>
      <Portfolio />
    </>
  );
}

export default App;
