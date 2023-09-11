import { BrowserRouter, Routes, Route } from "react-router-dom";
import  Inicio  from "./pages/root/Inicio";
import Docente from "./pages/Docente/Docentes";
import Estudiantes from "./pages/Estudiantes/Estudiantes";
import Contactos from "./pages/Contacto/Contactos";
import Login from "./pages/InicioSesion/Login";
import SalaDeEstar from "./pages/SalaEstar/Sala-de-estar";
import SalaProfesor from "./pages/SalaEstarDocente/Sala-de-e-profe";
import Registro from "./pages/Registro/Registro";
import RecuperacionContrasena from "./pages/RecuperacionContraseña/Recuperacion-de-contrasena";
import PanelDocente from "./pages/PanalControlPrueba/PanelDocente";
import MenuProfesor from "./pages/MenuDocente/Menu-profesor";
import Estadistica from "./pages/Estadisticas/Estadistica";
import PreguntasEstudiantes from "./pages/Preguntas/PreguntasEstudiantes";
import ActualizarContrasena from "./pages/ActualizarContraseña/Actualizar-contrasena";


function App() {
    return (
      <BrowserRouter>
        <Routes>
          
          <Route path="/" element={<Inicio/>} />
          <Route path="/Docente" element={<Docente/>} />
          <Route path="/Estudiantes" element={<Estudiantes/>} />
          <Route path="/Contacto" element={<Contactos/>} />
          <Route path="/Inicio-de-sesion" element={<Login/>} />
          <Route path="/Registro" element={<Registro/>} />
          <Route path="/Actualizar-contraseña" element={<ActualizarContrasena/>} />
          <Route path="/Recuperacion-de-contraseña" element={<RecuperacionContrasena/>} />

          <Route path="/Sala-de-estar" element={<SalaDeEstar/>} />
          <Route path="/Sala-de-estar-del-docente" element={<SalaProfesor/>} />
          <Route path="/Menu-Docente" element={<MenuProfesor/>} />
          
          <Route path="/Preguntas" element={<PreguntasEstudiantes/>} />
          <Route path="/Panel-de-la-Prueba" element={<PanelDocente/>} />

          <Route path="/Estadisticas" element={<Estadistica/>} />
          
        </Routes>
        </BrowserRouter>
   
    );
  }  
  export default App;