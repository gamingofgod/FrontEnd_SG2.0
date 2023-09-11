import { useEffect, useState } from "react";
import { Sala } from "../interfaces/Sala";
import { Estudiante } from "../interfaces/Estudiante";
import { socket } from "../socket/sala.socket";
import pruebaService from "../services/prueba.service";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./useAuth";
import { useQueryParams } from "./useQueryParams";

export function useSala(sala_id?: string) {
    const navigate = useNavigate();
    // datos de la sala
    const [sala, setSala] = useState<Sala | undefined | null>();
    // parametors de la url
    const qp = useQueryParams();
    // sesion del docente
    const docente = useAuth();

    // useffect para obtener los datos de la sala
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
    
    function onNuevoEstudiante(estudiante: Estudiante) {
        setSala((sala) => {
            if (sala) {
                sala.sala_estudiantes[estudiante.estudiante_id] = estudiante;
                return {...sala};
            }
        });
    }
    
    function onEmpezarSala() {
        if(qp?.estudiante_id){
            navigate(`/Preguntas?codigo_sala=${sala_id}&estudiante_id=${qp?.estudiante_id}`);
        }else{
            navigate(`/Panel-de-la-Prueba?codigo_sala=${sala_id}`);
        }
    }

    function onEliminarSala() {
        if(docente){
            alert("Sala eliminada correctamente");
            navigate("/Menu-Docente");
        }else{
            alert("Sala eliminada por el docente");
            navigate("/Estudiantes");
        }
    }

    function onError(message: string){
        alert(message);
    }

    useEffect(() => {
        if (sala && docente !== undefined) {
            socket.on('sala:unirse', onNuevoEstudiante);
            socket.on('sala:empezar', onEmpezarSala);
            socket.on('sala:eliminar', onEliminarSala);
            socket.on("sala:error", onError);

            socket.emit('socket:unirse:sala', sala.sala_id);

            return () => {
                socket.off('sala:unirse', onNuevoEstudiante);
                socket.off('sala:empezar', onEmpezarSala);
                socket.off('sala:eliminar', onEliminarSala);
                socket.off("sala:error", onError);
            }
        }
    }, [sala?.sala_id, docente]);

    function unirseSala(estudiante: Estudiante) {
        if(sala){
            socket.emit('sala:unirse', sala.sala_id, estudiante);
        }
    }

    function eliminarSala() {
        if(sala && docente){
            socket.emit('sala:eliminar', sala.sala_id);
        }
    }

    function empezarSala() {
        if(sala && docente){
            socket.emit('sala:empezar', sala.sala_id);
        }
    }

    return {
        sala,
        unirseSala,
        empezarSala,
        eliminarSala
    };
}

