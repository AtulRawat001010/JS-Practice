const APIURL = "https://api.github.com/users/";

const main = document.querySelector('#main');


getUser(user = "atulrawat001010");

async function getUser(user){
    const resp = await fetch(APIURL + user);
    const data = resp.json();
    console.log(data);

    createUserCard(data);
}


function createUserCard(user) {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
        <div>
            <img src="${user.avatar}" alt = "${user.name}"/>
        </div>

        <div>
            <h2>${user.name}</h2>
            <p>${user.bio}</p>

            <ul>
                <li>${user.followers}</li>
                <li>${user.following}</li>
                <li>${user.public_repos}</li>
                </ul>
        </div>
    `;

    main.appendChild(card);
}