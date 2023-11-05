export interface Pergunta {
    id?: number;
    pergunta?: string;
    opcoes?: {
        A: string;
        B: string;
        C: string;
        D: string;
    };
    resposta_correta?: string;
    tema?: string;
    nivel_dificuldade?: string;
}