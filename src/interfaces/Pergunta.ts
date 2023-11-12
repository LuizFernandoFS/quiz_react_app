export interface Pergunta {
    id?: number | undefined;
    pergunta?: string | undefined;
    opcoes?: {
        A: string;
        B: string;
        C: string;
        D: string;
    };
    resposta_correta?: string;
    tema?: string;
    nivel_dificuldade?: string;
    onSelectResposta: (id: any, value: string | undefined) => {};
}