export class Car {
    nome: string;
    descricao: string;
    km: number;
    ano: string;
    cambio: 'Automático' | 'Manual' | 'Semi-Automático';
    carroceria: 'Buggy' | 'Conversível' | 'Cupê' | 'Hatchback' | 'Minivan' | 'Perua/SW' | 'Picape' | 'Sedã' | 'Utilitário esportivo' | 'Van/Utilitário';
    combustivel: 'Álcool' | 'Gasolina' | 'Diesel' | 'Gás natural' | 'Eletríco' | 'Híbrido' |'Flex';
    finalDaPlaca: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
    opcionais: string[];
    cor: string;
    aceitaTroca: boolean;
    unicoDono: boolean;
    IPVAPago: boolean;
    licenciamento: boolean;

    sobre: string;
    imagens: string[];
    preco: number;

    destaque: number | null;
}
