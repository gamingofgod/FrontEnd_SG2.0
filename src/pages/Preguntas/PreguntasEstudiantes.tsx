import "../../css/animacion.css"
import { useState, useEffect } from "react";
import { useQueryParams } from "../../hooks/useQueryParams";
import { Estudiante } from "../../interfaces/Estudiante";
import { Prueba } from "../../interfaces/Prueba";
import pruebaService from "../../services/prueba.service";
import { Pregunta } from "../../interfaces/Pregunta";
import { usePrueba } from "../../hooks/usePrueba";
import PreguntaDePreparacion from "./PreguntaDePreparacion";
import Preguntasninos from "./preguntas-niños";
import Correcto from "./Respuestacorrecta";
import Incorrecto from "./Respuesteincorrecta";
import Carga from "../../components/Carga";
import FinalDelaPrueba from "./FinDelaPrueba";

const PreguntasEstudiantes = () => {

    const qp = useQueryParams();

    const { sala, contestarPregunta } = usePrueba({
        sala_id: qp?.codigo_sala,
        cbContestarPregunta: (correcta) => {
            console.log(correcta)
            if (correcta) {
                setEstado(2);
            } else {
                setEstado(3);
            }
        },
        cbSiguientPregunta: () => {
            setProgress(0);
            setEstado(0);
        },
        cbTerminarPregunta: () => {
            setEstado(4);
        }
    });

    const [prueba, setPrueba] = useState<Prueba | undefined>();
    const [estudiante, setEstudiante] = useState<Estudiante | undefined>();
    const [preguntas, setPreguntas] = useState<Pregunta[] | undefined>();

    const obtenerData = async (codigo_sala: string, estudiante_id: string) => {
        const _prueba = await pruebaService.obtenerPrueba(codigo_sala);
        const _preguntas = await pruebaService.obtenerPreguntas(codigo_sala);
        setPreguntas(_preguntas?.data || []);
        if (_prueba?.succes) {
            setPrueba(_prueba?.data);
            const _estudiante = await pruebaService.obtenerEstudiante(codigo_sala, estudiante_id);
            if (_estudiante?.succes && _estudiante.data) {
                setEstudiante(_estudiante.data);
                //unirseSala(_estudiante.data);
            } else {
                alert("estudiante no registrado en la sala");
            }
        } else {
            alert("ocurrio un error al intentar obtener la sala");
        }
    }

    useEffect(() => {
        if (qp && sala) {
            const { codigo_sala, estudiante_id } = qp;
            if (codigo_sala && estudiante_id) {
                obtenerData(codigo_sala, estudiante_id);
            }
        }
    }, [sala?.sala_id, qp]);

    const [progress, setProgress] = useState(0);
    const [estado, setEstado] = useState(0);

    useEffect(() => {
        if (progress >= 100) {
            setEstado(1)
        }
    }, [progress]);

    return (
        <div className="w-full h-screen flex flex-col overflow-hidden" style={{ backgroundImage: `url(/assets/otros/fondo-bonito.jpg)` }}>
            {
                (estudiante && sala && prueba && preguntas && preguntas[sala.pregunta_actual]) ? (
                    (estado == 0)
                        ? <PreguntaDePreparacion
                            sala={sala} prueba={prueba} pregunta={preguntas[sala.pregunta_actual]}
                            progress={progress} setProgress={setProgress}
                        />
                        : (estado == 1)
                        ? <Preguntasninos
                            pregunta={preguntas[sala.pregunta_actual]}
                            contestarPregunta={contestarPregunta}
                            estudiante={estudiante}
                        />
                        : (estado == 2)
                        ? <Correcto
                            estudiantes={Object.values(sala.sala_estudiantes).length}
                            puesto={Object.values(sala.sala_estudiantes).sort((a, b) => b.estudiante_puntaje - a.estudiante_puntaje).findIndex((e) => e.estudiante_id == estudiante.estudiante_id) + 1}
                        />
                        : (estado == 3)
                        ? <Incorrecto
                            estudiantes={Object.values(sala.sala_estudiantes).length}
                            puesto={Object.values(sala.sala_estudiantes).sort((a, b) => b.estudiante_puntaje - a.estudiante_puntaje).findIndex((e) => e.estudiante_id == estudiante.estudiante_id) + 1}
                        />
                        : <FinalDelaPrueba
                            estudiantes={(sala ? Object.values(sala.sala_estudiantes).sort((a, b) => b.estudiante_puntaje - a.estudiante_puntaje) : [])}
                            totalPreguntas={(prueba ? prueba.prueba_numero_preguntas : 0)}
                        />
                ) : <Carga/>
            }
        </div>
    );
}
export default PreguntasEstudiantes