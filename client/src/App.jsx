import { useState, useEffect } from "react";
import Home from "./pages/Home";
import Modal from "./components/core/Home/Modal";

import { Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact";
import About from "./pages/About";

import Service from "./pages/Service";
import RISIFoddHome from "./Routes/RISIFoddHome";
import MilkProduct from "./Routes/MilkProduct";
import Constroctor from "./Routes/Constroctor";
import GreedSteel72 from "./Routes/GreedSteel72";
import RKSHome from "./Routes/RKSHome";
import Gallery from "./pages/Gallery";
import Liquied from "./Routes/Liquied";
import ContactSection from "./components/common/SocialMedia";
import Blog from "./pages/Blog";
import ScrollToTop from "./components/ScrollToTop";
function App() {
  const [showModal, setShowModal] = useState(true);

  useEffect(() => {
    setShowModal(true);
  }, []);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="min-h-screen">
      {showModal && <Modal onClose={handleCloseModal} />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Service />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/news" element={<Blog />} />
        <Route path="/*" element={<Constroctor />} />

        <Route path="/ri-si-food/*" element={<RISIFoddHome />} />
        <Route path="/srs-foods/*" element={<MilkProduct />} />
        <Route path="/rks-homes/*" element={<RKSHome />} />
        <Route path="/72-gdr-steel/*" element={<GreedSteel72 />} />
        <Route path="/liquid/*" element={<Liquied />} />
      </Routes>

      <ContactSection />

      <div className=" fixed bottom-0 z-50 right"></div>
      <ScrollToTop />
    </div>
  );
}

export default App;
