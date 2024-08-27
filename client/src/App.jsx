import { useState, useEffect } from "react";
import Home from "./pages/Home";
import Modal from "./components/core/Home/Modal";

import { Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact";
import About from "./pages/About";
import ConstructorHome from "./pages/constructor/ConstructorHome";
import ConstructorAbout from "./pages/constructor/ConstructorAbout";
import ConstructorContact from "./pages/constructor/ConstructorContact";
import Service from "./pages/Service";
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
        <Route path="/construction-home" element={<ConstructorHome />} />
        <Route path="/construction-about" element={<ConstructorAbout />} />
        <Route path="/construction-contact" element={<ConstructorContact />} />
      </Routes>
    </div>
  );
}

export default App;
