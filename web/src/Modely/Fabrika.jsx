
import React, { forwardRef } from 'react'
import { useGLTF } from '@react-three/drei'

const Fabrika = forwardRef((props, ref) => {
  const { nodes, materials } = useGLTF('./assets/fabrika.glb')
  return (
    <group {...props} dispose={null} ref={ref}>
      <group position={[-0.199, 1.562, -0.059]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube074.geometry}
          material={materials['Material.081']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube074_1.geometry}
          material={materials['Material.082']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube074_2.geometry}
          material={materials['Material.083']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube074_3.geometry}
          material={materials['Material.084']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube074_4.geometry}
          material={materials['Material.085']}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube001.geometry}
        material={materials['Material.082']}
        position={[-4.673, 1.184, 2.197]}
        rotation={[3.142, 1.561, -1.571]}
      />
      <group position={[0.253, 1.586, -0.192]} rotation={[0, 0.016, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube076.geometry}
          material={materials['Material.086']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube076_1.geometry}
          material={materials['Material.087']}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube003.geometry}
        material={materials['Material.082']}
        position={[0.992, 1.026, 2.351]}
        rotation={[-Math.PI, 1.561, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube004.geometry}
        material={materials['Material.088']}
        position={[0.992, 1.351, 2.146]}
        rotation={[-Math.PI, 1.561, -1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane.geometry}
        material={materials['Material.082']}
        position={[-2.772, 1.194, 2.342]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane001.geometry}
        material={materials['Material.089']}
        position={[-0.89, 1.194, 2.316]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane002.geometry}
        material={materials['Material.090']}
        position={[0.995, 1.194, 2.287]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane003.geometry}
        material={materials['Material.091']}
        position={[2.88, 1.194, 2.261]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane004.geometry}
        material={materials['Material.092']}
        position={[4.768, 1.194, 2.233]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text.geometry}
        material={materials.bílá}
        position={[-4.647, 1.404, 2.299]}
        rotation={[1.58, 0, 0]}
        scale={0.212}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text001.geometry}
        material={materials.bílá}
        position={[-5.25, 0.441, 2.3]}
        rotation={[Math.PI / 2, Math.PI / 2, 0]}
        scale={0.146}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text002.geometry}
        material={materials.bílá}
        position={[-4.072, 1.079, 2.288]}
        rotation={[Math.PI / 2, -Math.PI / 2, 0]}
        scale={0.146}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text003.geometry}
        material={materials.bílá}
        position={[-3.626, 1.47, 2.213]}
        rotation={[1.58, 0, 0]}
        scale={0.08}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text004.geometry}
        material={materials.bílá}
        position={[-5.711, 1.47, 2.215]}
        rotation={[1.58, 0, 0]}
        scale={0.08}
      />
    </group>
  )
})

useGLTF.preload('./assets/fabrika.glb')

export default Fabrika;