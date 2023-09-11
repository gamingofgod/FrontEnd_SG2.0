import { useEffect, useState } from "react";
import { Sala } from "../interfaces/Sala";
import { Estudiante } from "../interfaces/Estudiante";
import { socket } from "../socket/sala.socket";
import pruebaService from "../services/prueba.service";
import { useAuth } from "./useAuth";
import { useQueryParams } from "./useQueryParams";

interface usePruebaProps{
    sala_id?: string
    cbContestarPregunta?: (correcta: boolean) => void
    cbSiguientPregunta?: Function
    cbTerminarPregunta?: Function
}

export function usePrueba({sala_id, cbContestarPregunta, cbSiguientPregunta, cbTerminarPregunta}:usePruebaProps) {
    const [sala, setSala] = useState<Sala | undefined | null>();
    const qp = useQueryParams();
    const docente = useAuth();

    useEffect(() => {
        if (sala_id) {
            const obtenerSala = async () => {
                const _sala = await pruebaService.obtenerSala(sala_id);
                if(_sala?.succes){
                    setSala(_sala.data!);
                }else{
                    setSala(null);
                }
            }
            obtenerSala();
        }
    }, [sala_id]);

    function onContestarPregunta(correcta: boolean, estudiante: Estudiante) {
        setSala((sala)=>{
            if(sala && estudiante){
                return {
                    ...sala,
                    sala_estudiantes: {...sala.sala_estudiantes, [estudiante.estudiante_id]: estudiante}
                }
            }
            return sala;
        });
        console.log(qp!["estudiante_id"])
        if(qp && qp["estudiante_id"] == estudiante?.estudiante_id && cbContestarPregunta)
            cbContestarPregunta(correcta);
    }

    function onSiguientePregunta(numero: number){
        if(sala){
            sala.pregunta_actual = numero;
            setSala((sala) => {
                if(sala){
                    return {...sala, pregunta_actual: numero}
                }
            })
            if(cbSiguientPregunta)
                cbSiguientPregunta();
        }
    }
    
    function onTerminarPrueba(){
        if(cbTerminarPregunta) cbTerminarPregunta();
    }

    function onError(message: string){
        alert(message);
    }

    useEffect(() => {
        if (sala && qp && docente !== undefined) {
            socket.on("prueba:pregunta:contestar", onContestarPregunta);
            socket.on("prueba:pregunta:siguiente", onSiguientePregunta);
            socket.on("prueba:terminar", onTerminarPrueba);
            socket.on("prueba:error", onError);

            socket.emit('socket:unirse:prueba', sala.sala_id);

            return () => {
                socket.off("prueba:pregunta:contestar", onContestarPregunta);
                socket.off("prueba:pregunta:siguiente", onSiguientePregunta);
                socket.off("prueba:terminar", onTerminarPrueba);
                socket.off("prueba:error", onError);
            }
        }
    }, [sala?.sala_id, docente, qp]);

    function contestarPregunta(estudiante_id: string, pregunta_id: number, respuesta: string) {
        if(sala){
            socket.emit('prueba:pregunta:contestar', sala.sala_id, estudiante_id, pregunta_id, respuesta);
        }
    }

    function siguientePregunta() {
        if(sala){
            socket.emit('prueba:pregunta:siguiente', sala.sala_id);
        }
    }

    function TerminarPrueba() {
        if(sala){
            socket.emit('prueba:terminar', sala.sala_id);
        }
    }

    return {
        sala,
        contestarPregunta,
        siguientePregunta,
        TerminarPrueba
    };
}

