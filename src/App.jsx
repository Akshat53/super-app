import "./App.css";
import { Route, Routes } from "react-router-dom";
import Showcase from "./pages/Showcase";
import Movies from "./pages/Movies";
import Auth from "./pages/Auth";
import Info from "./pages/Info";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Auth/>} />
      <Route path="/register" element={<Auth/>} />
      <Route path="/login" element={<Auth type="Login"/>} />
      <Route path="/showcase" element={<Showcase/>} />
      <Route path="/movies" element={<Movies/>} />
      <Route path="/info" element={<Info/>} />
      <Route path="*" element={<NotFound/>} />
    </Routes>
  );
}

export default App;
