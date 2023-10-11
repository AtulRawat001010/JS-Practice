let con = document.querySelector(".container");
let stories = document.querySelector(".stories");

let arr = [
    {dp:"https://rukminim2.flixcart.com/image/312/312/xif0q/keyboard/gaming-keyboard/f/p/k/it-kb331-intex-original-imagmgwzzxn2m3pu.jpeg?q=70",
     story:"https://rukminim2.flixcart.com/image/416/416/xif0q/keyboard/gaming-keyboard/r/g/v/gaming-keyboard-and-mouse-combo-keyboard-with-7-color-backlit-original-imaggjk5ahg9jzny.jpeg?q=70"},
    {dp:"https://rukminim2.flixcart.com/image/312/312/xif0q/keyboard/gaming-keyboard/f/p/k/it-kb331-intex-original-imagmgwzzxn2m3pu.jpeg?q=70",
     story:"https://rukminim2.flixcart.com/image/416/416/xif0q/keyboard/gaming-keyboard/r/g/v/gaming-keyboard-and-mouse-combo-keyboard-with-7-color-backlit-original-imaggjk5ahg9jzny.jpeg?q=70"},
    {dp:"https://rukminim2.flixcart.com/image/312/312/xif0q/keyboard/gaming-keyboard/f/p/k/it-kb331-intex-original-imagmgwzzxn2m3pu.jpeg?q=70",
     story:"https://rukminim2.flixcart.com/image/416/416/xif0q/keyboard/gaming-keyboard/r/g/v/gaming-keyboard-and-mouse-combo-keyboard-with-7-color-backlit-original-imaggjk5ahg9jzny.jpeg?q=70"}
];

let clut = "";

arr.forEach((element, index) => {
    clut += `<div class="story">
    <img id="${index}" src="${element.dp}" alt="">
</div>`;
});

stories.innerHTML = clut;

stories.addEventListener("click", (e)=> {
    console.log(e.target.id);
})