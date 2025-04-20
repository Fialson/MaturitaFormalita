import { Canvas, useFrame } from "@react-three/fiber";
import { PerspectiveCamera, OrbitControls } from "@react-three/drei";
import { useRef, lazy, Suspense } from "react";
import * as THREE from "three";

const CervenyHradek = lazy(() => import("./Modely/CervenyHradek.jsx"));
const UHnata = lazy(() => import("./Modely/UHnata.jsx"));
const UZlodejky = lazy(() => import("./Modely/UZlodejky.jsx"));
const Hribek = lazy(() => import("./Modely/Hribek.jsx"));
const Kozlovna = lazy(() => import("./Modely/Kozlovna.jsx"));
const Nagano = lazy(() => import("./Modely/Nagano.jsx"));
const Fabrika = lazy(() => import("./Modely/Fabrika.jsx"));
const Piombino = lazy(() => import("./Modely/Piombino.jsx"));
const Zolik = lazy(() => import("./Modely/Zolik.jsx"));
const UKroupu = lazy(() => import("./Modely/UKroupu.jsx"));
const Rebel = lazy(() => import("./Modely/Rebel.jsx"));
const NaRynku = lazy(() => import("./Modely/NaRynku.jsx"));

import Navbar from "./Komponenty/Navbar.jsx";
import Loader from "./Komponenty/Loader.jsx";

import "./css/Galerie.css";

