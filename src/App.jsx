import "./App.css";
import { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
// import Navbar from "./components/Navbar";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import UpdateCursoForm from "./Pages/UpdateCursoForm";
import NotFound from "./Pages/NotFound";
import { supabase } from "./supabase/client";
import { CursoContextProvider } from "./context/CursoContext";
import About from "./Pages/About";
import DashBoard from "./components/Auth/DashBoard";
import Footer from "./components/Footer";
import Navbar from "./components/Auth/Navbar";
import VideoCard from "./components/VideoCard";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    supabase.auth.onAuthStateChange((event, session) => {
      if (!session) {
        navigate("/login");
      } /* else {
        navigate("/");
      } */
    });
  }, [navigate]);

  return (
    <>
      <CursoContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/:id" element={<UpdateCursoForm />} />
          <Route path="/about" element={<About />} />
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/clase:id" element={<VideoCard />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </CursoContextProvider>
    </>
  );
}

export default App;
