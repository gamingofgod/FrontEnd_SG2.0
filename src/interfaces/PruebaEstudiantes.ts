import { Estudiante } from "./Estudiante";
import { Prueba } from "./Prueba";
import { Temario } from "./Temario";

export interface PruebaEstudiantes extends Prueba {
    estudiantes: Estudiante[];
    temario: Omit<Temario, "temario_id">
}