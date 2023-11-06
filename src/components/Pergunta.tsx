import { Pergunta as PerguntaInterface } from "../interfaces/Pergunta";
import "./Pergunta.css";

export function Pergunta(pergunta: PerguntaInterface) {

    return(
        <div className="pergunta-container">
            <p>{pergunta.pergunta}</p>
            <ul>
                <p> A) {pergunta.opcoes?.A}</p>
                <p> B) {pergunta.opcoes?.B}</p>
                <p> C) {pergunta.opcoes?.C}</p>
                <p> D) {pergunta.opcoes?.D}</p>
            </ul>
            <p>Tema: {pergunta.tema}</p>
            <hr />
        </div>
    );
}