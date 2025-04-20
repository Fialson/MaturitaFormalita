import React from "react";
import { Canvas } from "@react-three/fiber";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useMediaQuery } from "react-responsive";

import Mug from "../Modely/Mug.jsx";

gsap.registerPlugin(ScrollTrigger);

//componenta vytvorena pro prehlednost a prijemnejsi praci
function MugScene() {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isDesktop = useMediaQuery({ minWidth: 767 });

  return (
    <article id="mugScene">
      <div id="maska"></div>
      <h1 id="mugSceneText" className="rampartOne">
        Tour de Beer
      </h1>
      <section id="mug">
        <Canvas camera={{ position: [0, 1.5, 4] }}>
          <directionalLight position={[0, 3, 3]} intensity={6} />
          <Mug position={[0, 0.5, 0]} scale={isMobile ? 0.15 : isDesktop ? 0.2 : 1} />
        </Canvas>
      </section>
    </article>
  );
}

export default MugScene;
