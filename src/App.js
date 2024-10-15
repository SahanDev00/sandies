
import { ToastContainer } from "react-toastify";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
          <Routes>
            <Route index element={<Home/>} />
            <Route path='/about-us' element={<About/>} />
            <Route path='/contact-us' element={<Contact/>} />
          </Routes>
        <Footer/>
      </Router>
      <ToastContainer/>
    </div>
  );
}

export default App;
