import { Estudiante } from "../interfaces/Estudiante";
import { Li } from "./Li"

interface EstudiantesenlasalaProps {
  estudiantes: Estudiante[]
}

export function Estudiantesenlasala({estudiantes}: EstudiantesenlasalaProps) {
  return (
    <div className="grid grid-cols-3 gap-4 p-8">
      {estudiantes.map((estudiante, i) => <Li key={i} estudiante={estudiante}/>)}
    </div>
  );
}