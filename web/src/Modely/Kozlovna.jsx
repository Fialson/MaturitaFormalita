import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { forwardRef } from 'react'

const Kozlovna = forwardRef((props,ref) => {
  const { nodes, materials } = useGLTF('./assets/Kozlovna.glb')
  return (
    <group {...props} dispose={null} ref={ref}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Kozlovna.geometry}
        material={materials['Material.114']}
        position={[1.838, 1.765, 1.731]}
        rotation={[1.606, 0, 0]}
        scale={0.965}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BézierCurve.geometry}
        material={materials['Material.115']}
        position={[-7.878, 0.603, 1.976]}
        scale={0.158}
      />
      <group
        position={[5.96, 0.701, -4.642]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={0.307}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane056.geometry}
          material={materials['Material.116']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane056_1.geometry}
          material={materials['Material.117']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane056_2.geometry}
          material={materials['Material.118']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane056_3.geometry}
          material={materials['Material.119']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane056_4.geometry}
          material={materials['Material.120']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane056_5.geometry}
          material={materials['Material.121']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane056_6.geometry}
          material={materials['Material.122']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane056_7.geometry}
          material={materials['Material.123']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane056_8.geometry}
          material={materials['Material.124']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane056_9.geometry}
          material={materials['Material.125']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane056_10.geometry}
          material={materials['Material.126']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane056_11.geometry}
          material={materials['Material.127']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane056_12.geometry}
          material={materials['Material.128']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane056_13.geometry}
          material={materials['Material.129']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane056_14.geometry}
          material={materials['Material.130']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane056_15.geometry}
          material={materials['Material.131']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane056_16.geometry}
          material={materials['Material.132']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane056_17.geometry}
          material={materials['Material.133']}
        />
      </group>
      <group position={[-5.213, 0.042, 3.654]} scale={0.306}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane006.geometry}
          material={materials['Material.134']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane006_1.geometry}
          material={materials['Material.135']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane006_2.geometry}
          material={materials['Material.136']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane006_3.geometry}
          material={materials['Material.137']}
        />
      </group>
      <group position={[-5.396, 0.204, 3.465]} scale={0.035}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube089.geometry}
          material={materials['Material.138']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube089_1.geometry}
          material={materials['Material.139']}
        />
      </group>
      <group position={[-5.069, 0.204, 3.465]} scale={0.035}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube090.geometry}
          material={materials['Material.140']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube090_1.geometry}
          material={materials['Material.141']}
        />
      </group>
      <group position={[-2.265, 0.042, 3.654]} scale={0.306}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane023.geometry}
          material={materials['Material.134']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane023_1.geometry}
          material={materials['Material.135']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane023_2.geometry}
          material={materials['Material.136']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane023_3.geometry}
          material={materials['Material.137']}
        />
      </group>
      <group position={[-2.448, 0.204, 3.465]} scale={0.035}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube091.geometry}
          material={materials['Material.138']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube091_1.geometry}
          material={materials['Material.139']}
        />
      </group>
      <group position={[-2.121, 0.204, 3.465]} scale={0.035}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube092.geometry}
          material={materials['Material.140']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube092_1.geometry}
          material={materials['Material.141']}
        />
      </group>
      <group position={[0.72, 0.042, 3.654]} scale={0.306}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane025_1.geometry}
          material={materials['Material.134']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane025_2.geometry}
          material={materials['Material.135']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane025_3.geometry}
          material={materials['Material.136']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane025_4.geometry}
          material={materials['Material.137']}
        />
      </group>
      <group position={[0.537, 0.204, 3.465]} scale={0.035}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube093.geometry}
          material={materials['Material.138']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube093_1.geometry}
          material={materials['Material.139']}
        />
      </group>
      <group position={[0.864, 0.204, 3.465]} scale={0.035}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube094.geometry}
          material={materials['Material.140']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube094_1.geometry}
          material={materials['Material.141']}
        />
      </group>
      <group position={[3.705, 0.042, 3.654]} scale={0.306}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane026_1.geometry}
          material={materials['Material.134']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane026_2.geometry}
          material={materials['Material.135']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane026_3.geometry}
          material={materials['Material.136']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane026_4.geometry}
          material={materials['Material.137']}
        />
      </group>
      <group position={[3.522, 0.204, 3.465]} scale={0.035}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube095.geometry}
          material={materials['Material.138']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube095_1.geometry}
          material={materials['Material.139']}
        />
      </group>
      <group position={[3.849, 0.204, 3.465]} scale={0.035}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube096.geometry}
          material={materials['Material.140']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube096_1.geometry}
          material={materials['Material.141']}
        />
      </group>
      <group position={[6.695, 0.042, 3.654]} scale={0.306}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane027_1.geometry}
          material={materials['Material.134']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane027_2.geometry}
          material={materials['Material.135']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane027_3.geometry}
          material={materials['Material.136']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane027_4.geometry}
          material={materials['Material.137']}
        />
      </group>
      <group position={[6.512, 0.204, 3.465]} scale={0.035}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube097.geometry}
          material={materials['Material.138']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube097_1.geometry}
          material={materials['Material.139']}
        />
      </group>
      <group position={[6.839, 0.204, 3.465]} scale={0.035}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube098.geometry}
          material={materials['Material.140']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube098_1.geometry}
          material={materials['Material.141']}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube012.geometry}
        material={materials['Material.142']}
        position={[-6.909, 1.722, 1.845]}
        rotation={[0.713, 0, 0]}
        scale={0.036}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube013.geometry}
        material={materials['Material.142']}
        position={[-2.169, 1.722, 1.845]}
        rotation={[0.713, 0, 0]}
        scale={0.036}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube014.geometry}
        material={materials['Material.142']}
        position={[-3.622, 1.722, 1.845]}
        rotation={[0.713, 0, 0]}
        scale={0.036}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube015.geometry}
        material={materials['Material.142']}
        position={[-5.154, 1.722, 1.845]}
        rotation={[0.713, 0, 0]}
        scale={0.036}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube016.geometry}
        material={materials['Material.142']}
        position={[-1.903, 1.722, 1.845]}
        rotation={[0.713, 0, 0]}
        scale={0.036}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube017.geometry}
        material={materials['Material.142']}
        position={[2.838, 1.722, 1.845]}
        rotation={[0.713, 0, 0]}
        scale={0.036}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube018.geometry}
        material={materials['Material.142']}
        position={[1.384, 1.722, 1.845]}
        rotation={[0.713, 0, 0]}
        scale={0.036}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube019.geometry}
        material={materials['Material.142']}
        position={[-0.148, 1.722, 1.845]}
        rotation={[0.713, 0, 0]}
        scale={0.036}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube020.geometry}
        material={materials['Material.142']}
        position={[3.094, 1.722, 1.845]}
        rotation={[0.713, 0, 0]}
        scale={0.036}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube021.geometry}
        material={materials['Material.142']}
        position={[7.834, 1.722, 1.845]}
        rotation={[0.713, 0, 0]}
        scale={0.036}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube022.geometry}
        material={materials['Material.142']}
        position={[6.381, 1.722, 1.845]}
        rotation={[0.713, 0, 0]}
        scale={0.036}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube023.geometry}
        material={materials['Material.142']}
        position={[4.849, 1.722, 1.845]}
        rotation={[0.713, 0, 0]}
        scale={0.036}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane013.geometry}
        material={materials['Material.143']}
        position={[-6.651, 1.553, 0.664]}
        rotation={[-Math.PI, 0, 0]}
        scale={0.85}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane028.geometry}
        material={nodes.Plane028.material}
        position={[-4.466, 1.34, 1.73]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.248}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane029.geometry}
        material={nodes.Plane029.material}
        position={[-0.721, 1.34, 1.73]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.248}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane030.geometry}
        material={nodes.Plane030.material}
        position={[1.511, 1.34, 1.73]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.248}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane031.geometry}
        material={nodes.Plane031.material}
        position={[5.988, 1.34, 1.73]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.248}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube024.geometry}
        material={materials['Material.138']}
        position={[-1.764, 2.181, 1.939]}
        scale={0.179}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Kozlovna001.geometry}
        material={materials['Material.144']}
        position={[-2.818, 2.068, 1.769]}
        rotation={[1.606, 0, 0]}
        scale={0.418}
      />
    </group>
  )
})

useGLTF.preload('./assets/Kozlovna.glb')
export default Kozlovna;