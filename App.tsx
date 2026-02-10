import { Routes, Route, Link, useNavigate} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Estimate from "./pages/Estimate";
import './App.css';
import viteLogo from '/vite.svg';
import listsvg from './pages/img/list_icon.svg';
import { useEffect, useState } from "react";
import home from './pages/img/home.svg';
import insta from './pages/img/instagram.svg';
import tel from './pages/img/telegram.svg';
import whatsapp from './pages/img/whatsapp.svg';
import phone from './pages/img/phone-call.svg';



function App() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const handleScroll = () => {
      setOpen(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
}, []);
  return (
    <>
      <div id='header'>
        <div id="headercol1">
          <button className="headbutt" onClick={() => setOpen(!open)}>
            <img src={listsvg} alt="list" width={24} height={24}/>
          </button>
          <button className="headbutt" onClick={() => {navigate("/"),setOpen(false)}}>
            <img src={home} alt="list" width={24} height={24}/>
          </button>
          {/* <nav>
            <Link to="/">خانه</Link> |{" "}
            <Link to="/about">درباره</Link>| {" "}
            <Link to="/contact">تماس</Link>
          </nav> */}
        </div>
        <div id="logodiv">
          <img src={viteLogo} width={50} height={50}/>
          <b style={{color:'black'}}>BuildWise</b>
        </div>
      </div>
      {open && (
        <div className="overlay" onClick={() => setOpen(false)}>
          <ul className="menu" onClick={(e) => e.stopPropagation()}>
            <li>
              <Link to="/estimate" onClick={() => setOpen(false)}>تخمین قیمت</Link>
            </li>
            <li>
              <Link to="/Contractors" onClick={() => setOpen(false)}>پیمانکاران</Link>
            </li>
            <li>
              <Link to="/about" onClick={() => setOpen(false)}>درباره ما</Link>
              
            </li>
            <li>
              <Link to="/contact" onClick={() => setOpen(false)}>تماس با ما</Link>
            </li>
            <button id="loginbutt">
              <Link className="lglink" to="/enter" onClick={() => setOpen(false)}>ورود/ثبت نام</Link>
            </button>
          </ul>
        </div>  
      )}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/estimate" element={<Estimate />}/>
      </Routes>

      <div id="footer">
        <img/>
        <b>پلتفرم هوشمند تخمین هزینه ساخت و ساز و ارتباط با پیمانکاران معتبر</b>
        <ul id="media">
          <li>
            <img src={insta}/>
          </li>
          <li>
            <img src={tel}/>
          </li>
          <li>
            <img src={whatsapp}/>
          </li>
          <li>
            <img src={phone}/>
          </li>
        </ul>
        <b>دسترسی سریع</b>
        <ul id="access">
          <li>
            <Link to='/estimate'>تخمین قیمت</Link>
          </li>
          <li>
            <Link to="/Contractors">پیمانکاران</Link>
          </li>
          <li>
            <Link to="/about">درباره ما</Link>
          </li>
          <li>
            <Link to="/contact">تماس با ما</Link>
          </li>
        </ul>
      </div>
    </>
  )
}

export default App;
