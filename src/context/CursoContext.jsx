import { createContext, useContext, useState } from "react";
import { supabase } from "../supabase/client";
import { useNavigate } from "react-router-dom";

export const CursoContext = createContext();

export const useCursos = () => {
  const context = useContext(CursoContext);
  if (!context) throw new Error("useCursos must be used within a CursoContext");
  return context;
};

// eslint-disable-next-line react/prop-types
export const CursoContextProvider = ({ children }) => {
  const navigate = useNavigate();

  const [cursos, setCursos] = useState([]);
  const [adding, setAdding] = useState(false);
  const [loading, setLoading] = useState(false);

  const getCursos = async () => {
    setLoading(true);

    try {
      const { error, data } = await supabase.from("cursos").select();

      if (error) {
        throw error;
      }
      setCursos(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const createCurso = async (
    cursoTitle,
    imageUrl,
    videoUrl,
    description,
    price
  ) => {
    setAdding(true);
    try {
      const user = supabase.auth.getUser();
      const { error, data } = await supabase
        .from("cursos")
        .insert({
          title: cursoTitle,
          imageUrl: imageUrl,
          videoUrl: videoUrl,
          description: description,
          price: price,
          userId: user.id,
        })
        .select();

      setCursos([...cursos, ...data]);

      if (error) throw error;
    } catch (error) {
      console.error(error);
    } finally {
      setAdding(false);
    }
  };

  const deleteCurso = async (id) => {
    try {
      const { error, data } = await supabase
        .from("cursos")
        .delete()
        .eq("id", id)
        .select();

      console.log(data);
      if (error) throw error;

      setCursos(cursos.filter((curso) => curso.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  const updateCurso = async (
    id,
    cursoTitle,
    imageUrl,
    videoUrl,
    description,
    price
  ) => {
    try {
      const { data, error } = await supabase
        .from("cursos")
        .update({
          id: id,
          title: cursoTitle,
          imageUrl: imageUrl,
          videoUrl: videoUrl,
          description: description,
          price: price,
        })
        .eq("id", id)
        .select();

      if (error) throw error;
      console.log(data);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <CursoContext.Provider
      value={{
        cursos,
        getCursos,
        createCurso,
        adding,
        loading,
        deleteCurso,
        updateCurso,
      }}
    >
      {children}
    </CursoContext.Provider>
  );
};
