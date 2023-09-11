import { useNavigate } from "react-router-dom";
import { GrillaTemario } from "../../components/Grilla-temario";
import { useAuth } from "../../hooks/useAuth";
import { useEffect, useState } from "react";
import pruebaService from "../../services/prueba.service";

const MenuProfesor = () => {

  const navigate = useNavigate();
  const docente = useAuth();

  useEffect(()=>{
    if(docente===null){
      navigate("/Inicio-de-sesion")
    }
  }, [docente]);

  const [cantidadPreguntas, setCantidadPreguntas] = useState(0);
  const [temario_id, setTemario] = useState(-1);

  const empezarPrueba = async () => {
    if(!docente){
      alert("Inicia sesion para crear una prueba");
    }else if (cantidadPreguntas < 1){
      alert("No hay preguntas");
    }else if (cantidadPreguntas > 30){
      alert("Maximo 30 preguntas");
    }else if (temario_id == -1){
      alert("Temario no seleccionado");
    }else{
      const data = await pruebaService.crear(docente.docente_id, cantidadPreguntas, temario_id);
      if(data && data.succes && data.data){
        navigate(`/Sala-de-estar-del-docente?sala_id=${data.data.prueba_id}`);
      }else{
        if(data?.message) alert(data.message);
        else alert("No se pudo crear la sala");
      }
    }
  }

  const cerrarSesion = () => {
    localStorage.removeItem("docenteToken");
    navigate("/Inicio-de-sesion");
  }

  return (

    <div className="w-full h-screen bg-cover bg-center" style={{ backgroundImage: `url(/assets/otros/fondo-bonito.jpg)` }}>
      <header className="h-1/6 w-full  flex items-center justify-between">
        <div className="ml-10">
          <img className="w-20 h-20 rounded object-cover" src="/assets/otros/logo.jpg" alt="" />
          <h1 className="text-4xl text-gray-200">{docente?.docente_nombre}</h1>
        </div>
        <div className="mr-10">
          <button onClick={()=>{navigate("/Estadisticas")}} className="shadow w-28 h-10 bg-blue-500 hover:bg-blue-700 rounded mr-10">Estadisticas</button>
          <button onClick={cerrarSesion} className="shadow w-28 h-10  bg-blue-500 hover:bg-blue-700 rounded ml-10">Cerrar sesión</button>
        </div>
      </header>
      <main className="h-4/6 flex items-center">
        <form className="w-full h-full flex flex-col items-center justify-center" action="">
          <div className="w-11/12 h-5/6 bg-teal-400 rounded-3xl flex flex-col items-center justify-center">
            <h1 className="text-4xl text-black mb-0">Temario</h1>
            <GrillaTemario temario_id={temario_id} cambiar_temario={setTemario}/>
          </div>
          <div className="preguntas mt-5 p-1 flex items-center">
            <h3 className="p-1 mr-5 text-black bg-teal-400 rounded-xl border border-gray-500">Cantidad de preguntas</h3>
            <input onChange={(e)=>{setCantidadPreguntas(parseInt(e.target.value))}} type="number" name="" id="" className="border border-gray-500 rounded-md p-2" defaultValue={cantidadPreguntas} />
            </div>
        </form>
      </main>
      <footer className="h-1/6 ">
        <div className="w-full h-full flex flex-col justify-center items-center">
          <div className="w-full flex justify-evenly items-center">
            <input className="bg-red-600 hover:bg-red-700 text-white border border-gray-100 font-bold rounded-xl py-2 px-10" type="submit" value="Cancelar" />
            <button onClick={empezarPrueba} className="bg-green-600 hover:bg-green-700 text-white font-bold rounded-xl py-2 px-10" type="submit">Iniciar</button>
            </div>
        </div>
      </footer>
    </div>
  );
}
export default MenuProfesor