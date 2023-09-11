import { Encabesado } from "../../components/Encabesado";
import { PieDePagina } from "../../components/PieDePagina";
import { TablaTareas } from "../../components/tabla-de-contenido";

const Docente = () => {
    return (
        <body className="w-full h-screen bg-cover bg-center" style={{ backgroundImage: `url(/assets/otros/fondo3.jpg)`}}>
            <TablaTareas />
            <Encabesado />
            <main className="container mx-auto mt-8 px-4">
                <section className="py-8">
                    <h2 className="text-2xl font-bold">Información para los Docentes</h2>
                    <p>En este entorno de aprendizaje web, los docentes son los encargados de dirigir las pruebas. A continuación, se explicará cómo funcionan las pruebas y cuáles son los pasos para crear y dirigir una.</p>
                    <h3 className="text-xl font-bold mt-4">Primer paso: Registro</h3>
                    <p>Lo primero es registrarse como docente.</p>
                    <img src="/public/assets/otros/registro.png" alt="Proceso de Registro" className="my-4" />
                    <h3 className="text-xl font-bold mt-4">Segundo paso: Iniciar sesión y seleccionar tema</h3>
                    <p>Inicia sesión para acceder al menú de docentes, donde puedes observar los diferentes temas que ofrece la página, como vocabulario sobre animales, números, colores, presente simple, verbos to be, entre otros, tal como se muestra en la imagen.</p>
                    <img src="/public/assets/otros/menu_docente.png" alt="Menú de Docentes" className="my-4" />

                    <h3 className="text-xl font-bold mt-4">Tercer paso: Configurar la prueba</h3>
                    <p>Una vez seleccionado el tema de la prueba, escoge la cantidad de preguntas que deseas incluir (se recomienda no exceder las 30 preguntas).</p>
                    <img src="/public/assets/otros/temario.png" alt="Configuración de la Prueba" className="my-4" />

                    <h3 className="text-xl font-bold mt-4">Cuarto paso: Iniciar la prueba</h3>
                    <p>Después de seleccionar la cantidad de preguntas, presiona el botón "Iniciar prueba", lo cual llevará al docente a una sala de espera. En esta sala, se mostrará el código para ingresar, así como la lista de estudiantes que van ingresando. Una vez que todos los estudiantes hayan ingresado a la sala, se puede presionar el botón "Iniciar prueba" para comenzar con la evaluación.</p>
                    <img src="/public/assets/otros/sala de estar 1.png" alt="Sala de Espera" className="my-4" />
                    <img src="/public/assets/otros/sala de estar 2.png" alt="Códigode Ingreso" className="my-4" />
                    <img src="/public/assets/otros/sala de estar 3.png" alt="Lista de Estudiantes" className="my-4" />

                    <h3 className="text-xl font-bold mt-4">Etapa de la Prueba</h3>
                    <p>Tanto el docente como los estudiantes verán pantallas diferentes durante la prueba. El docente tendrá acceso a un panel de control donde podrá monitorear a los estudiantes y ver las preguntas que van apareciendo.</p>
                    <img src="/public/assets/otros/panel_de_contro.png" alt="Panel de Control del Docente" className="my-4" />

                    <p>Los estudiantes verán distintas pantallas. En primer lugar, se les mostrará la pantalla con la pregunta, una imagen complementaria para guiar a los estudiantes y dos posibles respuestas.</p>
                    <img src="/public/assets/otros/pregunta.png" alt="Pregunta y Respuestas" className="my-4" />

                    <p>Si el estudiante selecciona la respuesta correcta, aparecerá una pantalla con su puntaje, que se incrementará en +1, junto con un mensaje de felicitaciones.</p>
                    <img src="/public/assets/otros/correcto.png" alt="Respuesta Correcta" className="my-4" />

                    <p>En caso contrario, se mostrará una pantalla de error con un mensaje indicando que la respuesta fue incorrecta y el puntaje se mantendrá en +0.</p>
                    <img src="/public/assets/otros/incorrecto.png" alt="Respuesta Incorrecta" className="my-4" />

                    <h3 className="text-xl font-bold mt-4">Finalización y Resultados</h3>
                    <p>Una vez concluida la prueba, los estudiantes podran ver su calificacion y el docente vulve al menu en donde puede revisar los resultados promedio de pruebas anteriores para evaluar el progreso de la clase a lo largo del tiempo.</p>
                    <img src="/public/assets/otros/final.png" alt="Resultados Promedio" className="my-4" />
                    <img src="/public/assets/otros/resultados.png" alt="Evaluación del Progreso" className="my-4" />
                </section>
            </main>
            <PieDePagina />
        </body>
    );
}
export default Docente
