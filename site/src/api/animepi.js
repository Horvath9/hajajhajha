import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5000'
})
export async function inserirAnime(anime) {
    const resposta = await api.post('/anime', {
        nome: anime
    });
    return resposta
}


export async function consultarAnime() {
    const resposta = await api.get('/animes');
    return resposta.data;
}
