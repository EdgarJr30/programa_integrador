import { useState } from "react";
import { useCursos } from "../context/CursoContext";

const CursoForm = () => {
  const [cursoTitle, setCursoTitle] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [videoUrl, setVideoUrl] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  const { createCurso, adding } = useCursos();

  const handleSUbmit = async (e) => {
    e.preventDefault();
    try {
      await createCurso(cursoTitle, imageUrl, videoUrl, description, price);

      setCursoTitle("");
      setImageUrl("");
      setVideoUrl("");
      setDescription("");
      setPrice("");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <form onSubmit={handleSUbmit}>
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <label
              htmlFor="cursoTitle"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Titulo del curso
            </label>
            <input
              type="text"
              id="cursoTitle"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="React de cero a experto"
              required
              onChange={(e) => setCursoTitle(e.target.value)}
              value={cursoTitle}
            />
          </div>
          <div>
            <label
              htmlFor="imageUrl"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              URL de la imagen
            </label>
            <input
              type="url"
              id="imageUrl"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="https://imagen-del-curso.com"
              required
              onChange={(e) => setImageUrl(e.target.value)}
              value={imageUrl}
            />
          </div>
          <div>
            <label
              htmlFor="videoUrl"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              URL del video
            </label>
            <input
              type="url"
              id="videoUrl"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="https://video-del-curso.com"
              required
              onChange={(e) => setVideoUrl(e.target.value)}
              value={videoUrl}
            />
          </div>
          <div>
            <label
              htmlFor="description"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Descripcion del curso
            </label>
            <input
              type="text"
              id="description"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Aprenderas desde las bases de React hasta un nivel avanzado."
              required
              onChange={(e) => setDescription(e.target.value)}
              value={description}
            />
          </div>
          <div>
            <label
              htmlFor="setPrice"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Precio del curso
            </label>
            <input
              type="text"
              id="setPrice"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="20$"
              required
              onChange={(e) => setPrice(e.target.value)}
              value={price}
            />
          </div>
        </div>

        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          disabled={adding}
        >
          {adding ? "Agregando..." : "Agregar Curso"}
        </button>
      </form>
    </>
  );
};

export default CursoForm;
