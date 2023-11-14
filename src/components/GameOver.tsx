import "./GameOver.css";

interface GameOverProps {
    pontuacaoFinal: number;
    acertos: number;
    quantidadeDePerguntas: number;
}

export function GameOver(game: GameOverProps) {
    return(
        <div className="container">
            <div className="game-over">
                <p>Pontuação Final: {game.pontuacaoFinal}</p>
                <p>Acertou {game.acertos} de {game.quantidadeDePerguntas} questões.</p>
                { 
                    game.acertos >= 7 ?
                    <p>Muito bom!!! você acertou a maioria das perguntas.</p>
                    : 
                    <p>Precisa melhorar! você errou um número razoável de perguntas.</p> } 
            </div>
        </div>
    );
}