import { useRef } from 'react'
import { Point, Points } from '@react-three/drei'
import { useThree, useFrame } from '@react-three/fiber'

const particleColors = ['#ffff26'];

export const Particles = ({ size=3000 }) => {
    const { width, height } = useThree((state) => state.viewport)
    const pointsRef = useRef();

    useFrame(() => {
        if (pointsRef.current) {
            pointsRef.current.rotation.x += 0.0003; // Adjust rotation speed as needed
            pointsRef.current.rotation.y += 0.0003; // Adjust rotation speed as needed
        }
    });

    return (
      <Points ref={pointsRef} limit={size}>
        <pointsMaterial size={0.05} vertexColors />
        {Array.from({ length: size }).map((_, i) => (
          <Point
            key={i}
            position={[(0.5 - Math.random()) * width * 2, 2.5 * height + Math.random() ** 0.4 * height * -6, (0.5 - Math.random()) * 40]}
            color={particleColors[Math.floor(Math.random() * (particleColors.length - 1))]}
          />
        ))}
      </Points>
    ) 
}