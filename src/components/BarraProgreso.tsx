import { useState, useEffect } from "react";

interface BarraProgresoProps {
    progress: number
    setProgress: React.Dispatch<React.SetStateAction<number>>
}

export const BarraProgreso = ({progress, setProgress}:BarraProgresoProps) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (loading) {
            const interval = setInterval(() => {
                setProgress((prevProgress) => (prevProgress + 0.1));
            }, 10);

            return () => {
                clearInterval(interval);
            };
        }
    }, [loading]);

    useEffect(() => {
        if (progress >= 100) {
          setLoading(false);
        }else if(progress==0){
            
          setLoading(true);
        }
      }, [progress]);

    return (
        <div className="w-3/4  h-4 ml-8 rounded-full relative">
            <div className="h-full bg-violet-700 rounded-full absolute left-0 top-0" style={{ width: `${progress}%` }} />
        </div>
    )
}