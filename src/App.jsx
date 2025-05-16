import style from "./App.module.css";
import fotoPerfil from "./assets/2.png";

import card1 from "./assets/cardJS.png";
import card2 from "./assets/cardHTML.png";
import card3 from "./assets/cardCSS.jfif";
import card4 from "./assets/cardVITE.jfif";
import card5 from "./assets/react.svg";

import { Card } from "./components/card";
import { useState } from "react";

function App() {
  const defaultPhoneNumber = "5541999999999"

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData({...formData, [name]: value})
  }

  const handleZap = () => {
    const {name, email, message} = formData;

    const url = `https://api.whatsapp.com/send?phone=${defaultPhoneNumber}&text=
    Nome:%20${name}%0D%0A
    Email:%20${email}%0D%0A
    Mensagem:%20${message}%0D%0A`;

   window.open(url, "_blank")


  }



  return (
    <>
      <nav className={style.menu}>
        <p>
          <a href="#s1">Apresentação</a>
        </p>
        <p>
          <a href="#s2">Tecnologias</a>
        </p>
        <p>
          <a href="#s3">Projetos</a>
        </p>
        <p>
          <a href="#s4">Contato</a>
        </p>
      </nav>
      <main>
        <section className={style.s1} id="s1">
          <div className={style.leftS1}>
            <img
              className={style.imgRound}
              src={fotoPerfil}
              alt="Foto perfil"
            />
          </div>
          <div className={style.rightS1}>
            <h2>Apresentação</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
              assumenda nemo in aspernatur, sapiente quis quibusdam possimus,
              deserunt nostrum id, modi magnam eveniet doloribus quas ullam
              dicta obcaecati? Consequatur, corrupti.
            </p>
          </div>
        </section>
        <section className={style.s2} id="s2">
          <h2>Tecnologias</h2>
          <div className={style.wrapContainer}>
            <Card
              imagem={card1}
              titulo="Javascript"
              descricao="JavaScript (JS) é uma linguagem de programação de script, principalmente usada para criar interatividade em páginas web"
            />
            <Card
              imagem={card2}
              titulo="HTML"
              descricao="HTML (HyperText Markup Language) é a linguagem de marcação padrão para criar e estruturar páginas da web"
            />
            <Card
              imagem={card3}
              titulo="CSS"
              descricao="CSS (Cascading Style Sheets) é um linguagem de folhas de estilo utilizada para definir como os elementos de uma página web são apresentados."
            />
            <Card
              imagem={card4}
              titulo="Vite.js"
              descricao="Vite é um servidor de desenvolvimento local escrito por Evan You, o criador do Vue.js, e usado por padrão pelo Vue e para modelos de projeto React. "
            />
            <Card
              imagem={card5}
              titulo="React.js"
              descricao="O React permite dividir uma página inteira em partes, chamadas de componentes. Assim componentes trabalhados de forma individual e independente. "
            />
          </div>
        </section>
        <section className={style.s3} id="s3">
          <h2>Projetos</h2>
        </section>
        <section className={style.s4} id="s4">
          <h2>Contato</h2>
          <div className={style.wrapZap}>
            <h3>Fale pelo WhatsApp</h3>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required/>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required/>
            <textarea cols="30" rows="10" id="message" name="message" value={formData.message} onChange={handleChange} required></textarea>
            <button onClick={handleZap}>Enviar mensagem</button>
          </div>
        </section>
      </main>
      <footer>
        <h3>redes sociais</h3>
      </footer>
    </>
  );
}

export default App;
