import { OrbitControls } from "@react-three/drei"
import { useThree } from "@react-three/fiber"
import { useEffect } from "react"

const CameraAndControl = () => {
  const { camera } = useThree()

  useEffect(() => {
    camera.position.set(20, 50, 400)
    camera.lookAt(0, 0, 0)
  }, [camera])

  return <OrbitControls enabled={true} makeDefault enableDamping={true} dampingFactor={0.1} maxDistance={3000} minDistance={2} />
}
export default CameraAndControl
