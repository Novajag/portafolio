import React, { useEffect, useState } from "react";
import "./Nav.css";
import Button from "../buttons/Button";
import home from "../../assets/iconNav/home.png";
import user from "../../assets/iconNav/user.png";
import maletin from "../../assets/iconNav/maletin.png";
import tools from "../../assets/iconNav/tools.png";
import email from "../../assets/iconNav/email.png";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const irASeccion = (id) => {
    const seccion = document.getElementById(id);

    if (seccion) {
      seccion.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <nav className={`nav nav-1 ${scrolled ? "scrolled" : ""}`}>
        <ul>
          <li>
            <Button
              text="inicio"
              type="btn-3 nav-btn"
              onClick={() => irASeccion("home")}
            />
          </li>

          <li>
            <Button
              text="sobre mí"
              type="btn-3 nav-btn"
              onClick={() => irASeccion("about")}
            />
          </li>

          <li>
            <Button
              text="proyectos"
              type="btn-3 nav-btn"
              onClick={() => irASeccion("projects")}
            />
          </li>

          <li>
            <Button
              text="habilidades"
              type="btn-3 nav-btn"
              onClick={() => irASeccion("tools")}
            />
          </li>

          <li>
            <Button
              text="hablemos"
              type="btn-2 nav-btn"
              onClick={() => irASeccion("contact")}
            />
          </li>
        </ul>
      </nav>
      <nav className={`nav nav-2 ${scrolled ? "scrolled" : ""}`}>
        <ul>
          <li>
            <Button type="btn-3 nav-btn" onClick={() => irASeccion("home")}>
              <img className="icon-nav" src={home} />
            </Button>
          </li>

          <li>
            <Button type="btn-3 nav-btn" onClick={() => irASeccion("about")}>
              <img className="icon-nav" src={user} />
            </Button>
          </li>

          <li>
            <Button type="btn-3 nav-btn" onClick={() => irASeccion("projects")}>
              <img className="icon-nav" src={maletin} />
            </Button>
          </li>

          <li>
            <Button type="btn-3 nav-btn" onClick={() => irASeccion("tools")}>
              <img className="icon-nav" src={tools} />
            </Button>
          </li>

          <li>
            <Button type="btn-3 nav-btn" onClick={() => irASeccion("contact")}>
              <img className="icon-nav" src={email} />
            </Button>
          </li>
        </ul>
      </nav>
    </>
  );
}
