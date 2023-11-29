import { Pergunta } from "../interfaces/Pergunta";
import "./GameOver.css";

interface GameOverProps {
    pontuacaoFinal: number;
    acertos: number;
    quantidadeDePerguntas: number;
    perguntas: Pergunta[];
    respostasUsuario: string[];
}

export function GameOver(game: GameOverProps) {
    return (
        <>
            <div className="container">
                <div className="game-over">
                    <p>Pontuação Final: {game.pontuacaoFinal}</p>
                    <p>(Acertou {game.acertos} de {game.quantidadeDePerguntas} questões)</p>
                    {
                        game.acertos >= 7 ?
                            <p style={{
                                color: "#00CC00"
                            }}>Muito bem!!! você acertou a maioria das perguntas.</p>
                            :
                            <p style={{
                                color: "#d90d0d"
                            }}>Precisa melhorar! você errou um número razoável de perguntas.</p>
                    }
                    <p>O Gabarito do Quiz segue abaixo:</p>
                </div>
            </div>
            {
                game.perguntas.map((pergunta, index) => (
                    <div className="container-gabarito">
                        <div className="gabarito" key={pergunta.id}>
                            <p>{pergunta.pergunta}</p>
                            
                                <div className="opcoes">
                                    <span className={pergunta.resposta_correta === 'A' ? 'resposta-correta' : ''}>A){pergunta.opcoes?.A}</span>
                                    <span className={pergunta.resposta_correta === 'B' ? 'resposta-correta' : ''}>B){pergunta.opcoes?.B}</span>
                                    <span className={pergunta.resposta_correta === 'C' ? 'resposta-correta' : ''}>C){pergunta.opcoes?.C}</span>
                                    <span className={pergunta.resposta_correta === 'D' ? 'resposta-correta' : ''}>D){pergunta.opcoes?.D}</span>
                                </div>
                                <p><strong>Sua resposta foi: {game.respostasUsuario[index]}</strong></p>
                                {game.respostasUsuario[index] === pergunta.resposta_correta ?
                                    <p style={{ color: "green", fontWeight: "bolder", fontSize: '20px' }}>Acertou</p> :
                                    <p style={{ color: "red", fontWeight: "bolder", fontSize: '20px' }}>Errou</p>
                                }
                        </div>
                    </div>
                ))
            }
            <div className="btn-novo-quiz">
                <button type="button" className="btn btn-primary" onClick={() => window.location.reload()}>
                    Iniciar Novo Quiz!
                </button>
            </div>
        </>
    );
}