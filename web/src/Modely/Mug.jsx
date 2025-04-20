import React, { useLayoutEffect, useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useThree } from '@react-three/fiber'
import gsap from "gsap"
import { useMediaQuery } from 'react-responsive';

function Mug(props) {
  const { nodes, materials } = useGLTF('./assets/mug.glb')
  
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isDesktop = useMediaQuery({ minWidth: 767 });

    const {camera} = useThree();
    const tl = gsap.timeline();
    const ref = useRef();
   useLayoutEffect(()=>{
        tl.to(camera.position,{
            y: 3,
            z: -.1,
            x: .15,
            scrollTrigger:{
                trigger: "#mugScene",
                start:"5% top",
                end: "30% top",
                scrub: .5,
                immediateRender: false,     
            }
        });
        tl.to(camera.rotation,{
          x: -Math.PI / 2,
          scrollTrigger:{
              trigger: "#mugScene",
              start:"5% top",
              end: "20% top",
              scrub: .5,
              immediateRender: false,     
          }
      });
      tl.to("#mug",{
        opacity:0,
        scrollTrigger:{
          trigger: "#mugScene",
          start:"40% top",
          end: "43% top",
          scrub: .5,
          immediateRender: false,     
      }
  });
  tl.to("#mugSceneText",{
    opacity:0,
    top: "-5%",
    scrollTrigger:{
      trigger: "#mugScene",
      start:"0% top",
      end: "20% top",
      scrub: .5,
      immediateRender: false,     
  }
});
      tl.to(ref.current.position,{
          y:5,
          z:-.1,
          scrollTrigger:{
            trigger: "#mugScene",
            start:"30% top",
            end: "45% top",
            scrub: .5,
            immediateRender: false,     
        }
    });

    tl.to("#mugScene",{
      opacity:0,
      scrollTrigger:{
        trigger: "#mugScene",
        start:"43% top",
        end: "45% top",
        scrub: .5,
        immediateRender: false,     
    }
});

tl.to("#mugScene",{
  display: "none",
  scrollTrigger:{
    trigger: "#mugScene",
    start:"45% top",
    end: "46% top",
    scrub: .5,
    immediateRender: false,     
}
});
    }, []);

    return (
      <group {...props} dispose={null}>
        <group rotation={[0.118, 3.4, 0.016]} ref={ref}>
          <group position={[-0.232, 0, -1.811]} scale={2.54}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['beer_02_-_Default_0_1'].geometry}
              material={materials['Material.001']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['beer_02_-_Default_0_2'].geometry}
              material={materials['Material.002']}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.mousse_lambert2_0.geometry}
            material={materials.lambert2}
            position={[0, 6.089, 0]}
            rotation={[0, -0.365, 0]}
            scale={[2.841, 1, 2.841]}
          />
        </group>
      </group>
    )
}

useGLTF.preload('./assets/mug.glb')

export default Mug;