import { Estudiante } from "../interfaces/Estudiante";

interface LiProps {
  estudiante: Estudiante
}

export function Li({estudiante}:LiProps) {
  return (
    <div className="bg-yellow-500 h-45 rounded flex items-center justify-center">
      <a className="text-black font-medium text-base no-underline">Estudiante: {estudiante.estudiante_nombre}</a>
    </div>
  );
}