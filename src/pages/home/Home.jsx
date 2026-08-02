import React, { useEffect } from "react";
import "./Home.css";
import Button from "../../components/buttons/Button";
import Nav from "../../components/nav/Nav";
import Card from "../../components/card/Card";
import CardP from "../../components/cardP/CardP";
import global from "../../assets/global.png";
import user from "../../assets/user.jpeg";
import exp from "../../assets/icon/exp.png";
import ubicacion from "../../assets/icon/ubicacion.png";
import maletin from "../../assets/icon/maletin.png";

import dev from "../../assets/icon/dev.png";
import react from "../../assets/icon/react.png";
import responsivo from "../../assets/icon/responsivo.png";
import mantenimiento from "../../assets/icon/mantenimiento.png";

import alucar1 from "../../assets/project/alucar1.png";
import alucar2 from "../../assets/project/alucar2.png";

import uniap1 from "../../assets/uniapp/unip1.jpg";
import uniap2 from "../../assets/uniapp/unip2.jpg";
import uniap3 from "../../assets/uniapp/unip3.jpg";
import uniap4 from "../../assets/uniapp/unip4.jpg";
import uniap5 from "../../assets/uniapp/unip5.jpg";
import uniap6 from "../../assets/uniapp/unip6.jpg";
import uniap7 from "../../assets/uniapp/unip7.jpg";
import uniap8 from "../../assets/uniapp/unip8.jpg";
import uniap9 from "../../assets/uniapp/unip9.jpg";
import uniap10 from "../../assets/uniapp/unip10.jpg";
import uniap11 from "../../assets/uniapp/unip11.jpg";
import uniap12 from "../../assets/uniapp/unip12.jpg";

import html5 from "../../assets/HTML5.png";
import css3 from "../../assets/CSS3.png";
import javaScript from "../../assets/JavaScript.png";
import reactm from "../../assets/React.png";
import c from "../../assets/CSharp.png";
import aspNet from "../../assets/NETcore.png";
import mysql from "../../assets/MySQL.png";

import visualStudio from "../../assets/VisualStudio.png";
import visualStudioCode from "../../assets/VSCode.png";
import git from "../../assets/Git.png";
import gitHub from "../../assets/GitHub.png";
import figma from "../../assets/Figma.png";
import bootstrap from "../../assets/Bootstrap.png";
import vite from "../../assets/Vite.png";
import xampp from "../../assets/xampp.png";

