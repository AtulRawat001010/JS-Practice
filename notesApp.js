const addBtn = document.querySelector("#addBtn");

addBtn.addEventListener("click", () => {
    addNewNote();
});

function addNewNote() {
    const note = document.createElement("div");

    note.classList.add("note");

    note.innerHTML = `
        <div class="tools">
            <button id="editBtn">
                <i class='bx bx-edit'></i>
            </button>

            <button id="deleteBtn">
                <i class='bx bxs-trash' ></i>
            </button>
        </div>

        <div class="main hidden"></div>
        <textarea name="textarea" id="textarea" cols="10" rows="20"></textarea>`;

    document.body.appendChild(note);


    const editBtn = note.querySelector("#editBtn");
    const deleteBtn = note.querySelector("#deleteBtn");

    const main = note.querySelector(".main");
    const textarea = note.querySelector("#textarea");

    editBtn.addEventListener("click", () => {
        main.classList.toggle("hidden");
        textarea.classList.toggle("hidden");
    })

    deleteBtn.addEventListener("click", ()=> {
        note.remove();
    })

    textarea.addEventListener("input", (e) => {
        const { value } = e.target;

        main.innerHTML = marked.parse(value);

        updateLS();
    })
};


function updateLS() {
    const notesText = document.querySelectorAll("#textarea");

    const notes = [];

    notesText.forEach(noteEl => {
        notes.push(noteEl.value);
    });

    localStorage.setItem("notes", JSON.stringify(notes));
}