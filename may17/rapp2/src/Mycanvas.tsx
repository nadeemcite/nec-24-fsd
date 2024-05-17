import {useRef, useEffect} from 'react';
export const MyCanvas: React.FC = (): JSX.Element => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(()=>{
        canvasRef.current!.width= 600
        canvasRef.current!.height= 600
        const ctx = canvasRef.current!.getContext('2d')
    }, [])

    return <div>
        <canvas ref={canvasRef}></canvas>
    </div>
}