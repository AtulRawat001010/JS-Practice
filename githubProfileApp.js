const APIURL = "https://api.github.com/users/";

const main = document.querySelector('#main');
const form = document.querySelector('#form');
const search = document.querySelector('#search');


getUser(username = "atulrawat001010");

async function getUser(username){
    const resp = await fetch(APIURL + username);
    const data = await resp.json();
    
    // console.log(data);

    createUserCard(data);
    getUserRepos(username);
};


async function getUserRepos(username) {
    const res = await fetch(APIURL + username + "/repos");
    const data = await res.json();

    console.log(data);

    addReposToCard(data);
}


function createUserCard(user) {
   
    const cardHTML = `
        <div class = "card">
            <div>
                <img class="avatar" src="${user.avatar_url}" alt = "${user.name ? user.name : user.login}"/>
            </div>

            <div class = "user-info">
                <h2>${user.name ? user.name : user.login}</h2>
                <p>${user.bio}</p>

                <ul>
                    <li><i class='bx bxs-user-plus' ></i></i> <strong>${user.followers}</strong> <strong>Followers</strong></li>
                    <li><i class='bx bxs-user'></i> <strong>${user.following}</strong> <strong>Following</strong></li>
                    <li><i class='bx bx-folder-open' ></i> <strong>${user.public_repos}</strong> <strong>Repos</strong></li>
                </ul>
                <div id = "repos">${user.name ? "Repos:" : ""} <br/><br/> </div>
            </div>
        </div>
    `;

    main.innerHTML = cardHTML;
};


function addReposToCard(repos) {
    const reposEl = document.getElementById('repos');

    repos.sort((a, b) => b.stargazers_count - a.stargazers_count).slice(0, 10).forEach((repo) => {
        const repoEl = document.createElement("a");
        repoEl.classList.add('repo');

        repoEl.href = repo.html_url;
        repoEl.target = "_blank";
        repoEl.innerText = repo.name;

        reposEl.appendChild(repoEl);
    });
};


form.addEventListener("submit", (e)=> {
    e.preventDefault();

    const user = search.value;

    if (user.length > 0) {
        getUser(user);

        search.value = "";
    };
});


