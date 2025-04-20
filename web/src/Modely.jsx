import React, { useRef, useEffect, Suspense, lazy } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useMediaQuery } from "react-responsive";

import "./css/Modely.css";

import Navbar from "./Komponenty/Navbar.jsx";
import ModelySection from "./Komponenty/ModelySection.jsx";

function Modely() {
  const isMobile = useMediaQuery({ maxWidth: 1100 });

  const sectionsRef = useRef([]);
  const motionObject = useRef();
  // gsap = js knihovna pro animace, vytváříme si "vlastní" scrollTrigger aby nám vyhovoval, a je nastaven na všechny html elemnty s class section
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    const section = sectionsRef.current.querySelectorAll(".section");
    section.forEach((section, index) => {
      ScrollTrigger.create({
        trigger: section,
        start: "top center",
        end: "bottom center",
        onEnter: () => changeTrigger(section, index),
        onEnterBack: () => changeTrigger(section, index),
      });
    });
  }, []);

  const imgSrc = [{ url: "/hospody/loga/cervenyHradek.webp" }, { url: "/hospody/loga/uHnata.webp" }, { url: "/hospody/loga/uZlodejky.webp" }, { url: "/hospody/loga/hribek.webp" }, { url: "/hospody/loga/zolik.webp" }, { url: "/hospody/loga/fabrika.webp" }, { url: "/hospody/loga/nagano.webp" }, { url: "/hospody/loga/piombino.webp" }, { url: "/hospody/loga/kozlovna.webp" }, { url: "/hospody/loga/uKroupu.webp" }, { url: "/hospody/loga/rebelHostinec.webp" }, { url: "/hospody/loga/rebelNaRymku.webp" }];
  // gsap v tomto případě používáme k určení bodů na stránce a po proscrollování přes tyto body spouštíme animaci, hodnota right, posouvá bod z leva do prava
  function changeTrigger(newTrigger, index) {
    gsap.to(motionObject.current, {
      delay: 0.15,
      duration: 0.5,
      right: index % 2 === 1 ? "5%" : "85%",
      "--src": `url(${imgSrc[index].url})`,
      ease: "power2.out",
      scrollTrigger: {
        trigger: newTrigger,
        start: "top 60%",
        end: "bottom 60%",
      },
    });
  }

  return (
    <>
      <Navbar />
      <div id="motionObject" ref={motionObject}></div>
      <article ref={sectionsRef} id="modely">
        {/* modely section je componenta vytvořená pro přehlednost a automatizaci, zadávám do ní cestu modelu, název modelu, text k němu, jak má být ten model velký a pozici kde má ležet */}
        <ModelySection path="/hospody/assets/CervenyHradek.glb" nazev={"Restaurace Červený Hrádek"} text={"Restaurace Červený Hrádek nabízí příjemné posezení s minutkovou kuchyní a točeným pivem. Je ideálním místem pro pořádání firemních i soukromých akcí, s možností využití Wi-Fi připojení. "} id={1} scale={isMobile ? 1.2 : 0.8} position={[0, -1, 0]} logoPath={imgSrc[0].url} />

        <ModelySection path="/hospody/assets/UHnata.glb" nazev={"Pivnice U Hnáta"} text={"​Pivnice U Hnáta v Havlíčkově Brodě je známá svou jedinečnou atmosférou a historií. Interiér zdobí kostlivec a unikátní sbírka hasičských trofejí. Tradičním zvykem je, že štamgasti dávají přednost stání u baru před sezením."} id={2} scale={isMobile ? 0.4 : 0.3} position={[0, -0.7, 0]} logoPath={imgSrc[1].url} />

        <ModelySection path="/hospody/assets/UZlodejky.glb" nazev={"Hostinec U Zlodějky"} text={"Hostinec U Zlodějky v Havlíčkově Brodě nabízí tradiční českou kuchyni a piva jako Kozel, Plzeň a Gambrinus. Restaurace má kapacitu 90 míst, letní zahrádku pro 30 hostů a Wi-Fi připojení."} id={3} scale={isMobile ? .17 : 0.15} position={[0, -0.5, 0]} logoPath={imgSrc[2].url} />

        <ModelySection path="/hospody/assets/Hribek.glb" nazev={"Club Bonver"} text={"V Clubu Bonver, přezdívaném Hříbek, si hosté mohou vychutnat širokou nabídku alkoholických i nealkoholických nápojů v pohodlném prostředí."} id={4} scale={isMobile ? .52 : 0.45} position={[0, -0.75, 0]} logoPath={imgSrc[3].url} />

        <ModelySection path="/hospody/assets/zolik.glb" nazev={"Žolík bar"} text={"Bar Žolík je známý svými pravidelnými akcemi, včetně populární Žolík Open Air Party. Žolík je místem, kde se potkávají mladí lidé, přátelé i náhodní kolemjdoucí, aby si užili hudbu, tanec a pohodový večer."} id={5} scale={isMobile ? 0.85 : 0.8} position={[0, -0.5, 0]} logoPath={imgSrc[4].url} />

        <ModelySection path="/hospody/assets/fabrika.glb" nazev={"Restaurace Fabrika"} text={"Restaurace Fabrika nabízí italskou kuchyni připravovanou z kvalitních surovin bez chemie. Specializuje se na pizzu z pece na dřevo, těstoviny, steaky a burgery. Součástí restaurace je také bowling BRUNSWICK."} id={6} scale={isMobile ? 0.38 : 0.3} position={[0, -0.4, 0]} logoPath={imgSrc[5].url} />

        <ModelySection path="/hospody/assets/Nagano.glb" nazev={"Restaurace Nagano"} text={"Restaurace Nagano, pojmenovaná na počest českého hokejového triumfu v roce 1998, se nachází v Havlíčkově Brodě. Nabízí příjemné posezení a široký výběr tradičních českých jídel. Je oblíbeným místem pro setkání s přáteli i rodinné oslavy. Restaurace je známá svou přátelskou atmosférou a kvalitní obsluhou."} id={7} scale={isMobile ? 0.2 : 0.14} position={[0, -0.35, 0]} logoPath={imgSrc[6].url} />

        <ModelySection path="/hospody/assets/piombino.glb" nazev={"Restaurace Piombino"} text={"Restaurace Piombino nabízí kombinaci italské a české kuchyně. V nabídce najdete pizzy, těstoviny, saláty a dezerty. Restaurace poskytuje příjemné prostředí s výhledem na historickou část města a nabízí také rozvoz jídel po Havlíčkově Brodě."} id={8} scale={isMobile ? 0.08 : 0.05} position={[0, -0.8, 0]} logoPath={imgSrc[7].url} />

        <ModelySection path="./assets/Kozlovna.glb" nazev={"Restaurace Kozlovna"} text={"Kozlovna v Havlíčkově Brodě je tradiční pivnice nabízející tankové pivo Kozel 11° a Plzeňský Prazdroj. Restaurace se pyšní originálním interiérem s dřevěnými a kovovými prvky, včetně sochy kozla a stolů s kovovými kopýtky. Nabízí poctivou českou kuchyni připravovanou z čerstvých surovin bez použití dochucovadel a umělých přísad."} id={9} scale={isMobile ? .32 : 0.25} position={[0, -0.3, 0]} logoPath={imgSrc[8].url} />

        <ModelySection path="/hospody/assets/UKroupu.glb" nazev={"Hostinec U Kroupů"} text={"Hostinec U Kroupů je tradiční česká restaurace v Havlíčkově Brodě, známá svou domácí kuchyní a příjemnou atmosférou. Nabízí široký výběr jídel a nápojů, včetně denního menu. Restaurace je vhodná pro rodinné oslavy, firemní akce i posezení s přáteli. K dispozici je také ubytování pro hosty."} id={10} scale={isMobile ? .28 : 0.2} position={[0, -0.75, 0]} logoPath={imgSrc[9].url} />

        <ModelySection path="/hospody/assets/rebel.glb" nazev={"Pivovarský hostinec Rebel"} text={"Pivovarský hostinec Rebel se nachází přímo v areálu Měšťanského pivovaru v Havlíčkově Brodě. Nabízí poctivou domácí i zahraniční kuchyni, včetně výborných minutek a hotových jídel. K pití si můžete vychutnat správně ošetřené a čepované havlíčkobrodské pivo Rebel. Restaurace je ideálním místem pro pořádání firemních akcí, svateb, oslav a dalších."} id={11} scale={isMobile ? 1.2 : 0.75} position={[0, -0.9, 0]} logoPath={imgSrc[10].url} />

        <ModelySection path="/hospody/assets/naRynku.glb" nazev={"Rebel na Rynku"} text={"Rebel Na Rynku je restaurace situovaná přímo na Havlíčkově náměstí v Havlíčkově Brodě. Nabízí výborné minutky a hotová jídla z domácí i zahraniční kuchyně, včetně sezonních a krajových specialit. Restaurace má kapacitu pro 70 hostů a v letních měsících je k dispozici příjemné posezení na zahrádce s obsluhou. "} id={12} scale={isMobile ? .45 : 0.35} position={[0, -1.2, 0]} logoPath={imgSrc[11].url} />
      </article>
    </>
  );
}

export default Modely;
