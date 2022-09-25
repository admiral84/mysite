import "./app.scss";
import React from "react";
import { Topbar } from "./components/topbar/Topbar";
import { About } from "./components/about/About";
import { Works } from "./components/works/Works";
import { Teaching } from "./components/teaching/Teaching.jsx";
import { Contact } from "./components/contact/Contact";
import { Menu } from "./components/menu/Menu";
import { useState } from "react";
import { Intro } from "./components/intro/Intro";
import { Social } from "./socialIcons/Social";
import { Mail } from "./socialIcons/Mail";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro />

        <About />
        <Works />
        <Teaching />
        <Contact />
      </div>
      <Social />
      <Mail />
    </div>
  );
}

export default App;
