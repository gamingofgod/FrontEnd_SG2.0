import { Encabesado } from "../../components/Encabesado";
import { PieDePagina } from "../../components/PieDePagina";
import { TablaTareas } from "../../components/tabla-de-contenido";
import { Link } from "react-router-dom";
import { useEffect } from 'react';

const Inicio = () => {

    useEffect(() => {
        const audio = new Audio('/assets/Musica/final-prueba.mp3');
        audio.loop = true;
        audio.play();

        return () => {
            audio.pause();
        };
    }, []);

    return (
        <div className="w-full h-screen" >
            <div id="fila1">
                <TablaTareas />
            </div>
            <div id="fila2" className="bg-cover bg-center" style={{ backgroundImage: `url(/assets/otros/fondo3.jpg)`, height: "90vh" }}>
                <Encabesado />
                <main className=" py-6 " >
                    <section id="intro" className="py-8 ">
                        <div className="mx-10"  >
                            <div className="flex rounded shadow bg-inherit flex-col items-center " >
                                <div className=" mx-4 mt-9 mb-20">
                                    <h2 className="text-2xl text-white font-bold">Bienvenido a WordWizards</h2>
                                    <p className="text-white">¡Hola y bienvenido a WordWizards! Nuestro juego interactivo está diseñado para ayudarte a mejorar tu vocabulario de inglés con la supervisión y guía de un docente en tu salón de clases.</p>
                                    <p className="text-white">Mediante la realización de pruebas de opción múltiple, podrás medir tanto tu progreso individual como el progreso general del salón. Podrás ver cómo cada estudiante crece a lo largo de las diferentes lecciones.</p>
                                    <p className="text-white">¡Así que prepárate para explorar diversas lecciones, desafiar tu conocimiento y divertirte mientras aprendes nuevas palabras y su significado!</p>
                                    <p className="text-white">Sin más preámbulos, ¡presiona el botón de iniciar juego para comenzar a aprender!</p>
                                    <div className="flex justify-center items-center flex-wrap mt-12">
                                        <Link to="/Estudiantes" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-4 mx-2">
                                            Iniciar juego
                                        </Link>
                                        <Link to="/Resultados" className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded mt-4 mx-2">
                                            Más información
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
                <PieDePagina />
            </div>
        </div>
    );
}
export default Inicio
