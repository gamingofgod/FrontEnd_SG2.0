import axios, { AxiosError } from "axios";
import { Respuesta } from "../interfaces/Message";
import { Docente } from "../interfaces/Docente";
import { PruebaEstudiantes } from "../interfaces/PruebaEstudiantes";

const url = import.meta.env.VITE_BASE_URL;

const auth = (token:string):Promise<Respuesta<Omit<Docente, "docente_contrasena">>|undefined>=>{
    return new Promise(async(res, rej)=>{
        try{
            const {data} = await axios.post(`${url}/auth`, {}, {
                headers: {Authorization: token}
            });
            res(data);
        }catch(error){
            if(error instanceof AxiosError){
                res(error.response!.data);
            }else{
                res(undefined);
            }
        }
    });
}

const login = (docente_mail: string, docente_contrasena: string):Promise<Respuesta<string>|undefined>=>{
    return new Promise(async(res, rej)=>{
        try{
            const {data} = await axios.post(`${url}/auth/login`, {docente_mail, docente_contrasena});
            res(data);
        }catch(error){
            if(error instanceof AxiosError){
                res(error.response!.data);
            }else{
                res(undefined);
            }
        }
    });
}

const register = (docente:Omit<Docente, "docente_id">):Promise<Respuesta<string>|undefined>=>{
    return new Promise(async(res, rej)=>{
        try{
            const {data} = await axios.post(`${url}/auth/register`, {docente});
            res(data);
        }catch(error){
            if(error instanceof AxiosError){
                res(error.response!.data);
            }else{
                res(undefined);
            }
        }
    });
}

const restablecerPassword = (docente_mail: string):Promise<Respuesta<string>|undefined>=>{
    return new Promise(async(res, rej)=>{
        try{
            const {data} = await axios.post(`${url}/auth/password/restablecer`, {docente_mail});
            res(data);
        }catch(error){
            if(error instanceof AxiosError){
                res(error.response!.data);
            }else{
                res(undefined);
            }
        }
    });
}

const actualizarPassword = (docente_contrasena: string, token: string):Promise<Respuesta<string>|undefined>=>{
    return new Promise(async(res, rej)=>{
        try{
            const {data} = await axios.post(`${url}/auth/password/actualizar/?token=${token}`, {docente_contrasena});
            res(data);
        }catch(error){
            if(error instanceof AxiosError){
                res(error.response!.data);
            }else{
                res(undefined);
            }
        }
    });
}

const obtenerPruebas = (token:string, docente_id: string): Promise<Respuesta<PruebaEstudiantes[]> | undefined> => {
    return new Promise(async (res, rej) => {
        try {
            const { data } = await axios.get(`${url}/docente/${docente_id}/pruebas`, { headers: {Authorization: token} });
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
    auth,
    login,
    register,
    restablecerPassword,
    actualizarPassword,
    obtenerPruebas
}