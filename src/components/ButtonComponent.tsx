import "./ButtonComponent.css";
import { useState } from "react";
import axios from "axios";

import { Pergunta as PerguntaInterface } from "../interfaces/Pergunta";
import { Pergunta } from "./Pergunta";

export function ButtonComponent() {
  
  const baseUrl: string = "http://localhost:5000";
  const [perguntas, setPerguntas] = useState<PerguntaInterface[]>([]);
  
  async function handleClick(tema: string) {
    try {
      const response = await axios.get(`${baseUrl}/perguntas/${tema}`);
      setPerguntas(response.data);
      console.log(perguntas);
    } catch(error) {
      console.log(error);
    }
  }

  return(
      <div className="button-component">
        <h4>Clique no tema desejado para iniciar o quiz:</h4>
        <button type="button" className="btn btn-primary" onClick={() => handleClick("informatica")}>  
          Informática
        </button>
        <button type="button" className="btn btn-primary" onClick={() => handleClick("programacao")}>
          Programação
        </button>
        <button type="button" className="btn btn-primary" onClick={() => handleClick("internet")}>
          Internet
        </button>
        <button type="button" className="btn btn-primary" onClick={() => handleClick("aleatorias")}>
          Aleatórias
        </button>

        
        {
          perguntas.map((pergunta) => (
            <Pergunta 
              key={pergunta.id}
              id={pergunta.id}
              pergunta={pergunta.pergunta}
              opcoes={pergunta.opcoes} 
              tema={pergunta.tema}
            />
          ))
        }

      </div> 
  );

}