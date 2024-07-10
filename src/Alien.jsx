import { useAnimations, useGLTF } from '@react-three/drei'
import { useEffect, useRef } from 'react'

export function Alien() {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/scene-transformed.glb')
  const { actions, names } = useAnimations(animations, group)

  useEffect(() => {
    actions[names[0]].play()
  })

  return (
    <group ref={group} position={[-1, -3, 0]} scale={[1.5, 1.5, 1.5]}>
      <group name="">
        <primitive object={nodes._rootJoint} />
        <skinnedMesh geometry={nodes.Object_9.geometry} material={materials.material} skeleton={nodes.Object_9.skeleton} />
      </group>
    </group>
  )
}
