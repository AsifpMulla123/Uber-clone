import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Services from "./components/Services";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css"
import "./components/responsive.css";
import SignIn from './components/SignIn';
import Signup from './components/Signup';
function App() {
  const showLanguages = () => {
    let languages = document.getElementById('showLanguage');
    languages.classList.toggle("showLang");
  }
  const showCompany = () => {
    console.log("showing companies");
    let company = document.querySelector('.show-horizontal');
    company.classList.toggle('show');
  }
  return (
    <>
      <BrowserRouter>
        <Navbar showLanguages={showLanguages} showCompany={showCompany} />
        <Routes>
          <Route path="/" element={<Home showLanguages={showLanguages} showCompany={showCompany} />} />
          <Route path="/" element={<About />} />
          <Route path="/" element={<Contact />} />
          <Route path="/" element={<Services />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
