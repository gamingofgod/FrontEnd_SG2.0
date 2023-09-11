import { useEffect, useState } from "react";
import { Docente } from "../interfaces/Docente";
import docenteService from "../services/docente.service";

// Custom hook para autenticar el docente
export function useAuth(){
    
    const [docente, setDocente] = useState<Omit<Docente, "docente_contrasena">|undefined|null>();

    const auth = async()=>{
        try{
            // busca el token en el local storage
            const docenteToken = localStorage.getItem("docenteToken");
            if(docenteToken){
                // verifica el token y si esta bien el docente esta logeado
                const respuesta = await docenteService.auth(`Bearer ${docenteToken}`);
                if(respuesta?.succes){
                    setDocente(respuesta?.data);
                }else{
                    setDocente(null);
                }
            }else{
                setDocente(null);
            }
        }catch(error){
            setDocente(null);
        }
    }
    useEffect(()=>{
        auth();
    }, []);

    return docente;
}
