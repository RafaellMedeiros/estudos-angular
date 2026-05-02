export interface IntLivro {
    titulo: string;
    autor: string;
    imagem: string;
    genero: GeneroLiterario;
    favorito: boolean;
}

export interface GeneroLiterario {
    id: string;
    value: string;
}