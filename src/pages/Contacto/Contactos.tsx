import { TablaTareas } from "../../components/tabla-de-contenido";
import { PieDePagina } from "../../components/PieDePagina";
import { Encabesado } from "../../components/Encabesado";

const Contactos = () => {
  return (
    <body className="bg-cover bg-center " style={{ backgroundImage: `url(/src/assets/otros/fondo3.jpg)`, height: "100vh" }}>
      <TablaTareas />
      <Encabesado />
      <main className="container mx-auto mt-8 px-4">
        <section className="py-8">
          <h2 className="text-2xl font-bold">¡Contáctanos!</h2>
          <p className="text-lg">¿Tienes alguna pregunta, sugerencia o simplemente quieres decir hola? ¡Estamos encantados de escucharte!</p>
          <p className="text-lg">Puedes ponerte en contacto con nosotros a través de los siguientes canales:</p>

          <ul className="mt-4">
            <li>
              <span className="font-bold">Correo electrónico:</span>
              <a href="mailto:info@wordwizards.com" className="text-blue-500">info@wordwizards.com</a>
            </li>
            <li>
              <span className="font-bold">Teléfono:</span>
              <a href="tel:+1234567890" className="text-blue-500">+1 (234) 567-890</a>
            </li>
          </ul>
        </section>

        <section className="py-8">
          <h2 className="text-2xl font-bold">Síguenos en las Redes Sociales</h2>
          <p className="text-lg">¡Mantente al día con las últimas noticias, actualizaciones y contenido divertido de WordWizards siguiéndonos en nuestras redes sociales!</p>

          <div className="flex mt-4">
            <a href="https://twitter.com/wordwizards" target="_blank" className="text-blue-500 mr-4 hover:underline">Twitter</a>
            <a href="https://instagram.com/wordwizards" target="_blank" className="text-blue-500 mr-4 hover:underline">Instagram</a>
            <a href="https://facebook.com/wordwizards" target="_blank" className="text-blue-500 hover:underline">Facebook</a>
          </div>
        </section>
      </main>
      <PieDePagina />
    </body>
  );
}
export default Contactos