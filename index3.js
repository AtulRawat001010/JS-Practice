let con = document.querySelector(".container");
let stories = document.querySelector(".stories");

let arr = [
    {dp:"https://rukminim2.flixcart.com/image/312/312/xif0q/keyboard/gaming-keyboard/f/p/k/it-kb331-intex-original-imagmgwzzxn2m3pu.jpeg?q=70",
    story:"https://www.bing.com/th/id/OIP.K7UO5CKAbibMwLhGpYRVKQHaEK?w=323&h=181&c=7&r=0&o=5&dpr=1.3&pid=1.7"},

    {dp:"https://rukminim2.flixcart.com/image/312/312/xif0q/keyboard/gaming-keyboard/f/p/k/it-kb331-intex-original-imagmgwzzxn2m3pu.jpeg?q=70",
     story:"https://rukminim2.flixcart.com/image/416/416/xif0q/keyboard/gaming-keyboard/r/g/v/gaming-keyboard-and-mouse-combo-keyboard-with-7-color-backlit-original-imaggjk5ahg9jzny.jpeg?q=70"},

    {dp:"https://rukminim2.flixcart.com/image/312/312/xif0q/keyboard/gaming-keyboard/f/p/k/it-kb331-intex-original-imagmgwzzxn2m3pu.jpeg?q=70",
    story:"https://rukminim2.flixcart.com/image/312/312/xif0q/keyboard/gaming-keyboard/f/p/k/it-kb331-intex-original-imagmgwzzxn2m3pu.jpeg?q=70"},
    {dp:"https://rukminim2.flixcart.com/image/312/312/xif0q/keyboard/gaming-keyboard/f/p/k/it-kb331-intex-original-imagmgwzzxn2m3pu.jpeg?q=70",
    story:"https://rukminim2.flixcart.com/image/312/312/xif0q/keyboard/gaming-keyboard/f/p/k/it-kb331-intex-original-imagmgwzzxn2m3pu.jpeg?q=70"},{dp:"https://rukminim2.flixcart.com/image/312/312/xif0q/keyboard/gaming-keyboard/f/p/k/it-kb331-intex-original-imagmgwzzxn2m3pu.jpeg?q=70",
    story:"https://rukminim2.flixcart.com/image/312/312/xif0q/keyboard/gaming-keyboard/f/p/k/it-kb331-intex-original-imagmgwzzxn2m3pu.jpeg?q=70"},
    // {dp:"https://rukminim2.flixcart.com/image/312/312/xif0q/keyboard/gaming-keyboard/f/p/k/it-kb331-intex-original-imagmgwzzxn2m3pu.jpeg?q=70",
    // story:"https://rukminim2.flixcart.com/image/312/312/xif0q/keyboard/gaming-keyboard/f/p/k/it-kb331-intex-original-imagmgwzzxn2m3pu.jpeg?q=70"},
    // {dp:"https://rukminim2.flixcart.com/image/312/312/xif0q/keyboard/gaming-keyboard/f/p/k/it-kb331-intex-original-imagmgwzzxn2m3pu.jpeg?q=70",
    // story:"https://rukminim2.flixcart.com/image/312/312/xif0q/keyboard/gaming-keyboard/f/p/k/it-kb331-intex-original-imagmgwzzxn2m3pu.jpeg?q=70"},
    // {dp:"https://rukminim2.flixcart.com/image/312/312/xif0q/keyboard/gaming-keyboard/f/p/k/it-kb331-intex-original-imagmgwzzxn2m3pu.jpeg?q=70",
    // story:"https://rukminim2.flixcart.com/image/312/312/xif0q/keyboard/gaming-keyboard/f/p/k/it-kb331-intex-original-imagmgwzzxn2m3pu.jpeg?q=70"}
];

let clut = "";

arr.forEach((element, index) => {
    clut += `<div class="story">
    <img id="${index}" src="${element.dp}" alt="">
</div>`;
});

stories.innerHTML = clut;

stories.addEventListener("click", (e)=> {
    let showStory = document.querySelector(".showStory");
    console.log(e.target.id);
    console.log(arr[e.target.id].story);
    showStory.style.backgroundImage = `url(${arr[e.target.id].story})`;
    showStory.style.display = `block`;
    setTimeout(() => {
        showStory.style.display = "none";
    }, 2000);
})