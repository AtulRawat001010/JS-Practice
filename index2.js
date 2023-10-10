let con = document.querySelector(".container");
let cursor = document.querySelector("i");

console.log(cursor);

con.addEventListener("mousemove", (move)=>{
   cursor.style.left = move.x + "px";
   cursor.style.top = move.y + "px";
});