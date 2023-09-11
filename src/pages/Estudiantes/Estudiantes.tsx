import { useNavigate } from "react-router-dom";
import { TablaTareas } from "../../components/tabla-de-contenido";
import { PieDePagina } from "../../components/PieDePagina";
import { Encabesado } from "../../components/Encabesado";
import { useState } from "react";
import pruebaService from "../../services/prueba.service";

const Estudiantes = () => {

  const navigate = useNavigate();
  const [codigo_sala, setCodigo_sala] = useState<string|undefined>();
  const [estudiante_nombre, setEstudiante_nombre] = useState<string|undefined>();

  const unirseSala: React.FormEventHandler<HTMLFormElement> | undefined = async (e) => {
    e.preventDefault();
    if(!codigo_sala){
      alert("Debes especificar una sala");
    }else if(!estudiante_nombre){
      alert("Debes especificar el nombre estudiante");
    }else{
      const sala = await pruebaService.obtenerSala(codigo_sala);
      if(sala?.succes){
        const estudiante = await pruebaService.unirse(codigo_sala, estudiante_nombre);
        if(estudiante && estudiante.data){
          navigate(`/Sala-de-estar/?codigo_sala=${codigo_sala}&estudiante_id=${estudiante.data.estudiante_id}`);
        }else{
          alert(estudiante?.message);
        }
      }else{
        alert("sala no encontrada");
      }
    }
  }

  return (
    <div className="bg-cover bg-center" style={{ backgroundImage: `url(/assets/otros/fondo3.jpg)`, height: "100vh" }}>
      <div className="bg-gray-800">
        <TablaTareas />
      </div>
      <Encabesado />
      <div className="flex justify-center items-center h-[500px]">
        <div className="mt-14">
          <form onSubmit={unirseSala} className="shadow-md bg-white rounded-xl px-8 pt-6 pb-8 mb-4 w-[325px]">
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" form="CodigoSala">Codigo de sala</label>
              <input onChange={(e)=>{setCodigo_sala(e.target.value)}} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Ingrese el codigo de la sala" />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 font-bold mb-2" form="NombreEstu">Nombre estudiante</label>
              <input onChange={(e)=>{setEstudiante_nombre(e.target.value)}} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="text" placeholder="Ingrese un nombre de usuario" />
            </div>
            <div className="flex justify-center">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                Entrar en la sala
              </button>
            </div>
          </form>
        </div>
      </div>
      <PieDePagina />
    </div>
  );
}
export default Estudiantes