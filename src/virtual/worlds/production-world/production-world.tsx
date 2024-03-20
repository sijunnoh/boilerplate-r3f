import { Canvas } from "@react-three/fiber"

import OceanSky from "@/virtual/objects/ocean-sky/ocean-sky"

import CameraAndControl from "./camera-and-control"
import Environment from "./environment"

const ProductionWorld = () => {
  return (
    <Canvas
      key={"production-world"}
      gl={{ antialias: true, logarithmicDepthBuffer: true }}
      camera={{
        fov: 20,
        near: 0.1,
        far: 20000,
      }}
    >
      <Environment />
      <CameraAndControl />
      <OceanSky />
      <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="hotpink" />
      </mesh>
    </Canvas>
  )
}
export default ProductionWorld
