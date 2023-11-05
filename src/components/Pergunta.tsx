import { Pergunta as PerguntaInterface } from "../interfaces/Pergunta";
import "./Pergunta.css";

export function Pergunta(pergunta: PerguntaInterface) {

    return(
        <div className="pergunta-container">
            <h2>Pergunta {pergunta.id}</h2>
            <p>{pergunta.pergunta}</p>
            <ul>
                <li>A: {pergunta.opcoes?.A}</li>
                <li>B: {pergunta.opcoes?.B}</li>
                <li>C: {pergunta.opcoes?.C}</li>
                <li>D: {pergunta.opcoes?.D}</li>
            </ul>
            <p>Tema: {pergunta.tema}</p>
        </div>
    )
}