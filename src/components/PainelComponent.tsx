import "./PainelComponent.css";

interface PainelComponentProps {
    pontuacaoAtual: number;
    perguntaAtual: number;
    numeroDePerguntas: number;

}

export function PainelComponent(painel: PainelComponentProps) {
    
    return(
        <div className="painel-component">
            <h3>Pontuação Atual: {painel.pontuacaoAtual}</h3>
            <h3>Pergunta {painel.perguntaAtual}/{painel.numeroDePerguntas}</h3>
        </div>
    );
}