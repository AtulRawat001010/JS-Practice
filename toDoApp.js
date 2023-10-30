// const input = document.querySelector("#input");
// const form = document.querySelector("#form");
// const tasks = document.querySelector("#tasks");
// const supUl = document.querySelector("#supUl");
// const sup = document.querySelector(".sup");
// const todosTasks = JSON.parse(localStorage.getItem("todosTasks"));

// if (todosTasks) {
//     todosTasks.forEach((todoTask) => {
//         addTask(todoTask);
//     });
// }


// sup.addEventListener("click", () => {
//     supUl.classList.toggle("hiddenUl");
// });

// form.addEventListener("submit", (e)=> {
//     e.preventDefault();

//     addTask();
// });


// function addTask(todoTask) {
//     let todoText = input.value;

//     if(todoTask){
//         todoText = todoTask.text;
//     }

//     if (todoText) {
//         const taskEl = document.createElement("li");
//         taskEl.classList.add("list");

//         if (todoTask && todoTask.completed) {
//             taskEl.classList.add("completed");
//         }

//         taskEl.innerText = todoText;

//         taskEl.addEventListener("click", ()=> {
//             taskEl.classList.toggle("completed");

//             updateLS();
//         });

//         taskEl.addEventListener("contextmenu", (e)=> {
//             e.preventDefault();
//             taskEl.remove();

//             updateLS();
//         });

//         tasks.appendChild(taskEl);
//         input.value = "";
//     }

//     updateLS();
// }


// function updateLS() {
//     const tasksEl = document.querySelectorAll(".list");

//     const tasks = [];

//     tasksEl.forEach(taskEl => {
//         tasks.push({
//             text: taskEl.innerText,
//             completed: taskEl.classList.contains("completed")
//         });
//     });

//     localStorage.setItem("tasks", JSON.stringify(tasks));
// }







const supUl = document.querySelector("#supUl");
const sup = document.querySelector(".sup");
const form = document.getElementById("form");
const input = document.getElementById("input");
const todosUL = document.getElementById("tasks");

const todos = JSON.parse(localStorage.getItem("todos"));

sup.addEventListener("click", () => {
    supUl.classList.toggle("hiddenUl");
});

if (todos) {
    todos.forEach((todo) => {
        addTodo(todo);
    });
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    addTodo();
});

function addTodo(todo) {
    let todoText = input.value;

    if (todo) {
        todoText = todo.text;
    }

    if (todoText) {
        const todoEl = document.createElement("li");
        todoEl.classList.add("list");
        if (todo && todo.completed) {
            todoEl.classList.add("completed");
        }

        todoEl.innerText = todoText;

        todoEl.addEventListener("click", () => {
            todoEl.classList.toggle("completed");

            updateLS();
        });

        todoEl.addEventListener("contextmenu", (e) => {
            e.preventDefault();

            todoEl.remove();

            updateLS();
        });

        todosUL.appendChild(todoEl);

        input.value = "";

        updateLS();
    }
}

function updateLS() {
    const todosEl = document.querySelectorAll(".list");

    const todos = [];

    todosEl.forEach((todoEl) => {
        todos.push({
            text: todoEl.innerText,
            completed: todoEl.classList.contains("completed"),
        });
    });

    localStorage.setItem("todos", JSON.stringify(todos));
}