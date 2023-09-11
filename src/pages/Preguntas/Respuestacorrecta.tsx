import { useEffect } from "react";

interface CorrectoProps{
  puesto: number
  estudiantes: number
}

const Correcto = ({puesto, estudiantes}:CorrectoProps) => {
  
  useEffect(() => {
    const audio = new Audio('/src/assets/Musica/respuesta-correcta.wav');
    audio.loop = true;
    audio.play();

    return () => {
      audio.pause();
    };
  }, []);

  return (
    <>
      <div className="flex items-center ml-3" style={{ height: '5vh' }}>
        <p className="font-bold">Estas en la pocicion {puesto} de {estudiantes}</p>
      </div>
      <div className="bg-lime-500 flex justify-center items-center h-[95vh]">
        <div className="flex justify-center ">
          <form className="bg-lime-400 shadow rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2 text-center">Correcto</label>
              <img className="mx-auto object-cover w-20 h-20 sm:w-500 sm:h-500 my-4 rounded-lg" src="/assets/otros/iconocorrecto.png" alt="Logo" />
              <p className="text-center font-bold">tu puntuacion a aumentado en: </p>
            </div>
            <div className="mb-6 shadow bg-lime-500">
              <p className="text-center font-bold">+</p>
              <p className="text-center mt-5 font-bold">1</p>
            </div>
            <div className="flex items-center justify-between">
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
export default Correcto