import axios, { AxiosError } from "axios";
import { Respuesta } from "../interfaces/Message";
import { Prueba } from "../interfaces/Prueba";
import { Sala } from "../interfaces/Sala";
import { Estudiante } from "../interfaces/Estudiante";
import { Pregunta } from "../interfaces/Pregunta";

const url = import.meta.env.VITE_BASE_URL;

const crear = (docente_id: string, prueba_numero_preguntas: number, temario_id: number): Promise<Respuesta<Prueba> | undefined> => {
    return new Promise(async (res, rej) => {
        try {
            const docenteToken = localStorage.getItem("docenteToken");
            if (docenteToken) {
                const { data } = await axios.post(`${url}/prueba/crear`,
                    { docente_id, prueba_numero_preguntas, temario_id },
                    {
                        headers: { Authorization: `Bearer ${docenteToken}` }
                    });
                res(data);
            }else{
                res(undefined);
            }
        } catch (error) {
            if (error instanceof AxiosError) {
                res(error.response!.data);
            } else {
                res(undefined);
            }
        }
    });
}

const unirse = (sala_id: string, estudiante_nombre: string): Promise<Respuesta<Estudiante> | undefined> => {
    return new Promise(async (res, rej) => {
        try {
            const { data } = await axios.post(`${url}/sala/${sala_id}`, {estudiante_nombre});
            res(data);
        } catch (error) {
            if (error instanceof AxiosError) {
                res(error.response!.data);
            } else {
                res(undefined);
            }
        }
    });
}

const obtenerSala = (sala_id: string): Promise<Respuesta<Sala> | undefined> => {
    return new Promise(async (res, rej) => {
        try {
            const { data } = await axios.get(`${url}/sala/${sala_id}`);
            res(data);
        } catch (error) {
            if (error instanceof AxiosError) {
                res(error.response!.data);
            } else {
                res(undefined);
            }
        }
    });
}

const obtenerEstudiante = (sala_id: string, estudiante_id: string): Promise<Respuesta<Estudiante> | undefined> => {
    return new Promise(async (res, rej) => {
        try {
            const { data } = await axios.get(`${url}/sala/${sala_id}/estudiante/${estudiante_id}`);
            res(data);
        } catch (error) {
            if (error instanceof AxiosError) {
                res(error.response!.data);
            } else {
                res(undefined);
            }
        }
    });
}

const obtenerPrueba = (prueba_id: string): Promise<Respuesta<Prueba> | undefined> => {
    return new Promise(async (res, rej) => {
        try {
            const { data } = await axios.get(`${url}/prueba/${prueba_id}`);
            res(data);
        } catch (error) {
            if (error instanceof AxiosError) {
                res(error.response!.data);
            } else {
                res(undefined);
            }
        }
    });
}

const obtenerPreguntas = (prueba_id: string): Promise<Respuesta<Pregunta[]> | undefined> => {
    return new Promise(async (res, rej) => {
        try {
            const { data } = await axios.get(`${url}/prueba/${prueba_id}/preguntas`);
            res(data);
        } catch (error) {
            if (error instanceof AxiosError) {
                res(error.response!.data);
            } else {
                res(undefined);
            }
        }
    });
}

export default {
    crear,
    unirse,
    obtenerSala,
    obtenerPrueba,
    obtenerEstudiante,
    obtenerPreguntas
}