import { Routes, Route } from "react-router-dom";
//import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/AboutUs/About";
import Contact from "./components/Contact/Contact";
import Projects from "./components/Projects/Projects";

const App = () => (
  <>
    <main style={{ paddingTop: "60px" }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </main>
  </>
);

export default App;
