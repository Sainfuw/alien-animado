import { OrbitControls, PresentationControls, ScrollControls, Sparkles } from "@react-three/drei"
import { Alien } from './Alien'

function App() {
  return (
    <ScrollControls pages={0}>
      <Sparkles size={15} color={"#ff0"} scale={[10, 10, 40]} count={200} opacity={2} />
      <PresentationControls
        global
        config={{ mass: 2, tension: 500 }}
        snap={{ mass: 4, tension: 1500 }}
        rotation={[0, 0.3, 0]}
        polar={[-Math.PI / 3, Math.PI / 3]}
        azimuth={[-Math.PI / 1.4, Math.PI / 2]}>
        <Alien />
      </PresentationControls>
      <OrbitControls minPolarAngle={Math.PI / 2} maxPolarAngle={Math.PI / 2} />
    </ScrollControls>
  )
}

export default App