function Galerie() {
  // Definice počátečních pozic a opakujících se parametrá v pozicích
  const pozice = {
    targetPocatecni: [0, 0, 0],
    zoom: 1,
    zoomObjekt: 2,
    // pozice dle puvodni polohy kamery
    // prezZad = prostredni vepredu a vzadu => prava a leva prostredni jsou akorat prohozene x a z
    predZad: { x: 0, z: 24 },
    strany: 21,
    // strany = x nebo y souradnice modelu, ty co jsou pred a za kamerou to maji jako z, vpravo a vlevo jako x
    stranyPredZadX: 13,
    // stranyPravLevZ = z souradnice modelu, co jsou vpravo a vlevo od kamery
    stranyPravLevZ: 11,
  };

  // Souřadnice jednotlivých modelů
  const modely = {
    y: -2,
    yTarget: -1,
    scale: 0.75,
    // model1 je model vlevo pred kamerou v puvodni poloze model 2 je ten doprava od nej tzn. naprostredku atd.
    model1: { x: -pozice.stranyPredZadX, z: -pozice.strany },
    model2: { x: pozice.predZad.x, z: -pozice.predZad.z },
    model3: { x: pozice.stranyPredZadX, z: -pozice.strany },
    model4: { x: pozice.strany - 1, z: -pozice.stranyPravLevZ - 2 },
    model5: { x: pozice.predZad.z + 2, z: pozice.predZad.x - 1 },
    model6: { x: pozice.strany, z: pozice.stranyPravLevZ + 0.5 },
    model7: { x: pozice.stranyPredZadX, z: pozice.strany },
    model8: { x: pozice.predZad.x, z: pozice.predZad.z },
    model9: { x: -pozice.stranyPredZadX + 1, z: pozice.strany + 1 },
    model10: { x: -pozice.strany, z: pozice.stranyPravLevZ },
    model11: { x: -pozice.predZad.z, z: pozice.predZad.x },
    model12: { x: -pozice.strany, z: -pozice.stranyPravLevZ },
  };

  // Použití useRef pro udržení hodnot mezi renderovacími cykly
  const targetRef = useRef(pozice.targetPocatecni);
  const menuStateRef = useRef(true);

  // useRef pro vsechny modely, ktere slouzi pro nasledne schovavani modelu
  const controlsRef = useRef();
  const cervenyHradekRef = useRef();
  const uHnataRef = useRef();
  const uZlodejkyRef = useRef();
  const hribekRef = useRef();
  const kozlovnaRef = useRef();
  const fabrikaRef = useRef();
  const naganoRef = useRef();
  const piombinoRef = useRef();
  const zolikRef = useRef();
  const uKroupuRef = useRef();
  const rebelRef = useRef();
  const naRynkuRef = useRef();
  // fuknce pro schovavani modelu pri vyberu jednoho pres carousel menu, popripade zobrazeni vsech pro pocatecni pozici(input = "all")
  function showOnlyOneModel(refToShow) {
    const allRefs = [cervenyHradekRef, uHnataRef, uZlodejkyRef, hribekRef, kozlovnaRef, fabrikaRef, naganoRef, piombinoRef, zolikRef, uKroupuRef, rebelRef, naRynkuRef];

    if (refToShow == "all") {
      allRefs.forEach((ref) => {
        if (ref.current) {
          ref.current.visible = true;
        }
      });
    } else {
      allRefs.forEach((ref) => {
        if (ref.current) {
          ref.current.visible = ref === refToShow;
        }
      });
    }
  }

  // Funkce pro vytvoření plynulých orbit controls = plynulé změna pozice kamery
  function SmoothOrbitControls() {
    useFrame(() => {
      if (controlsRef.current) {
        controlsRef.current.target.lerp(new THREE.Vector3(...targetRef.current), 0.02);
      }
    });

    return (
      <OrbitControls
        ref={controlsRef}
        rotateSpeed={0.25}
        // zabraňuje kameře se otáčet směrem vzhůru, aby se nemohli uživatelé dívat na spodek modelu, stejně tam není nic k vidění, a nestratili pojem o tom kam kamera míří
        // otáčení směrem dolů jsme nechali, příjemnější pro prohlížení modelů
        maxPolarAngle={Math.PI / 1.9}
        maxDistance={15}
      />
    );
  }

  // Funkce pro změnu pozice targetu orbit conntrols(okolo kterého bodu se bude otáčet kamera), změna jakou vzdálenost můžeme zoomnout k objektu
  function moveTo(x, y, z, minDistance) {
    targetRef.current = [x, y, z];
    controlsRef.current.minDistance = minDistance;
  }
  // proměnná pro práci s rootem, pro změnu hodnoty css promenných
  const root = document.documentElement;

  //Funkce na změnu hodnoty css variables, slouží pro otevírání a zavírání carousel menu(řádek 110)
  function carouselMenu(menuPosition, btnDisplay) {
    root.style.setProperty("--menuPosition", menuPosition);
    if (btnDisplay == true) root.style.setProperty("--menuBtnDisplay", "block");
    else root.style.setProperty("--menuBtnDisplay", "none");
  }

  //Slouží pro otvírání a schovávání navbaru(řádek 101), podmínka nám ošetruje když se kliknutý odkaz rovná adrese na které jsme, tak se hamburger objeví a nav schová
  function navbarPosition(position, display) {
    root.style.setProperty("--topPosition", position);
    root.style.setProperty("--hamburgerDisplay", display);
  }

  // slouží aby se na mobilu nezavřel navbar při kliknutí na hamburger menu v navbaru
  function navbarPosition2(position) {
    if (position.tagName === "DIV") {
      root.style.setProperty("--topPosition", "0%");
      root.style.setProperty("--hamburgerDisplay", "none");
    } else {
      root.style.setProperty("--topPosition", "-100%");
      root.style.setProperty("--hamburgerDisplay", "block");
    }
  }

  return (
    <>
      {/* Tlačítko pro zobrazení nav, aby nám navbar nepřekážel na stránce */}
      <div
        id="hamburgerGalerie"
        className={"hamburger"}
        onClick={() => {
          navbarPosition("0%", "none");
        }}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div
        onClick={(e) => {
          navbarPosition2(e.target);
        }}>
        <Navbar />
      </div>
      {/* Tlačítko pro zobrazení carousel menu, které slouží pro změnu otáčecího bodu */}
      <span
        id="btnCarouselMenu"
        className={"d-block"}
        onClick={() => {
          menuStateRef.current = !menuStateRef.current;
          carouselMenu("0%", false);
        }}></span>
      <article className="w-100-end-center">
        {/* Menu pro výběr cílové pozice */}
        <section className={"carousel-menu"}>
          <p
            onClick={() => {
              moveTo(...pozice.targetPocatecni, 1);
              menuStateRef.current = !menuStateRef.current;
              carouselMenu("-100%", true);
              showOnlyOneModel("all");
            }}>
            Počáteční pozice
          </p>
          <p
            onClick={() => {
              moveTo(modely.model1.x, modely.yTarget, modely.model1.z, 5);
              menuStateRef.current = !menuStateRef.current;
              carouselMenu("-100%", true);
              showOnlyOneModel(cervenyHradekRef);
            }}>
            Červený Hrádek
          </p>
          <p
            onClick={() => {
              moveTo(modely.model2.x, modely.yTarget, modely.model2.z, 4);
              menuStateRef.current = !menuStateRef.current;
              carouselMenu("-100%", true);
              showOnlyOneModel(uHnataRef);
            }}>
            U Hnáta
          </p>
          <p
            onClick={() => {
              moveTo(modely.model3.x, modely.yTarget, modely.model3.z, 8);
              menuStateRef.current = !menuStateRef.current;
              carouselMenu("-100%", true);
              showOnlyOneModel(uZlodejkyRef);
            }}>
            U Zlodějky
          </p>
          <p
            onClick={() => {
              moveTo(modely.model4.x, modely.yTarget, modely.model4.z, 6);
              menuStateRef.current = !menuStateRef.current;
              carouselMenu("-100%", true);
              showOnlyOneModel(hribekRef);
            }}>
            Hříbek
          </p>
          <p
            onClick={() => {
              moveTo(modely.model5.x, modely.yTarget, modely.model5.z, 8);
              menuStateRef.current = !menuStateRef.current;
              carouselMenu("-100%", true);
              showOnlyOneModel(kozlovnaRef);
            }}>
            Kozlovna
          </p>
          <p
            onClick={() => {
              moveTo(modely.model6.x, modely.yTarget, modely.model6.z, 6);
              menuStateRef.current = !menuStateRef.current;
              carouselMenu("-100%", true);
              showOnlyOneModel(fabrikaRef);
            }}>
            Fabrika
          </p>
          <p
            onClick={() => {
              moveTo(modely.model7.x, modely.yTarget, modely.model7.z, 8);
              menuStateRef.current = !menuStateRef.current;
              carouselMenu("-100%", true);
              showOnlyOneModel(naganoRef);
            }}>
            Nagano
          </p>
          <p
            onClick={() => {
              moveTo(modely.model8.x, modely.yTarget, modely.model8.z, 7);
              menuStateRef.current = !menuStateRef.current;
              carouselMenu("-100%", true);
              showOnlyOneModel(piombinoRef);
            }}>
            Piombino
          </p>
          <p
            onClick={() => {
              moveTo(modely.model9.x, modely.yTarget, modely.model9.z, 10);
              menuStateRef.current = !menuStateRef.current;
              carouselMenu("-100%", true);
              showOnlyOneModel(zolikRef);
            }}>
            Zolik
          </p>
          <p
            onClick={() => {
              moveTo(modely.model10.x, modely.yTarget, modely.model10.z, 7);
              menuStateRef.current = !menuStateRef.current;
              carouselMenu("-100%", true);
              showOnlyOneModel(uKroupuRef);
            }}>
            U Kroupu
          </p>
          <p
            onClick={() => {
              moveTo(modely.model11.x, modely.yTarget, modely.model11.z, 8);
              menuStateRef.current = !menuStateRef.current;
              carouselMenu("-100%", true);
              showOnlyOneModel(rebelRef);
            }}>
            Rebel
          </p>
          <p
            onClick={() => {
              moveTo(modely.model12.x, modely.yTarget, modely.model12.z, 6);
              menuStateRef.current = !menuStateRef.current;
              carouselMenu("-100%", true);
              showOnlyOneModel(naRynkuRef);
            }}>
            Rebel na Rynku
          </p>
        </section>
      </article>
      {/* Plátno pro vykreslení 3D scény, při kliknutí na něj se nám schová navbar i carousel menu */}
      <Canvas
        id="canvas"
        onClick={() => {
          carouselMenu("-100%", true);
          navbarPosition("-100%", "block");
        }}>
        <ambientLight intensity={1.25} color="#FDFBD3" />
        <SmoothOrbitControls makeDefault />

        <Suspense fallback={<Loader />}>
          <CervenyHradek position={[modely.model1.x, modely.y - 0.4, modely.model1.z]} scale={2.2} rotation={[0, Math.PI / 2 + Math.PI / 6, 0]} ref={cervenyHradekRef} />

          <UHnata position={[modely.model2.x, modely.y - 1, modely.model2.z]} scale={0.7} rotation={[0, Math.PI / 2, 0]} ref={uHnataRef} />

          <UZlodejky position={[modely.model3.x, modely.y - 0.5, modely.model3.z]} scale={0.5} rotation={[0, -Math.PI / 6, 0]} ref={uZlodejkyRef} />

          <Hribek position={[modely.model4.x, modely.y - 0.5, modely.model4.z]} scale={1} rotation={[0, -Math.PI / 1.8, 0]} ref={hribekRef} />

          <Zolik position={[modely.model5.x, modely.y, modely.model5.z]} scale={2.5} rotation={[0, Math.PI / 10, 0]} ref={zolikRef} />

          <Fabrika position={[modely.model6.x, modely.y, modely.model6.z]} scale={modely.scale} rotation={[0, -Math.PI / 1.5, 0]} ref={fabrikaRef} />

          <Nagano position={[modely.model7.x, modely.y, modely.model7.z]} scale={0.45} rotation={[0, -Math.PI / 7, 0]} ref={naganoRef} />

          <Piombino position={[modely.model8.x, modely.y, modely.model8.z]} scale={0.15} rotation={[0, -Math.PI, 0]} ref={piombinoRef} />

          <Kozlovna position={[modely.model9.x, modely.y - 0.25, modely.model9.z]} scale={0.9} rotation={[0, Math.PI / 1.2, 0]} ref={kozlovnaRef} />

          <UKroupu position={[modely.model10.x, modely.y - 0.25, modely.model10.z]} scale={0.5} rotation={[0, Math.PI + Math.PI / 7, 0]} ref={uKroupuRef} />

          <Rebel position={[modely.model11.x, modely.y - 0.4, modely.model11.z]} scale={1.7} rotation={[0, Math.PI / 2, 0]} ref={rebelRef} />

          <NaRynku position={[modely.model12.x, modely.y - 0.4, modely.model12.z]} scale={0.8} rotation={[0, Math.PI / 3, 0]} ref={naRynkuRef} />
        </Suspense>
      </Canvas>
    </>
  );
}

export default Galerie;
