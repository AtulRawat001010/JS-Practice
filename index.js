let istatus = document.querySelector("h5");

let addFriend = document.querySelector("#add");

var check = 0;
// let removeFriend = document.querySelector("#remove");

addFriend.addEventListener("click", ()=>{
    if(check == 0){
        istatus.innerText = "Friends";
        istatus.style.color = "green";
        addFriend.innerText = "Remove Friend";
        addFriend.style.backgroundColor = "#dadada";
        addFriend.style.color = "#111";
        check = 1;
        console.log("++1");
    }

    else{
        istatus.innerText = "Stranger";
        istatus.style.color = "Red";
        addFriend.innerText = "Add Friend";
        addFriend.style.backgroundColor = "cadetblue";
        addFriend.style.color = "white";
        check = 0;
        console.log("--1");
    }
});
