import { OrbitControls } from "@react-three/drei"

const CameraAndControl = () => {
  return <OrbitControls enabled={true} makeDefault enableDamping={true} dampingFactor={0.1} maxPolarAngle={Math.PI - Math.PI / 2 - 0.2} maxDistance={3000} minDistance={2} />
}
export default CameraAndControl
