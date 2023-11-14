import { Pergunta as PerguntaInterface } from "../interfaces/Pergunta";
import "./Pergunta.css";

export function Pergunta(pergunta: PerguntaInterface) {

    function onClickResposta(value: string | undefined)  {
        pergunta.onSelectResposta(pergunta.id, value);
    }

    return(
        <div className="pergunta-container">
            <p className="pergunta-title">
                <strong>
                    {pergunta.pergunta}
                </strong>
            </p>
            <ul className="pergunta-opcoes">
                <p onClick={() => onClickResposta("A")}>{pergunta.opcoes?.A}</p>
                <p onClick={() => onClickResposta("B")}>{pergunta.opcoes?.B}</p>
                <p onClick={() => onClickResposta("C")}>{pergunta.opcoes?.C}</p>
                <p onClick={() => onClickResposta("D")}>{pergunta.opcoes?.D}</p>
            </ul>
            <p>
                <strong>TEMA: {pergunta.tema}</strong>
            </p>
        </div>
    );
}