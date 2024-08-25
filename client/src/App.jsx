import { useState, useEffect } from "react";
import NavbarMain from "./components/common/NavbarMain";
import Footer from "./components/common/Footer";
import Home from "./pages/Home";
import Modal from "./components/core/Home/Modal";
import SubNavbar from "./components/common/SubNavbar";
import SubNav2 from "./components/common/SubNav2";

function App() {
  const [showModal, setShowModal] = useState(true);

  useEffect(() => {
    // Logic to show modal initially or based on a condition
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
      <Home />
      <Footer />
    </div>
  );
}

export default App;
