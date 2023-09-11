import { Estudiantesenlasala } from "../../components/Estudiantes-Lista"
import { Codigo } from "../../components/Codigo";
import { useEffect } from "react";
import { useQueryParams } from "../../hooks/useQueryParams";
import { useSala } from "../../hooks/useSala";
import pruebaService from "../../services/prueba.service";

const SalaDeEstar = () => {

  const qp = useQueryParams();

  const { sala, unirseSala } = useSala(qp?.codigo_sala);

  const obtenerData = async (codigo_sala: string, estudiante_id: string) => {
    const _estudiante = await pruebaService.obtenerEstudiante(codigo_sala, estudiante_id);
    if (_estudiante?.succes && _estudiante.data) {
      unirseSala(_estudiante.data);
    } else {
      alert("estudiante no registrado en la sala");
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

  useEffect(() => {
    const audio = new Audio('/assets/Musica/final-prueba.mp3');
    audio.loop = true;
    audio.play();

    return () => {
        audio.pause();
    };
  }, []);

  return (
    <div className="w-full h-screen flex flex-col bg-cover bg-center" style={{ backgroundImage: `url(/assets/otros/fondo-bonito.jpg)` }} >
      <div id="fila1" className="h-6/12" >
        <div className="flex items-center justify-center">
          <img className="object-cover w-1/5 h-1/5 my-4 rounded-full" src="/assets/otros/logo.jpg" alt="Logo" />
        </div >
        <div id="fila2" className="flex justify-center">
          <div className="flex justify-center">
            <div id="tcodigo" className="mt-10 mr-2 rounded bg-blue-700 text-white py-2 px-4">
              <p className="text-lg font-bold">Código:</p>
            </div>
          </div>
          <Codigo codigo={qp?.codigo_sala} />
        </div>
        <div id="fila3" className="shadow-md rounded my-8 mx-4 md:mx-20 flex-grow">
          <Estudiantesenlasala estudiantes={(sala) ? Object.values(sala.sala_estudiantes) : []} />
        </div>
      </div>
    </div>
  );


}
export default SalaDeEstar

