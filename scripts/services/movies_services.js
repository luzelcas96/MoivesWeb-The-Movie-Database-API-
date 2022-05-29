import{ BASE_URI, api_key } from "../config/config.js"


async function validResponse(response) {
    let body;
    try {
        body = await response.json();
    } catch (error) {
        body = response.statusText;
    }
}

export async function popularMovies() {
    const response = await fetch(`${BASE_URI}/popular${api_key}`)
    const movies = await validResponse(response);
    return movies;
}


export async function moviesDetails(id) {
    const response = await fetch(`${BASE_URI}/${id}${api_key}`);
    const movie = await validResponse(response);
    return movie;
}

