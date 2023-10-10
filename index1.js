let heartPop = document.querySelector("i");
let img = document.querySelector("img");

img.addEventListener("dblclick", ()=> {
    heartPop.classList.add("active");

    setTimeout(() => {
        heartPop.classList.remove("active");
    }, 2000);
})