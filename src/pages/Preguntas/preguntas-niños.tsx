import { useEffect } from "react";
import { useState } from "react";
import { Pregunta } from "../../interfaces/Pregunta";
import { randomNumber } from "../../utils/utils";
import { Estudiante } from "../../interfaces/Estudiante";

interface PreguntasninosProps{
  estudiante: Estudiante
  contestarPregunta: (estudiante_id: string, pregunta_id: number, respuesta: string) => void
  pregunta: Pregunta
}

const Preguntasninos = ({estudiante, contestarPregunta, pregunta}:PreguntasninosProps) => {

  const [ respuestas, setRespuestas ] = useState<string[]>([]);

  useEffect(()=>{
    const rd = randomNumber(1,3);
    if(rd == 1){
      setRespuestas([pregunta.pregunta_respuesta_correcta, pregunta.pregunta_respuesta_incorrecta]);
    }else{
      setRespuestas([pregunta.pregunta_respuesta_incorrecta, pregunta.pregunta_respuesta_correcta]);
    }
  }, []);

  const [backgroundColor, setBackgroundColor] = useState('bg-yellow-500');

  useEffect(() => {
    const colors = ['bg-red-400', 'bg-green-400', 'bg-blue-400', 'bg-yellow-400', 'bg-pink-400', 'bg-purple-400', 'bg-indigo-400'];

    const interval = setInterval(() => {
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      setBackgroundColor(randomColor);
    }, 5000);

    return () => {
      clearInterval(interval);
    };

  }, []);

  const responserPregunta = (respuesta: string) => {
    contestarPregunta(estudiante.estudiante_id, pregunta.pregunta_id, respuesta);
  }
  
  return (
    <div className="w-full h-screen  flex flex-col " style={{ backgroundImage: `url(/assets/otros/fondo-bonito.jpg)` }}>
      <div id="fila1" className="h-1/6 flex ">
        <div id="pregunta" className="justify-center w-11/12 bg-yellow-500 flex rounded-full m-5 mx-10 items-center">
          <p className="p-8 text-4xl rounded "> {pregunta.pregunta_pregunta}</p>
        </div>
      </div>
      <div id="fila2" className="h-1/2 mb-5 mt-10 flex ">
        <div id="imagen" className={`w-11/12 h-full ${backgroundColor} flex rounded mx-10 items-center justify-center`}>
          <img className="object-cover w-full h-full max-h-full my-4 rounded-lg imagen max-w-sm" src={`/assets/imagenes/${pregunta.pregunta_id}.jpg`} alt="Logo" />
        </div>
      </div>
      <div id="fila3" className="w-full  h-1/5 mt-10 flex justify-center">
        <div id="repuestas" className="m-5 grid grid-cols-1 sm:grid-cols-2 justify-center gap-8 w-full">
          {respuestas.map((respuesta, i) => (
            <button onClick={()=>{responserPregunta(respuesta)}} key={i} className={`flex bg-cyan-600 hover:bg-cyan-500 items-center rounded-3xl w-full justify-center h-full sm:w-auto text-5xl text-white font-semibold"`}>
              <p>{respuesta}</p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Preguntasninos

