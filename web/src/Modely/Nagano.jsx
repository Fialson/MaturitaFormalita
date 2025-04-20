import React, { forwardRef } from 'react'
import { useGLTF } from '@react-three/drei'

const Nagano = forwardRef((props, ref) => {
  const { nodes, materials } = useGLTF('./assets/Nagano.glb')
  return (
    <group {...props} dispose={null} ref={ref}>
      <group position={[6.785, 3.977, 5.866]} rotation={[Math.PI / 2, 0, -2.334]} scale={0.362}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane005.geometry}
          material={materials['Material.093']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane005_1.geometry}
          material={materials['Material.094']}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.klika001.geometry}
        material={materials['Material.095']}
        position={[7.012, 4.244, 8.28]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={0.025}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.klika002.geometry}
        material={materials['Material.096']}
        position={[7.803, 2.105, 8.355]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={0.043}
      />
      <group position={[7.713, 1.178, 5.04]} rotation={[0.091, 0, 0]} scale={0.064}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube081.geometry}
          material={materials['rámy na okna']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube081_1.geometry}
          material={materials['horní část']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube081_2.geometry}
          material={materials['sklo.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube081_3.geometry}
          material={materials['spodní čáast']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube081_4.geometry}
          material={materials['Material.097']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube081_5.geometry}
          material={materials['Material.098']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube081_6.geometry}
          material={materials['Material.099']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube081_7.geometry}
          material={materials['střecha.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube081_8.geometry}
          material={materials['Material.100']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube081_9.geometry}
          material={materials['komín.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube081_10.geometry}
          material={materials['Material.101']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube081_11.geometry}
          material={materials['Material.102']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube081_12.geometry}
          material={materials['Material.103']}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.klika003.geometry}
        material={materials['Material.096']}
        position={[-4.77, 0.928, -9.58]}
        rotation={[0, -0.76, 0]}
        scale={0.041}
      />
      <group position={[-6.717, 0.179, 2.224]} scale={0.122}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube083.geometry}
          material={materials['spodní čáast']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube083_1.geometry}
          material={materials['střecha.001']}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube002.geometry}
        material={materials['Material.104']}
        position={[-6.729, 2.24, 1.099]}
        scale={0.064}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube001.geometry}
        material={materials['Material.105']}
        position={[0.695, 1.022, 11.359]}
        scale={0.159}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder.geometry}
        material={materials['Material.105']}
        position={[0.695, 0.989, 11.366]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.033}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere.geometry}
        material={materials['Material.105']}
        position={[0.704, 1.039, 11.382]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={0.016}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder001.geometry}
        material={materials['Material.106']}
        position={[-0.246, 6.392, 9.722]}
        scale={0.108}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder002.geometry}
        material={materials['Material.106']}
        position={[-0.246, 6.392, 10.175]}
        scale={0.108}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder003.geometry}
        material={materials['Material.106']}
        position={[4.31, 6.89, 9.029]}
        scale={0.108}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder004.geometry}
        material={materials['Material.106']}
        position={[4.31, 6.89, 9.482]}
        scale={0.108}
      />
    </group>
  )
})

useGLTF.preload('./assets/Nagano.glb')

export default Nagano;