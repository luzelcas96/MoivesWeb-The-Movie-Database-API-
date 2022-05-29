import BASE_URI, { api_key } from "../config/config.js"


export  async function getMovies() {
    const response = await fetch(`${BASE_URI}/popular${api_key}`)
    return response;
}


export async function moviesDetails(id) {
    const detailsMovies = await fetch(`${BASE_URI}/${id}${api_key}`);
}