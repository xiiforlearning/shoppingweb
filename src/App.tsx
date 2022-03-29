import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import GlobalRoutes from "./config/GlobalRoutes";

function App() {
  return (
    <BrowserRouter>
      <>
        <Navbar />
        <GlobalRoutes />
        <Footer />
      </>
    </BrowserRouter>
  );
}

export default App;
