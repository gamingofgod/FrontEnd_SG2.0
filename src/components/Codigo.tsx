
interface CodigoProps{
  codigo?: string
}

export function Codigo({codigo}: CodigoProps) {
  return (
    <div id="mensaje-codigo" className="bg-blue-500 mt-10 rounded md:ml-6 flex space-x-8">
      <div className="p-2 bg-blue-700 text-white rounded">
        <p className="text-lg font-bold">{codigo ?? "cargando..."}</p>
      </div>
    </div>
  );
}