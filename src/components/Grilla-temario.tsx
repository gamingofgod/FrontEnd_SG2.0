import { useEffect, useState } from "react";
import { Temas } from "./Temas";
import { Temario } from "../interfaces/Temario";
import temarioService from "../services/temario.service";

interface GrillaTemarioProps {
    temario_id: number
    cambiar_temario: React.Dispatch<React.SetStateAction<number>>
}

export function GrillaTemario({temario_id, cambiar_temario}:GrillaTemarioProps) {

    const [temarios, setTemarios] = useState<Temario[]>([]);

    useEffect(() => {
        const obtenerTemarios = async () => {
            const respuesta = await temarioService.obtenerTodos();
            if (respuesta?.succes) {
                setTemarios(respuesta.data || []);
            }
        }
        obtenerTemarios();
    }, []);

    return (
        <div className="grid overflow-y-scroll grid-cols-3 w-full gap-15 m-5 mt-5 sm:m-25">
            {temarios.map((temario, i) =>
                <Temas 
                    key={i} 
                    temario={temario} 
                    seleccionado={temario.temario_id == temario_id} 
                    cambiar_temario={cambiar_temario} 
                    />
            )}
        </div>
    );
}