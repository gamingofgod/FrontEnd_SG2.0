import { useEffect } from "react";
import { useState } from "react";

const Carga = () => {
    const [backgroundColor, setBackgroundColor] = useState('bg-yellow-500');

    useEffect(() => {
        const colors = ['bg-red-400', 'bg-green-400', 'bg-blue-400', 'bg-yellow-400', 'bg-pink-400', 'bg-purple-400', 'bg-indigo-400'];

        const interval = setInterval(() => {
            const randomColor = colors[Math.floor(Math.random() * colors.length)];
            setBackgroundColor(randomColor);
        }, 5000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <div className={`${backgroundColor}`}>
            <main className="flex flex-col justify-center items-center h-screen">
                <h1 className="text-4xl font-bold mb-6">Cargando...</h1>
                <div className="flex justify-center items-center">
                    <div className="rounded-full border-red-500 border-4 w-16 h-16 mr-4 animate-ping"></div>
                    <div className="rounded-full border-lime-500 border-4 w-16 h-16 mr-4 animate-ping"></div>
                    <div className="rounded-full border-cyan-500 border-4 w-16 h-16 animate-ping"></div>
                </div>
                <div className="mt-12">
                    <p> consejo.</p>
                </div>

            </main>
        </div>
    );
}
export default Carga