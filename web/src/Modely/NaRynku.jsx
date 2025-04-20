import React, { forwardRef } from 'react'
import { useGLTF } from '@react-three/drei'

const NarRynku = forwardRef((props, ref) => {
  const { nodes, materials } = useGLTF('./assets/naRynku.glb')
  return (
    <group {...props} dispose={null} ref={ref}>
      <group position={[0.84, 0.451, -0.232]} scale={2.36}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube166.geometry}
          material={materials['Material.227']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube166_1.geometry}
          material={materials['Material.228']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube166_2.geometry}
          material={materials.dřevo}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube166_3.geometry}
          material={materials['sklo.006']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube166_4.geometry}
          material={materials.zábradlí}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube166_5.geometry}
          material={materials['bílá okna']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube166_6.geometry}
          material={materials['bílá.002']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube166_7.geometry}
          material={materials['černá.004']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube166_8.geometry}
          material={materials['Material.229']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube166_9.geometry}
          material={materials['Material.230']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube166_10.geometry}
          material={materials['Material.231']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube166_11.geometry}
          material={materials['Material.232']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube166_12.geometry}
          material={materials['Material.233']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube166_13.geometry}
          material={materials['Material.234']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube166_14.geometry}
          material={materials['střecha.006']}
        />
      </group>
      <group position={[-2.216, 0.126, 2.919]} scale={0.033}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube167.geometry}
          material={materials['Material.235']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube167_1.geometry}
          material={materials['Material.236']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube167_2.geometry}
          material={materials.zábradlí}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.okrasa.geometry}
        material={materials.zábradlí}
        position={[0.666, 4.162, 2.935]}
        scale={0.071}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.špičky.geometry}
        material={materials['Material.237']}
        position={[-2.137, 7.015, 2.841]}
        scale={0.064}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.kliky.geometry}
        material={materials['Material.238']}
        position={[1.669, 0.792, 2.747]}
        rotation={[0, Math.PI / 2, 0]}
        scale={2.794}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text.geometry}
        material={materials['Material.239']}
        position={[-1.65, 2.529, 2.884]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.565}
      />
      <group position={[0.661, 0.938, 3.032]} scale={0.164}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube171.geometry}
          material={materials['Material.240']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube171_1.geometry}
          material={materials['Material.241']}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.na_střeše.geometry}
        material={materials['Material.242']}
        position={[-1.23, 7.451, 0.244]}
        scale={0.58}
      />
      <group position={[2.176, 2.112, 3.211]} rotation={[0, 0, -Math.PI / 2]} scale={0.261}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder035.geometry}
          material={materials['Material.243']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder035_1.geometry}
          material={materials['Material.244']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder035_2.geometry}
          material={materials['Material.245']}
        />
      </group>
      <group position={[-1.629, 0.336, 3.137]} scale={0.251}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane020.geometry}
          material={materials.dřevo}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane020_1.geometry}
          material={materials['Material.246']}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text001.geometry}
        material={materials['Material.244']}
        position={[2.377, 2.051, 3.367]}
        rotation={[1.728, 0, -Math.PI / 2]}
        scale={0.176}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.řidle.geometry}
        material={materials['Material.247']}
        position={[-1.831, 0.091, 3.135]}
        rotation={[0, 1.571, 0]}
        scale={[0.103, 0.091, 0.091]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BézierCurve.geometry}
        material={materials.okap}
        position={[2.132, 4.177, 2.93]}
        rotation={[0, 0, -Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder.geometry}
        material={materials.okap}
        position={[2.268, 5.844, 2.94]}
        rotation={[0.051, 0, 0]}
        scale={0.082}
      />
    </group>
  )
})

useGLTF.preload('./assets/naRynku.glb')

export default NarRynku;
