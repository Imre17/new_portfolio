import { Suspense, useEffect, useState } from 'react';

import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';

import CanvasLoader from '../Loader'


const Computers = () => {
  const computer = useGLTF('./alien_planet/scene.gltf')


  return (
    <mesh>
      <hemisphereLight 
        intensity={0.35} 
        groundColor='black'
      />
      <pointLight intensity={1}/>
      <spotLight 
        position={[-20, 50, 10]}
        angle={1.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={5024}
      />
      <primitive 
        object={computer.scene}
        scale={2.8}
        position={[0, -0.75, 0]}
       />
    </mesh>
  )
}

const ComputersCanvas = () => {

  const [isMobile , setIsMobile] = useState(false)

  // It is optional I can use whenever I want to!!
  
  // useEffect(() => {
  //   // Add a listener for changes to the screen size
  //   const mediaQuery = window.matchMedia('(max-width: 500px)')

  //   // Set the initial value of the 'isMobile' state variable
  //   setIsMobile(mediaQuery.matches)

  //   // Defines a callback function to handle changes to the media query
  //   const handleMediaQueryChange = (event) => {
  //     setIsMobile(event.matches)
  //   }

  //   // Add the callback function as a listener for changes
  //   mediaQuery.addEventListener('change', handleMediaQueryChange)

  //   // Remove that callback function from the listener
  //   return() => { 
  //     mediaQuery.removeEventListener('chnage', handleMediaQueryChange)
  //   }
  // }, [])

  return (
    <Canvas
      frameloop='demand'
      shadows
      camera={{position: [20, 3, 5], fov: 25}}
      gl={{preserveDrawingBuffer: true}}
    > 
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls 
            enableZoom={false}
            enablePan={false}
            makeDefault
          />
          <Computers />
        </Suspense>
      <Preload all/>
    </Canvas>
  )
}

export default ComputersCanvas