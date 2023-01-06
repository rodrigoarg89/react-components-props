import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import User from "./components/User";
import Card1 from "./components/Card1";
import Card2 from "./components/Card2";
import Card3 from "./components/Card3";
import Card4 from "./components/Card4";
import Card5 from "./components/Card5";
import AboutMe from "./components/AboutMe";
import CardGral from "./components/CardGral";

function App() {
  return (
    <div className='app'>
      <div>
        <CardGral
          title="Sobre mi"
          item1="Rodrigo"
          item2="Pelicula favorita: The Wolf of Wall Street"
          item3="Musica favorita: Clasic"
          bg="green"
        />
      </div>
      <div>
        <CardGral
          title="Mis hobbies"
          item1="Pasar tiempo con mi hijo"
          item2="Trabajar, aprender a programar"
          item3="Aprender de politica, economía y finanzas"
          bg="red"
        />
      </div>
      <div>
        <CardGral
          title="En mi tiempo libre"
          item1="Voy al cine"
          item2="Algo de gym"
          item3="Viajo por aquí cerca"
          bg="blue"
        />
      </div>
      <div>
        <CardGral
          title="Comida favorita"
          item1="Asado"
          item2="Pizzas"
          item3="Ensaladas"
          bg="orange"
        />
      </div>
      <div>
        <CardGral
          title="Mi Stack"
          item1="JS"
          item2="REACT"
          item3="HTML/CSS"
          bg="yellow"
        />
      </div>
    </div>
  );
}


export default App;
