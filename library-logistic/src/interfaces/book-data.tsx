export interface BookData {
    codigo?: Number,
    nomeLivro: String,
    nomeAutor: String,
    nomeEditora: String
}

export interface BookResponse {
    data: BookData[]
}