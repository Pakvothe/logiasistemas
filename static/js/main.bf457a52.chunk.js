(this.webpackJsonplogiasistemas=this.webpackJsonplogiasistemas||[]).push([[0],{60:function(t,e,n){},65:function(t,e,n){},79:function(t,e,n){"use strict";n.r(e);var a,i,r,o,s,c,l,d,m,u,h,b,p,j,x=n(0),g=n(21),f=n.n(g),v=(n(60),n(20)),O=n(4),y=n(54),_=(n(65),n(5)),w=n(6),C=n(13),k=Object(w.a)(a||(a=Object(_.a)(["\n\tbody {\n\t\tbackground-color: ",";\n\t\tcolor:  ",";\n\t\n\t}\n"])),(function(t){return t.theme.body}),(function(t){return t.theme.text})),N=Object(w.b)(C.a)(i||(i=Object(_.a)([""]))),z=w.b.button(r||(r=Object(_.a)(["\n\tpointer-events: none;\n\topacity: 0;\n\tposition: fixed;\n\tright: 25px;\n\tbottom: 10px;\n\tborder: 0;\n\tpadding: 0.3em;\n\tbackground: var(--clr-primary);\n\tcolor: var(--clr-light);\n\tborder-radius: 999em;\n\tcursor: pointer;\n\tbox-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);\n\ttransition: color 0.2s ease-in-out, opacity 1000ms ease-in-out;\n\tsvg {\n\t\tfill: var(--clr-light);\n\t\twidth: 2.5em;\n\t\theight: 2.5em;\n\t}\n\t&:hover {\n\t\tbox-shadow: inset 2px 2px 5px rgba(0, 0, 0, 0.2);\n\t\tbackground: var(--clr-primary-dark);\n\t\tsvg {\n\t\t\tfill: var(--clr-light);\n\t\t}\n\t}\n\t&:focus {\n\t\toutline: none;\n\t}\n\t@media (max-width: 480px) {\n\t\tright: 10px;\n\t\tbottom: 50px;\n\t\tpadding: 0.3em;\n\t\tsvg {\n\t\t\twidth: 1.5em;\n\t\t\theight: 1.5em;\n\t\t}\n\t}\n"]))),S={body:"var(--clr-light)",text:"var(--clr-primary-text)"},I={body:"var(--clr-dark)",text:"var(--clr-dark-text)"},E=n(10),T=w.b.div(o||(o=Object(_.a)(["\n\t.ParallaxInside {\n\t\theight: 80vh;\n\t\t.sideBar {\n\t\t\tbackground-color: rgba(0, 0, 0, 0.8);\n\t\t\twidth: 400px;\n\t\t\theight: 100%;\n\t\t\tbox-shadow: 5px 5px 5px 2px rgba(0, 0, 0, 0.2);\n\t\t\tdisplay: flex;\n\t\t\tflex-direction: column;\n\t\t\talign-items: center;\n\t\t\tjustify-content: space-evenly;\n\t\t\tpadding: 3em;\n\n\t\t\t.sideItems {\n\t\t\t\tdisplay: flex;\n\t\t\t\tflex-direction: column;\n\t\t\t\talign-items: center;\n\t\t\t\tjustify-content: center;\n\t\t\t\theight: 33%;\n\n\t\t\t\t&:first-child {\n\t\t\t\t\tcolor: var(--clr-primary);\n\t\t\t\t\ttext-transform: uppercase;\n\t\t\t\t\tp {\n\t\t\t\t\t\tcolor: var(--clr-primary);\n\t\t\t\t\t\tfont-size: 1.5em;\n\t\t\t\t\t}\n\t\t\t\t\th3 {\n\t\t\t\t\t\tfont-size: 2em;\n\t\t\t\t\t\tmargin-bottom: 0.3em;\n\t\t\t\t\t}\n\t\t\t\t}\n\n\t\t\t\tp {\n\t\t\t\t\tcolor: white;\n\t\t\t\t\tmargin-bottom: 0.3em;\n\t\t\t\t}\n\n\t\t\t\t.ContactButton {\n\t\t\t\t\ttext-decoration: none;\n\t\t\t\t\tfont-size: 1.5em;\n\t\t\t\t\tfont-weight: bold;\n\t\t\t\t\tcolor: white;\n\t\t\t\t}\n\t\t\t}\n\n\t\t\t.contactContainer {\n\t\t\t\tborder-radius: 99em;\n\t\t\t\tbackground-color: var(--clr-primary);\n\t\t\t\ttransition: background-color 0.4s ease-in-out;\n\t\t\t\tcursor: pointer;\n\t\t\t\theight: 18%;\n\t\t\t\twidth: 100%;\n\t\t\t\t&:hover {\n\t\t\t\t\tbackground-color: var(--clr-primary-dark);\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n\n\t.intro {\n\t\tmargin: 2em;\n\t\ttext-align: center;\n\t\tfont-size: 1.2em;\n\t\tfont-style: italic;\n\t}\n\n\t.homeTitle {\n\t\ttext-align: center;\n\t\tcolor: var(--clr-primary-dark);\n\t\tmargin-bottom: 1em;\n\t}\n\n\t.CardContainer {\n\t\tpadding: 0 4em;\n\t\tdisplay: flex;\n\t\tjustify-content: center;\n\t\tflex-wrap: wrap;\n\n\t\t.Card {\n\t\t\tmargin: 1em auto 2em auto;\n\t\t\tdisplay: flex;\n\t\t\tflex-direction: column;\n\t\t\talign-items: center;\n\t\t\tcursor: pointer;\n\t\t\twidth: 30%;\n\t\t\tborder: 2px solid var(--clr-primary-dark);\n\t\t\tborder-radius: 1em;\n\t\t\tmin-height: 60vh;\n\t\t\tpadding: 2em;\n\t\t\ttransition: background-color 0.2s ease-in-out;\n\t\t\tword-wrap: normal;\n\t\t\tbox-shadow: 0 7px 30px rgba(0, 0, 0, 0.7);\n\n\t\t\t.cardTitle {\n\t\t\t\tfont-size: 1.5em;\n\t\t\t\ttext-transform: uppercase;\n\t\t\t\ttext-align: center;\n\t\t\t\tmargin-bottom: 1em;\n\t\t\t\tcolor: var(--clr-primary-dark);\n\t\t\t}\n\n\t\t\t.cardInfo {\n\t\t\t\ttext-align: center;\n\t\t\t\tline-height: 1.3em;\n\t\t\t\tfont-size: 16px;\n\t\t\t}\n\n\t\t\t&:hover {\n\t\t\t\tbackground-color: #101010;\n\t\t\t\tcolor: white;\n\t\t\t}\n\t\t}\n\t}\n\n\t@media (max-width: 1100px) {\n\t\t.CardContainer {\n\t\t\t.Card {\n\t\t\t\talign-items: center;\n\t\t\t\tjustify-content: center;\n\t\t\t\twidth: 45%;\n\t\t\t}\n\t\t}\n\t}\n\t@media (max-width: 800px) {\n\t\t.ParallaxInside {\n\t\t\tdisplay: flex;\n\t\t\tjustify-content: flex-end;\n\t\t\talign-items: flex-end;\n\n\t\t\t.sideBar {\n\t\t\t\twidth: 100%;\n\t\t\t\theight: 50%;\n\t\t\t\tdisplay: flex;\n\t\t\t\tflex-direction: column;\n\t\t\t\talign-items: center;\n\t\t\t\tjustify-content: space-evenly;\n\t\t\t}\n\n\t\t\t.contactContainer {\n\t\t\t\theight: 20%;\n\t\t\t\twidth: 200px;\n\t\t\t}\n\n\t\t\t.CardContainer {\n\t\t\t\t.Card {\n\t\t\t\t\talign-items: center;\n\t\t\t\t\tjustify-content: center;\n\t\t\t\t\twidth: 70%;\n\t\t\t\t\tmin-height: 40vh;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n\t@media (max-width: 550px) {\n\t\t.CardContainer {\n\t\t\tpadding: 0 1em;\n\t\t\t.Card {\n\t\t\t\talign-items: center;\n\t\t\t\tjustify-content: center;\n\t\t\t\twidth: 100%;\n\t\t\t\tmin-height: 40vh;\n\t\t\t}\n\t\t}\n\t\t.intro {\n\t\t\tfont-size: 1.1em;\n\t\t}\n\t\t.homeTitle {\n\t\t\tfont-size: 1.7em;\n\t\t\tmargin: 1em 5px;\n\t\t}\n\t}\n"]))),A=(Object(w.b)(C.a)(s||(s=Object(_.a)(["\n\theight: 2em;\n\tcursor: pointer;\n\tfill: currentColor;\n\ttransition: fill 0.2s ease-in-out;\n\n\t&:hover {\n\t\tfill: var(--clr-primary-dark);\n\t}\n\n\t@media (max-width: 480px) {\n\t\theight: 1.5em;\n\t}\n"]))),n(49)),P=n.p+"static/media/homeback.2c93b220.jpg",q=n(3),D=n.n(q),B=n(1),L=function(){var t=Object(O.e)(),e=function(){t.push("/logiasistemas/products")};return Object(B.jsxs)(T,{children:[Object(B.jsx)(A.Parallax,{bgImage:P,bgImageAlt:"obelisco",strength:500,children:Object(B.jsx)(D.a,{left:!0,big:!0,children:Object(B.jsx)("div",{className:"ParallaxInside",children:Object(B.jsxs)("div",{className:"sideBar",children:[Object(B.jsxs)("div",{className:"sideItems",children:[Object(B.jsx)("h3",{children:"Seguridad"}),Object(B.jsx)("p",{children:"Electr\xf3nica"})]}),Object(B.jsxs)("div",{className:"sideItems",children:[Object(B.jsx)("p",{children:"Sistemas inteligentes,"}),Object(B.jsx)("p",{children:"personas inteligentes."})]}),Object(B.jsx)("div",{className:"sideItems contactContainer",onClick:function(){t.push("/logiasistemas/contact")},children:Object(B.jsx)(E.b,{to:"/contact",className:"ContactButton",children:"Contactenos"})})]})})})}),Object(B.jsx)("div",{className:"intro",children:Object(B.jsx)(D.a,{children:Object(B.jsxs)("p",{children:["Somos una empresa jov\ufeffen y pujante cuyo objetivo es acercar hacia la excelencia tecnol\xf3gica en seguridad y comunicaciones a todos los entes p\xfablicos, privados y a toda la comunidad en su conjunto!"," "]})})}),Object(B.jsx)(D.a,{children:Object(B.jsx)("h1",{className:"homeTitle",children:"Nuestros servicios"})}),Object(B.jsxs)("div",{className:"CardContainer",children:[Object(B.jsx)(D.a,{children:Object(B.jsxs)("div",{className:"Card",onClick:e,children:[Object(B.jsx)("p",{className:"cardTitle",children:"Sistema de Monitoreo"}),Object(B.jsx)("p",{className:"cardInfo",children:"Es un sistema de monitoreo en tiempo real mediante la utilizaci\xf3n de Grabadoras Digitales, distintos tipos de c\xe1maras (box, infrarrojas, antivandalicas, resistentes al agua, con audio, etc.) Por ende se puede visualizar desde una PC como circuito cerrado y en forma remota a trav\xe9s de internet mediante una PC, tablet o tel\xe9fono inteligente (Android o iOS)."})]})}),Object(B.jsx)(D.a,{children:Object(B.jsxs)("div",{className:"Card",onClick:e,children:[Object(B.jsx)("p",{className:"cardTitle",children:"Portero Visor electr\xf3nico"}),Object(B.jsx)("p",{className:"cardInfo",children:"Es un sistema de portero electr\xf3nico con c\xe1mara incorporada para visualizar al visitante, ademas permite al visitante dejar mensajes de v\xeddeo cuando no hay nadie en la vivienda.El sistema admite m\xfaltiples paneles tanto exteriores como interiores. Ademas se le puede agregar control de acceso."})]})}),Object(B.jsx)(D.a,{children:Object(B.jsxs)("div",{className:"Card",onClick:e,children:[Object(B.jsx)("p",{className:"cardTitle",children:"Control de Acceso"}),Object(B.jsx)("p",{className:"cardInfo",children:"Es un sistema de control de acceso que permite controlar 1 como m\xfaltiples puertas mediante tarjetas de proximidad, llaveros de proximidad, huellas dactilares y/o rostros. Pueden ser aut\xf3nomos o con reporte. Permite desde 1000 usuarios hasta 30000 usuarios. Ademas contamos con todos los accesorios de herrajes y cerraduras."})]})}),Object(B.jsx)(D.a,{children:Object(B.jsxs)("div",{className:"Card",onClick:e,children:[Object(B.jsx)("p",{className:"cardTitle",children:"Detecci\xf3n de Incendio - Inundaci\xf3n"}),Object(B.jsx)("p",{className:"cardInfo",children:"Es un sistema de detecci\xf3n de incendio e inundaci\xf3n electr\xf3nico mediante detectores de humo, llama, temperatura y humedad. El sistema emite alertas sonoras, lum\xednicas y mediante SNMP y correo electr\xf3nico a una PC o tel\xe9fono inteligente."})]})}),Object(B.jsx)(D.a,{children:Object(B.jsxs)("div",{className:"Card",onClick:e,children:[Object(B.jsx)("p",{className:"cardTitle",children:"Alarmas"}),Object(B.jsx)("p",{className:"cardInfo",children:"Es una central de alarma electr\xf3nica e inal\xe1mbrica con llamador por red celular GSM, no necesita una linea de tel\xe9fono convencional (Telef\xf3nica, Telecom, Cooperativas), solo un chip celular (postpago o prepago de cualquier compa\xf1\xeda (Movistar, Personal, Claro, Nextel) evitando as\xed posibles cortes en la linea de tel\xe9fono y evitando de plano la interrupci\xf3n de la comunicaci\xf3n de la alarma."})]})})]}),Object(B.jsx)(D.a,{children:Object(B.jsx)("h1",{className:"homeTitle",children:"Sistemas inteligentes, personas inteligentes."})})]})},M=w.b.nav(c||(c=Object(_.a)(["\n\twidth: 100%;\n\theight: 6em;\n\tdisplay: flex;\n\tjustify-content: space-between;\n\talign-items: center;\n\tborder-bottom: 3px solid var(--clr-primary-dark);\n\n\t.title {\n\t\tmargin-left: 2em;\n\t\ttext-decoration: none;\n\t\tcolor: currentColor;\n\t\ttransition: color 0.2s ease-in-out;\n\t\tfont-size: 1.6em;\n\t\t&:hover {\n\t\t\tcolor: var(--clr-primary-dark);\n\t\t}\n\t}\n\n\t.navContainer {\n\t\tmargin-right: 2em;\n\t\tdisplay: flex;\n\t\tjustify-content: space-between;\n\t\talign-items: center;\n\n\t\ta {\n\t\t\tmargin: 0 1.5em;\n\t\t\ttransition: color 0.2s ease-in-out;\n\t\t\ttext-decoration: none;\n\t\t\tcolor: currentColor;\n\n\t\t\t&:hover {\n\t\t\t\tcolor: var(--clr-primary-dark);\n\t\t\t}\n\t\t}\n\n\t\tbutton {\n\t\t\tbackground-color: transparent;\n\t\t\tcolor: currentColor;\n\t\t\tborder: none;\n\t\t\ttransition: color 0.2s ease-in-out;\n\n\t\t\t&:focus {\n\t\t\t\toutline: none;\n\t\t\t}\n\n\t\t\t&:hover {\n\t\t\t\tcolor: var(--clr-primary-dark);\n\t\t\t}\n\t\t}\n\t}\n\n\t@media (max-width: 920px) {\n\t\theight: 100%;\n\t\tflex-direction: column;\n\t\tpadding: 1em 0;\n\t\t.title {\n\t\t\tmargin: 0.5em auto;\n\t\t\tposition: relative;\n\t\t}\n\n\t\t.navContainer {\n\t\t\twidth: 100%;\n\t\t\tflex-direction: column;\n\t\t\tmargin: 0 auto;\n\n\t\t\ta {\n\t\t\t\tmargin-bottom: 0.5em;\n\t\t\t}\n\n\t\t\tbutton {\n\t\t\t\tposition: absolute;\n\t\t\t\ttop: 10px;\n\t\t\t\tright: 10px;\n\t\t\t}\n\t\t}\n\t}\n"]))),H=Object(w.b)(C.a)(l||(l=Object(_.a)(["\n\theight: 2em;\n\tcursor: pointer;\n"]))),F="TOGGLE_THEME",G=n.p+"static/media/moon.37488b4f.svg",R=n.p+"static/media/sun.3812551f.svg",V=function(){var t=Object(v.b)(),e=Object(v.c)((function(t){return t.theme}));return Object(B.jsx)(D.a,{children:Object(B.jsxs)(M,{children:[Object(B.jsx)(E.b,{to:"/logiasistemas/",className:"title",children:Object(B.jsx)("p",{children:"Logia Sistemas"})}),Object(B.jsxs)("div",{className:"navContainer",children:[Object(B.jsx)(E.b,{to:"/logiasistemas/",children:"Inicio"}),Object(B.jsx)(E.b,{to:"/logiasistemas/products",children:"Productos"}),Object(B.jsx)(E.b,{to:"/logiasistemas/about",children:"Que hacemos"}),Object(B.jsx)(E.b,{to:"/logiasistemas/contact",children:"Contacto"}),Object(B.jsx)("button",{onClick:function(){t({type:F})},children:Object(B.jsx)(H,{src:"light"===e?R:G})})]})]})})},Y=w.b.div(d||(d=Object(_.a)(["\n\theight: 100%;\n\t.title {\n\t\ttext-align: center;\n\t\tmargin-top: 2em;\n\t\tcolor: var(--clr-primary-dark);\n\t}\n\n\t.CardContainer {\n\t\tdisplay: flex;\n\t\tmargin-bottom: 2em;\n\t\tjustify-content: space-between;\n\t\talign-items: center;\n\t\tpadding: 2em;\n\t\tflex-wrap: wrap;\n\n\t\t.Card {\n\t\t\tposition: relative;\n\t\t\tmargin: 1em auto 2em auto;\n\t\t\tdisplay: flex;\n\t\t\tflex-direction: column;\n\t\t\talign-items: center;\n\t\t\twidth: 49%;\n\t\t\tborder: 2px solid var(--clr-primary-dark);\n\t\t\tborder-radius: 1em;\n\t\t\tmin-height: 52vh;\n\t\t\tpadding: 0 2em;\n\t\t\tword-wrap: normal;\n\t\t\tbox-shadow: 0 7px 30px rgba(0, 0, 0, 0.7);\n\n\t\t\t.titleContainer {\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t\tflex-wrap: wrap;\n\t\t\t\tjustify-content: space-around;\n\n\t\t\t\t.title {\n\t\t\t\t\tfont-size: 1.5em;\n\t\t\t\t\tmargin-bottom: 1em;\n\t\t\t\t\twidth: 80%;\n\t\t\t\t\ttext-align: center;\n\t\t\t\t}\n\t\t\t}\n\n\t\t\t.info {\n\t\t\t\tline-height: 1.3em;\n\t\t\t\tfont-size: 16px;\n\t\t\t}\n\t\t}\n\t}\n\t@media (max-width: 900px) {\n\t\t.CardContainer {\n\t\t\t.Card {\n\t\t\t\twidth: 95%;\n\t\t\t\tmin-height: 30vh;\n\t\t\t\tpadding: 0 2em 2em 2em;\n\n\t\t\t\t.info {\n\t\t\t\t\tline-height: 1.1em;\n\t\t\t\t\tfont-size: 1.2em;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n"]))),W=Object(w.b)(C.a)(m||(m=Object(_.a)(["\n\theight: 3.5em;\n\tcursor: pointer;\n\tfill: var(--clr-primary-dark);\n\tposition: absolute;\n\tright: 0.5em;\n\ttop: 0.5em;\n\n\ttransition: fill 0.2s ease-in-out;\n\n\t&:hover {\n\t\tfill: var(--clr-primary-dark);\n\t}\n\n\t@media (max-width: 480px) {\n\t\theight: 1.5em;\n\t}\n"]))),J=n.p+"static/media/dinero.68bc8d4d.svg",Q=n.p+"static/media/briefcase.7429922d.svg",U=n.p+"static/media/check.6b5be2c6.svg",Z=n.p+"static/media/gears.0ff4f4ee.svg",K=function(){return Object(B.jsxs)(Y,{children:[Object(B.jsx)(D.a,{children:Object(B.jsx)("h1",{className:"title",children:"\xbfQu\xe9 hacemos?"})}),Object(B.jsxs)("div",{className:"CardContainer",children:[Object(B.jsxs)(D.a,{children:[Object(B.jsxs)("div",{className:"Card",children:[Object(B.jsx)("div",{className:"titleContainer",children:Object(B.jsx)("p",{className:"title",children:"Presupuesto y Mantenimiento"})}),Object(B.jsx)(W,{src:J}),Object(B.jsx)("p",{className:"info",children:"Realizamos presupuestos acorde a la necesidad de nuestros clientes. Los presupuestos, donde por necesidad debamos hacernos presentes para su confeccion, tienen un costo de realizacion, dentro de la zona de cobertura (CABA/AMBA) deducibles al momento de contratacion. los presupuestos via correo electronico son SIN CARGO! Realizamos el mantenimiento necesario de los sistemas que comercializamos mediante un abono anual o simplemente a requerimiento de los clientes al momento en que lo solicite."})]}),Object(B.jsxs)("div",{className:"Card",children:[Object(B.jsx)("div",{className:"titleContainer",children:Object(B.jsx)("p",{className:"title",children:"Instalaci\xf3n y Configuraci\xf3n"})}),Object(B.jsx)(W,{src:Q}),Object(B.jsx)("p",{className:"info",children:"Contamos con un equipo de instaladores altamente calificado para realizar el trabajo requerido y todas las herramientas necesarias para realizar el mismo. Ademas nuestro equipo cuenta con los conocimientos para configurar y poner en funcionamiento cualquiera de los sistemas que comercializamos aconsejandolos de la mejor manera de acuerdo a sus necesidades, siempre contando con nuestra garantia de satisfaccion."})]})]}),Object(B.jsxs)(D.a,{children:[Object(B.jsxs)("div",{className:"Card",children:[Object(B.jsx)("div",{className:"titleContainer",children:Object(B.jsx)("p",{className:"title",children:"Ordenes internacionales"})}),Object(B.jsx)(W,{src:U}),Object(B.jsx)("p",{className:"info",children:"Comercializamos para todo el mundo cursos y capacitaciones para futuros integradores e instaladores, instructivos en texto y video, programas, hojas de datos de los productos que comercializamos, actualizaciones de firmware y software de todos los equipos en nuestro catalogo."})]}),Object(B.jsxs)("div",{className:"Card",children:[Object(B.jsx)("div",{className:"titleContainer",children:Object(B.jsx)("p",{className:"title",children:"Asesoramiento y Soporte"})}),Object(B.jsx)(W,{src:Z}),Object(B.jsx)("p",{className:"info",children:"Ofrecemos asesoramiento y soporte de los sistemas de seguridad electronica via correo electronico o telefonicamente, previa comunicacion con nuestros agentes. De acuerdo al tipo de asesoramiento/soporte que se escoja, difieren los cargos. Favor consultar!"})]})]})]})]})},X=w.b.div(u||(u=Object(_.a)(["\n\tmargin: 2em auto;\n\tborder: 2px solid var(--clr-primary-dark);\n\tpadding: 2em 4em;\n\tborder-radius: 1em;\n\tdisplay: flex;\n\tflex-direction: column;\n\ttext-align: center;\n\tbox-shadow: 0 7px 30px rgba(0, 0, 0, 0.7);\n\n\t.title {\n\t\tfont-size: 2em;\n\t\tmargin-bottom: 1em;\n\t\tcolor: var(--clr-primary-dark);\n\t\tfont-weight: bold;\n\t\ttext-align: center;\n\t}\n\n\t.container1 {\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\talign-items: center;\n\t\tjustify-content: center;\n\t\ttext-align: center;\n\t\tmargin-bottom: 1em;\n\n\t\tp {\n\t\t\tmargin-bottom: 0.5em;\n\t\t}\n\t}\n\n\t.container2 {\n\t\ttext-align: center;\n\t\tflex-direction: column;\n\t\talign-items: center;\n\t\tjustify-content: center;\n\t\tp {\n\t\t\tmargin-bottom: 0.5em;\n\t\t}\n\n\t\ta {\n\t\t\ttext-decoration: none;\n\t\t\tcolor: var(--clr-primary-dark);\n\t\t\tfont-weight: bold;\n\t\t\twidth: 100%;\n\t\t}\n\t}\n\n\t@media (max-width: 500px) {\n\t\tmargin: 2em;\n\t\tpadding: 1.5em;\n\t\t.title {\n\t\t\tfont-size: 1.4em;\n\t\t}\n\n\t\t.container1 {\n\t\t\tfont-size: 0.9em;\n\t\t}\n\t\t.container2 {\n\t\t\tfont-size: 0.9em;\n\t\t}\n\t}\n"]))),$=function(){return Object(B.jsx)(X,{children:Object(B.jsxs)(D.a,{children:[Object(B.jsx)("p",{className:"title",children:"Contacto"}),Object(B.jsxs)("div",{className:"container1",children:[Object(B.jsx)("p",{children:"Ventura Bustos 1935. Castelar (1712)"}),Object(B.jsx)("p",{children:"Buenos Aires - Argentina"})]}),Object(B.jsxs)("div",{className:"container2",children:[Object(B.jsx)("p",{children:"Tel\xe9fono: (011) 2091 -9175"}),Object(B.jsx)("p",{children:"M\xf3vil: (011) 2461 - 0062"}),Object(B.jsx)("a",{href:"mailto:info@logiasistemas.com.ar",children:"info@logiasistemas.com.ar"})]})]})})},tt=n(22),et=function(t){var e=t.enabled,n=t.onClick;return Object(B.jsx)("button",{className:"embla__button embla__button--prev",onClick:n,disabled:!e,children:Object(B.jsxs)("svg",{id:"icon_navigation_chevron_left_24px","data-name":"icon/navigation/chevron_left_24px",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[Object(B.jsx)("rect",{id:"Boundary",width:"24",height:"24",fill:"none"}),Object(B.jsx)("path",{id:"_Color","data-name":" \u21b3Color",d:"M7.4,1.41,5.992,0,0,6l5.992,6L7.4,10.59,2.826,6Z",transform:"translate(8 6)"})]})})},nt=function(t){var e=t.enabled,n=t.onClick;return Object(B.jsx)("button",{className:"embla__button embla__button--next",onClick:n,disabled:!e,children:Object(B.jsxs)("svg",{id:"icon_navigation_chevron_right_24px","data-name":"icon/navigation/chevron_right_24px",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[Object(B.jsx)("rect",{id:"Boundary",width:"24",height:"24",fill:"none"}),Object(B.jsx)("path",{id:"_Color","data-name":" \u21b3Color",d:"M1.408,0,0,1.41,4.574,6,0,10.59,1.408,12,7.4,6Z",transform:"translate(8.6 6)"})]})})},at=[{id:1,image:n.p+"static/media/Camaras-Seguridad.e4fd5acc.jpg",title:"Sistema de Monitoreo",info:"Este sistema ofrece m\xfaltiples niveles de visualizaci\xf3n desde grabadoras digitales de 4 canales hasta 128 canales que soportan desde 1 disco r\xedgido hasta 16 discos r\xedgidos tanto HDD como SSD, con c\xe1maras anal\xf3gicas desde 420 TVL hasta c\xe1maras IP  de 12 Megap\xedxel. Pasando por sistemas h\xedbridos donde conjugan c\xe1maras anal\xf3gicas como digitales HD (alta definici\xf3n) y grabadoras HD hasta 4K. Contamos con todos los accesorios para adecuarnos a cada necesidad de instalaci\xf3n, como balunes pasivos y activos, fuentes switching, micr\xf3fonos y controladoras. Tambi\xe9n contamos con  sistemas m\xf3viles para veh\xedculos como integrados a 1 monitor. Ademas contamos con la mejor calidad y garant\xeda de uno de los fabricantes mas reconocidos a nivel mundial como es DAHUA TECHNOLOGY. Origen China."},{id:2,image:n.p+"static/media/celular.510e9c8e.jpg",title:"Portero Visor",info:"Este sistema de portero visor IP/SIP cubre el rango de vivienda unifamiliar como as\xed tambi\xe9n la vivienda multifamiliar. Dise\xf1ado en vidrio templado y policarbonato, pantalla t\xe1ctil y posibilidad de anexarle alarma. Cubre todas las necesidades de un portero visor y mas, ya que permite actuar tambi\xe9n como intercomunicador y contestador, ya que cuando no hay nadie en la vivienda, permite transferir la llamada al Smartphone. Ademas incluye control de acceso en el frente del portero mediante tarjetas de proximidad y tambi\xe9n se le puede agregar botones o lectoras para facilitar la salida. El sistemas permite ver hasta 32 c\xe1maras de seguridad aparte de la del frente. De una infraestructura muy simple y sencilla permite adecuarse a todo tipo de necesidades (casas, edificios, barrios cerrados, countries, etc.). Fabrica y garantiza DAHUA TECHNOLOGY. Origen China."},{id:3,image:n.p+"static/media/acceso.545e3953.jpg",title:"Control de Acceso",info:"Este sistema de control de acceso puede ser aut\xf3nomo o con reporte. Sirve para controlar accesos y personal. Los aut\xf3nomos sirven para 1 puerta y sustituyen las cerraduras convencionales. Los controles con reporte se conectan a una PC y emiten reportes diarios, semanales, quincenales o mensuales a trav\xe9s de planillas Excel. Contamos con todas las cerraduras y los herrajes ya sea para puertas convencionales o del tipo Blindex, como as\xed tambi\xe9n con lectores de proximidad para tarjetas o llaveros como as\xed tambi\xe9n para huellas dactilares o identificaci\xf3n de rostros. Trabajamos con distintos fabricantes de distintas procedencias, por ende, nos podemos adaptar a cualquier necesidad ya sea por costos o calidad. Origen China."},{id:4,image:n.p+"static/media/deteccion.b77d1fb5.jpg",title:"Detecci\xf3n de Incendio e Inundaci\xf3n",info:"Este sistema de detecci\xf3n de incendio e inundaci\xf3n trabaja mediante protocolos de Internet por ende puede alertar v\xeda SMNP o correo electr\xf3nico ya sea de un incendio, inundaci\xf3n, cambios de temperatura en determinado ambiente y mediante las salidas de rele que posee el equipo se puede activar en forma remota ya sea un sistema de extinci\xf3n de incendios, bombas de desagote, sirenas o hasta la refrigeraci\xf3n si la temperatura cambia del rango definido. Posee un software de administraci\xf3n (no incluido) para Windows y soporta numerosos protocolos de transferencia de datos. El software soporta sistemas operativos MS Windows (x64) y las versiones server. Fabrica y garantiza HWgroup. Origen Rep\xfablica Checa."},{id:5,image:n.p+"static/media/alarmas.53db25ab.jpg",title:"Alarmas",info:"Este sistemas de alarma es un sistema cableado y/o inal\xe1mbrico, al cual se puede integrar cualquier tipo de sensor de movimiento, magnetico (puertas y ventanas), barreras infrarrojas perimetrales, sensores de humo, llamador por red telefonica convencional, celular GSM y comunicador IP por internet. Control desde smartfone (con App Android y IOs). Incluye bater\xeda de respaldo por interrupciones el\xe9ctricas. Y adem\xe1s contamos con alarmar vecinales. Origen China y Argentina."}],it=w.b.div(h||(h=Object(_.a)(["\n\t.embla {\n\t\tposition: relative;\n\t}\n\t.embla__viewport {\n\t\toverflow: hidden;\n\t\twidth: 100%;\n\t}\n\t.embla__viewport.is-draggable {\n\t\tcursor: move;\n\t\tcursor: grab;\n\t}\n\t.embla__viewport.is-dragging {\n\t\tcursor: grabbing;\n\t}\n\t.embla__container {\n\t\tdisplay: flex;\n\t\tuser-select: none;\n\t\t-webkit-touch-callout: none;\n\t\t-khtml-user-select: none;\n\t\t-webkit-tap-highlight-color: transparent;\n\t\tmargin-left: -30px;\n\t}\n\t.embla__slide {\n\t\tposition: relative;\n\t\tmin-width: ",";\n\t\tpadding-left: ",";\n\t}\n\t.embla__slide__inner {\n\t\tdisplay: flex;\n\t\toverflow: hidden;\n\t\theight: 86vh;\n\t\tmin-height: ",";\n\n\t\t@media (max-width: 1000px) {\n\t\t\tmin-height: auto;\n\t\t\theight: 50vh;\n\t\t}\n\t\t.embla__slide__detail {\n\t\t\tcolor: var(--clr-white);\n\t\t\tdisplay: flex;\n\t\t\tjustify-content: space-between;\n\t\t\talign-items: center;\n\t\t\tpadding: 2em 3em;\n\t\t\tbackground: transparent;\n\t\t\tbackground: linear-gradient(\n\t\t\t\t180deg,\n\t\t\t\trgba(0, 0, 0, 0) 0%,\n\t\t\t\trgba(0, 0, 0, 0.5) 100%\n\t\t\t);\n\t\t\t.slide__details__left {\n\t\t\t\ttext-align: center;\n\t\t\t\tmargin-right: 1em;\n\t\t\t\ta {\n\t\t\t\t\ttext-decoration: none;\n\t\t\t\t\tcolor: var(--clr-white);\n\t\t\t\t\ttransition: color 0.2s ease-in-out;\n\t\t\t\t}\n\t\t\t}\n\t\t\t.slide__details__right {\n\t\t\t\ttext-align: right;\n\t\t\t}\n\t\t\t@media (max-width: 1000px) {\n\t\t\t\tfont-size: 0.7em;\n\t\t\t\theight: 100%;\n\t\t\t\tflex-direction: column;\n\t\t\t\tpadding: 2em;\n\t\t\t\t.slide__details__left {\n\t\t\t\t\tjustify-self: flex-start;\n\t\t\t\t\tmargin: 0;\n\t\t\t\t\tmax-width: 100%;\n\t\t\t\t\twidth: 100%;\n\t\t\t\t}\n\t\t\t\t.slide__details__right {\n\t\t\t\t\ttext-align: center;\n\t\t\t\t}\n\t\t\t}\n\t\t\t.slide__title {\n\t\t\t\tfont-size: 3em;\n\t\t\t\tmargin-bottom: 1em;\n\t\t\t\ttext-shadow: 5px 5px 0px var(--clr-primary-2),\n\t\t\t\t\t0 0 20px rgba(0, 0, 0, 0.5);\n\t\t\t\ttransition: text-shadow 0.15s ease-in-out,\n\t\t\t\t\ttransform 0.15s ease-in-out;\n\t\t\t\t&:hover {\n\t\t\t\t\ttransform: translate(3px, 3px);\n\t\t\t\t\ttext-shadow: 2px 2px 0px var(--clr-secondary),\n\t\t\t\t\t\t0 0 20px rgba(0, 0, 0, 0.5);\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n\t.embla__slide__img {\n\t\tdisplay: block;\n\t\tmin-height: 100%;\n\t\twidth: 50%;\n\t\tmax-width: none;\n\t}\n\t.embla__button {\n\t\toutline: 0;\n\t\tcursor: pointer;\n\t\tbackground-color: transparent;\n\t\ttouch-action: manipulation;\n\t\tposition: absolute;\n\t\tz-index: 1;\n\t\ttop: 90%;\n\t\ttransform: translateY(-50%) scale(1);\n\t\tborder: 0;\n\t\tborder-radius: 2em;\n\t\tbackground-color: var(--clr-primary);\n\t\topacity: 0.8;\n\t\tbox-shadow: 0 0.25em 0.5em 0 rgba(0, 0, 0, 0.5);\n\t\twidth: 40px;\n\t\theight: 40px;\n\t\tjustify-content: center;\n\t\talign-items: center;\n\t\tpadding: 0;\n\t\ttransition: transform 0.4s ease;\n\t\t&:active {\n\t\t\ttransform: scale(0.95) translateY(-50%);\n\t\t}\n\t\t&:hover {\n\t\t\tbackground-color: var(--clr-primary-dark);\n\t\t}\n\t}\n\t.embla__button:disabled {\n\t\tcursor: default;\n\t\topacity: 0.3;\n\t}\n\t.embla__button__svg {\n\t\twidth: 100%;\n\t\theight: 100%;\n\t}\n\t.embla__button--prev {\n\t\tleft: 1em;\n\t}\n\t.embla__button--next {\n\t\tright: 1em;\n\t}\n\n\t@media (max-height: 850px) {\n\t\t.embla__slide__inner {\n\t\t\theight: 55vh;\n\t\t}\n\t\t@media (max-height: 750px) {\n\t\t\t.embla__slide__inner {\n\t\t\t\theight: 70vh;\n\t\t\t}\n\t\t}\n\t\t@media (max-height: 650px) {\n\t\t\t.embla__slide__inner {\n\t\t\t\theight: 80vh;\n\t\t\t}\n\t\t}\n\t\t@media (max-height: 570px) {\n\t\t\t.embla__slide__inner {\n\t\t\t\theight: 92vh;\n\t\t\t}\n\t\t}\n\t}\n\t@media (max-width: 600px) {\n\t\t.embla__slide__inner {\n\t\t\tflex-direction: column;\n\n\t\t\t.embla__slide__detail {\n\t\t\t\theight: 60%;\n\t\t\t\tpadding: 0;\n\t\t\t\t.slide__title {\n\t\t\t\t\tfont-size: 1.5em;\n\t\t\t\t\tmargin-top: 1em;\n\t\t\t\t}\n\t\t\t\t.slide__details__left {\n\t\t\t\t\theight: 100%;\n\t\t\t\t\tpadding: 1em;\n\t\t\t\t\tfont-size: 0.9em;\n\t\t\t\t\tline-height: 1.2em;\n\t\t\t\t\tdisplay: flex;\n\t\t\t\t\tflex-direction: column;\n\t\t\t\t\talign-items: center;\n\t\t\t\t\tmargin-bottom: 1em;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t\t.embla__slide__img {\n\t\t\tdisplay: block;\n\t\t\theight: 40%;\n\t\t\tmin-height: 40%;\n\t\t\twidth: 100%;\n\t\t\tmax-width: none;\n\t\t}\n\t}\n"])),(function(t){return t.full?"100%":"80%"}),(function(t){return t.full?"0":"30px"}),(function(t){return t.full?"600px":"auto"})),rt=n(50),ot=function(){var t=Object(rt.useEmblaCarousel)({loop:!0,speed:5}),e=Object(tt.a)(t,2),n=e[0],a=e[1],i=Object(x.useState)(!1),r=Object(tt.a)(i,2),o=r[0],s=r[1],c=Object(x.useState)(!1),l=Object(tt.a)(c,2),d=l[0],m=l[1],u=(Object(O.e)(),Object(x.useCallback)((function(){return a&&a.scrollPrev()}),[a])),h=Object(x.useCallback)((function(){return a&&a.scrollNext()}),[a]),b=Object(x.useCallback)((function(){a&&(s(a.canScrollPrev()),m(a.canScrollNext()))}),[a]);Object(x.useEffect)((function(){a&&(a.on("select",b),b())}),[a,b]);var p=function(t,e){var n=Object(x.useState)(!1),a=Object(tt.a)(n,2),i=a[0],r=a[1],o=Object(x.useCallback)((function(){return r(!1)}),[r]),s=Object(x.useCallback)((function(){return r(!0)}),[r]),c=Object(x.useRef)(t);return Object(x.useEffect)((function(){var t=function(){return r(!0)},e=function(){return r(!1)};return window.addEventListener("focus",t),window.addEventListener("blur",e),function(){window.removeEventListener("focus",t),window.removeEventListener("blur",e)}}),[]),Object(x.useEffect)((function(){c.current=t}),[t]),Object(x.useEffect)((function(){if(i){var t=0,n=function n(){if(!i)return clearTimeout(t);c.current(),requestAnimationFrame((function(){return t=setTimeout(n,e)}))};return requestAnimationFrame((function(){return t=setTimeout(n,e)})),function(){t&&clearTimeout(t),o()}}}),[i,e,o]),{play:s,stop:o}}(Object(x.useCallback)((function(){a&&(a.canScrollNext()?a.scrollNext():a.scrollTo(0))}),[a]),8500),j=(p.play,p.stop);Object(x.useEffect)((function(){a&&(b(),a.on("select",b),a.on("pointerDown",j))}),[a,b,j]);return Object(B.jsx)(it,{full:!at,children:Object(B.jsx)(D.a,{big:!0,children:Object(B.jsxs)("div",{className:"embla",children:[Object(B.jsx)("div",{className:"embla__viewport",ref:n,children:Object(B.jsx)("div",{className:"embla__container",children:at&&at.map((function(t){return Object(B.jsx)("div",{className:"embla__slide",children:Object(B.jsxs)("div",{className:"embla__slide__inner",children:[Object(B.jsx)("img",{className:"embla__slide__img",src:t.image,alt:t.title,onMouseDown:function(t){return function(t){var e=t.target;e.timerOn||(e.timerOn=!0,setTimeout((function(){e.timerOn=!1}),90))}(t)}}),Object(B.jsx)("div",{className:"embla__slide__detail",children:Object(B.jsxs)("div",{className:"slide__details__left",children:[Object(B.jsx)("h3",{className:"slide__title",children:t.title}),Object(B.jsx)("p",{children:t.info})]})})]})},t.id)}))})}),Object(B.jsx)(et,{onClick:u,enabled:o}),Object(B.jsx)(nt,{onClick:h,enabled:d})]})})})},st=w.b.footer(b||(b=Object(_.a)(["\n\twidth: 100%;\n\theight: 11em;\n\tdisplay: flex;\n\tjustify-content: space-between;\n\talign-items: center;\n\tborder-top: 3px solid var(--clr-primary-dark);\n\n\t.ItemContainer {\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\talign-items: center;\n\t\theight: 100%;\n\t\twidth: 33%;\n\t\tmargin: auto;\n\t\tpadding: 3em;\n\n\t\th3 {\n\t\t\tmargin-bottom: 1em;\n\t\t\ttext-transform: uppercase;\n\t\t}\n\n\t\tp {\n\t\t\tmargin-bottom: 0.1em;\n\t\t}\n\n\t\t.SocialContainer {\n\t\t\tdisplay: flex;\n\t\t\talign-items: center;\n\n\t\t\tsvg {\n\t\t\t\tmargin: 0 0.2em;\n\t\t\t}\n\t\t}\n\n\t\ta {\n\t\t\tmargin: 0 1.5em;\n\t\t\tmargin-bottom: 0.1em;\n\t\t\ttransition: color 0.2s ease-in-out;\n\t\t\ttext-decoration: none;\n\t\t\tcolor: var(--clr-primary-dark);\n\t\t}\n\t}\n\t@media (max-width: 920px) {\n\t\theight: 100%;\n\t\tflex-direction: column;\n\t\tpadding: 1em;\n\n\t\t.ItemContainer {\n\t\t\tpadding: 1em;\n\t\t\twidth: 100%;\n\t\t\tmargin: 1em 0;\n\n\t\t\tp {\n\t\t\t\tfont-size: 0.9em;\n\t\t\t}\n\t\t}\n\t}\n\n\t@media (max-width: 600px) {\n\t\tpadding: 0.5em;\n\n\t\t.ItemContainer {\n\t\t\tpadding: 0.4em;\n\t\t\twidth: 100%;\n\t\t}\n\t}\n"]))),ct=w.b.div(p||(p=Object(_.a)(["\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tmargin-bottom: 1em;\n\n\ta {\n\t\tmargin-left: 5px;\n\t\ttext-decoration: none;\n\t\tcolor: var(--clr-primary-dark);\n\t\tfont-weight: bold;\n\t}\n\n\t@media (max-width: 600px) {\n\t\tflex-direction: column;\n\t}\n"]))),lt=(Object(w.b)(C.a)(j||(j=Object(_.a)(["\n\theight: 2em;\n\tcursor: pointer;\n\tfill: currentColor;\n\ttransition: fill 0.2s ease-in-out;\n\n\t&:hover {\n\t\tfill: var(--clr-primary-dark);\n\t}\n\n\t@media (max-width: 480px) {\n\t\theight: 1.5em;\n\t}\n"]))),n(51)),dt=n.n(lt),mt=n(81),ut=n(82),ht=n(83),bt=n(84),pt=n(85),jt=n(86),xt=n(87),gt=n(88),ft=function(){return Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)(D.a,{children:Object(B.jsxs)(st,{children:[Object(B.jsxs)("div",{className:"ItemContainer",children:[Object(B.jsx)("h3",{children:"Direcci\xf3n"}),Object(B.jsx)("p",{children:"Ventura Bustos 1935. Castelar (1712)"}),Object(B.jsx)("p",{children:"Buenos Aires - Argentina"})]}),Object(B.jsxs)("div",{className:"ItemContainer",children:[Object(B.jsx)("h3",{children:"Redomendanos"}),Object(B.jsxs)("div",{className:"SocialContainer",children:[Object(B.jsx)(mt.a,{quote:"Logia Sistemas: Somos una empresa jov\ufeffen y pujante cuyo objetivo es acercar hacia la excelencia tecnol\xf3gica en seguridad y comunicaciones a todos los entes p\xfablicos, privados y a toda la comunidad en su conjunto!",url:"https://pakvothe.github.io/logiasistemas/",children:Object(B.jsx)(ut.a,{round:!0,size:"2em"})}),Object(B.jsx)(ht.a,{url:"https://pakvothe.github.io/logiasistemas/",title:"Logia Sistemas: Sistemas inteligentes, personas inteligentes.",children:Object(B.jsx)(bt.a,{round:!0,size:"2em"})}),Object(B.jsx)(pt.a,{url:"https://pakvothe.github.io/logiasistemas/",title:"Logia Sistemas: Sistemas inteligentes, personas inteligentes.",separator:":: ",children:Object(B.jsx)(jt.a,{round:!0,size:"2em"})}),Object(B.jsx)(xt.a,{title:"Logia Sistemas: Sistemas inteligentes, personas inteligentes.",url:"https://pakvothe.github.io/logiasistemas/",windowWidth:750,windowHeight:600,children:Object(B.jsx)(gt.a,{round:!0,size:"2em"})})]})]}),Object(B.jsxs)("div",{className:"ItemContainer",children:[Object(B.jsx)("h3",{children:"Contacto"}),Object(B.jsx)("a",{href:"mailto:info@logiasistemas.com.ar",children:"info@logiasistemas.com.ar"}),Object(B.jsx)("p",{children:"Tel\xe9fono: (011) 2091-9175"}),Object(B.jsx)("p",{children:"M\xf3vil:(011) 2461-0062"})]})]})}),Object(B.jsxs)(ct,{children:[Object(B.jsxs)(D.a,{children:[Object(B.jsx)("p",{children:"\xa9 Dise\xf1ado y desarrollado por "})," "]}),Object(B.jsx)(dt.a,{children:Object(B.jsx)("a",{href:"https://www.franco-ortiz.com/",target:"_blank",rel:"noreferrer",children:"Franco Ortiz"})})]})]})},vt=n.p+"static/media/arrow-up.2c20b5e3.svg",Ot=n(53),yt=function(){var t=Object(x.useRef)();window.onscroll=function(){t.current&&(document.body.scrollTop>e||document.documentElement.scrollTop>e?(t.current.style.pointerEvents="auto",t.current.style.opacity="100"):(t.current.style.pointerEvents="none",t.current.style.opacity="0"))};var e=400;return Object(B.jsxs)("div",{style:{display:"flex",flexDirection:"column",justifyContent:"space-between",minHeight:"100vh"},children:[Object(B.jsx)(V,{}),Object(B.jsx)(O.a,{exact:!0,path:"/logiasistemas/",children:Object(B.jsx)(L,{})}),Object(B.jsx)(O.a,{exact:!0,path:"/logiasistemas/about",children:Object(B.jsx)(K,{})}),Object(B.jsx)(O.a,{exact:!0,path:"/logiasistemas/products",children:Object(B.jsx)(ot,{})}),Object(B.jsx)(O.a,{exact:!0,path:"/logiasistemas/contact",children:Object(B.jsx)($,{})}),Object(B.jsx)(ft,{}),Object(B.jsx)(z,{ref:t,onClick:function(){Ot.animateScroll.scrollToTop()},children:Object(B.jsx)(N,{src:vt})})]})},_t=function(){var t=Object(v.c)((function(t){return t.theme}));return Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)(y.a,{}),Object(B.jsx)(k,{theme:"light"===t?S:I}),Object(B.jsx)("main",{className:"main-container",children:Object(B.jsx)(O.a,{path:"/",component:yt})})]})},wt=n(25),Ct=n(41),kt=(new Date).getHours(),Nt=kt>=19||kt<=7,zt={theme:localStorage.getItem("theme")||(Nt?"dark":"light")},St=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:zt,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case F:return localStorage.setItem("theme","light"===t.theme?"dark":"light"),Object(Ct.a)(Object(Ct.a)({},t),{},{theme:"light"===t.theme?"dark":"light"});default:return t}},It=Object(wt.b)(St);f.a.render(Object(B.jsx)(v.a,{store:It,children:Object(B.jsx)(E.a,{children:Object(B.jsx)(_t,{})})}),document.getElementById("root"))}},[[79,1,2]]]);
//# sourceMappingURL=main.bf457a52.chunk.js.map