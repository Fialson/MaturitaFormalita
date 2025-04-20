import React, { forwardRef } from 'react'
import { useGLTF } from '@react-three/drei'

const Rebel = forwardRef((props, ref) => {
  const { nodes, materials } = useGLTF('./assets/rebel.glb')
  return (
    <group {...props} dispose={null} ref={ref}>
      <group position={[1.1, 1.024, 1.448]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001_1.geometry}
          material={materials['Material.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001_2.geometry}
          material={materials['Material.002']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001_3.geometry}
          material={materials.hnědá}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001_4.geometry}
          material={materials['okna rámy']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001_5.geometry}
          material={materials.okna}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001_6.geometry}
          material={materials.žltá}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001_7.geometry}
          material={materials['Material.003']}
        />
      </group>
      <group position={[0.052, 1.997, 1.921]} scale={[0.234, 0.212, 0.234]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube002_1.geometry}
          material={materials['Material.005']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube002_2.geometry}
          material={materials.hnědá}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube002_3.geometry}
          material={materials.černá}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube002_4.geometry}
          material={materials.žltá}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube002_5.geometry}
          material={materials['okna rámy']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube002_6.geometry}
          material={materials.okna}
        />
      </group>
      <group
        position={[-1.58, 2.261, 1.207]}
        rotation={[Math.PI / 2, -1.167, Math.PI / 2]}
        scale={[0.07, 0.082, 0.117]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube005.geometry}
          material={materials.černá}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube005_1.geometry}
          material={materials.sklo}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder001.geometry}
        material={materials.žltá}
        position={[0.576, 0.276, 2.606]}
        scale={-0.06}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.budova001.geometry}
        material={materials['Material.008']}
        position={[0.214, 0.266, 2.531]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={1.167}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text.geometry}
        material={materials.černá}
        position={[-0.512, 1.046, 2.537]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.124}
      />
      <group position={[1.1, 1.005, 1.448]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube004.geometry}
          material={materials['Material.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube004_1.geometry}
          material={materials.strecha}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube004_2.geometry}
          material={materials.komín}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.budova003.geometry}
        material={materials['Material.008']}
        position={[-1.794, 0.456, -1.068]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={1.416}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube002.geometry}
        material={materials['Material.007']}
        position={[-1.883, 0.05, -0.73]}
        scale={-0.013}
      />
    </group>
  )
})

useGLTF.preload('./assets/rebel.glb')

export default Rebel;