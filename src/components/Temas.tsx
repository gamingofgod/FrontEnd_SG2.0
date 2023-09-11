import { Temario } from "../interfaces/Temario";

interface TemasProps {
    temario: Temario
    seleccionado: boolean
    cambiar_temario: React.Dispatch<React.SetStateAction<number>>
}

export function Temas({temario, seleccionado, cambiar_temario}:TemasProps){
    return(
        <div onClick={()=>{cambiar_temario(temario.temario_id)}} className={`flex flex-col items-center justify-center w-full h-full cursor-pointer rounded-3xl hover:bg-teal-300 ${seleccionado ? "bg-teal-300" : ""}`}>
            <img className="p-3 object-cover w-[130px] rounded-3xl" src={`/assets/temario/${temario.temario_nombre.replaceAll(" ", "_")}.jpg`} alt="image"/>
            <p className="m-2 text-lg font-bold text-purple-600">{temario.temario_nombre}</p>
        </div>
    );
}