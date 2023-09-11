import { useEffect, useState } from "react";
import { Prueba } from "../../interfaces/Prueba";
import { useAuth } from "../../hooks/useAuth";
import { Link, useNavigate } from "react-router-dom";
import { PruebaEstudiantes } from "../../interfaces/PruebaEstudiantes";
import docenteService from "../../services/docente.service";
import Carga from "../../components/Carga";
import { NestedList } from "../../components/NestedList";
import { LineChartProps, LinesChart } from "../../components/Graficas";

const Estadistica = () => {

    const navigate = useNavigate();
    const docente = useAuth();
    const [pruebas, setPruebas] = useState<PruebaEstudiantes[]>([]);

    const obtenerDatos = async (docenteToken: string, docente_id: string) => {
        const respuesta = await docenteService.obtenerPruebas(`Bearer ${docenteToken}`, docente_id);
        if (respuesta?.succes && respuesta.data) {
            setPruebas(respuesta?.data);
        } else {
            alert("No se pudieron obtener los datos");
        }
    }

    useEffect(() => {
        if (docente) {
            const docenteToken = localStorage.getItem("docenteToken");
            if (docenteToken) {
                obtenerDatos(docenteToken, docente.docente_id);
            } else {
                navigate("/Login");
            }
        } else if (docente === null) {
            navigate("/Login");
        }
    }, [docente]);

    const [dataGrafico, setDataGrafico] = useState<LineChartProps | undefined>();

    useEffect(() => {
        if (pruebas) {
            const etiquetas = [];
            const valores = [];
            for (let i = 0; i < pruebas.length; i++) {
                etiquetas.push((i+1).toString());
                valores.push(pruebas[i].prueba_puntaje_promedio);
            }
            setDataGrafico({etiquetas, valores, nombre: "Promedio"});
        }
    }, [pruebas]);

    return (

        <div className="overflow-hidden py-8 w-full h-screen bg-cover px-4 bg-center" style={{ backgroundImage: `url(/assets/otros/fondo-bonito.jpg)` }}>
            {(pruebas && dataGrafico) ? (
                <>
                    <div id="fila1" className="w-full h-2/5 shadow border -mt-6 border-gray-100 rounded ">
                        <h1 className="text-center text-3xl font-bold  mb-2">estadisticas</h1>
                        <div id="estadistica" className="flex justify-center items-center bg-white h-5/6 -mt-3 mx-10">
                            <LinesChart {...dataGrafico} />
                        </div>
                    </div>

                    <div id="Promedios" className="w-full h-3/6 shadow rounded mt-1 border border-gray-100 ">
                        <div className=" mt-1 text-white font-roboto-condensed">
                            <div id="barra-nombre" className="grid grid-cols-[0.4fr,0.3fr,2fr] text-center rounded-xl text-sm justify-start">
                                <div>#</div>
                                <div className=" text-white text-left">Name</div>
                                <div>puntuacion</div>
                            </div>
                            <div className="overflow-y-scroll w-full rounded-xl overflow-x-hidden" style={{ height: "50vh" }}>
                                <NestedList pruebas={pruebas} />
                            </div>
                        </div>
                    </div>

                    <div id="botones" className="w-full py-10 flex justify-evenly items-center">
                        <Link to={"/Menu-Docente"} className="bg-green-500 border border-gray-100 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-4 mx-2">
                            Regresar a menu
                        </Link>
                    </div>
                </>
            ) : <Carga />}

        </div>


    );
}

export default Estadistica