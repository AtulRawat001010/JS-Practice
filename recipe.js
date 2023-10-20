let container = document.querySelector(".container");
let favMeals_container = document.querySelector("#fav-meals");
let favMeals_containerH3 = document.querySelector("h3");
let meals = document.querySelector("#meals");
let inputField = document.querySelector("#inputField");
let searchBtn = document.querySelector("#search");
let popup = document.querySelector("#popup");
let closePopupBtn = document.querySelector(".close-popup");
let mealInfo = document.querySelector(".meal-info");
let dataHereMealInfo = document.querySelector(".dataHereMealInfo");


getRandomMeal();
fetchFavMeals();


async function getRandomMeal(){
    const resp = await fetch("https://www.themealdb.com/api/json/v1/1/random.php");
    let data = await resp.json();

    let randomMeal = data.meals[0];
    console.log(randomMeal);

    addMeal(randomMeal, true);
};


async function getMealById(id) {
    const resp = await fetch(
        "https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + id
    );

    const respData = await resp.json();
    const meal = respData.meals[0];

    return meal;
};



async function getMealBySearch(term){
    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`);

    const data = await res.json();
    const meals = data.meals;

    return meals;
};



function addMeal(mealData, random = false) {
    const meal = document.createElement("div");

    meal.classList.add("meal");

    meal.innerHTML = 
        `<div class="meal-header">
            ${random ? '<span class="random">Random Recipe</span>' : ''}
            <img src="${mealData.strMealThumb}" alt="${mealData.strMeal}">
        </div>

        <div class="meal-body">
            <h4>${mealData.strMeal}</h4>
            <button id="fav-btn" class="fav-btn"><i class='bx bxs-heart'></i></button>
        </div>`;

        let fav_btn = meal.querySelector(".fav-btn");
        fav_btn.addEventListener("click", ()=>{

            if(fav_btn.classList.contains("active")){
                removeMealsFromLS(mealData.idMeal);
                fav_btn.classList.remove("active");
                fetchFavMeals();
            }
            else{
                addMealsToLS(mealData.idMeal);
                fav_btn.classList.add("active");
            }

            fetchFavMeals();
        });

        meal.addEventListener("click", ()=> {
            updateMealInfo(mealData);
        });

    meals.appendChild(meal);
};



function addMealsToLS(mealId) {
    const mealIds = getMealsFromLS();

    localStorage.setItem("mealIds", JSON.stringify([...mealIds, mealId]));
};



function removeMealsFromLS(mealId) {
    const mealIds = getMealsFromLS();

    localStorage.setItem("mealIds", JSON.stringify(mealIds.filter(id => id !== mealId)));
};



function getMealsFromLS() {
    const mealIds = JSON.parse(localStorage.getItem("mealIds"));

    return mealIds === null ? [] : mealIds;
};



async function fetchFavMeals() {
    // clean the container
    favMeals_container.innerHTML = "";

    const mealIds = getMealsFromLS();
    // const mealsArr = [];

    for (let i = 0; i < mealIds.length; i++) {
        const mealId = mealIds[i];
        let meal = await getMealById(mealId);

        // mealsArr.push(meal);
        addMealToFav(meal);
    }

    // console.log(mealsArr);
};



function addMealToFav(mealData) {

    const favMeal = document.createElement("li");
    
    const slicedMealName = mealData.strMeal;
    const newName = slicedMealName.split(" ");
    
    favMeal.innerHTML = 
    `
    <img id="listImg" src="${mealData.strMealThumb}" alt="${newName[0]}">
    <span class="favMealNameSpan">${newName[0]}</span>
    <button class="close"><i class='bx bx-window-close'></i></button>
    `;

    const closeBtn = favMeal.querySelector(".close");

    closeBtn.addEventListener("click", () => {
        removeMealsFromLS(mealData.idMeal);

        fetchFavMeals();
    });

    favMeals_container.appendChild(favMeal);

    favMeal.addEventListener("click", ()=> {
        updateMealInfo(mealData);
    });
};


searchBtn.addEventListener("click", async ()=> {

    meals.innerHTML = "";

    const search = inputField.value;

    const mealBySearch = await getMealBySearch(search);

    mealBySearch.forEach(meal => {
        addMeal(meal);
    });
});


closePopupBtn.addEventListener("click", ()=> {
    popup.style.scale = "0";
});


function updateMealInfo(mealData) {
    let mealNewDiv = document.createElement("div");

    const ingredient = [];
    for (let i = 1; i < 20; i++) {
        if(mealData[`strIngredient${i}`]){
            ingredient.push(`
                ${mealData[`strIngredient${i}`]} - ${mealData[`strMeasure${i}`]}
            `);
        }
        else{
            break;
        }
    };

    dataHereMealInfo.innerHTML = "";

    mealNewDiv.innerHTML = 
        `<h1 class="mealInfoH1">${mealData.strMeal}</h1>
         <img src="${mealData.strMealThumb}" alt="${mealData.strMeal}">
        
         <p>${mealData.strInstructions}</p>

         <h3>Ingredients:</h3>
         <ul>
            ${ingredient.map((ing) => `<li>${ing}</li>`).join("")}
         </ul>
        `;

    dataHereMealInfo.appendChild(mealNewDiv);

    popup.style.scale = "1"
};



//1. favorite button BUG
//2. after search overflow Bug 
//3. menu Button options
//4. click on perticular target.(eg. favBtn clicked -> popup opening)


//For Test==>
// popup.onclick = ()=> {
//     popup.style.scale = "0";
// }



// let x = window.matchMedia("(max-height: 1500px), (max-width: 1500px)");
// myFunction(x);
// x.addEventListener("scroll", myFunction);

// function myFunction(x) {
//     if (x.matches) { // If media query matches
//         window.onscroll = ()=>{
//             favMeals_containerH3.classList.remove("active");
//             favMeals_container.style.marginTop = "0";
//         }
//     }

//     else{
//         favMeals_containerH3.classList.add("active");
//         favMeals_container.style.marginTop = "3500px";
//     }
// };