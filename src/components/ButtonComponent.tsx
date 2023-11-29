import "./ButtonComponent.css";
import { useState } from "react";
import axios from "axios";

import { Pergunta as PerguntaInterface } from "../interfaces/Pergunta";
import { Pergunta } from "./Pergunta";
import { PainelComponent } from "./PainelComponent";
import { GameOver } from "./GameOver";

export function ButtonComponent() {

  const baseUrl: string = "http://localhost:5000";
  const [perguntas, setPerguntas] = useState<PerguntaInterface[]>([]);
  const [inicioQuiz, setInicioQuiz] = useState<boolean>(false);
  const [finalQuiz, setFinalQuiz] = useState<boolean>(false);
  const [contador, setContador] = useState(0);
  const [pontuacao, setPontuacao] = useState(0);
  const [respostas, setRespostas] = useState<string[]>([]);

  async function handleClick(tema: string) {
    try {
      zerarPontuacaoBack();
      const response = await axios.get(`${baseUrl}/perguntas/${tema}`);
      setRespostas([]);
      setPerguntas(response.data);
      setInicioQuiz(true);
    } catch (error) {
      console.log(error);
    }
  }

  function addResposta(resposta: string) {
    respostas.push(resposta);
  }

  async function handleSubmitPergunta(id_pergunta: number, resposta: string) {
    try {

      addResposta(resposta);

      const response = await axios.post(`${baseUrl}/verificar`, { id_pergunta, resposta });
      setPontuacao(response.data);

      if (perguntas.length - 1 == contador) {
        setInicioQuiz(false);
        setFinalQuiz(true);
        setContador(0);
        setRespostas(respostas);
        return;
      }
      setContador(contador + 1);
    } catch {
      console.log("DEU RUIM!.....")
    }

  }

  async function zerarPontuacaoBack() {
    try {
      await axios.get(`${baseUrl}/zerar_pontuacao`);
      setPontuacao(0);
    } catch {
      console.log("DEU RUIM!.....")
    }
  }

  return (
    <>
      {
        !inicioQuiz ?
          <div className="button-component">
            <div className="header">
              <h1>Quiz App</h1>
              <h4>Seja bem vindo ao Quiz App!</h4>
              <p>Neste quiz terá acesso a três temas e uma modalidade de perguntas aleatórias.</p>
            </div>
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
            {finalQuiz &&
              <GameOver
                acertos={pontuacao / 10}
                pontuacaoFinal={pontuacao}
                quantidadeDePerguntas={perguntas.length}
                perguntas={perguntas}
                respostasUsuario={respostas}
              />
            }
          </div>
          :
          <>
            <Pergunta
              id={perguntas[contador].id}
              pergunta={perguntas[contador].pergunta}
              opcoes={perguntas[contador].opcoes}
              tema={perguntas[contador].tema}
              onSelectResposta={handleSubmitPergunta}
            />
            <PainelComponent
              numeroDePerguntas={perguntas.length}
              perguntaAtual={contador + 1}
              pontuacaoAtual={pontuacao}
            />
          </>
      }
    </>
  );

}