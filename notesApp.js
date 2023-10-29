const addBtn = document.querySelector("#addBtn");

const notes = JSON.parse(localStorage.getItem("notes"));

if (notes){
    notes.forEach((note) => {
        addNewNote(note);
    });
};

addBtn.addEventListener("click", () => {
    addNewNote();
});

function addNewNote(text = "") {
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

        <div class="main ${text ? "" : "hidden"}"></div>
        <textarea name="textarea" class="textarea ${text ? "hidden" : ""}" cols="10" rows="20"></textarea>`;

    document.body.appendChild(note);


    const editBtn = note.querySelector("#editBtn");
    const deleteBtn = note.querySelector("#deleteBtn");

    const main = note.querySelector(".main");
    const textarea = note.querySelector(".textarea");

    textarea.value = text;
    main.innerHTML = marked.parse(text);

    editBtn.addEventListener("click", () => {
        main.classList.toggle("hidden");
        textarea.classList.toggle("hidden");
    });

    deleteBtn.addEventListener("click", ()=> {
        note.remove();

        updateLS();
    });

    textarea.addEventListener("input", (e) => {
        const { value } = e.target;

        main.innerHTML = marked.parse(value);

        updateLS();
    });
};


function updateLS() {
    const notesText = document.querySelectorAll(".textarea");

    const notes = [];

    notesText.forEach(noteEl => {
        if(noteEl.value !== "" || null){
            notes.push(noteEl.value);
        };
    });

    localStorage.setItem("notes", JSON.stringify(notes));
};