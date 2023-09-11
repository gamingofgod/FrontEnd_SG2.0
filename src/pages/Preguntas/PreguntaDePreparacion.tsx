import "../../css/animacion.css"
import { Prueba } from "../../interfaces/Prueba";
import { Pregunta } from "../../interfaces/Pregunta";
import { BarraProgreso } from "../../components/BarraProgreso";
import { Sala } from "../../interfaces/Sala";
import { useEffect } from "react";

interface PreguntaDePreparacionProps {
    sala: Sala
    prueba: Prueba
    pregunta: Pregunta
    progress: number
    setProgress: React.Dispatch<React.SetStateAction<number>>
}

const PreguntaDePreparacion = ({ sala, prueba, pregunta, progress, setProgress }: PreguntaDePreparacionProps) => {

    useEffect(() => {
        const audio = new Audio('/assets/Musica/preparacion.mp3');
        audio.loop = false;
        audio.play();

        return () => {
            audio.pause();
        };
    }, []);

    return (
        <>
            <div id="fila1" className="h-5/12">
                <div className=" bg-violet-800 rounded-full ml-10 mt-10" style={{ width: "14vh" }}>
                    <h2 className="ml-2.5 text-white py-2 px-2 text-2xl font-bold">
                        {`${sala.pregunta_actual + 1}/${prueba.prueba_numero_preguntas}`}
                    </h2>
                </div>
            </div>
            <div id="fila2" className="h-6/12" >
                <div className="flex items-center justify-center">
                    <img className="object-cover w-1/5 h-1/5 my-4 rounded-full" src="/assets/otros/logo.jpg" alt="Logo" />
                </div >
                <div id="pregunta-preparacion" className="w-full flex items-center justify-center h-16 mt-10 bg-gray-300 rounded animate-grow" >
                    <p className="text-center text-2xl">{pregunta.pregunta_pregunta}</p>
                </div>
            </div>
            <div className="fixed bottom-5 left-0 w-full flex justify-center">
                <BarraProgreso progress={progress} setProgress={setProgress} />
            </div>
        </>
    );
}
export default PreguntaDePreparacion