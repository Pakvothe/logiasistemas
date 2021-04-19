import { Link, useHistory } from "react-router-dom";
import React from "react";
import { StyledHome } from "../styles/styled_home";
import { Parallax } from "react-parallax";
import homeback from "../../assets/img/homeback.jpg";
import Fade from "react-reveal/Fade";

const Home = () => {
  const history = useHistory();
  const handleContact = () => {
    history.push("/contact");
  };
  return (
    <StyledHome>
      <Parallax bgImage={homeback} bgImageAlt="obelisco" strength={500}>
        <Fade left big>
          <div className="ParallaxInside">
            <div className="sideBar">
              <div className="sideItems">
                <h3>Seguridad</h3>
                <p>Electrónica</p>
              </div>
              <div className="sideItems">
                <p>Sistemas inteligentes,</p>
                <p>personas inteligentes.</p>
              </div>
              <div
                className="sideItems contactContainer"
                onClick={handleContact}
              >
                <Link to="/contact" className="ContactButton">
                  Contáctenos
                </Link>
              </div>
            </div>
          </div>
        </Fade>
      </Parallax>
      <div className="intro">
        <Fade>
          <p>
            ¡Somos una empresa joven y pujante cuyo objetivo es acercar hacia la
            excelencia tecnológica en seguridad y comunicaciones a todos los
            entes públicos, privados y a toda la comunidad en su conjunto!
          </p>
        </Fade>
      </div>
      <Fade>
        <h1 className="homeTitle">Nuestros servicios</h1>
      </Fade>
      <div className="CardContainer">
        <Fade>
          <div className="Card">
            <p className="cardTitle">Sistema de Monitoreo</p>
            <p className="cardInfo">
              Es un sistema de monitoreo en tiempo real mediante la utilización
              de Grabadoras Digitales, distintos tipos de cámaras (box,
              infrarrojas, antivandalicas, resistentes al agua, con audio, etc.)
              Por ende se puede visualizar desde una PC como circuito cerrado y
              en forma remota a través de internet mediante una PC, tablet o
              teléfono inteligente (Android o iOS).
            </p>
          </div>
        </Fade>
        <Fade>
          <div className="Card">
            <p className="cardTitle">Portero Visor electrónico</p>
            <p className="cardInfo">
              Es un sistema de portero electrónico con cámara incorporada para
              visualizar al visitante, además permite al visitante dejar
              mensajes de vídeo cuando no hay nadie en la vivienda. El sistema
              admite múltiples paneles tanto exteriores como interiores. Además
              se le puede agregar control de acceso.
            </p>
          </div>
        </Fade>
        <Fade>
          <div className="Card">
            <p className="cardTitle">Control de Acceso</p>
            <p className="cardInfo">
              Es un sistema de control de acceso que permite controlar 1 como
              múltiples puertas mediante tarjetas de proximidad, llaveros de
              proximidad, huellas dactilares y/o rostros. Pueden ser autónomos o
              con reporte. Permite desde 1000 usuarios hasta 30000 usuarios.
              Además contamos con todos los accesorios de herrajes y cerraduras.
            </p>
          </div>
        </Fade>
        <Fade>
          <div className="Card">
            <p className="cardTitle">Detección de Incendio - Inundación</p>
            <p className="cardInfo">
              Es un sistema de detección de incendio e inundación electrónico
              mediante detectores de humo, llama, temperatura y humedad. El
              sistema emite alertas sonoras, lumínicas y mediante SNMP y correo
              electrónico a una PC o teléfono inteligente.
            </p>
          </div>
        </Fade>
        <Fade>
          <div className="Card">
            <p className="cardTitle">Alarmas</p>
            <p className="cardInfo">
              Es una central de alarma electrónica e inalámbrica con llamador
              por red celular GSM, no necesita una línea de teléfono
              convencional (Telefónica, Telecom, Cooperativas), solo un chip
              celular (postpago o prepago de cualquier compañía (Movistar,
              Personal, Claro, Nextel) evitando así posibles cortes en la línea
              de teléfono y evitando de plano la interrupción de la comunicación
              de la alarma.
            </p>
          </div>
        </Fade>
        <Fade>
          <div className="Card">
            <p className="cardTitle">Domótica</p>
            <p className="cardInfo">
              Mediante dispositivos conectados a la red (LAN) vía Ethernet o
              Wifi se automatizan diferentes sistemas como luces, puertas o
              portones, persianas cortinas, equipos de aire acondicionado, riego
              calderas, etc. Los dispositivos conectados transmiten vía internet
              y se pueden manejar en forma remota a través de App o incluso
              mediante compatibilidad se pueden manejar por voz vía Amazon Alexa
              o Google Home.
            </p>
          </div>
        </Fade>
        <Fade>
          <div className="Card">
            <p className="cardTitle">Cerco eléctrico perimetral</p>
            <p className="cardInfo">
              El sistema consisten en cercar perimetralmente la propiedad
              mediante una estructura de hierro y alambres de aluminio,
              conectando el cerco a un energizador que emite pulsos eléctricos.
              Este equipo funciona como alarma conectándolo a una sirena
              directamente o a una zona de alarma existente. Se puede
              activar/desactivar en forma remota a través de App vía internet.
            </p>
          </div>
        </Fade>
      </div>
      <Fade>
        <h1 className="homeTitle">
          Sistemas inteligentes, personas inteligentes.
        </h1>
      </Fade>
    </StyledHome>
  );
};

export default Home;
