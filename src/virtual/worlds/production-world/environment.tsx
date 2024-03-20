const Environment = () => {
  return (
    <>
      <color args={["rgba(33, 33, 33, 1)"]} attach="background" />
      <directionalLight position={[0, 1, 0]} intensity={0.1} />
      <ambientLight intensity={0.1} />
    </>
  )
}
export default Environment
