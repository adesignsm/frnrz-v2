import { useEffect, useRef } from 'react';
import { Canvas } from "@react-three/fiber";
import { EffectComposer, Bloom, Noise } from "@react-three/postprocessing";

import { Scene } from '../Scene'

import './index.css';

export const Stars = () => {
    let currentIndex = 0;

    const classNames = [
        'darken',
        'hard-light',
        'difference',
    ];

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         currentIndex = (currentIndex + 1) % classNames.length;
    //         document.getElementById('canvas').classList.remove(...classNames); // Remove all previous classes
    //         document.getElementById('canvas').classList.add(classNames[currentIndex]); // Add the new class
    //     }, 2000);

    //     return () => clearInterval(interval);
    // }, []);

    return (
        <Canvas id='canvas' className='canvas'>
            <ambientLight />
            <directionalLight color="#ffff26" intensity={10} />
            <Scene />
            <EffectComposer>
              <Bloom intensity={1} luminanceThreshold={0} luminanceSmoothing={0} height={500} />
              <Noise opacity={0.5} />
            </EffectComposer>
        </Canvas>
    )
}