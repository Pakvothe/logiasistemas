(this.webpackJsonplogiasistemas=this.webpackJsonplogiasistemas||[]).push([[0],{60:function(t,e,n){},65:function(t,e,n){},81:function(t,e,n){"use strict";n.r(e);var a,i,r,o,s,c,d,l,m,p,u,h,b,j,x=n(1),g=n(21),f=n.n(g),v=(n(60),n(15)),O=n(4),y=n(54),w=(n(65),n(5)),C=n(6),k=n(13),N=Object(C.a)(a||(a=Object(w.a)(["\n\tbody {\n\t\tbackground-color: ",";\n\t\tcolor:  ",";\n\t\n\t}\n"])),(function(t){return t.theme.body}),(function(t){return t.theme.text})),z=Object(C.b)(k.a)(i||(i=Object(w.a)([""]))),A=C.b.button(r||(r=Object(w.a)(["\n\tpointer-events: none;\n\topacity: 0;\n\tposition: fixed;\n\tright: 25px;\n\tbottom: 25px;\n\tborder: 0;\n\tpadding: 0.3em;\n\tbackground: var(--clr-primary);\n\tcolor: var(--clr-light);\n\tborder-radius: 999em;\n\tcursor: pointer;\n\tbox-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);\n\ttransition: color 0.2s ease-in-out, opacity 1000ms ease-in-out;\n\tsvg {\n\t\tfill: var(--clr-light);\n\t\twidth: 2.5em;\n\t\theight: 2.5em;\n\t}\n\t&:hover {\n\t\tbox-shadow: inset 2px 2px 5px rgba(0, 0, 0, 0.2);\n\t\tbackground: var(--clr-primary-dark);\n\t\tsvg {\n\t\t\tfill: var(--clr-light);\n\t\t}\n\t}\n\t&:focus {\n\t\toutline: none;\n\t}\n\t@media (max-width: 480px) {\n\t\tright: 15px;\n\t\tbottom: 15px;\n\t\tpadding: 0.5em;\n\t\tsvg {\n\t\t\twidth: 1.5em;\n\t\t\theight: 1.5em;\n\t\t}\n\t}\n"]))),E={body:"var(--clr-light)",text:"var(--clr-primary-text)"},S={body:"var(--clr-dark)",text:"var(--clr-dark-text)"},I=n(10),P=C.b.div(o||(o=Object(w.a)(["\n  .ParallaxInside {\n    height: 80vh;\n    .sideBar {\n      background-color: rgba(0, 0, 0, 0.8);\n      width: 400px;\n      height: 100%;\n      box-shadow: 5px 5px 5px 2px rgba(0, 0, 0, 0.2);\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      justify-content: space-evenly;\n      padding: 3em;\n\n      .sideItems {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        justify-content: center;\n        height: 33%;\n\n        &:first-child {\n          color: var(--clr-primary);\n          text-transform: uppercase;\n          p {\n            color: var(--clr-primary);\n            font-size: 2em;\n          }\n          h3 {\n            font-size: 3em;\n            margin-bottom: 0.3em;\n          }\n        }\n\n        p {\n          color: white;\n          font-size: 1.5em;\n          margin-bottom: 0.3em;\n        }\n\n        .ContactButton {\n          text-decoration: none;\n          font-size: 1.5em;\n          font-weight: bold;\n          color: white;\n        }\n      }\n\n      .contactContainer {\n        border-radius: 99em;\n        background-color: var(--clr-primary);\n        transition: background-color 0.4s ease-in-out;\n        cursor: pointer;\n        height: 15%;\n        width: 90%;\n        &:hover {\n          background-color: var(--clr-primary-dark);\n        }\n      }\n    }\n  }\n\n  .intro {\n    margin: 2em;\n    text-align: center;\n    font-size: 1.2em;\n    line-height: 1.2em;\n    font-style: italic;\n  }\n\n  .homeTitle {\n    text-align: center;\n    color: var(--clr-primary-dark);\n    margin-bottom: 1em;\n    line-height: 1.3em;\n  }\n\n  .CardContainer {\n    padding: 0 4em;\n    display: flex;\n    justify-content: center;\n    flex-wrap: wrap;\n\n    .Card {\n      margin: 1em;\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      width: 350px;\n      height: 400px;\n      border: 2px solid var(--clr-primary-dark);\n      border-radius: 0.25rem;\n      padding: 1em;\n      transition: background-color 0.2s ease-in-out;\n      word-wrap: normal;\n      box-shadow: 0 7px 30px rgba(0, 0, 0, 0.7);\n      overflow: auto;\n\n      .cardTitle {\n        font-size: 1.5em;\n        text-transform: uppercase;\n        text-align: center;\n        margin-bottom: 1em;\n        color: var(--clr-primary-dark);\n      }\n\n      .cardInfo {\n        line-height: 1.3em;\n        font-size: 16px;\n      }\n    }\n  }\n\n  @media (min-height: 800px) {\n    .ParallaxInside {\n      .sideBar {\n        .sideItems {\n        }\n        .contactContainer {\n          margin-top: 1em;\n          height: 75px;\n          width: 90%;\n        }\n      }\n    }\n  }\n  @media (max-width: 900px) {\n    .CardContainer {\n      padding: 0;\n      .Card {\n        align-items: center;\n        justify-content: center;\n        width: 95%;\n      }\n    }\n  }\n  @media (min-width: 901px) {\n    .CardContainer {\n      .Card {\n        height: 350px;\n\n        padding: 1.5em;\n      }\n    }\n  }\n\n  @media (max-width: 800px) {\n    .ParallaxInside {\n      display: flex;\n      justify-content: flex-end;\n      align-items: flex-end;\n\n      .sideBar {\n        width: 100%;\n        height: 50%;\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        justify-content: space-evenly;\n\n        .sideItems {\n          &:first-child {\n            margin-bottom: 1em;\n            p {\n              font-size: 1.5em;\n            }\n            h3 {\n              font-size: 2em;\n            }\n          }\n\n          p {\n            color: white;\n            font-size: 1em;\n            margin-bottom: 0.3em;\n          }\n        }\n        .contactContainer {\n          margin-top: 1em;\n          height: 20%;\n          width: 90%;\n        }\n      }\n    }\n  }\n  @media (max-width: 550px) {\n    .intro {\n      font-size: 1.1em;\n    }\n    .homeTitle {\n      font-size: 1.4em;\n      margin: 1em 5px;\n    }\n  }\n"]))),T=(Object(C.b)(k.a)(s||(s=Object(w.a)(["\n  height: 2em;\n  cursor: pointer;\n  fill: currentColor;\n  transition: fill 0.2s ease-in-out;\n\n  &:hover {\n    fill: var(--clr-primary-dark);\n  }\n\n  @media (max-width: 480px) {\n    height: 1.5em;\n  }\n"]))),n(49)),q=n.p+"static/media/homeback.2c93b220.jpg",_=n(3),D=n.n(_),L=n(0),R=function(){var t=Object(O.e)();return Object(L.jsxs)(P,{children:[Object(L.jsx)(T.Parallax,{bgImage:q,bgImageAlt:"obelisco",strength:500,children:Object(L.jsx)(D.a,{left:!0,big:!0,children:Object(L.jsx)("div",{className:"ParallaxInside",children:Object(L.jsxs)("div",{className:"sideBar",children:[Object(L.jsxs)("div",{className:"sideItems",children:[Object(L.jsx)("h3",{children:"Seguridad"}),Object(L.jsx)("p",{children:"Electr\xf3nica"})]}),Object(L.jsxs)("div",{className:"sideItems",children:[Object(L.jsx)("p",{children:"Sistemas inteligentes,"}),Object(L.jsx)("p",{children:"personas inteligentes."})]}),Object(L.jsx)("div",{className:"sideItems contactContainer",onClick:function(){t.push("/contact")},children:Object(L.jsx)(I.b,{to:"/contact",className:"ContactButton",children:"Cont\xe1ctenos"})})]})})})}),Object(L.jsx)("div",{className:"intro",children:Object(L.jsx)(D.a,{children:Object(L.jsx)("p",{children:"\xa1Somos una empresa joven y pujante cuyo objetivo es acercar hacia la excelencia tecnol\xf3gica en seguridad y comunicaciones a todos los entes p\xfablicos, privados y a toda la comunidad en su conjunto!"})})}),Object(L.jsx)(D.a,{children:Object(L.jsx)("h1",{className:"homeTitle",children:"Nuestros servicios"})}),Object(L.jsxs)("div",{className:"CardContainer",children:[Object(L.jsx)(D.a,{children:Object(L.jsxs)("div",{className:"Card",children:[Object(L.jsx)("p",{className:"cardTitle",children:"Sistema de Monitoreo"}),Object(L.jsx)("p",{className:"cardInfo",children:"Es un sistema de monitoreo en tiempo real mediante la utilizaci\xf3n de Grabadoras Digitales, distintos tipos de c\xe1maras (box, infrarrojas, antivandalicas, resistentes al agua, con audio, etc.) Por ende se puede visualizar desde una PC como circuito cerrado y en forma remota a trav\xe9s de internet mediante una PC, tablet o tel\xe9fono inteligente (Android o iOS)."})]})}),Object(L.jsx)(D.a,{children:Object(L.jsxs)("div",{className:"Card",children:[Object(L.jsx)("p",{className:"cardTitle",children:"Portero Visor electr\xf3nico"}),Object(L.jsx)("p",{className:"cardInfo",children:"Es un sistema de portero electr\xf3nico con c\xe1mara incorporada para visualizar al visitante, adem\xe1s permite al visitante dejar mensajes de v\xeddeo cuando no hay nadie en la vivienda. El sistema admite m\xfaltiples paneles tanto exteriores como interiores. Adem\xe1s se le puede agregar control de acceso."})]})}),Object(L.jsx)(D.a,{children:Object(L.jsxs)("div",{className:"Card",children:[Object(L.jsx)("p",{className:"cardTitle",children:"Control de Acceso"}),Object(L.jsx)("p",{className:"cardInfo",children:"Es un sistema de control de acceso que permite controlar 1 como m\xfaltiples puertas mediante tarjetas de proximidad, llaveros de proximidad, huellas dactilares y/o rostros. Pueden ser aut\xf3nomos o con reporte. Permite desde 1000 usuarios hasta 30000 usuarios. Adem\xe1s contamos con todos los accesorios de herrajes y cerraduras."})]})}),Object(L.jsx)(D.a,{children:Object(L.jsxs)("div",{className:"Card",children:[Object(L.jsx)("p",{className:"cardTitle",children:"Detecci\xf3n de Incendio - Inundaci\xf3n"}),Object(L.jsx)("p",{className:"cardInfo",children:"Es un sistema de detecci\xf3n de incendio e inundaci\xf3n electr\xf3nico mediante detectores de humo, llama, temperatura y humedad. El sistema emite alertas sonoras, lum\xednicas y mediante SNMP y correo electr\xf3nico a una PC o tel\xe9fono inteligente."})]})}),Object(L.jsx)(D.a,{children:Object(L.jsxs)("div",{className:"Card",children:[Object(L.jsx)("p",{className:"cardTitle",children:"Alarmas"}),Object(L.jsx)("p",{className:"cardInfo",children:"Es una central de alarma electr\xf3nica e inal\xe1mbrica con llamador por red celular GSM, no necesita una l\xednea de tel\xe9fono convencional (Telef\xf3nica, Telecom, Cooperativas), solo un chip celular (postpago o prepago de cualquier compa\xf1\xeda (Movistar, Personal, Claro, Nextel) evitando as\xed posibles cortes en la l\xednea de tel\xe9fono y evitando de plano la interrupci\xf3n de la comunicaci\xf3n de la alarma."})]})}),Object(L.jsx)(D.a,{children:Object(L.jsxs)("div",{className:"Card",children:[Object(L.jsx)("p",{className:"cardTitle",children:"Dom\xf3tica"}),Object(L.jsx)("p",{className:"cardInfo",children:"Mediante dispositivos conectados a la red (LAN) v\xeda Ethernet o Wifi se automatizan diferentes sistemas como luces, puertas o portones, persianas cortinas, equipos de aire acondicionado, riego calderas, etc. Los dispositivos conectados transmiten v\xeda internet y se pueden manejar en forma remota a trav\xe9s de App o incluso mediante compatibilidad se pueden manejar por voz v\xeda Amazon Alexa o Google Home."})]})}),Object(L.jsx)(D.a,{children:Object(L.jsxs)("div",{className:"Card",children:[Object(L.jsx)("p",{className:"cardTitle",children:"Cerco el\xe9ctrico perimetral"}),Object(L.jsx)("p",{className:"cardInfo",children:"El sistema consisten en cercar perimetralmente la propiedad mediante una estructura de hierro y alambres de aluminio, conectando el cerco a un energizador que emite pulsos el\xe9ctricos. Este equipo funciona como alarma conect\xe1ndolo a una sirena directamente o a una zona de alarma existente. Se puede activar/desactivar en forma remota a trav\xe9s de App v\xeda internet."})]})})]}),Object(L.jsx)(D.a,{children:Object(L.jsx)("h1",{className:"homeTitle",children:"Sistemas inteligentes, personas inteligentes."})})]})},M=C.b.nav(c||(c=Object(w.a)(["\n\twidth: 100%;\n\theight: 6em;\n\tdisplay: flex;\n\tjustify-content: space-between;\n\talign-items: center;\n\tborder-bottom: 3px solid var(--clr-primary-dark);\n\n\t.title {\n\t\tmargin-left: 2em;\n\t\ttext-decoration: none;\n\t\tcolor: currentColor;\n\t\ttransition: color 0.2s ease-in-out;\n\t\tfont-size: 1.8em;\n\t\tfont-weight: bold;\n\t\t&:hover {\n\t\t\tcolor: var(--clr-primary-dark);\n\t\t}\n\t}\n\n\t.navContainer {\n\t\tmargin-right: 2em;\n\t\tdisplay: flex;\n\t\tjustify-content: space-between;\n\t\talign-items: center;\n\n\t\ta {\n\t\t\tmargin: 0 1.5em;\n\t\t\ttransition: color 0.2s ease-in-out;\n\t\t\ttext-decoration: none;\n\t\t\tcolor: currentColor;\n\n\t\t\t&:hover {\n\t\t\t\tcolor: var(--clr-primary-dark);\n\t\t\t}\n\t\t}\n\n\t\tbutton {\n\t\t\tbackground-color: transparent;\n\t\t\tcolor: currentColor;\n\t\t\tborder: none;\n\t\t\ttransition: color 0.2s ease-in-out;\n\n\t\t\t&:focus {\n\t\t\t\toutline: none;\n\t\t\t}\n\n\t\t\t&:hover {\n\t\t\t\tcolor: var(--clr-primary-dark);\n\t\t\t}\n\t\t}\n\t}\n\n\t@media (max-width: 920px) {\n\t\theight: 100%;\n\t\tflex-direction: column;\n\t\tpadding: 1em 0;\n\t\t.title {\n\t\t\tmargin: 0.5em auto;\n\t\t\tposition: relative;\n\t\t}\n\n\t\t.navContainer {\n\t\t\twidth: 100%;\n\t\t\tflex-direction: column;\n\t\t\tmargin: 0 auto;\n\n\t\t\ta {\n\t\t\t\tmargin-bottom: 0.5em;\n\t\t\t}\n\n\t\t\tbutton {\n\t\t\t\tposition: absolute;\n\t\t\t\ttop: 10px;\n\t\t\t\tright: 10px;\n\t\t\t}\n\t\t}\n\t}\n"]))),H=Object(C.b)(k.a)(d||(d=Object(w.a)(["\n\theight: 2em;\n\tcursor: pointer;\n"]))),B="TOGGLE_THEME",F=n.p+"static/media/moon.a3942c9a.svg",G=n.p+"static/media/sun.ff94d771.svg",W=function(){var t=Object(v.b)(),e=Object(v.c)((function(t){return t.theme}));return Object(L.jsx)(D.a,{children:Object(L.jsxs)(M,{children:[Object(L.jsx)(I.b,{to:"/",className:"title",children:Object(L.jsx)("p",{children:"Logia Sistemas"})}),Object(L.jsxs)("div",{className:"navContainer",children:[Object(L.jsx)(I.b,{to:"/",children:"Inicio"}),Object(L.jsx)(I.b,{to:"/products",children:"Productos"}),Object(L.jsx)(I.b,{to:"/about",children:"\xbfQu\xe9 hacemos?"}),Object(L.jsx)(I.b,{to:"/contact",children:"Contacto"}),Object(L.jsx)("button",{onClick:function(){t({type:B})},children:Object(L.jsx)(H,{src:"light"===e?G:F})})]})]})})},V=C.b.div(l||(l=Object(w.a)(["\n  min-height: 70vh;\n  .titlePpal {\n    text-align: center;\n    color: var(--clr-primary-dark);\n  }\n\n  .CardContainer {\n    display: flex;\n    margin-bottom: 2em;\n    justify-content: center;\n    padding: 0 4em;\n    flex-wrap: wrap;\n\n    .Card {\n      position: relative;\n      margin: 1em;\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      cursor: pointer;\n      width: 350px;\n      height: 420px;\n      border: 2px solid var(--clr-primary-dark);\n      border-radius: 1em;\n      padding: 1em;\n      transition: background-color 0.2s ease-in-out;\n      word-wrap: normal;\n      box-shadow: 0 7px 30px rgba(0, 0, 0, 0.7);\n      overflow: auto;\n\n      .titleContainer {\n        display: flex;\n        align-items: center;\n        flex-wrap: wrap;\n        justify-content: space-around;\n\n        .title {\n          font-size: 1.5em;\n          text-transform: uppercase;\n          text-align: center;\n          margin-bottom: 1em;\n          margin-top: 1em;\n          color: var(--clr-primary-dark);\n        }\n      }\n\n      .info {\n        line-height: 1.3em;\n        font-size: 16px;\n      }\n    }\n  }\n\n  @media (max-width: 900px) {\n    .CardContainer {\n      padding: 0;\n\n      .Card {\n        align-items: center;\n        justify-content: center;\n        width: 95%;\n      }\n    }\n  }\n\n  @media (max-width: 400px) {\n    .CardContainer {\n      .Card {\n        height: auto;\n      }\n    }\n  }\n"]))),U=Object(C.b)(k.a)(m||(m=Object(w.a)(["\n  height: 3em;\n  cursor: pointer;\n  fill: var(--clr-primary-dark);\n  position: absolute;\n  right: 10px;\n  top: 10px;\n\n  transition: fill 0.2s ease-in-out;\n\n  &:hover {\n    fill: var(--clr-primary-dark);\n  }\n\n  @media (max-width: 480px) {\n    height: 2.5em;\n  }\n"]))),K=n.p+"static/media/dinero.68bc8d4d.svg",Y=n.p+"static/media/briefcase.7429922d.svg",J=n.p+"static/media/check.6b5be2c6.svg",Q=n.p+"static/media/gears.0ff4f4ee.svg",X=function(){return Object(L.jsx)(L.Fragment,{children:Object(L.jsxs)(V,{children:[Object(L.jsx)(D.a,{children:Object(L.jsx)("h1",{className:"titlePpal",children:"\xbfQu\xe9 hacemos?"})}),Object(L.jsxs)("div",{className:"CardContainer",children:[Object(L.jsxs)(D.a,{children:[Object(L.jsxs)("div",{className:"Card",children:[Object(L.jsx)("div",{className:"titleContainer",children:Object(L.jsx)("p",{className:"title",children:"Presupuesto y Mantenimiento"})}),Object(L.jsx)(U,{src:K}),Object(L.jsx)("p",{className:"info",children:"Realizamos presupuestos acordes a la necesidad de nuestros clientes. Los presupuestos, donde por necesidad debamos hacernos presentes para su confecci\xf3n, tienen un costo de realizaci\xf3n, dentro de la zona de cobertura (CABA/AMBA) deducibles al momento de contrataci\xf3n. Los presupuestos v\xeda correo electr\xf3nico son SIN CARGO! Realizamos el mantenimiento necesario de los sistemas que comercializamos mediante un abono anual o simplemente a requerimiento de los clientes al momento en que lo solicite."})]}),Object(L.jsxs)("div",{className:"Card",children:[Object(L.jsx)("div",{className:"titleContainer",children:Object(L.jsx)("p",{className:"title",children:"Instalaci\xf3n y Configuraci\xf3n"})}),Object(L.jsx)(U,{src:Y}),Object(L.jsx)("p",{className:"info",children:"Contamos con un equipo de instaladores altamente calificado para realizar el trabajo requerido y todas las herramientas necesarias para realizar el mismo. Adem\xe1s nuestro equipo cuenta con los conocimientos para configurar y poner en funcionamiento cualquiera de los sistemas que comercializamos aconsej\xe1ndolos de la mejor manera de acuerdo a sus necesidades, siempre contando con nuestra garant\xeda de satisfacci\xf3n."})]})]}),Object(L.jsxs)(D.a,{children:[Object(L.jsxs)("div",{className:"Card",children:[Object(L.jsx)("div",{className:"titleContainer",children:Object(L.jsx)("p",{className:"title",children:"Ordenes internacionales"})}),Object(L.jsx)(U,{src:J}),Object(L.jsx)("p",{className:"info",children:"Comercializamos para todo el mundo cursos y capacitaciones para futuros integradores e instaladores, instructivos en texto y video, programas, hojas de datos de los productos que comercializamos, actualizaciones de firmware y software de todos los equipos en nuestro cat\xe1logo."})]}),Object(L.jsxs)("div",{className:"Card",children:[Object(L.jsx)("div",{className:"titleContainer",children:Object(L.jsx)("p",{className:"title",children:"Asesoramiento y Soporte"})}),Object(L.jsx)(U,{src:Q}),Object(L.jsx)("p",{className:"info",children:"Ofrecemos asesoramiento y soporte de los sistemas de seguridad electr\xf3nica v\xeda correo electr\xf3nico o telef\xf3nicamente, previa comunicaci\xf3n con nuestros agentes. De acuerdo al tipo de asesoramiento/soporte que se escoja, difieren los cargos. \xa1Por Favor consultar!"})]})]})]})]})})},Z=n(40),$=n.n(Z),tt=n(50),et=n.n(tt),nt=C.b.div(p||(p=Object(w.a)(["\n\tmin-height: 70vh;\n\n\t.flex-form-container {\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\tjustify-content: center;\n\t\talign-items: center;\n\t\twidth: 50%;\n\t\tmargin: 0 auto;\n\n\t\t.title {\n\t\t\ttext-align: center;\n\t\t\tcolor: var(--clr-primary-dark);\n\t\t\tline-height: 1.3em;\n\t\t}\n\t}\n\n\t.flex-form-container > div + div {\n\t\tmargin-left: 3em;\n\t}\n\t@media (max-width: 1050px) {\n\t\t.flex-form-container > div + div {\n\t\t\tmargin: 1.5em 0 0;\n\t\t}\n\t}\n\n\t.flex-form-container label {\n\t\tdisplay: block;\n\t\tposition: relative;\n\t\twidth: 100%;\n\t}\n\n\t.flex-form-container label > span:not(.no-shadow) {\n\t\tposition: absolute;\n\t\tleft: 1em;\n\t\ttop: -0.2em;\n\t\tpadding: 0 0.5em;\n\t\tfont-weight: 900;\n\t\tfont-size: 0.9em;\n\t}\n\n\t.flex-form-container label > input,\n\ttextarea {\n\t\tfont: inherit;\n\t\tfont-size: 0.8em;\n\t\tpadding: 1em;\n\t\tborder: 3px solid currentColor;\n\t\tborder-radius: 1em;\n\t\twidth: 100%;\n\t\ttransition: box-shadow 0.2s ease;\n\t\toutline: none;\n\t}\n\n\t.flex-form-container label > textarea {\n\t\tpadding: 1em 0.6em;\n\t\tline-height: 1.3;\n\t}\n\n\t.flex-form-container label:not(no-shadow)::after {\n\t\tcontent: '';\n\t\tposition: absolute;\n\t\ttop: 5px;\n\t\tbottom: -5px;\n\t\tleft: 5px;\n\t\twidth: 100%;\n\t\tborder-radius: 1em;\n\t\tbackground: var(--clr-primary-dark);\n\t\topacity: 0.15;\n\t\ttransition: opacity 0.2s ease;\n\t\tz-index: -1;\n\t}\n\n\t.flex-form-container label:focus-within::after {\n\t\topacity: 1;\n\t}\n\n\t.flex-form-container label + label {\n\t\tmargin-top: 2em;\n\t}\n\n\t.flex-form-container input,\n\ttextarea {\n\t\twidth: 100%;\n\t\tdisplay: block;\n\t\tborder: 0;\n\t\tfont: inherit;\n\t\tpadding: 0.5em;\n\t\tborder: 3px solid currentColor;\n\t\tborder-radius: 1em;\n\t\tmargin-top: 0.3em;\n\t}\n\n\t.flex-form-container input,\n\ttextarea:focus {\n\t\tborder-color: var(--clr-primary-dark);\n\t}\n\n\t.flex-form-container textarea {\n\t\tmin-height: 150px;\n\t\theight: 100%;\n\t\tmargin-bottom: 0.5em;\n\t}\n\n\t.flex-form-container .submit {\n\t\tmin-width: 50%;\n\t\tborder-radius: 1em;\n\t\tcolor: white;\n\t\tfont-size: 1.2em;\n\t\ttext-align: center;\n\t\tpadding: 0.5em;\n\t\tfont-weight: 600;\n\t\tbackground-color: var(--clr-primary-dark);\n\t\tborder: 3px solid var(--clr-primary-dark);\n\t\tmargin: 1em 0;\n\t\tbox-shadow: 0 7px 30px rgba(0, 0, 0, 0.7);\n\t\ttransition: color 0.2s ease-in-out;\n\t}\n\t.submit:hover {\n\t\tborder-color: var(--clr-primary);\n\t\tcursor: pointer;\n\t\tbox-shadow: inset 3px 3px 7px rgba(0, 0, 0, 0.2);\n\t}\n\n\t@media (max-width: 480px) {\n\t\t.flex-form-container input {\n\t\t\twidth: 100%;\n\t\t}\n\n\t\t.flex-form-container {\n\t\t\twidth: 90%;\n\t\t\tjustify-content: center;\n\t\t\talign-items: center;\n\t\t}\n\t\t.flex-form-container label {\n\t\t\talign-items: center;\n\t\t\tjustify-content: center;\n\t\t}\n\t}\n"]))),at=function(){var t=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_SERVICE:"service_54124l8",REACT_APP_TEMPLATE:"template_qu7iewu",REACT_APP_USER:"user_AdDs9jYR9gk8rs8pz4zez"}),e=t.REACT_APP_SERVICE,n=t.REACT_APP_TEMPLATE,a=t.REACT_APP_USER,i=Object(v.c)((function(t){return t.theme})),r=Object(O.e)();return Object(L.jsx)(nt,{children:Object(L.jsx)(D.a,{children:Object(L.jsx)("form",{onSubmit:function(t){t.preventDefault(),et.a.sendForm(e,n,t.target,a).then((function(t){$.a.fire({heightAuto:!1,title:"Enviado",text:"Correo enviado correctamente, responderemos a la brevedad.",icon:"success",confirmButtonText:"Ok",confirmButtonColor:"#0097A7",willClose:function(){document.body.style.overflow="unset",r.push("/")}})}),(function(t){$.a.fire({heightAuto:!1,title:"Error!",text:"Hubo un error, intentalo de nuevo mas tarde.",icon:"error",confirmButtonText:"Ok",confirmButtonColor:"#0097A7",willClose:function(){document.body.style.overflow="unset"}})})),t.target.reset()},children:Object(L.jsxs)("div",{className:"flex-form-container",children:[Object(L.jsx)("h1",{className:"title",children:"Contacto"}),Object(L.jsxs)("label",{children:[Object(L.jsx)("span",{style:{background:"dark"===i?"#2d2d2d":"white"},children:"Nombre"}),Object(L.jsx)("input",{className:"inputs",style:{color:"dark"===i?"white":"black",background:"dark"===i?"#2d2d2d":"white"},type:"text",name:"name",required:!0})]}),Object(L.jsxs)("label",{children:[Object(L.jsx)("span",{style:{background:"dark"===i?"#2d2d2d":"white"},children:"Correo"}),Object(L.jsx)("input",{className:"inputs",style:{color:"dark"===i?"white":"black",background:"dark"===i?"#2d2d2d":"white"},type:"email",name:"email",required:!0})]}),Object(L.jsxs)("label",{children:[Object(L.jsx)("span",{style:{background:"dark"===i?"#2d2d2d":"white"},children:"Asunto"}),Object(L.jsx)("input",{className:"inputs",style:{color:"dark"===i?"white":"black",background:"dark"===i?"#2d2d2d":"white"},type:"text",name:"subject",required:!0})]}),Object(L.jsxs)("label",{children:[Object(L.jsx)("span",{style:{background:"dark"===i?"#2d2d2d":"white"},children:"Mensaje"}),Object(L.jsx)("textarea",{style:{color:"dark"===i?"white":"black",background:"dark"===i?"#2d2d2d":"white"},className:"inputs",name:"message",placeholder:"Este formulario nos env\xeda un correo directamente a nuestra casilla. Si\xe9ntete libre de escribirnos.",required:!0})]}),Object(L.jsx)("input",{className:"submit",type:"submit",value:"Enviar Mensaje"})]})})})})},it=[{id:1,image:n.p+"static/media/Camaras-Seguridad.e4fd5acc.jpg",title:"Sistema de Monitoreo",info:"Este sistema ofrece m\xfaltiples niveles de visualizaci\xf3n desde grabadoras digitales de 4 canales hasta 128 canales que soportan desde 1 disco r\xedgido hasta 16 discos r\xedgidos tanto HDD como SSD, con c\xe1maras anal\xf3gicas desde 420 TVL hasta c\xe1maras IP de 12 Megap\xedxel. Pasando por sistemas h\xedbridos donde conjugan c\xe1maras anal\xf3gicas como digitales HD (alta definici\xf3n) y grabadoras HD hasta 4K. Contamos con todos los accesorios para adecuarnos a cada necesidad de instalaci\xf3n, como balunes pasivos y activos, fuentes switching, micr\xf3fonos y controladoras. Tambi\xe9n contamos con sistemas m\xf3viles para veh\xedculos como integrados a 1 monitor. Adem\xe1s contamos con la mejor calidad y garant\xeda de uno de los fabricantes m\xe1s reconocidos a nivel mundial como es DAHUA TECHNOLOGY. Origen China."},{id:2,image:n.p+"static/media/celular.510e9c8e.jpg",title:"Portero Visor",info:"Este sistema de portero visor IP/SIP cubre el rango de vivienda unifamiliar como as\xed tambi\xe9n la vivienda multifamiliar. Dise\xf1ado en vidrio templado y policarbonato, pantalla t\xe1ctil y posibilidad de anexarle alarma. Cubre todas las necesidades de un portero visor y m\xe1s, ya que permite actuar tambi\xe9n como intercomunicador y contestador, ya que cuando no hay nadie en la vivienda, permite transferir la llamada al Smartphone. Adem\xe1s incluye control de acceso en el frente del portero mediante tarjetas de proximidad y tambi\xe9n se le puede agregar botones o lectoras para facilitar la salida. El sistema permite ver hasta 32 c\xe1maras de seguridad aparte de la del frente. De una infraestructura muy simple y sencilla permite adecuarse a todo tipo de necesidades (casas, edificios, barrios cerrados, countries, etc.). Fabrica y garantiza DAHUA TECHNOLOGY. Origen China."},{id:3,image:n.p+"static/media/acceso.545e3953.jpg",title:"Control de Acceso",info:"Este sistema de control de acceso puede ser aut\xf3nomo o con reporte. Sirve para controlar accesos y personal. Los aut\xf3nomos sirven para 1 puerta y sustituyen las cerraduras convencionales. Los controles con reporte se conectan a una PC y emiten reportes diarios, semanales, quincenales o mensuales a trav\xe9s de planillas Excel. Contamos con todas las cerraduras y los herrajes ya sea para puertas convencionales o del tipo Blindex, como as\xed tambi\xe9n con lectores de proximidad para tarjetas o llaveros como as\xed tambi\xe9n para huellas dactilares o identificaci\xf3n de rostros. Trabajamos con distintos fabricantes de distintas procedencias, por ende, nos podemos adaptar a cualquier necesidad ya sea por costos o calidad. Origen China."},{id:4,image:n.p+"static/media/deteccion.b77d1fb5.jpg",title:"Detecci\xf3n de Incendio e Inundaci\xf3n",info:"Este sistema de detecci\xf3n de incendio e inundaci\xf3n trabaja mediante protocolos de Internet por ende puede alertar v\xeda SMNP o correo electr\xf3nico ya sea de un incendio, inundaci\xf3n, cambios de temperatura en determinado ambiente y mediante las salidas de rel\xe9 que posee el equipo se puede activar en forma remota ya sea un sistema de extinci\xf3n de incendios, bombas de desagote, sirenas o hasta la refrigeraci\xf3n si la temperatura cambia del rango definido. Posee un software de administraci\xf3n (no incluido) para Windows y soporta numerosos protocolos de transferencia de datos. El software soporta sistemas operativos MS Windows (x64) y las versiones server. Fabrica y garantiza HWgroup. Origen Rep\xfablica Checa."},{id:5,image:n.p+"static/media/alarmas.53db25ab.jpg",title:"Alarmas",info:"Este sistema de alarma es un sistema cableado y/o inal\xe1mbrico, al cual se puede integrar cualquier tipo de sensor de movimiento, magn\xe9tico (puertas y ventanas), barreras infrarrojas perimetrales, sensores de humo, llamador por red telef\xf3nica convencional, celular GSM y comunicador IP por internet. Control desde smartphone (con App Android y IOs). Incluye bater\xeda de respaldo por interrupciones el\xe9ctricas. Y adem\xe1s contamos con alarmar vecinales. Origen China y Argentina."},{id:6,image:n.p+"static/media/domotica.9393d51c.jpg",title:"Dom\xf3tica",info:"Mediante dispositivos conectados a la red (LAN) v\xeda Ethernet o\n\t\t\tWifi se automatizan diferentes sistemas como luces, puertas o\n\t\t\tportones, persianas cortinas, equipos de aire acondicionado, riego\n\t\t\tcalderas, etc. Los dispositivos conectados transmiten v\xeda internet\n\t\t\ty se pueden manejar en forma remota a trav\xe9s de App o incluso\n\t\t\tmediante compatibilidad se pueden manejar por voz v\xeda Amazon Alexa\n\t\t\to Google Home."},{id:7,image:n.p+"static/media/cercos.f38ee4b4.jpg",title:"Cerco el\xe9ctrico perimetral",info:" El sistema consisten en cercar perimetralmente la propiedad\n\t mediante una estructura de hierro y alambres de aluminio,\n\t conectando el cerco a un energizador que emite pulsos el\xe9ctricos.\n\t Este equipo funciona como alarma conect\xe1ndolo a una sirena\n\t directamente o a una zona de alarma existente. Se puede\n\t activar/desactivar en forma remota a trav\xe9s de App v\xeda internet."}],rt=C.b.div(u||(u=Object(w.a)(["\n\tpadding: 0 2em;\n\n\th1 {\n\t\ttext-align: center;\n\t\tcolor: var(--clr-primary-dark);\n\t\tmargin-bottom: 1em;\n\t}\n\n\t.container {\n\t\tdisplay: flex;\n\t\tflex-wrap: wrap;\n\n\t\t.product {\n\t\t\tborder: 2px solid var(--clr-primary-dark);\n\t\t\tborder-radius: 1em;\n\t\t\tmargin: 1em 0;\n\t\t\tdisplay: flex;\n\t\t\twidth: 100%;\n\t\t\theight: 420px;\n\n\t\t\t.productImg {\n\t\t\t\tmin-width: 35%;\n\t\t\t\theight: 100%;\n\t\t\t\tborder-top-left-radius: 1em;\n\t\t\t\tborder-bottom-left-radius: 1em;\n\t\t\t}\n\n\t\t\t.info {\n\t\t\t\tdisplay: flex;\n\t\t\t\tflex-direction: column;\n\t\t\t\talign-items: center;\n\t\t\t\tpadding: 0 1em;\n\t\t\t\toverflow: auto;\n\n\t\t\t\t.title {\n\t\t\t\t\tmargin: 1em 0;\n\t\t\t\t\tfont-size: 1.7em;\n\t\t\t\t\ttext-transform: uppercase;\n\t\t\t\t\ttext-align: center;\n\t\t\t\t\tcolor: var(--clr-primary-dark);\n\t\t\t\t}\n\n\t\t\t\tp {\n\t\t\t\t\tline-height: 1.3em;\n\t\t\t\t\tfont-size: 20px;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n\n\t@media (max-width: 1300px) {\n\t\tpadding: 1em;\n\t\t.container {\n\t\t\t.product {\n\t\t\t\tdisplay: flex;\n\t\t\t\tflex-direction: column;\n\t\t\t\theight: 85vh;\n\n\t\t\t\t.productImg {\n\t\t\t\t\twidth: 100%;\n\t\t\t\t\tmin-height: 30%;\n\t\t\t\t\tmax-height: 30%;\n\t\t\t\t\tborder-top-left-radius: 1em;\n\t\t\t\t\tborder-top-right-radius: 1em;\n\t\t\t\t\tborder-bottom-left-radius: 0;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n"]))),ot=function(){return Object(L.jsx)(D.a,{big:!0,children:Object(L.jsxs)(rt,{children:[Object(L.jsx)("h1",{children:"Productos"}),Object(L.jsx)("div",{className:"container",children:it&&it.map((function(t){return Object(L.jsxs)("div",{className:"product",ctkey:t.id,children:[Object(L.jsx)("img",{className:"productImg",src:t.image,alt:t.title}),Object(L.jsxs)("div",{className:"info",children:[Object(L.jsx)("h3",{className:"title",children:t.title}),Object(L.jsx)("p",{children:t.info})]})]})}))})]})})},st=C.b.footer(h||(h=Object(w.a)(["\n\twidth: 100%;\n\theight: 11em;\n\tdisplay: flex;\n\tjustify-content: space-between;\n\talign-items: center;\n\tborder-top: 3px solid var(--clr-primary-dark);\n\n\t.ItemContainer {\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\talign-items: center;\n\t\theight: 100%;\n\t\twidth: 33%;\n\t\tmargin: auto;\n\t\tpadding: 3em;\n\n\t\th3 {\n\t\t\tmargin-bottom: 1em;\n\t\t\ttext-transform: uppercase;\n\t\t}\n\n\t\tp {\n\t\t\tmargin-bottom: 0.1em;\n\t\t}\n\n\t\t.SocialContainer {\n\t\t\tdisplay: flex;\n\t\t\talign-items: center;\n\n\t\t\tsvg {\n\t\t\t\tmargin: 0 0.2em;\n\t\t\t}\n\t\t}\n\n\t\ta {\n\t\t\tmargin: 0 1.5em;\n\t\t\tmargin-bottom: 0.1em;\n\t\t\ttransition: color 0.2s ease-in-out;\n\t\t\ttext-decoration: none;\n\t\t\tcolor: var(--clr-primary-dark);\n\t\t}\n\t}\n\t@media (max-width: 920px) {\n\t\theight: 100%;\n\t\tflex-direction: column;\n\t\tpadding: 1em;\n\n\t\t.ItemContainer {\n\t\t\tpadding: 1em;\n\t\t\twidth: 100%;\n\t\t\tmargin: 1em 0;\n\n\t\t\tp {\n\t\t\t\tfont-size: 0.9em;\n\t\t\t}\n\t\t}\n\t}\n\n\t@media (max-width: 600px) {\n\t\tpadding: 0.5em;\n\n\t\t.ItemContainer {\n\t\t\tpadding: 0.4em;\n\t\t\twidth: 100%;\n\t\t}\n\t}\n"]))),ct=C.b.div(b||(b=Object(w.a)(["\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tmargin-bottom: 1em;\n\n\ta {\n\t\tmargin-left: 5px;\n\t\ttext-decoration: none;\n\t\tcolor: var(--clr-primary-dark);\n\t\tfont-weight: bold;\n\t}\n\n\t@media (max-width: 600px) {\n\t\tflex-direction: column;\n\t}\n"]))),dt=(Object(C.b)(k.a)(j||(j=Object(w.a)(["\n\theight: 2em;\n\tcursor: pointer;\n\tfill: currentColor;\n\ttransition: fill 0.2s ease-in-out;\n\n\t&:hover {\n\t\tfill: var(--clr-primary-dark);\n\t}\n\n\t@media (max-width: 480px) {\n\t\theight: 1.5em;\n\t}\n"]))),n(51)),lt=n.n(dt),mt=n(83),pt=n(84),ut=n(85),ht=n(86),bt=n(87),jt=n(88),xt=n(89),gt=n(90),ft=function(){return Object(L.jsxs)(L.Fragment,{children:[Object(L.jsx)(D.a,{children:Object(L.jsxs)(st,{children:[Object(L.jsxs)("div",{className:"ItemContainer",children:[Object(L.jsx)("h3",{children:"Direcci\xf3n"}),Object(L.jsx)("address",{children:"Ventura Bustos 1935. Castelar (1712)"}),Object(L.jsx)("address",{children:"Buenos Aires - Argentina"})]}),Object(L.jsxs)("div",{className:"ItemContainer",children:[Object(L.jsx)("h3",{children:"Recomendanos"}),Object(L.jsxs)("div",{className:"SocialContainer",children:[Object(L.jsx)(mt.a,{quote:"Logia Sistemas: Somos una empresa jov\ufeffen y pujante cuyo objetivo es acercar hacia la excelencia tecnol\xf3gica en seguridad y comunicaciones a todos los entes p\xfablicos, privados y a toda la comunidad en su conjunto!",url:"https://logiasistemas.com.ar/",children:Object(L.jsx)(pt.a,{round:!0,size:"2em"})}),Object(L.jsx)(ut.a,{url:"https://logiasistemas.com.ar/",title:"Logia Sistemas: Sistemas inteligentes, personas inteligentes.",children:Object(L.jsx)(ht.a,{round:!0,size:"2em"})}),Object(L.jsx)(bt.a,{url:"https://logiasistemas.com.ar/",title:"Logia Sistemas: Sistemas inteligentes, personas inteligentes.",separator:":: ",children:Object(L.jsx)(jt.a,{round:!0,size:"2em"})}),Object(L.jsx)(xt.a,{title:"Logia Sistemas: Sistemas inteligentes, personas inteligentes.",url:"https://logiasistemas.com.ar/",windowWidth:750,windowHeight:600,children:Object(L.jsx)(gt.a,{round:!0,size:"2em"})})]})]}),Object(L.jsxs)("div",{className:"ItemContainer",children:[Object(L.jsx)("h3",{children:"Contacto"}),Object(L.jsx)("a",{href:"mailto:logiasistemas@yandex.com",children:"logiasistemas@yandex.com"}),Object(L.jsx)("address",{children:"Tel\xe9fono: (011) 2091-9175"}),Object(L.jsx)("address",{children:"M\xf3vil:(011) 2461-0062"})]})]})}),Object(L.jsxs)(ct,{children:[Object(L.jsxs)(D.a,{children:[Object(L.jsx)("p",{children:"\xa9 Dise\xf1ado y desarrollado por "})," "]}),Object(L.jsx)(lt.a,{children:Object(L.jsx)("a",{href:"https://www.franco-ortiz.com/",target:"_blank",rel:"noreferrer",children:"Franco Ortiz"})})]})]})},vt=n.p+"static/media/arrow-up.44313bcc.svg",Ot=n(53),yt=function(){var t=Object(x.useRef)();window.onscroll=function(){t.current&&(document.body.scrollTop>e||document.documentElement.scrollTop>e?(t.current.style.pointerEvents="auto",t.current.style.opacity="100"):(t.current.style.pointerEvents="none",t.current.style.opacity="0"))};var e=400;return Object(L.jsxs)("div",{style:{display:"flex",flexDirection:"column",justifyContent:"space-between",minHeight:"100vh"},children:[Object(L.jsx)(W,{}),Object(L.jsx)(O.a,{exact:!0,path:"/",children:Object(L.jsx)(R,{})}),Object(L.jsx)(O.a,{exact:!0,path:"/about",children:Object(L.jsx)(X,{})}),Object(L.jsx)(O.a,{exact:!0,path:"/products",children:Object(L.jsx)(ot,{})}),Object(L.jsx)(O.a,{exact:!0,path:"/contact",children:Object(L.jsx)(at,{})}),Object(L.jsx)(ft,{}),Object(L.jsx)(A,{ref:t,onClick:function(){Ot.animateScroll.scrollToTop()},children:Object(L.jsx)(z,{src:vt})})]})},wt=function(){var t=Object(v.c)((function(t){return t.theme}));return Object(L.jsxs)(L.Fragment,{children:[Object(L.jsx)(y.a,{}),Object(L.jsx)(N,{theme:"light"===t?E:S}),Object(L.jsx)("main",{className:"main-container",children:Object(L.jsx)(O.a,{path:"/",component:yt})})]})},Ct=n(24),kt=n(41),Nt=(new Date).getHours(),zt=Nt>=19||Nt<=7,At={theme:localStorage.getItem("theme")||(zt?"dark":"light")},Et=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:At,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case B:return localStorage.setItem("theme","light"===t.theme?"dark":"light"),Object(kt.a)(Object(kt.a)({},t),{},{theme:"light"===t.theme?"dark":"light"});default:return t}},St=Object(Ct.b)(Et);f.a.render(Object(L.jsx)(v.a,{store:St,children:Object(L.jsx)(I.a,{children:Object(L.jsx)(wt,{})})}),document.getElementById("root"))}},[[81,1,2]]]);
//# sourceMappingURL=main.cb3baf00.chunk.js.map