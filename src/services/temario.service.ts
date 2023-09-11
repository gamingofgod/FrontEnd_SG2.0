import axios, { AxiosError } from "axios";
import { Respuesta } from "../interfaces/Message";
import { Temario } from "../interfaces/Temario";

const url = import.meta.env.VITE_BASE_URL;

const obtenerTodos = ():Promise<Respuesta<Temario[]>|undefined>=>{
    return new Promise(async(res, rej)=>{
        try{
            const {data} = await axios.get(`${url}/temario`);
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

export default {
    obtenerTodos
}