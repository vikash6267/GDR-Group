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
// import GreedSteel72 from "./Routes/GreedSteel72";
import RKSHome from "./Routes/RKSHome";
import Gallery from "./pages/Gallery";
// import Liquied from "./Routes/Liquied";
import ContactSection from "./components/common/SocialMedia";
import Blog from "./pages/Blog";
import ScrollToTop from "./components/ScrollToTop";
import SingleBlog from "./pages/SingleBLogs";
import OpenRoute from "./components/Admin/auth/OpenRoute";
import Login from "./components/Admin/pages/Login";
import Layout from "./components/Admin/pages/Layout";
import Dashboard from "./components/Admin/pages/Dashboard";
import AddBlog from "./components/Admin/pages/AddBlog";
import GetBlog from "./components/Admin/pages/GetBlogs";
import PrivateRoute from "./components/Admin/auth/PrivateRoute";
import Career from "./pages/Career";
import AddGallery from "./components/Admin/pages/AddGallery";
import JobOpening from "./components/Admin/pages/JobOpening";
import AddProduct from "./components/Admin/pages/AddProduct";
import GetProduct from "./components/Admin/pages/GetProduct";
function App() {
  const [showModal, setShowModal] = useState(true);

  useEffect(() => {
    setShowModal(true);
    setInterval(() => {
      setShowModal(false);
    }, 9000);
  }, []);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="min-h-screen">
      {/* {showModal && <Modal onClose={handleCloseModal} />} */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Service />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/news" element={<Blog />} />
        <Route path="/career" element={<Career />} />
        <Route path="/news/:id" element={<SingleBlog />} />

        <Route path="/*" element={<Constroctor />} />

        <Route path="/ri-si-food/*" element={<RISIFoddHome />} />
        <Route path="/srs-foods/*" element={<MilkProduct />} />
        <Route path="/rks-homes/*" element={<RKSHome />} />
        {/* <Route path="/72-gdr-steel/*" element={<GreedSteel72 />} />
        <Route path="/liquid/*" element={<Liquied />} /> */}

        <Route
          path="/login"
          element={
            <OpenRoute>
              <Login />
            </OpenRoute>
          }
        />

        <Route
          element={
            <PrivateRoute>
              <Layout />
            </PrivateRoute>
          }
        >
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/addBlog" element={<AddBlog />} />
          <Route path="/admin/getBlog" element={<GetBlog />} />
          <Route path="/admin/create-gallery" element={<AddGallery />} />
          <Route path="/admin/jobs" element={<JobOpening />} />
          <Route path="/admin/product-create" element={<AddProduct />} />
          <Route path="/admin/product-getAll" element={<GetProduct />} />
        </Route>
      </Routes>

      <ContactSection />

      <div className=" fixed bottom-0 z-50 right"></div>
      <ScrollToTop />
    </div>
  );
}

export default App;
