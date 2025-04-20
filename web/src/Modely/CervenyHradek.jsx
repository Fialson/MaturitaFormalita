import { useGLTF } from '@react-three/drei'
import { forwardRef } from 'react'

const CervenyHradek = forwardRef((props, ref) => {
  const { nodes, materials } = useGLTF('./assets/CervenyHradek.glb')
  return (
    <group {...props} dispose={null} ref={ref}>
      <group position={[2.879, -1.548, 1.616]} scale={0.453}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001_1.geometry}
          material={materials['main barva']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001_2.geometry}
          material={materials.spodek}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001_3.geometry}
          material={materials['lesklá černa']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001_4.geometry}
          material={materials.bílá}
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
          material={materials['Material.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001_7.geometry}
          material={materials['Material.002']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001_8.geometry}
          material={materials.střecha}
        />
      </group>
      <group position={[0.035, 1.303, -0.145]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube002_1.geometry}
          material={materials.střecha}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube002_2.geometry}
          material={materials.bílá}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube002_3.geometry}
          material={materials['main barva']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube002_4.geometry}
          material={materials['Material.003']}
        />
      </group>
      <group position={[-1.388, 1.343, 0.559]} rotation={[0, 0, -Math.PI / 2]} scale={0.049}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder_1.geometry}
          material={materials.bílá}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder_2.geometry}
          material={materials.okna}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder002.geometry}
        material={materials['Material.004']}
        position={[-1.372, 1.183, -0.351]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.015}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube.geometry}
        material={materials['lesklá černa']}
        position={[-1.371, 0.188, -0.257]}
        scale={0.062}
      />
      <group position={[-1.487, 0.007, -0.327]} rotation={[0, 0.428, 0]} scale={0.062}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube005.geometry}
          material={materials['Material.005']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube005_1.geometry}
          material={materials['lesklá černa']}
        />
      </group>
      <group position={[-1.599, 0.007, 0.349]} rotation={[0, -0.331, 0]} scale={0.062}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube006.geometry}
          material={materials['Material.005']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube006_1.geometry}
          material={materials['lesklá černa']}
        />
      </group>
      <group position={[-1.318, 0.067, -0.454]} scale={0.015}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube007.geometry}
          material={materials['Material.007']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube007_1.geometry}
          material={materials['Material.008']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube007_2.geometry}
          material={materials['Material.009']}
        />
      </group>
      <group position={[-1.318, 0.118, -0.454]} scale={0.015}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube008.geometry}
          material={materials['Material.007']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube008_1.geometry}
          material={materials['Material.008']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube008_2.geometry}
          material={materials['Material.009']}
        />
      </group>
      <group position={[-1.526, 0.567, 0.186]} rotation={[Math.PI / 2, 0, 0]} scale={0.065}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder001.geometry}
          material={materials['Material.006']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder001_1.geometry}
          material={materials['Material.010']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder001_2.geometry}
          material={materials['Material.011']}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.budova001.geometry}
        material={materials['Material.015']}
        position={[-1.511, 0.082, -0.125]}
        scale={2.055}
      />
      <group position={[0.236, 0.095, -0.497]} scale={1.119}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube011.geometry}
          material={materials['Material.016']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube011_1.geometry}
          material={materials['Material.017']}
        />
      </group>
    </group>
  )
})

useGLTF.preload('./assets/CervenyHradek.glb')

export default CervenyHradek;
