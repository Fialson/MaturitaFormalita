import React, { forwardRef } from 'react'
import { useGLTF } from '@react-three/drei'


// U funkčních komponent je třeba použít forwardRef, aby mohly přijímat ref z jiných částí kodu
const Hribek = forwardRef((props,ref) => {
  const { nodes, materials } = useGLTF('./assets//Hribek.glb')
  return (
    <group {...props} dispose={null} ref={ref}>
      <group position={[0.348, 0.59, -0.045]} rotation={[0, -0.07, 0]} scale={4.422}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube046.geometry}
          material={materials['Material.051']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube046_1.geometry}
          material={materials['Material.052']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube046_2.geometry}
          material={materials['Material.053']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube046_3.geometry}
          material={materials['Material.054']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube046_4.geometry}
          material={materials['Material.055']}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder.geometry}
        material={materials['Material.056']}
        position={[-1.545, 1.864, -1.375]}
        scale={1.344}
      />
      <group position={[-2.318, 1.86, -1.528]} scale={0.945}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder006_1.geometry}
          material={materials['Material.057']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder006_2.geometry}
          material={materials['Material.058']}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder004.geometry}
        material={nodes.Cylinder004.material}
        position={[1.142, -0.135, -0.257]}
        rotation={[0, 0, 0.697]}
        scale={4.422}
      />
      <group position={[-0.175, 1.911, 0.434]} rotation={[0, -1.431, 0]} scale={0.945}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder008.geometry}
          material={materials['Material.057']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder008_1.geometry}
          material={materials['Material.058']}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder003.geometry}
        material={materials['Material.056']}
        position={[-2.236, 1.784, 0.183]}
        scale={1.908}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder005.geometry}
        material={materials['Material.056']}
        position={[0.418, 2.436, -1.08]}
        scale={1.908}
      />
      <group position={[-0.201, 2.111, 0.83]} rotation={[0, -0.612, 0]} scale={1.824}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder011.geometry}
          material={materials['Material.056']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder011_1.geometry}
          material={materials['Material.059']}
        />
      </group>
      <group position={[-2.316, 2.014, 2.113]} scale={0.945}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder012.geometry}
          material={materials['Material.057']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder012_1.geometry}
          material={materials['Material.058']}
        />
      </group>
      <group
        position={[-2.932, 1.215, 3.223]}
        rotation={[Math.PI, 0.07, -Math.PI / 2]}
        scale={15.779}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube047.geometry}
          material={materials['Material.060']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube047_1.geometry}
          material={materials['Material.061']}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder010.geometry}
        material={materials['Material.062']}
        position={[3.405, 1.216, -1.712]}
        rotation={[-3.133, 0.07, -3.13]}
        scale={0.003}
      />
      <group position={[3.399, 1.12, -1.284]} rotation={[1.581, -0.011, -1.501]} scale={14.08}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube048.geometry}
          material={materials['Material.063']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube048_1.geometry}
          material={materials['Material.064']}
        />
      </group>
      <group
        position={[-2.456, 1.215, -3.551]}
        rotation={[Math.PI, 0.07, -Math.PI / 2]}
        scale={15.779}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube049.geometry}
          material={materials['Material.065']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube049_1.geometry}
          material={materials['Material.066']}
        />
      </group>
    </group>
  )
})

useGLTF.preload('./assets//Hribek.glb')
export default Hribek;