import { Estudiante } from "./Estudiante";
import { Pregunta } from "./Pregunta";

export interface Sala{
    sala_id: string,
    sala_docente_id: string
    sala_estudiantes: {[key: string]: Estudiante}
    pregunta_actual: number
}