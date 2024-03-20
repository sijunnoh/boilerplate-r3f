import { useFrame, useThree } from "@react-three/fiber"
import { useEffect } from "react"
import * as THREE from "three"

// @ts-ignore
import { Sky } from "./Sky.js"
// @ts-ignore
import { Water } from "./Water.js"

const waterGeometry = new THREE.PlaneGeometry(50000, 50000)

const water = new Water(waterGeometry, {
  textureWidth: 512,
  textureHeight: 512,
  waterNormals: new THREE.TextureLoader().load("./textures/water-normal-01.jpg", function (texture) {
    texture.wrapS = texture.wrapT = THREE.RepeatWrapping
  }),
  sunDirection: new THREE.Vector3(0, 1, 0),
  sunColor: 0xffffff,
  waterColor: 0x001e0f,
  distortionScale: 2,
  fog: undefined,
})

water.rotation.x = -Math.PI / 2

const sky = new Sky()
sky.scale.setScalar(10000)
const sun = new THREE.Vector3()

const skyUniforms = sky.material.uniforms

skyUniforms["turbidity"].value = 10
skyUniforms["rayleigh"].value = 2
skyUniforms["mieCoefficient"].value = 0.005
skyUniforms["mieDirectionalG"].value = 0.8

const parameters = {
  elevation: 2,
  azimuth: 180,
}

const sceneEnv = new THREE.Scene()

const OceanSky = () => {
  const { scene, gl } = useThree()

  useFrame((_state, delta) => {
    water.material.uniforms["time"].value += delta / 2
  })

  useEffect(() => {
    const pmremGenerator = new THREE.PMREMGenerator(gl)

    function updateSun() {
      const phi = THREE.MathUtils.degToRad(90 - parameters.elevation)
      const theta = THREE.MathUtils.degToRad(parameters.azimuth)

      sun.setFromSphericalCoords(1, phi, theta)

      sky.material.uniforms["sunPosition"].value.copy(sun)
      water.material.uniforms["sunDirection"].value.copy(sun).normalize()

      sceneEnv.add(sky)
      const renderTarget = pmremGenerator.fromScene(sceneEnv)
      scene.add(sky)

      scene.environment = renderTarget.texture
    }

    updateSun()
  }, [])

  return (
    <>
      <primitive object={sun} />
      <primitive object={water} />
    </>
  )
}
export default OceanSky
