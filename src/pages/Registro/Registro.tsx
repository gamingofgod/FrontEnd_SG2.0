import { useNavigate } from "react-router-dom";
import { TablaTareas } from "../../components/tabla-de-contenido";
import { PieDePagina } from "../../components/PieDePagina";
import { Encabesado } from "../../components/Encabesado";
import { useState } from "react";
import docenteService from "../../services/docente.service";

const Registro = () => {
  const navigate = useNavigate();

  const [usuario, setUsuario] = useState("");
  const [correo, setCorreo] = useState("");
  const [contrasena, setContrasena] = useState("");

  const registrarse: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const res = await docenteService.register({
      docente_nombre: usuario,
      docente_mail: correo,
      docente_contrasena: contrasena
    });
    console.log(res);

    if (res) {
      if (!res.succes) {
        alert(res.message);
      } else {
        localStorage.setItem("docenteToken", res.data!);
        navigate("/Menu-Docente")
      }
    }
  }

  return (

    <div className="bg-cover bg-center" style={{ backgroundImage: `url(/assets/otros/fondo3.jpg)`, height: "100vh" }}>
      <TablaTareas />
      <Encabesado />
      <form onSubmit={registrarse} className="w-full shadow mt-20 max-w-sm mx-auto">
        <div className="py-4 px-4 bg-white rounded-xl">
          <div className="mb-4 ">
            <label className="block text-gray-700 font-bold mb-2" form="username">Usuario</label>
            <input onChange={(e) => { setUsuario(e.target.value) }} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Nombre de usuario" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" form="email">Correo electrónico</label>
            <input onChange={(e) => { setCorreo(e.target.value) }} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Correo electrónico" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" form="password">Contraseña</label>
            <input onChange={(e) => { setContrasena(e.target.value) }} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Contraseña" />
          </div>
          <div className="mb-6 flex justify-center">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Registrarse</button>
          </div>
        </div>

      </form>
      <PieDePagina />
    </div>
  );
}
export default Registro




