let heartPop = document.querySelector("i");
let img = document.querySelector("img");
let likeCount = document.querySelector(".likeCount");
let likeBtn = document.querySelector("#likeBtn");

init();

img.addEventListener("dblclick", liked);
likeBtn.addEventListener("click", liked);

function init() {
    local_Storage();
}

function liked() {
    if (likeCount.innerText == 0) {
        // heartPop.classList.add("active");

        // OR==>
        // heartPop.style.opacity = "0.8";

        // OR==>
        heartPop.style.transform = "translate(-50%, -50%) scale(1)";

        let count = parseInt(likeCount.innerText);
        let newCount = count + 1;
        likeCount.innerText = newCount;
        likeBtn.style.backgroundColor = "red";
        likeBtn.style.color = "white";
        console.log("Liked");
        localStorage.setItem("totalLikeCount", likeCount.innerText);

        setTimeout(() => {
            // heartPop.classList.remove("active");

            // OR==>
            // heartPop.style.opacity = 0;

            // OR==>
            heartPop.style.transform = "translate(-50%, -50%) scale(0)";
        }, 1000);
    }

    else {
        likeBtn.style.backgroundColor = "white";
        likeBtn.style.color = "black";
        likeCount.innerText = 0;
        console.log("Unliked");
        localStorage.clear();
    }
};

function local_Storage() {
    if ((localStorage.length !== 0)) {
        console.log("hello");
        let count = parseInt(likeCount.innerText);
        let newCount = count + 1;
        likeCount.innerText = newCount;
        likeBtn.style.backgroundColor = "red";
        likeBtn.style.color = "white";
    }
}