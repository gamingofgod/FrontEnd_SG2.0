import { TablaTareas } from "../../components/tabla-de-contenido";
import { PieDePagina } from "../../components/PieDePagina";
import { Encabesado } from "../../components/Encabesado";
import docenteService from "../../services/docente.service";
import { useState } from "react";
import { useQueryParams } from "../../hooks/useQueryParams";
import { Link, useNavigate } from "react-router-dom";

const ActualizarContrasena = () => {

    const navigate = useNavigate();
    const [password1, setPassword1] = useState("");
    const [password2, setPassword2] = useState("");

    const qp = useQueryParams();

    const actualizarPassword:React.FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();
        if(qp && qp.token){
            try {
                if(password1 != password2) return alert("las contraseñas no son iguales");
                const res = await docenteService.actualizarPassword(password1, qp.token);
                if(res){
                    if(!res.succes){
                      alert(res.message);
                    }else{
                      alert("Contraseña actualiza, inicia sesion.");
                      navigate("/Inicio-de-sesion");
                    }
                  }
            } catch (err) {
                console.log("ala")
            }
        }
    }

    return (
        <div className="bg-cover bg-center" style={{ backgroundImage: `url(/assets/otros/fondo3.jpg)`, height: "100vh" }}>
            <div id="fila1">
                <TablaTareas />
            </div>
            <div id="fila2">
                <Encabesado />
                <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col md:w-1/2 mx-auto">
                        <h2 className="text-2xl font-bold mb-4">Actualizar Contraseña</h2>
                        <p className="text-gray-700 mb-6">Ingrea una nueva contraseña.</p>
                        <form onSubmit={actualizarPassword} >
                            <div className="mb-4">
                                <label className="block text-gray-700 font-bold mb-2" form="password">Contraseña nueva:</label>
                                <input onChange={(e)=>{setPassword1(e.target.value)}} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 font-bold mb-2" form="repeatpassword">Repetir Contraseña nueva:</label>
                                <input onChange={(e)=>{setPassword2(e.target.value)}} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="repeatpassword" type="password" />
                            </div>
                            <div className="flex items-center justify-between">
                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Actualizar contraseña.</button>
                                <Link to={"/"} className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">Cancelar</Link>
                            </div>
                        </form>
                    </div>
                </main>
                <PieDePagina />
            </div>
        </div>
    );
}
export default ActualizarContrasena