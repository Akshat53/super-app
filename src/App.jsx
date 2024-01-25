import "./App.css";
import { Route, Routes } from "react-router-dom";
import Showcase from "./pages/Showcase";
import Movies from "./pages/Movies";
import Register from "./pages/Register";
import Info from "./pages/Info";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Register/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/showcase" element={<Showcase/>} />
      <Route path="/movies" element={<Movies/>} />
      <Route path="/info" element={<Info/>} />
      <Route path="*" element={<NotFound/>} />
    </Routes>
  );
}

export default App;
