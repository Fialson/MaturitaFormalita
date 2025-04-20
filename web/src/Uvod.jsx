import React, { lazy } from "react";
import gsap from "gsap";
import { useLayoutEffect } from "react";

import MugScene from "./Komponenty/MugScene.jsx";
const Footer = lazy(() => import("./Komponenty/Footer.jsx"));
const Navbar = lazy(() => import("./Komponenty/Navbar.jsx"));

import "./css/Uvod.css";

function Uvod() {
  // vytvarime timeLine v js knihovne gsap, slouzi k animacim, my ji vyuzivame k animacim na zaklade scrollu
  const tl = gsap.timeline();
  //useLayoutEffect react hook, ktery nam pomaha pracovat s externim systemem, např: gsap
  useLayoutEffect(() => {
    tl.to("#main", {
      opacity: 1,
      scrollTrigger: {
        trigger: "#mugScene",
        start: "40% top",
        end: "45% top",
        scrub: 0.5,
        immediateRender: false,
      },
    });
    tl.to("#maska", {
      opacity: 0,
      scrollTrigger: {
        trigger: "#mugScene",
        start: "38% top",
        end: "40% top",
        scrub: 0.5,
        immediateRender: false,
      },
    });
  }, []);

  return (
    <>
      <Navbar />
      <div className="relativeFull">
        <MugScene />
        <main id="main">
          <img src="/hospody/pena.webp" alt="obrazek pěny" id="pena" />
          {/* sekce idea je o tom proč tento projekt vznikl a kdo vlastně jsme */}
          <article id="idea" className="padding">
            <section>
              <h3>Tour de Beer</h3>
              <p>Tour de Beer je jednodenní putování po hospodách. Navštívíte 12 hospod a v každé hospodě musíte vypít alespoň 1 pivo. Tour de Beer jsme sami absolvovali předem, jako testovací subjekty. </p>
            </section>
            <section>
              <h3>Proč?</h3>
              <p>Jsme 3 kamarádi, kteří sdílí vášeň pro pivo. Z tohoto důvodu jsme rozhodli založit tento projekt, abychom sezvali všechny milovníky piva z Česka. Pokud bude mít projekt úspěch, tak plánujeme Tour de Beer rozšířit do dalších měst na Vysočině, a dále i do celé ČR.</p>
            </section>
          </article>
          {/* do sekce map vkládáme google mapu (při manupulaci s ní, oproti mapy.cz, musí být zmačknuto ctrl, což umožnuje ji udělat větší) s nejvýhodnější trasou od vlakového nádraží v Havlíčkově Brodě, přes všechny hospody až k té poslední */}
          <article id="map">
            <h2 className="padding">Trasa</h2>
            <iframe src="https://www.google.com/maps/embed?pb=!1m76!1m12!1m3!1d5052.311644583507!2d15.57642757411129!3d49.60623658843658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m61!3e2!4m5!1s0x470d00c0929a832d%3A0xdf554e5ba7a36b77!2sHostinec%20U%20KROUP%C5%AE!3m2!1d49.6008315!2d15.5857645!4m5!1s0x470d0095131de825%3A0x1fb532b2b1b9ec40!2sHostinec%20U%20Zlod%C4%9Bjky!3m2!1d49.605235699999994!2d15.579686299999999!4m5!1s0x470d0095b5f24495%3A0xdc6b9dd7b48af586!2sPiombino!3m2!1d49.6074799!2d15.5793938!4m5!1s0x470d0095b3337fa1%3A0x6c2447ca3c53ad0!2sRebel%20Na%20Rynku!3m2!1d49.6070681!2d15.578631999999999!4m5!1s0x470d00946ef8de55%3A0xb4bbb0f6729f7ed2!2zxb1PTMONSyBiYXI!3m2!1d49.6073011!2d15.5763517!4m5!1s0x470d00945cd7889d%3A0x473309952d326115!2sRestaurace%20Kozlovna%20Smetanovo%20n%C3%A1m%C4%9Bst%C3%AD!3m2!1d49.6069963!2d15.5772259!4m5!1s0x470d0094831b2825%3A0x7d082f682be392b4!2sRestaurace%20Fabrika%20pizzerie!3m2!1d49.6061839!2d15.574402899999999!4m5!1s0x470d0096c81d558b%3A0xec1025b487b7cc40!2sPivovarsk%C3%BD%20hostinec%20Rebel!3m2!1d49.6102181!2d15.577886399999999!4m5!1s0x470d00974e6c85a7%3A0x7f50a097d9983d99!2sPivnice%20U%20Hn%C3%A1ta!3m2!1d49.6133356!2d15.5791373!4m5!1s0x470d00bc559ffa2b%3A0x356899ca4753c809!2zUmVzdGF1cmFjZSBOYWdhbm8gOTgsIEJyYXTFmcOta8WvLCBIYXZsw63EjWvFr3YgQnJvZCAx!3m2!1d49.609914599999996!2d15.5881081!5e0!3m2!1scs!2scz!4v1744697237836!5m2!1scs!2scz" loading="lazy"></iframe>
          </article>
          <article id="team" className="padding">
            <h2>Tak to jsme my</h2>
            <section className="flex-between">
              <div className="teamText">
                <h4>Adam "Manažer" Petr</h4>
                <p>Adam je hroznej ožrala hulič, taky se to odráží na kvalitě jeho práce (je z nás prostě nejlepší).</p>
              </div>
              <div className="teamImg">
                <img src="/hospody/Adam.webp" alt="grafik týmu Adam"></img>
              </div>
            </section>
            <section className="flex-between order-reverse">
              <div className="teamImg">
                <img src="/hospody/Vojta.webp" alt="grafit týmu Vojta"></img>
              </div>
              <div className="teamText">
                <h4>Vojtěch "Grafik" Procházka</h4>
                <p>Když se někde něco děje, je u toho první – a většinou i poslední. Deset piv? Startovní čára. Když zrovna něco netvoří v Illustratoru, najdeš ho na hřišti, kde běhá za balónem jako kdyby šlo o život. Design a fotbal jsou jeho dva světy – a pivo? To k tomu patří stejně neodmyslitelně jako gól k zápasu. Vítězství se slaví, prohry se zapíjejí. Hlavně, že se hraje a pije!</p>
              </div>
            </section>
            <section className="flex-between">
              <div className="teamText">
                <h4>Matěj "Programátor" Fiala</h4>
                <p>Matěj je velký milovník vesnického fotbalu, ke kterému neodmyslitelně patří pivo. Právě díky fotbalu si pivo zamiloval. Každý víkend se musí alespoň jednou vydat na výpravu do hospody na pár pivek (většinou 4), aby mohl druhý den na hřišti alespoň stát. Pokud druhý den nehraje, tak pije pivo, hraje karty, šipky a stolní fotbálek až do ranních hodin. Samozřejmě nesmí zanedbávat ani svoje programovací skills, proto se snaží programovat alespoň 3 hodiny týdně mimo školu.</p>
              </div>
              <div className="teamImg">
                <img src="/hospody/Matej.webp" alt="programátor týmu Matěj"></img>
              </div>
            </section>
          </article>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default Uvod;
