import { useEffect } from "react";
import { supabase } from "../supabase/client";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Auth/Navbar";
import CursoForm from "../components/CursoForm";
import CursoBoard from "../components/Auth/CursoBoard";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!supabase.auth.getUser()) {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <>
      <Navbar />

      <CursoForm />

      {/* <button onClick={() => supabase.auth.signOut()}>Logout</button> */}
      <CursoBoard />
    </>
  );
};

export default Home;
