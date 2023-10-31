const APIKEY = "04c35731a5ee918f014970082a0088b1";

const APIURL =`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${APIKEY}&page=1`;

const IMGPATH = "https://image.tmdb.org/t/p/w1280";

const SEARCHAPI ="https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";


const main = document.querySelector('#main');
const form = document.querySelector('#form');
const search = document.querySelector('#search');


getMovie(APIURL);

async function getMovie(url) {
    const res = await fetch(url);
    const data = await res.json()
    // console.log(data);

    data.results.forEach(movie => {
        const { title, poster_path, vote_average } = movie;

        const movieEl = document.createElement("div");
        movieEl.classList.add("movie");

        movieEl.innerHTML = `
        <img src="${IMGPATH + poster_path}" alt="${title}">
        <div class="movie-info">
            <h3>${title}</h3>
            <span class="${getClassByRate(vote_average)}">${vote_average}</span>
        </div>
        `

        main.appendChild(movieEl);
    });

    showMovies(data.results);
}

function showMovies(movies) {

    main.innerHTML = "";

    movies.forEach(movie => {
        const { title, poster_path, vote_average, overview } = movie;

        const movieEl = document.createElement("div");
        movieEl.classList.add("movie");

        movieEl.innerHTML = `
        <img src="${IMGPATH + poster_path}" alt="${title}">
        <div class="movie-info">
            <h3>${title}</h3>
            <span class="${getClassByRate(vote_average)}">${vote_average}</span>
        </div>
        <div class = "overview">
        <h4>Overview:</h4>
        ${overview}</div>
        `

        main.appendChild(movieEl);
    });
}

function getClassByRate(vote) {
    if (vote >= 8) {
        return "green";
    }else if (vote >= 5) {
        return "orange";
    }else{
        return "red";
    }
}

form.addEventListener("submit", (e)=> {
    e.preventDefault();

    const searchTerm = search.value;

    if(searchTerm){
        getMovie(SEARCHAPI + searchTerm);

        search.value = "";
    }
})