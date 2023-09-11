import { useState } from "react";
import { Link } from "react-router-dom";
export function TablaTareas() {

  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="https://flowbite.com/" className="flex items-center">
          <img src="/assets/otros/logo.jpg" className="h-8 mr-3" alt="Flowbite Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Preguntas</span>
        </a>
        <button onClick={()=>setOpen(o=>!o)} data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
          <span className="sr-only">Open</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>
        <div className={`${!open ? "hidden" : ""} w-full md:block md:w-auto`} id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link to="/" className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500">Inicio</Link>
            </li>
            <li>
              <Link to="/Docente" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Docentes</Link>
            </li>
            <li>
              <Link to="/Estudiantes" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Estudiantes</Link>
            </li>
            <li>
              <Link to="/Contacto" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</Link>
            </li>
            <li>
              <Link to="/Inicio-de-sesion" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Iniciar sesion</Link>
            </li>
            <li>
              <Link to="/Registro" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Registrarse</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

  );
}

/*
<div className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-18">
          <div className="flex">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <img className="h-16 " src="/assets/otros/logo.jpg" alt="Logo" />
            </Link>
            <div className="hidden md:ml-6 md:flex md:space-x-8">
              <Link to="/" className="text-gray-300 hover:text-white flex items-center px-3 py-2 rounded-md text-sm font-medium">Inicio</Link>
              <Link to="/Docente" className="text-gray-300 hover:text-white flex items-center px-3 py-2 rounded-md text-sm font-medium">Docentes</Link>
              <Link to="/Estudiantes" className="text-gray-300 hover:text-white flex items-center px-3 py-2 rounded-md text-sm font-medium">Estudiantes</Link>
              <Link to="/Contacto" className="text-gray-300 hover:text-white flex items-center px-3 py-2 rounded-md text-sm font-medium">Contacto</Link>
            </div>
          </div>
          <div className="flex items-center">
            <Link to="/Inicio-de-sesion"><button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-4">Iniciar sesión</button></Link>
            <Link to="/Registro"><button className="bg-gray-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Registrarse</button></Link>
          </div>
        </div>
      </div>
    </div>
*/