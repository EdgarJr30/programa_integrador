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
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/:id" element={<UpdateCursoForm />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </CursoContextProvider>
    </>
  );
}

export default App;
