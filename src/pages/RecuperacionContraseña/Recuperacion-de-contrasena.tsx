import { Link } from "react-router-dom";
import { TablaTareas } from "../../components/tabla-de-contenido";
import { PieDePagina } from "../../components/PieDePagina";
import { Encabesado } from "../../components/Encabesado";
import docenteService from "../../services/docente.service";
import { useState } from "react";

const RecuperacionContrasena = () => {

    const [docente_mail, setDocente_mail] = useState("");

    const enviarCorreo:React.FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();
        try {
            alert("si el correo existe se enviara un enlace para reestablecer la contraseña.");
            await docenteService.restablecerPassword(docente_mail);
        } catch (err) {
            console.log("ala")
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
                        <h2 className="text-2xl font-bold mb-4">Recuperar Contraseña</h2>
                        <p className="text-gray-700 mb-6">Ingresa tu dirección de correo electrónico asociada con tu cuenta y te enviaremos un enlace para restablecer tu contraseña.</p>
                        <form onSubmit={enviarCorreo}>
                            <div className="mb-4">
                                <label className="block text-gray-700 font-bold mb-2" form="email">Correo Electrónico:</label>
                                <input onChange={(e)=>{setDocente_mail(e.target.value)}} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="ejemplo@ejemplo.com" />
                            </div>
                            <div className="flex items-center justify-between">
                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Enviar Enlace</button>
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
export default RecuperacionContrasena