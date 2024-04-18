/* eslint-disable react/prop-types */
import { useCursos } from "../context/CursoContext";
import { Link } from "react-router-dom";

function CursoCard({ curso }) {
  const { deleteCurso } = useCursos();

  const handleDelete = async (id) => {
    await deleteCurso(id);
  };

  return (
    // <div key={curso.id}>
    //   <div classNameNameNameName="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    //     <a href="#">
    //       <img classNameNameNameName="rounded-t-lg" src={curso.imageUrl} alt="" />
    //     </a>
    //     <div classNameNameNameName="p-5">
    //       <a href="#">
    //         <h5 classNameNameNameName="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
    //           {curso.title}
    //         </h5>
    //       </a>
    //       <p classNameNameNameName="mb-3 font-normal text-gray-700 dark:text-gray-400">
    //         {curso.description}
    //       </p>
    //       <a
    //         href="#"
    //         classNameNameNameName="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    //       >
    //         Read more
    //         <svg
    //           classNameNameNameName="rtl:rotate-180 w-3.5 h-3.5 ms-2"
    //           aria-hidden="true"
    //           xmlns="http://www.w3.org/2000/svg"
    //           fill="none"
    //           viewBox="0 0 14 10"
    //         >
    //           <path
    //             stroke="currentColor"
    //             strokeLinecap="round"
    //             strokeLinejoin="round"
    //             strokeWidth="2"
    //             d="M1 5h12m0 0L9 1m4 4L9 9"
    //           />
    //         </svg>
    //       </a>
    //     </div>
    //   </div>

    //   <button onClick={() => handleDelete(curso.id)}>Delete</button>
    //   <Link to={"/" + curso.id}>Update</Link>
    // </div>
    // <!-- component -->

    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href={curso.videoUrl}>
        <img className="rounded-t-lg" src={curso.imageUrl} alt="" />
      </a>
      <div className="p-5">
        <a href={curso.videoUrl}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {curso.title}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {curso.description}
        </p>
        <a
          href={curso.videoUrl}
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Ver clases
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
      </div>

      <Link to={"/" + curso.id}>
        {
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Actualizar
          </button>
        }
      </Link>

      <button
        type="button"
        className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
        onClick={() => handleDelete(curso.id)}
      >
        Eliminar
      </button>
    </div>
  );
}

export default CursoCard;
