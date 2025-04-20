import React, { forwardRef } from 'react'
import { useGLTF } from '@react-three/drei'

const Piombino = forwardRef((props, ref) => {
  const { nodes, materials } = useGLTF('./assets/piombino.glb')
  return (
    <group {...props} dispose={null} ref={ref}>
       <group position={[0.363, 30.339, 29.465]} rotation={[0.004, -1.571, 0]} scale={0.804}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder020.geometry}
          material={materials['Material.107']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder020_1.geometry}
          material={materials['Material.108']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder020_2.geometry}
          material={materials['Material.109']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder020_3.geometry}
          material={materials['Material.110']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder020_4.geometry}
          material={materials['Material.111']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder020_5.geometry}
          material={materials['Material.112']}
        />
      </group>
      <group position={[-2.692, 15.764, 28.027]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube086.geometry}
          material={materials['Material.110']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube086_1.geometry}
          material={materials['Material.109']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube086_2.geometry}
          material={materials['Material.111']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube086_3.geometry}
          material={materials['Material.112']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube086_4.geometry}
          material={materials['Material.108']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube086_5.geometry}
          material={materials['Material.113']}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube001.geometry}
        material={materials['Material.109']}
        position={[0.311, 23.396, 30.327]}
        rotation={[-1.567, 0, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder001.geometry}
        material={materials['Material.108']}
        position={[0.487, 24.448, 30.222]}
        rotation={[-0.995, 0, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube002.geometry}
        material={materials['Material.108']}
        position={[-0.006, 27.377, -8.899]}
        rotation={[0, 1.571, 0]}
      />
    </group>
  )
})

useGLTF.preload('./assets/piombino.glb')

export default Piombino;
