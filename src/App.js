import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Pages/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PhotoGallery from "./components/Pages/PhotoGallery";
import AboutUs from "./components/Pages/AboutUs";
import Contactus from "./components/Pages/Contactus";
import Acadmenic from "./components/Pages/Acadmenic";
import Infrastructure from "./components/Pages/Infrastructure";
import Faculty from "./components/Pages/Faculty";
import Notice from "./components/Pages/Notice";
import ScrollToTop from "./components/ScrollToTop";
function App() {
  return (
        <>
      
        <BrowserRouter>
        <ScrollToTop />
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About-School" element={<AboutUs />} />
          <Route path="/Faculty" element={<Faculty />} />
          <Route path="/Contact-Us" element={<Contactus />} />
          <Route path="/Academic-Calendar" element={<Acadmenic />} />
          <Route path="/Infrastructure" element={<Infrastructure />} />
          <Route path="/Gallery" element={<PhotoGallery />} />
          <Route path="/notice/:id" element={<Notice />} />
          </Routes>
        </BrowserRouter>
        </>
  );
}

export default App;