import email from "../../assets/icon/email.png";
import tlf from "../../assets/icon/tlf.png";
import location from "../../assets/icon/location.png";
import linkedin from "../../assets/icon/linkedin.png";
export default function Home() {
  const irASeccion = (id) => {
    const seccion = document.getElementById(id);

    if (seccion) {
      seccion.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scroll = window.scrollY;
      const overlay = document.querySelector(".background-overlay");

      if (!overlay) return;

      if (scroll < 500) {
        overlay.style.background = "rgba(15, 15, 15, 0)";
      } else if (scroll < 1000) {
        overlay.style.background = "rgba(15, 15, 15, 0.45)";
      } else if (scroll < 1500) {
        overlay.style.background = "rgba(15, 15, 15, 0.55)";
      } else if (scroll < 2000) {
        overlay.style.background = "rgba(15, 15, 15, 0.65)";
      } else if (scroll < 2500) {
        overlay.style.background = "rgba(15, 15, 15, 0.85)";
      } else {
        overlay.style.background = "rgba(15, 15, 15, 0.99)";
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="background-overlay"></div>

      <Nav />

      <main className="home">
        <section
          className="section-home"
          style={{ paddingTop: "80px" }}
          id="home"
        >
          <div className="div-container">
            <div className="div-container-home-1">
              <h3 className="title-home">Hola, Soy</h3>

              <h3 className="title-home2">Jorge Gonzalez</h3>

              <h3 className="title-home2">Creador de UX/UI</h3>

              <h3 className="title-home3">
                Creo experiencias digitales funcionales, estéticas y
                centralizadas en sus necesidades.
              </h3>

              <Button
                text="Ver Proyectos ➜"
                type="btn-1 button-home"
                onClick={() => irASeccion("projects")}
              />
              <Button
                text="Hablemos"
                type="btn-2 button-home"
                onClick={() => irASeccion("projects")}
              />
            </div>

            <div className="div-container-home-2">
              <img
                className="img-global-home"
                src={global}
                alt="Globo digital"
              />
            </div>
          </div>
        </section>
        <section className="section-about" id="about">
          <div className="div-container">
            <div className="div-container-about-1">
              <h3 className="title-home">SOBRE MI</h3>

              <h3 className="title-home2">
                Diseño, desarrollo
                <br /> e innovación digital
              </h3>

              <p className="title-home3 title-about-p">
                Soy jorge y mi pasión por la tecnología comenzó a los 14 años,
                cuando empecé a explorar el mundo de la informática. A los 16
                descubrí el diseño web y desde entonces he enfocado mi carrera
                en crear experiencias digitales atractivas y funcionales. <br />
                <br /> Actualmente estoy finalizando la carrera de Análisis y
                Desarrollo de Software y cuento con dos años de experiencia como
                diseñador y desarrollador freelance, colaborando en el
                desarrollo de aplicaciones web. Me considero una persona
                creativa, comprometida y orientada a diseñar soluciones que se
                adapten a las necesidades de cada cliente, combinando
                funcionalidad, estética y una excelente experiencia de usuario.
              </p>
              <div className="div-container-icon-about">
                <div>
                  <img className="icon-about" src={exp} alt="2 anos" />
                  <h3 className="">Experiencia</h3>
                  <h3 className="">2 anos</h3>
                </div>
                <div>
                  <img
                    className="icon-about"
                    src={ubicacion}
                    alt="cidade ocidental-GO"
                  />
                  <h3 className="">ubicacaion</h3>
                  <h3 className="">Cidade ocidental-GO</h3>
                </div>
                <div>
                  <img className="icon-about" src={maletin} alt="freelancer" />
                  <h3 className="">displibilidad</h3>
                  <h3 className="">Freelancer</h3>
                </div>
              </div>
            </div>
            <div className="div-container-about-2">
              <img
                className="img-user-jorge"
                src={user}
                alt="Jorge Alfonso Gonzalez Martinez"
              />
            </div>
          </div>
        </section>
        <section className="section-project" id="projects">
          <div className="div-container-project">
            <div className="container-project">
              <h3 className="title-home2">Proyectos</h3>
              <h3 className="title-home3">
                Proyectos que he realizado o en los que he colaborado para su
                culminación.
              </h3>
            </div>
            <div className="container-project">
              <CardP
                title="Alucar"
                description="Sistema completo de alquiler de vehículos."
                images={[alucar1, alucar2]}
                technologies={[
                  "Bootsrap5",
                  "CSS3",
                  "SQL Server",
                  "Html5",
                  "PHP",
                ]}
              />
              <CardP
                title="Uniapp"
                description="Sistema de gestión integral de servicios digitales."
                images={[
                  uniap12,
                  uniap1,
                  uniap2,
                  uniap3,
                  uniap4,
                  uniap5,
                  uniap6,
                  uniap7,
                  uniap8,
                  uniap9,
                  uniap10,
                  uniap11,
                ]}
                technologies={["React", "java", "JDBC", "CSS"]}
              />
            </div>
          </div>
        </section>
        <section className="section-services" id="services">
          <div className="div-container">
            <div className="div-container-services">
              <h3 className="title-home">Services</h3>
              <h3 className="title-home2">
                ¿En qué puedo <br /> ayudarte?
              </h3>
            </div>
            <div className="div-container-services">
              <p className="title-home3">
                En esta sección encontrarás algunos de los servicios que puedo
                ofrecerte como desarrollador.
              </p>
            </div>
            <div className="div-container-services-1">
              <Card
                title="Desarrollo Web"
                text="Creación de sitios web modernos, rápidos y adaptados a las necesidades de cada proyecto."
                direction={dev}
              />
              <Card
                title="Desarrollo con React"
                text="Desarrollo de interfaces dinámicas, interactivas y de alto rendimiento utilizando React."
                direction={react}
              />
              <Card
                title="Mantenimiento"
                text="Corrección de errores, mejoras de rendimiento y actualización de funcionalidades para mantener tu sitio siempre al día."
                direction={mantenimiento}
              />
              <Card
                title="Diseño Responsive"
                text="Sitios web totalmente adaptados para computadoras, tablets y dispositivos móviles."
                direction={responsivo}
              />
            </div>
          </div>
        </section>
        <section className="section-tools" id="tools">
          <div className="div-container-tools-p">
            <div className="div-container-tools">
              <h3 className="title-home">Havilidades</h3>
              <h1 className="title-home2">Tecnología </h1>
            </div>
            <div className="div-container2">
              <div className="div-container-tools1 ">
                <div className="card-tools1">
                  <img className="img-tools1" src={html5} />
                  <h3 className="title-home">html5</h3>
                </div>
                <div className="card-tools1">
                  <img className="img-tools1" src={css3} />
                  <h3 className="title-home">Css3</h3>
                </div>
                <div className="card-tools1">
                  <img className="img-tools1" src={javaScript} />
                  <h3 className="title-home">JavaScript</h3>
                </div>
                <div className="card-tools1">
                  <img className="img-tools1" src={reactm} />
                  <h3 className="title-home">React</h3>
                </div>
                <div className="card-tools1">
                  <img className="img-tools1" src={c} />
                  <h3 className="title-home">C#</h3>
                </div>
                <div className="card-tools1">
                  <img className="img-tools1" src={aspNet} />
                  <h3 className="title-home">ASP.NET Core</h3>
                </div>
                <div className="card-tools1">
                  <img className="img-tools1" src={mysql} />
                  <h3 className="title-home">MySQL</h3>
                </div>
              </div>
              <div
                className="div-container-tools1"
                style={{ flexDirection: "column" }}
              >
                <h3 className="title-home3">
                  Estas son algunas de las herramientas y habilidades que
                  utilizo diariamente en el desarrollo de proyectos web.
                </h3>
                <h3
                  className="title-home"
                  style={{ marginTop: "80px", color: "#e6e4e4" }}
                >
                  Herramientas
                </h3>
                <div className="div-container-tools1" style={{ width: "100%" }}>
                  <div className="card-tools2">
                    <img className="img-tools2" src={visualStudio} />
                    <h3 className="title-home">Visual Studio</h3>
                  </div>
                  <div className="card-tools2">
                    <img className="img-tools2" src={visualStudioCode} />
                    <h3 className="title-home">VS Code</h3>
                  </div>
                  <div className="card-tools2">
                    <img className="img-tools2" src={git} />
                    <h3 className="title-home">Git</h3>
                  </div>
                  <div className="card-tools2">
                    <img className="img-tools2" src={gitHub} />
                    <h3 className="title-home">Git Hub</h3>
                  </div>
                  <div className="card-tools2">
                    <img className="img-tools2" src={figma} />
                    <h3 className="title-home">Figma</h3>
                  </div>
                  <div className="card-tools2">
                    <img className="img-tools2" src={bootstrap} />
                    <h3 className="title-home">Bootstrap 5</h3>
                  </div>
                  <div className="card-tools2">
                    <img className="img-tools2" src={vite} />
                    <h3 className="title-home">Vite.js</h3>
                  </div>
                  <div className="card-tools2">
                    <img className="img-tools2" src={xampp} />
                    <h3 className="title-home">Xampp</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section-contact" id="contact">
          <div className="div-container">
            <div className="div-container-contact">
              <h3 className="title-home">Contacto</h3>

              <h1 className="title-home2">
                ¿Tienes un proyecto
                <br /> en mente?
              </h1>
              <h3 className="title-home" style={{ margin: "30px 0 30px 0" }}>
                Hablemos y hagamos algo increible juntos.
                <br /> Estoy abierto a nuevas oportunidades
              </h3>
              <a
                href="mailto:nova2005jag@gmail.com"
                className="title-home icon-linck-contact"
              >
                <img className="icon-contact" src={email} alt="Email" />
                nova2005jag@gmail.com
              </a>
              <a
                href="https://wa.me/5561981442668"
                target="_blank"
                rel="noopener noreferrer"
                className="title-home icon-linck-contact"
              >
                <img className="icon-contact" src={tlf} alt="WhatsApp" />
                (61) 98144-2668
              </a>
              <h3 className="title-home icon-linck-contact">
                <img className="icon-contact" src={location} /> Cidade
                Ocidental-GO brasil
              </h3>
              <div
                style={{
                  width: "100%",
                  padding: " 30px",
                  boxSizing: "border-box",
                }}
              >
                <a
                  href="https://www.linkedin.com/in/jorge-gonzalez-168bb3287/"
                  style={{ textDecoration: "none" }}
                  target="_blank"
                >
                  <img className="icon-contact" src={linkedin} />
                </a>
              </div>
            </div>
            <div className="div-from-contact">
              <from>
                <input type="text" placeholder="Nombre" />
                <input type="email" placeholder="Email" required />
                <textarea
                  className="mensaje"
                  placeholder="Mensaje"
                  rows={6}
                ></textarea>
                <Button
                  typ="submit"
                  text="Hablemos"
                  type="btn-1 button-home btn-submit"
                />
              </from>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
