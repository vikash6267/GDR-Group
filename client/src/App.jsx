import { useState, useEffect } from "react";
import NavbarMain from "./components/common/NavbarMain";
import Footer from "./components/common/Footer";
import Home from "./pages/Home";
import Modal from "./components/core/Home/Modal";

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
      <NavbarMain />
      <Home />
      <Footer />


    </div>
  );
}

export default App;
