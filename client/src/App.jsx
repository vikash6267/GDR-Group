import { useState, useEffect } from "react";
import NavbarMain from "./components/common/NavbarMain";
import Footer from "./components/common/Footer";
import Home from "./pages/Home";
import Modal from "./components/core/Home/Modal";
import SubNavbar from "./components/common/SubNavbar";
import SubNav2 from "./components/common/SubNav2";
import { Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact";
import AboutHome from "./components/core/Home/AboutHome";
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
      <SubNavbar />
      <SubNav2 />
      <NavbarMain />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<AboutHome />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
