import { ResultadosList } from "../../components/Resultados-lista";
import { Link } from "react-router-dom";
import { Estudiante } from "../../interfaces/Estudiante";

interface ResultadosProps {
  estudiantes: Estudiante[]
  totalPreguntas: number
}

const Resultados = ({estudiantes, totalPreguntas}:ResultadosProps) => {
  return (
    <div className="h-screen w-full bg-cover bg-center" style={{ backgroundImage: `url(/src/assets/fondo-bonito.jpg)` }}>
      <h1 className="text-center text-3xl font-bold text-white mb-8">Resultados de la prueba</h1>
      <div>
        <img className="" src="" />
      </div>
      <div className="flex">
        <div className=" p-8 mx-3 shadow text-center bg-sky-500 rounded-lg  flex-grow">
          <h2 className="text-xl font-bold text-white mb-4">Puntajes de los estudiantes</h2>
          <ResultadosList estudiantes={estudiantes} totalPreguntas={totalPreguntas}/>
        </div>
        <div id="botones" className="flex shadow-lg rounded-lg p-2  flex-col justify-start space-y-4 ml-8">
          <Link to="/Menu-Docente"> <button className="boton-principal bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">Iniciar otra prueba</button> </Link>
          <Link to="/Promedio-de-las-pruebas"><button className="boton-principal bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">Ver Estadistica</button> </Link>
        </div>
      </div>
    </div>
  );
}
export default Resultados