import { Estudiante } from "../interfaces/Estudiante";

interface ResultadosListProps {
    estudiantes: Estudiante[]
    totalPreguntas: number
}

export function ResultadosList({ estudiantes, totalPreguntas }: ResultadosListProps) {

    const dados = [
        {
            id: 1,
            name: 'Laura',
            porcentaje: "50%",
            image: 'https://cdn-icons-png.flaticon.com/512/186/186037.png',
            puntuacion: "5/10",
        },
        {
            id: 1,
            name: 'Laura',
            porcentaje: "40%",
            image: 'https://cdn-icons-png.flaticon.com/512/186/186037.png',
            puntuacion: "4/10",
        },
        {
            id: 1,
            name: 'Laura',
            porcentaje: "60%",
            image: 'https://cdn-icons-png.flaticon.com/512/186/186037.png',
            puntuacion: "6/10",
        },
        {
            id: 1,
            name: 'Laura',
            porcentaje: "60%",
            image: 'https://cdn-icons-png.flaticon.com/512/186/186037.png',
            puntuacion: "6/10",
        },
        {
            id: 1,
            name: 'Laura',
            porcentaje: "60%",
            image: 'https://cdn-icons-png.flaticon.com/512/186/186037.png',
            puntuacion: "6/10",
        },
        {
            id: 1,
            name: 'Laura',
            porcentaje: "60%",
            image: 'https://cdn-icons-png.flaticon.com/512/186/186037.png',
            puntuacion: "6/10",
        },
        {
            id: 1,
            name: 'Laura',
            porcentaje: "60%",
            image: 'https://cdn-icons-png.flaticon.com/512/186/186037.png',
            puntuacion: "6/10",
        },
        {
            id: 1,
            name: 'Laura',
            porcentaje: "50%",
            image: 'https://cdn-icons-png.flaticon.com/512/186/186037.png',
            puntuacion: "5/10",
        },
        {
            id: 1,
            name: 'Laura',
            porcentaje: "40%",
            image: 'https://cdn-icons-png.flaticon.com/512/186/186037.png',
            puntuacion: "4/10",
        },
        {
            id: 1,
            name: 'Laura',
            porcentaje: "60%",
            image: 'https://cdn-icons-png.flaticon.com/512/186/186037.png',
            puntuacion: "6/10",
        },
        {
            id: 1,
            name: 'Laura',
            porcentaje: "60%",
            image: 'https://cdn-icons-png.flaticon.com/512/186/186037.png',
            puntuacion: "6/10",
        },
        {
            id: 1,
            name: 'Laura',
            porcentaje: "60%",
            image: 'https://cdn-icons-png.flaticon.com/512/186/186037.png',
            puntuacion: "6/10",
        },
        {
            id: 1,
            name: 'Laura',
            porcentaje: "60%",
            image: 'https://cdn-icons-png.flaticon.com/512/186/186037.png',
            puntuacion: "6/10",
        },
        {
            id: 1,
            name: 'Laura',
            porcentaje: "60%",
            image: 'https://cdn-icons-png.flaticon.com/512/186/186037.png',
            puntuacion: "6/10",
        },
        {
            id: 1,
            name: 'Laura',
            porcentaje: "50%",
            image: 'https://cdn-icons-png.flaticon.com/512/186/186037.png',
            puntuacion: "5/10",
        },
        {
            id: 1,
            name: 'Laura',
            porcentaje: "40%",
            image: 'https://cdn-icons-png.flaticon.com/512/186/186037.png',
            puntuacion: "4/10",
        },
    ];

    return (
        <div className="mt-2 text-white">
            <div id="barra-nombre" className="grid grid-cols-[0.4fr,0.3fr,2fr] text-center bg-blue-400 rounded-xl text-sm justify-start">
                <div>#</div>
                <div className=" text-white text-left">Name</div>
                <div>puntuacion</div>
            </div>
            <div className="overflow-y-auto w-full rounded-xl overflow-x-hidden">
                {estudiantes.map((estudiante, i) => (
                    <div key={i} className="bg-opacity-2  bg-blue-800 grid grid-cols-[0.3fr,0.5fr,1fr] items-center min-h-[42px] text-center pr-[5rem]">
                        <span> {i + 1}</span>
                        <div className="flex items-center gap-4">
                            <img className="w-7 h-7 border-2 border-black" src="https://cdn-icons-png.flaticon.com/512/186/186037.png" />
                            <span> {estudiante.estudiante_nombre} </span>
                        </div>
                        <div className=" flex items-center justify-between mb-2">
                            <div className="w-3/4 bg-blue-400 h-4 ml-8 items-cennter rounded-full relative">
                                <div className="bg-blue-700 h-full rounded-full absolute left-0 top-0" style={{ width: `${estudiante.estudiante_puntaje / totalPreguntas * 100}%` }} />
                            </div>
                            <div className="w-1/4 text-right text-white mr-4">{estudiante.estudiante_puntaje}/{totalPreguntas}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}