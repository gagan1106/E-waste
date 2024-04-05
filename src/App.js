import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import About from "./components/about/About";
import Homepage from "./components/homepage/Homepage";
import Service from "./components/Services/Service";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Service />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
