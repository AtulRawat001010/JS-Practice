const input = document.querySelector("#input");

const form = document.querySelector("#form");

const tasks = document.querySelector("#tasks");

form.addEventListener("submit", (e)=> {
    e.preventDefault();

    const todoText = input.value;

    if (todoText) {
        const taskEl = document.createElement("li");

        taskEl.innerText = todoText;

        tasks.appendChild(taskEl);

        input.value = "";
    }
});