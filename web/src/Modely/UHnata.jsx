import React, { forwardRef, useRef } from 'react'
import { useGLTF } from '@react-three/drei'

const UHNata = forwardRef((props,ref) => {
  const { nodes, materials } = useGLTF('./assets/UHnata.glb')
  return (
    <group {...props} dispose={null} ref={ref}>
      <group position={[-1.47, 1.728, 0.642]} rotation={[Math.PI, 0, -Math.PI / 2]} scale={30.561}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube019.geometry}
          material={materials['Material.020']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube019_1.geometry}
          material={materials['Material.021']}
        />
      </group>
      <group position={[1.342, 2.423, -0.11]} scale={5.546}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube015.geometry}
          material={materials['Material.022']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube015_1.geometry}
          material={materials['Material.023']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube015_2.geometry}
          material={materials['parapet.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube015_3.geometry}
          material={materials['Material.024']}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube004.geometry}
        material={materials['ramy.001']}
        position={[-1.304, 1.788, -3.298]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
        scale={5.546}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube007.geometry}
        material={materials['Material.025']}
        position={[-1.164, 0.85, -3.719]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
        scale={5.546}
      />
      <group position={[-0.852, 0.563, -3.293]} rotation={[Math.PI / 2, 0, 0]} scale={5.546}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube021.geometry}
          material={materials['Material.026']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube021_1.geometry}
          material={materials['Material.027']}
        />
      </group>
      <group position={[-1.118, 0.563, -2.177]} rotation={[Math.PI / 2, 0, 0]} scale={5.546}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube025.geometry}
          material={materials['Material.026']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube025_1.geometry}
          material={materials['Material.028']}
        />
      </group>
      <group position={[-1.127, 1.32, -3.725]} scale={0.514}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube016.geometry}
          material={materials['ramy.002']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube016_1.geometry}
          material={materials['parapet.002']}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder001.geometry}
        material={materials['Material.028']}
        position={[-1.51, 1.811, -0.22]}
        scale={0.005}
      />
      <group position={[-1.134, 0.983, -3.725]} scale={0.514}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube018.geometry}
          material={materials['ramy.003']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube018_1.geometry}
          material={materials['parapet.003']}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube002.geometry}
        material={materials['Material.028']}
        position={[-1.21, 1.005, -2.201]}
        rotation={[-Math.PI / 2, -Math.PI / 2, 0]}
        scale={27.271}
      />
      <group
        position={[-1.558, 1.633, -1.049]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
        scale={27.271}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube023.geometry}
          material={materials['Material.020']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube023_1.geometry}
          material={materials['Material.021']}
        />
      </group>
      <group position={[3.729, 2.996, -3.489]} rotation={[Math.PI, 0, Math.PI]} scale={0.514}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube024.geometry}
          material={materials['ramy.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube024_1.geometry}
          material={materials['parapet.001']}
        />
      </group>
      <group position={[-0.744, 2.996, -3.51]} scale={0.514}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube026.geometry}
          material={materials['ramy.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube026_1.geometry}
          material={materials['parapet.001']}
        />
      </group>
      <group position={[2.464, 2.95, 4.142]} rotation={[0, 1.571, 0]} scale={0.514}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube027.geometry}
          material={materials['ramy.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube027_1.geometry}
          material={materials['parapet.001']}
        />
      </group>
      <group position={[2.464, 1.26, 4.142]} rotation={[0, 1.571, 0]} scale={0.514}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube028.geometry}
          material={materials['ramy.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube028_1.geometry}
          material={materials['parapet.001']}
        />
      </group>
      <group position={[0.541, 1.26, 4.142]} rotation={[0, 1.571, 0]} scale={0.514}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube029.geometry}
          material={materials['ramy.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube029_1.geometry}
          material={materials['parapet.001']}
        />
      </group>
      <group position={[-1.38, 1.088, 3.155]} scale={0.514}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube030.geometry}
          material={materials['ramy.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube030_1.geometry}
          material={materials['parapet.001']}
        />
      </group>
      <group position={[-1.356, 2.988, -0.645]} scale={0.514}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube031.geometry}
          material={materials['ramy.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube031_1.geometry}
          material={materials['parapet.001']}
        />
      </group>
      <group position={[-0.744, 1.054, -2.769]} scale={0.514}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube032.geometry}
          material={materials['ramy.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube032_1.geometry}
          material={materials['parapet.001']}
        />
      </group>
      <group position={[4.039, 2.996, -0.63]} rotation={[Math.PI, 0, Math.PI]} scale={0.514}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube033.geometry}
          material={materials['ramy.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube033_1.geometry}
          material={materials['parapet.001']}
        />
      </group>
      <group position={[3.729, 2.996, -3.489]} scale={0.514}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube034.geometry}
          material={materials['ramy.014']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube034_1.geometry}
          material={materials['parapet.014']}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle_Arc_Window_Glass_108x25x108.geometry}
        material={materials['parapet.004']}
        position={[-1.436, 4.131, -0.418]}
        rotation={[0, 0, -1.568]}
        scale={0.422}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle_Arc_Window_Frame_108x25x108.geometry}
        material={materials['ramy.004']}
        position={[-1.436, 4.131, -0.418]}
        rotation={[0, 0, -1.568]}
        scale={0.422}
      />
    </group>
  )
})

useGLTF.preload('./assets/UHnata.glb')

export default UHNata;


