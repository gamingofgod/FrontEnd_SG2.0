import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { TablaTareas } from "../../components/tabla-de-contenido";
import { Encabesado } from "../../components/Encabesado";
import { PieDePagina } from "../../components/PieDePagina";
import docenteService from "../../services/docente.service";

const Login = () => {
  const navigate = useNavigate();

  const [usuario, setUsuario] = useState("");
  const [contrasena, setContrasena] = useState("");

  const iniciarSesion:React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const res = await docenteService.login(usuario, contrasena);
    if(res){
      if(!res.succes){
        alert(res.message);
      }else{
        localStorage.setItem("docenteToken", res.data!);
        navigate("/Menu-Docente")
      }
    }
  }
  
  return (
    <div className="bg-cover bg-center" style={{ backgroundImage: `url(/assets/otros/fondo3.jpg)`, height: "100vh" }}>
      <TablaTareas />
      <Encabesado />
      <div className="flex  justify-center mt-10">
        <form onSubmit={iniciarSesion} className="bg-white rounded-xl shadow px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" form="username">Usuario</label>
            <input onChange={(e) => { setUsuario(e.target.value) }} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Ingrese su usuario" />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-bold mb-2" form="password">Contraseña</label>
            <input onChange={(e) => { setContrasena(e.target.value) }} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Ingrese su contraseña" />
          </div>
          <div className="flex items-center justify-between">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
              Iniciar sesión
            </button>
            <Link to="/Recuperacion-de-contraseña" className="inline-block align-baseline font-bold text-sm ml-2 text-blue-500 hover:text-blue-800">
              ¿Olvidó su contraseña?
            </Link>
          </div>
        </form>
      </div>
      <PieDePagina />
    </div>

  );
}
export default Login