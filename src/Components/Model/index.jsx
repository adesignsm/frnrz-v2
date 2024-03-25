import { useState } from 'react';
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { 
    Environment, 
    OrbitControls, 
    useFont,
} from "@react-three/drei";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { EffectComposer, Bloom } from "@react-three/postprocessing";

import './index.css';

import MODEL from '../../Assets/model.glb';

import FRONT from '../../Assets/artLayers/front.png';
import MIDDLE from '../../Assets/artLayers/middle.png';
import BACK from '../../Assets/artLayers/back.png';

export const Model = () => {
    const LayerComp = () => {
        return (
            <>
                <group position={[0, 0, 0]} scale={[-1, 1, 1]}>
                    <mesh position={[0, 0, -2]}>
                        <planeGeometry args={[7, 8]} />
                        <meshBasicMaterial 
                            side={THREE.DoubleSide} 
                            map={new THREE.TextureLoader().load(FRONT)} 
                            transparent={true} 
                        />
                    </mesh>
                    <mesh position={[0, 0, 0]}>
                        <planeGeometry args={[7, 8]} />
                        <meshBasicMaterial
                            side={THREE.DoubleSide} 
                            map={new THREE.TextureLoader().load(MIDDLE)} 
                            transparent={true} 
                        />
                    </mesh>
                    <mesh position={[0, 0, 2]}>
                        <planeGeometry args={[7, 8]} />
                        <meshBasicMaterial 
                            side={THREE.DoubleSide} 
                            map={new THREE.TextureLoader().load(BACK)} 
                            transparent={true} 
                        />
                    </mesh>
                </group>
            </>
        )
    }

    const ModelHead = () => {
        const modelObj = useLoader(GLTFLoader, MODEL);
        const [rotationX, setRotationX] = useState(0);

        useFrame(() => {
            setRotationX(prevRotationX => prevRotationX + 0.003);
        });

        return (
            <mesh rotation-y={rotationX} position={[0, 0.5, 0]}>
                <primitive object={modelObj.scene} position={[0, 0, 0]}/>
            </mesh>
        )
    }

    const randomNumber = Math.random();
    const renderLayerComp = randomNumber < 0.5;

    return (
        <>
            <Canvas frameloop="always" camera={{fov: 75, near: 0.1, far: 10000, position: [0, 0, renderLayerComp ? -8 : 2.5]}}>
                <ambientLight intensity={0} />
                {renderLayerComp ? <LayerComp /> : <ModelHead />}
                <OrbitControls />
                <EffectComposer>
                    <Bloom mipmapBlur intensity={0.2} />
                </EffectComposer>
                <Environment preset="sunset" />
            </Canvas>
        </>
    )
}

useFont.preload("../../Assets/model.glb");