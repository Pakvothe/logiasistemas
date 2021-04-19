import React from "react";
import { StyledAbout, StyledSVG } from "../styles/styled_about";
import dinero from "../../assets/img/dinero.svg";
import briefcase from "../../assets/img/briefcase.svg";
import check from "../../assets/img/check.svg";
import gears from "../../assets/img/gears.svg";
import Fade from "react-reveal/Fade";

const About = () => {
  return (
    <>
      <StyledAbout>
        <Fade>
          <h1 className="titlePpal">¿Qué hacemos?</h1>
        </Fade>
        <div className="CardContainer">
          <Fade>
            <div className="Card">
              <div className="titleContainer">
                <p className="title">Presupuesto y Mantenimiento</p>
              </div>
              <StyledSVG src={dinero} />
              <p className="info">
                Realizamos presupuestos acordes a la necesidad de nuestros
                clientes. Los presupuestos, donde por necesidad debamos hacernos
                presentes para su confección, tienen un costo de realización,
                dentro de la zona de cobertura (CABA/AMBA) deducibles al momento
                de contratación. Los presupuestos vía correo electrónico son SIN
                CARGO! Realizamos el mantenimiento necesario de los sistemas que
                comercializamos mediante un abono anual o simplemente a
                requerimiento de los clientes al momento en que lo solicite.
              </p>
            </div>
            <div className="Card">
              <div className="titleContainer">
                <p className="title">Instalación y Configuración</p>
              </div>
              <StyledSVG src={briefcase} />
              <p className="info">
                Contamos con un equipo de instaladores altamente calificado para
                realizar el trabajo requerido y todas las herramientas
                necesarias para realizar el mismo. Además nuestro equipo cuenta
                con los conocimientos para configurar y poner en funcionamiento
                cualquiera de los sistemas que comercializamos aconsejándolos de
                la mejor manera de acuerdo a sus necesidades, siempre contando
                con nuestra garantía de satisfacción.
              </p>
            </div>
          </Fade>
          <Fade>
            <div className="Card">
              <div className="titleContainer">
                <p className="title">Ordenes internacionales</p>
              </div>
              <StyledSVG src={check} />
              <p className="info">
                Comercializamos para todo el mundo cursos y capacitaciones para
                futuros integradores e instaladores, instructivos en texto y
                video, programas, hojas de datos de los productos que
                comercializamos, actualizaciones de firmware y software de todos
                los equipos en nuestro catálogo.
              </p>
            </div>
            <div className="Card">
              <div className="titleContainer">
                <p className="title">Asesoramiento y Soporte</p>
              </div>
              <StyledSVG src={gears} />
              <p className="info">
                Ofrecemos asesoramiento y soporte de los sistemas de seguridad
                electrónica vía correo electrónico o telefónicamente, previa
                comunicación con nuestros agentes. De acuerdo al tipo de
                asesoramiento/soporte que se escoja, difieren los cargos. ¡Por
                Favor consultar!
              </p>
            </div>
          </Fade>
        </div>
      </StyledAbout>
    </>
  );
};

export default About;
