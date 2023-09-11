import { useState } from "react";
import { PruebaEstudiantes } from "../interfaces/PruebaEstudiantes";
import { ResultadosList } from "./Resultados-lista";
import date from 'date-and-time';

interface NestedListProps {
    pruebas: PruebaEstudiantes[]
}

export const NestedList = ({ pruebas }: NestedListProps) => {

    const [actualIndex, setActualIndex] = useState(-1);

    const cambiarPrueba = (index: number) => {
        setActualIndex((actual) => ((actual == index) ? -1 : index))
    }
    
    return (
        <div className="w-full h-full bg-red-300">
            <ul className="text-black w-full">
                <div className="fixed bg-red-300 w-[calc(100%-2rem)] h-[45px] border border-black cursor-pointer grid grid-cols-[0.1fr,0.55fr,1fr,0.3fr,0.3fr,0.3fr] items-center min-h-[42px] text-center">
                    <span>Id</span>
                    <span>Fecha</span>
                    <span>Temario</span>
                    <span># Estudiantes</span>
                    <span># Preguntas</span>
                    <span>Puntaje Promedio</span>
                </div>
                <div className="h-[45px]"></div>
                {
                    pruebas.map((prueba, i) => (
                        <div key={i} >
                            <div onClick={() => { cambiarPrueba(i) }} className={`w-full h-[45px] border border-black cursor-pointer grid grid-cols-[0.1fr,0.6fr,1fr,0.3fr,0.3fr,0.3fr] items-center min-h-[42px] text-center ${(actualIndex == i) ? "bg-blue-300" : "bg-blue-100"}`}>
                                <span>{i+1}</span>
                                <span>{date.format(new Date(prueba.prueba_fecha.toString()), "YYYY-MM-DD HH:mm:ss")}</span>
                                <span>{prueba.temario.temario_nombre}</span>
                                <span>{prueba.estudiantes.length}</span>
                                <span>{prueba.prueba_numero_preguntas}</span>
                                <span>{prueba.prueba_puntaje_promedio}</span>
                            </div>
                            {
                                (actualIndex == i) ? (
                                    <ResultadosList
                                        estudiantes={prueba.estudiantes.sort((a, b) => b.estudiante_puntaje - a.estudiante_puntaje)}
                                        totalPreguntas={prueba.prueba_numero_preguntas}
                                        />
                                ) : <></>
                            }
                        </div>

                    ))
                }
            </ul>
        </div>
    );
}

/*

*/