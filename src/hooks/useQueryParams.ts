import { useEffect, useState } from "react";

// Custom hook para obtener los parametros opcionales de la url
export function useQueryParams(){

    const [params, setParams] = useState<{[key:string]: string|undefined}|undefined>();

    useEffect(()=>{
        const urlCompleta = window.location.href;
        // obtiene los parametros opcionales de la url
        const _params = (urlCompleta.split("?")[1] || "").split("&").map(p => p.split("="));
        // los pasa a un objecto de llave valor
        const nuevos_parametros: {[key:string]: string} = {};
        _params.forEach(_param => {
            nuevos_parametros[_param[0]] = _param[1];
        });
        setParams({...nuevos_parametros});
    }, []);

    return params;
}
