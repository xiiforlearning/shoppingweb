import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import GlobalRoutes from "./config/GlobalRoutes";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<GlobalRoutes />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
