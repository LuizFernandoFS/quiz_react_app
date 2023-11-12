import { Pergunta as PerguntaInterface } from "../interfaces/Pergunta";
import "./Pergunta.css";

export function Pergunta(pergunta: PerguntaInterface) {

    function onClickResposta(value: string | undefined)  {
        console.log(value);
        pergunta.onSelectResposta(pergunta.id, value);
    }

    return(
        <div className="pergunta-container">
            <p>
                <strong>
                    {pergunta.pergunta}
                </strong>
            </p>
            <ul>
                <p onClick={() => onClickResposta("A")}> A) {pergunta.opcoes?.A}</p>
                <p onClick={() => onClickResposta("B")}> B) {pergunta.opcoes?.B}</p>
                <p onClick={() => onClickResposta("C")}> C) {pergunta.opcoes?.C}</p>
                <p onClick={() => onClickResposta("D")}> D) {pergunta.opcoes?.D}</p>
            </ul>
            <p>Tema: {pergunta.tema}</p>
        </div>
    );
}