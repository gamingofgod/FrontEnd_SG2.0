import { useNavigate } from "react-router-dom";
import { ResultadosList } from "../../components/Resultados-lista";
import { usePrueba } from "../../hooks/usePrueba";
import { useEffect, useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { useQueryParams } from "../../hooks/useQueryParams";
import { Pregunta } from "../../interfaces/Pregunta";
import pruebaService from "../../services/prueba.service";
import { Prueba } from "../../interfaces/Prueba";
import Carga from "../../components/Carga";

const PanelDocente = () => {

  const [prueba, setPrueba] = useState<Prueba | undefined>();
  const [preguntas, setPreguntas] = useState<Pregunta[] | undefined>();
  const [preguntaActual, setPreguntasActual] = useState<string | undefined>();
  const [r1, setR1] = useState<string | undefined>();
  const [r2, setR2] = useState<string | undefined>();

  const navigate = useNavigate();
  const docente = useAuth();
  const qp = useQueryParams();

  const { sala, siguientePregunta, TerminarPrueba } = usePrueba({
    sala_id: qp?.codigo_sala,
    cbContestarPregunta: () => {

    },
    cbSiguientPregunta: () => {

    },
    cbTerminarPregunta: () => {
      alert("Prueba guardada con exito");
      navigate("/Menu-Docente")
    }
  });

  const obtenerData = async (codigo_sala: string) => {
    const _prueba = await pruebaService.obtenerPrueba(codigo_sala);
    const _preguntas = await pruebaService.obtenerPreguntas(codigo_sala);
    setPreguntas(_preguntas?.data || []);
    if (_prueba?.succes) {
      setPrueba(_prueba?.data);
    } else {
      alert("ocurrio un error al intentar obtener la sala");
    }
  }

  useEffect(() => {
    if (docente === null) {
      navigate("/Inicio-de-sesion")
    } else {
      if (qp && sala) {
        const { codigo_sala } = qp;
        if (codigo_sala) {
          obtenerData(codigo_sala);
        }
      }
    }
  }, [docente, sala?.sala_id, qp]);

  useEffect(() => {
    if (preguntas && sala && preguntas[sala.pregunta_actual]) {
      setPreguntasActual(preguntas[sala.pregunta_actual].pregunta_pregunta);
      setR1(preguntas[sala.pregunta_actual].pregunta_respuesta_correcta);
      setR2(preguntas[sala.pregunta_actual].pregunta_respuesta_incorrecta);
    }
  }, [sala, preguntas])

  return (

    <div id="pantalla" className="overflow-hidden w-screen h-screen bg-cover bg-center flex flex-col" style={{ backgroundImage: `url(/assets/otros/fondo-bonito.jpg)` }}>
      {
        (sala && prueba && preguntas && preguntaActual && r1 && r2 && docente) ? (
          <>
            <div id="fila1" className="flex-[2] flex justify-center items-center">
              <div id="pregunta" className="w-4/5 h-4/5 bg-orange-500 flex rounded-3xl justify-center items-center">
                <div id="pre-op" className="ml-8 w-9/12">
                  <div id="p-n" className="flex justify-self-startr p-0 h-12 mb-3">
                    <p className="p-2 text-xl bg-red-500 rounded-lg mr-3">
                      {preguntaActual ?? ""}
                    </p>
                    <p className="p-2 text-xl bg-red-500 rounded-lg">#{sala.pregunta_actual+1}</p>
                  </div>
                  <div id="respuestas" className="flex">
                    <div id="R1" className="flex justify-self-start rounded w-1/5 justify-center bg-green-300 mr-3 font-semibold text-black">
                      <p>{r1 ?? ""}</p>
                    </div>
                    <div id="R2" className="flex justify-self-start rounded w-1/5 justify-center bg-white ml-3 font-semibold text-black">
                      <p>{r2 ?? ""}</p>
                    </div>
                  </div>
                </div>
                <div className="flex w-1/3 rounded mr-8">
                  <div className="w-52 h-52">
                      {
                        (preguntas && sala && preguntas[sala.pregunta_actual] ? (
                          <img className="object-cover max-w-full max-h-full my-4 rounded-lg imagen" src={`/assets/imagenes/${preguntas[sala.pregunta_actual].pregunta_id}.jpg`} alt="Logo" />
                        ) : "")
                      }
                    </div>
                </div>
              </div>
            </div>
            <div id="fila2" className="flex-1 flex">
              <div className="container mx-auto pt-4 shadow bg-sky-500 rounded-2xl">
                <h1 className="text-2xl font-bold justify-center text-white flex">Estudiantes</h1>
                <ResultadosList
                  estudiantes={(sala ? Object.values(sala.sala_estudiantes).sort((a, b) => b.estudiante_puntaje - a.estudiante_puntaje) : [])}
                  totalPreguntas={(prueba ? prueba.prueba_numero_preguntas : 0)}
                />
              </div>
            </div>
            <div id="fila3" className="flex-1 flex justify-center items-center">
              <button className="bg-blue-500 hover:bg-blue-700 mr-10 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                Cancelar prueba
              </button>
              {(prueba.prueba_numero_preguntas <= sala.pregunta_actual + 1) ? (
                <button onClick={TerminarPrueba} className="bg-red-500 hover:bg-blue-700 mr-10 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                  Terminar
                </button>
              ) : ""}
              
              {(prueba.prueba_numero_preguntas > sala.pregunta_actual + 1) ? (
                <button onClick={siguientePregunta} className="bg-blue-500 hover:bg-blue-700 mr-10 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                  Siguiente Pregunta
                </button>
              ) : ""}
            </div>
          </>
        ) : <Carga />
      }
    </div>
  );
}
export default PanelDocente