import React from "react";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";
import emailjs from "emailjs-com";
import { useHistory } from "react-router-dom";

import { ContactStyled } from "../styles/styled_contact";
import Fade from "react-reveal/Fade";

const Contact = () => {
  const { REACT_APP_SERVICE, REACT_APP_TEMPLATE, REACT_APP_USER } = process.env;
  const theme = useSelector((state) => state.theme);
  const history = useHistory();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(REACT_APP_SERVICE, REACT_APP_TEMPLATE, e.target, REACT_APP_USER)
      .then(
        (result) => {
          Swal.fire({
            heightAuto: false,
            title: "Enviado",
            text: "Correo enviado correctamente, responderemos a la brevedad.",
            icon: "success",
            confirmButtonText: "Ok",
            confirmButtonColor: "#0097A7",
            willClose: () => {
              document.body.style.overflow = "unset";
              history.push("/");
            },
          });
        },
        (error) => {
          Swal.fire({
            heightAuto: false,
            title: "Error!",
            text: "Hubo un error, intentalo de nuevo mas tarde.",
            icon: "error",
            confirmButtonText: "Ok",
            confirmButtonColor: "#0097A7",
            willClose: () => {
              document.body.style.overflow = "unset";
            },
          });
        }
      );

    e.target.reset();
  };

  return (
    <ContactStyled>
      <Fade>
        <form onSubmit={sendEmail}>
          <div className="flex-form-container">
            <h1 className="title">Contacto</h1>
            <label>
              <span
                style={{
                  background: theme === "dark" ? "#2d2d2d" : "white",
                }}
              >
                Nombre
              </span>
              <input
                className="inputs"
                style={{
                  color: theme === "dark" ? "white" : "black",
                  background: theme === "dark" ? "#2d2d2d" : "white",
                }}
                type="text"
                name="name"
                required
              />
            </label>
            <label>
              <span
                style={{
                  background: theme === "dark" ? "#2d2d2d" : "white",
                }}
              >
                Correo
              </span>
              <input
                className="inputs"
                style={{
                  color: theme === "dark" ? "white" : "black",
                  background: theme === "dark" ? "#2d2d2d" : "white",
                }}
                type="email"
                name="email"
                required
              />
            </label>
            <label>
              <span
                style={{
                  background: theme === "dark" ? "#2d2d2d" : "white",
                }}
              >
                Asunto
              </span>
              <input
                className="inputs"
                style={{
                  color: theme === "dark" ? "white" : "black",
                  background: theme === "dark" ? "#2d2d2d" : "white",
                }}
                type="text"
                name="subject"
                required
              />
            </label>
            <label>
              <span
                style={{
                  background: theme === "dark" ? "#2d2d2d" : "white",
                }}
              >
                Mensaje
              </span>
              <textarea
                style={{
                  color: theme === "dark" ? "white" : "black",
                  background: theme === "dark" ? "#2d2d2d" : "white",
                }}
                className="inputs"
                name="message"
                placeholder="Este formulario nos envía un correo directamente a nuestra casilla. Siéntete libre de escribirnos."
                required
              />
            </label>
            <input className="submit" type="submit" value="Enviar Mensaje" />
          </div>
        </form>
      </Fade>
    </ContactStyled>
  );
};

export default Contact;
