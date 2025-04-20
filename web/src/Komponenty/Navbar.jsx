import "../css/Navbar.css";
import {useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router";

function Navbar() {
  // useState pro zmeny stavu otvirani a zavirani nav
  const [navState, setNavState] = useState(false);

  const location = useLocation();
  // pro url cestu /galerie nastavujeme aby nebyl navbar vidět
  useEffect(() => {
    const linkPositions = {
      "/galerie": "-100%",
    };

    const currentPosition = linkPositions[location.pathname] || "0";
    document.documentElement.style.setProperty('--topPosition', currentPosition);
  }, [location]);

  return (
    <nav id="navbar">
      <div className="row">
      <NavLink to="/"><img src="/hospody/logo.webp" alt="logo" id="logo"/></NavLink>
      {/* hamburger je videt meni hodnotu navState aby nám otevrel/zavrel navigaci na malych zarizenich */}
      <div id="hamburger" className="hamburger" onClick={() => {setNavState(!navState)}}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      </div>
      <div id="links" 
      // kontrolujeme jestli je navState true => ukaze navbar na malych zarizenich, jinak ho zavre
      className={navState ? "show" : ""}
      >
        <NavLink to="/" 
        onClick={() => {setNavState(false), window.scrollTo(0,0)}}
        // nastavujeme jinou barvu pokud je link aktivní, isActive je součástí NavLink
        style={({ isActive }) => ({ color: isActive ? 'black' : 'rgba(0,0,0, .5)' })}
        >Úvod</NavLink>
        <NavLink to="/galerie" 
        onClick={() => {setNavState(false), window.scrollTo(0,0)}}
        style={({ isActive }) => ({ color: isActive ? 'black' : 'rgba(0,0,0, .5)' })}
        >Galerie</NavLink>
        <NavLink to="/modely" 
        onClick={() => {setNavState(false), window.scrollTo(0,0)}}
        style={({ isActive }) => ({ color: isActive ? 'black' : 'rgba(0,0,0, .5)' })}
        >Modely</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
