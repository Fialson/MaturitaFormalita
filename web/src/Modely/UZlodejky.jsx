import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { forwardRef } from 'react'

const UZlodejky = forwardRef((props,ref) => {
  const { nodes, materials } = useGLTF('./assets//UZlodejky.glb')
  return (
    <group {...props} dispose={null} ref={ref}>
      <group
        position={[-5.047, 4.896, -11.833]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
        scale={1.092}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube035.geometry}
          material={materials['Material.029']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube035_1.geometry}
          material={materials['Material.030']}
        />
      </group>
      <group
        position={[-5.047, 2.035, -7.105]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
        scale={1.092}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube036.geometry}
          material={materials['Material.031']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube036_1.geometry}
          material={materials['Material.032']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube036_2.geometry}
          material={materials['Material.033']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube036_3.geometry}
          material={materials['Material.034']}
        />
      </group>
      <group
        position={[-5.067, 2.286, -9.477]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
        scale={1.092}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube037.geometry}
          material={materials['Material.035']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube037_1.geometry}
          material={materials['Material.036']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube037_2.geometry}
          material={materials['Material.029']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube037_3.geometry}
          material={materials['Material.030']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube037_4.geometry}
          material={materials['Material.037']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube037_5.geometry}
          material={materials['Material.038']}
        />
      </group>
      <group position={[-5.081, 1.484, 4.8]} rotation={[Math.PI / 2, 0, Math.PI / 2]} scale={1.092}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube038.geometry}
          material={materials['Material.029']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube038_1.geometry}
          material={materials['Material.030']}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube015.geometry}
        material={materials['Material.029']}
        position={[-5.133, 1.552, 1.235]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        scale={1.092}
      />
      <group
        position={[-5.29, 3.022, 11.092]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
        scale={1.092}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube040.geometry}
          material={materials['Material.039']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube040_1.geometry}
          material={materials['Material.040']}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube018.geometry}
        material={materials['Material.039']}
        position={[-5.439, 2.712, 4.81]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
        scale={1.092}
      />
      <group position={[-5.53, 2.91, 13.304]} rotation={[1.576, 1.571, 0]} scale={1.092}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube042.geometry}
          material={materials['Material.041']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube042_1.geometry}
          material={materials['Material.042']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube042_2.geometry}
          material={materials['Material.043']}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube003.geometry}
        material={materials['Material.044']}
        position={[-0.739, 5.764, 13.692]}
        rotation={[-Math.PI / 2, -Math.PI / 2, 0]}
        scale={27.142}
      />
      <group position={[-0.979, 4.274, 0.13]} scale={1.686}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube044.geometry}
          material={materials['Material.045']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube044_1.geometry}
          material={materials['Material.046']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube044_2.geometry}
          material={materials['Material.029']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube044_3.geometry}
          material={materials['Material.030']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube044_4.geometry}
          material={materials['Material.044']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube044_5.geometry}
          material={materials['Material.047']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube044_6.geometry}
          material={materials['Material.048']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube044_7.geometry}
          material={materials['Material.049']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube044_8.geometry}
          material={materials['Material.050']}
        />
      </group>
      <group
        position={[-0.963, 7.794, 13.114]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
        scale={1.092}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube045.geometry}
          material={materials['Material.046']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube045_1.geometry}
          material={materials['Material.044']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube045_2.geometry}
          material={materials['Material.045']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube045_3.geometry}
          material={materials['Material.030']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube045_4.geometry}
          material={materials['Material.029']}
        />
      </group>
    </group>
  )
})

useGLTF.preload('./assets//UZlodejky.glb')

export default UZlodejky;


