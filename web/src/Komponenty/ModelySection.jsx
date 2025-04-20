import React, { useRef, Suspense  } from 'react'
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Canvas } from '@react-three/fiber';
import { useFrame } from '@react-three/fiber';
import { useMediaQuery } from 'react-responsive';

import Loader from './Loader';


// componenta vytvořená pro přehlednost a automatizaci, zadávám do ní cestu modelu, název modelu, text k němu, jak má být ten model velký a pozici kde má ležet
function ModelySection({ path, nazev, text, id, position = [0,0,0], scale = {1:Number}, logoPath}){
  
  function Model({ path, position, scale }) {
  const modelRef = useRef();
  const model = useLoader(GLTFLoader, path);

  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.0015;
    }
  });

  return <primitive ref={modelRef} object={model.scene} position={position} scale={scale} />;
}

  const isSmall = useMediaQuery({maxWidth: 1100 });

  
  return (
    <section id={"section" + id} className="section padding">
        <Canvas>
        <ambientLight/>
        {/*primitive umožňuje do reactu vložit three.js objekt(mesh, kameru, světlo, scénu,...)*/}
        <Suspense fallback={<Loader/>}>
          <Model path={path} position={position} scale={scale} />
        </Suspense>
    </Canvas>
    <div className='modelyText'>
    <h3>{nazev}</h3>
    <p>{text}</p> 
    <img src={isSmall ? logoPath : ""} alt="" />
    </div>
    </section>
  )
}

export default ModelySection