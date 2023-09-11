import { useNavigate } from "react-router-dom";
import { Estudiantesenlasala } from "../../components/Estudiantes-Lista"
import { Codigo } from "../../components/Codigo";
import { useEffect } from "react";
import { useAuth } from "../../hooks/useAuth";
import { useQueryParams } from "../../hooks/useQueryParams";
import { useSala } from "../../hooks/useSala";

const SalaProfesor = () => {

  const navigate = useNavigate();
  const docente = useAuth();
  const qp = useQueryParams();

  const { sala, empezarSala, eliminarSala } = useSala(qp?.sala_id);

  useEffect(() => {
    if (docente === null) {
      navigate("/Inicio-de-sesion")
    }
  }, [docente, qp]);

  return (

    <div id="pantalla" className="w-full h-screen grid bg-yellow-400 bg-cover bg-center" style={{ backgroundImage: `url(/assets/otros/fondo-bonito.jpg)` }}>
      <div id="fila1" className="h-1/2" >
        <div className="flex items-center justify-center">
          <img className="object-cover w-1/5 h-1/5 my-4 rounded-full" src="/assets/otros/logo.jpg" alt="Logo" />
        </div >
        <div id="fila2" className="flex justify-center">
          <div className="mt-10 rounded hidden md:flex">
            <div id="tcodigo" className="flex items-center bg-blue-700 text-white rounded-l-lg py-2 px-4">
              <p className="text-lg font-bold">Código:</p>
            </div>
          </div>
          <Codigo codigo={qp?.sala_id} />

        </div>
        <div id="fila3" className="shadow-md rounded my-8 mx-20 flex-grow">
          <p className="text-4xl text-gray-200">Esudiantes: </p>
          <Estudiantesenlasala estudiantes={(sala) ? Object.values(sala.sala_estudiantes) : []} />
        </div>
      </div>
      <div className="flex justify-center h-1/3">
        <button onClick={eliminarSala} className="bg-blue-500 hover:bg-blue-700 mr-10 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300 ease-in-out" type="button">Cancelar prueba</button>
        <button onClick={empezarSala} className="bg-blue-500 hover:bg-blue-700 ml-10 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300 ease-in-out">Iniciar prueba</button>
      </div>
    </div>

  );
}
export default SalaProfesor