import React, { forwardRef } from 'react'
import { useGLTF } from '@react-three/drei'

const UKroupu = forwardRef((props, ref) => {
  const { nodes, materials } = useGLTF('./assets/UKroupu.glb')
  return (
    <group {...props} dispose={null} ref={ref}>
    <group position={[0.376, -2.635, 0]} scale={2.055}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube112.geometry}
          material={materials['spodní část']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube112_1.geometry}
          material={materials['sklo.002']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube112_2.geometry}
          material={materials.rámy}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube112_3.geometry}
          material={materials['mezi výstupek']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube112_4.geometry}
          material={materials['okna bílá']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube112_5.geometry}
          material={materials['horní část.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube112_6.geometry}
          material={materials['Material.145']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube112_7.geometry}
          material={materials['střecha.002']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube112_8.geometry}
          material={materials.schody}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube112_9.geometry}
          material={materials['malá střecha']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube112_10.geometry}
          material={materials['spodek.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube112_11.geometry}
          material={materials['Material.146']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube112_12.geometry}
          material={materials['Material.147']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube112_13.geometry}
          material={materials['černá.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube112_14.geometry}
          material={materials['Material.148']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube112_15.geometry}
          material={materials['Material.149']}
        />
      </group>
      <group position={[-5.237, 2.294, -7.262]} rotation={[Math.PI / 2, 0, 0]} scale={0.168}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder022.geometry}
          material={materials['Material.150']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder022_1.geometry}
          material={materials['Material.151']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder022_2.geometry}
          material={materials['Material.152']}
        />
      </group>
      <group position={[-4.492, 1.65, 0]} scale={[2.055, 1.695, 1.684]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube113.geometry}
          material={materials['sklo.002']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube113_1.geometry}
          material={materials.rámy}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.schody.geometry}
        material={materials.schody}
        position={[-4.601, 0.335, 0.092]}
        scale={0.104}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.trubky.geometry}
        material={materials['Material.153']}
        position={[1.849, 1.589, -7.506]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.093}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text.geometry}
        material={materials.NÁPIS}
        position={[-4.79, 2.141, -3.633]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
        scale={[0.382, 0.39, 0.39]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text001.geometry}
        material={materials.NÁPIS}
        position={[-4.79, 2.141, 1.533]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
        scale={[0.382, 0.39, 0.39]}
      />
      <group position={[2.093, 7.744, 5.105]} rotation={[0, 0, -0.508]} scale={0.228}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube115.geometry}
          material={materials.rámy}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube115_1.geometry}
          material={materials['sklo.002']}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.světla.geometry}
        material={materials['černá.001']}
        position={[-4.928, 2.509, -2.858]}
        scale={0.034}
      />
    </group>
  )
})

export default UKroupu;
useGLTF.preload('./assets/UKroupu.glb')
