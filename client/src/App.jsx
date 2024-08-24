import NavbarMain from "./components/common/NavbarMain";
import Footer from "./components/common/Footer";
import Home from "./pages/Home";

//Component

function App() {
  return (
    <div className=" min-h-screen">
      <NavbarMain />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
