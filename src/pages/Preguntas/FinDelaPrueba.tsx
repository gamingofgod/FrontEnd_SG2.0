import "../../css/animacion.css"
import { ResultadosList } from "../../components/Resultados-lista";
import { TablaTareas } from "../../components/tabla-de-contenido";
import { Estudiante } from "../../interfaces/Estudiante";
interface FinalDeLaPruebaProps {
  estudiantes: Estudiante[]
  totalPreguntas: number
}

const FinalDelaPrueba = ({estudiantes, totalPreguntas}:FinalDeLaPruebaProps) => {

  const dados = [
    {
      id: 1,
      name: 'Laura',
      porcentaje: "60%",
      image: 'assets/otros/imagen-nino.jpg',
      puntuacion: "6/10",
    },
    {
      id: 1,
      name: 'paco',
      porcentaje: "60%",
      image: 'assets/otros/imagen-nino.jpg',
      puntuacion: "6/10",
    },
    {
      id: 1,
      name: 'juan',
      porcentaje: "60%",
      image: 'assets/otros/imagen-nino.jpg',
      puntuacion: "6/10",
    },
  ];
  const firstThreeColors = [" #d4d4d4", "#ffc500", "#ab6528"];

  return (
    <div className=" w-full h-screen mx-auto font-AmaticSC shadow-md bg-cover bg-center" style={{ backgroundImage: `url(/src/assets/otros/fondo-bonito.jpg)` }}>
      <TablaTareas />
      <div className="flex items-center justify-center relative min-h-[120px] pt-12">
        {dados.map((leader, index) => (
          <div className="" key={leader.id}>
            {index + 1 <= 3 && (
              <div className="mx-2" >
                <svg
                  id="crown"
                  fill={firstThreeColors[index]}
                  className="w-[3rem] ml-[51px] absolute"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 100 50"
                >
                  <polygon
                    className=""
                    points="12.7 50 87.5 50 100 0 75 25 50 0 25.6 25 0 0 12.7 50"
                  />
                </svg>
                <img className={`w-[150px] h-[150px] object-cover bg-black rounded-full ${index === 0 ? 'mt-[10px]' : ''}  ${index === 1 ? 'mt-[-20px]' : ''}  ${index === 2 ? 'mt-[20px]' : ''} `}
                  loading="lazy"
                  style={{ animationDelay: `${index * 0.4}s`, animation: 'jumpAnimation 2s ease-in-out ' }}
                  src={leader.image}
                />
              </div>
            )}
          </div>
        ))}
      </div>
      <ResultadosList estudiantes={estudiantes} totalPreguntas={totalPreguntas}/>
      <div >
        <button> </button>
      </div>
    </div>


  );
}
export default FinalDelaPrueba