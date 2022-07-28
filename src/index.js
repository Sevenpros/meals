import './style.css';
import Fetch from './display.js';
import './modules/views/meal-show.js'
import showPopup, { resetData } from './modules/views/meal-show';
import { closeBtn, popupBox } from './modules/dom-elements';
// declare HTML element to hold the meals display
const mealsRow = document.querySelector('.meals-row');

// get all categories to add event listeners
const categories = document.querySelectorAll('.category');

// mapping meal cards on the page
const mapCard = (meals) => {
  // empty the meals section first
  mealsRow.innerHTML = '';
  // loop through all given meals
  meals.forEach((meal) => {
    // creating div element to hold one(1) meal info
    const mealCard = document.createElement('div');
    mealCard.classList.add('meal-card');
    mealCard.innerHTML = `
        <div class="meal-img"><img alt="${meal.strMeal}" src="${meal.strMealThumb}"></div>
                <div class="meal-desc">
                    <span class="meal-name">${meal.strMeal}</span>
                    <div class="meal-likes">
                        <span class="like-icon"></span>
                        <span class="like-number"></span>
                    </div>
                </div>
                <div class="meal-action">
                    <button class="btn comment-btn" id="${meal.idMeal}">Comments</button>
                    <button class="btn reserv-btn" id="${meal.idMeal}">Reservations</button>
                </div>
        `;

    // apend meal info to the parent section(declared above)
    mealsRow.appendChild(mealCard);
  });
};

// default function to display the cards on the page (called when a page loads)
const displayMeals = async () => {
  const mealsList = await Fetch.displayMeals();
  const meals = await mealsList.meals;
  mapCard(meals);
};

// add eventlistnener on categories once a specific category is clicked.
categories.forEach((category) => {
  category.addEventListener('click', (e) => {
    const category = e.target.textContent;
    Fetch.displayMeals(category).then((cat) => {
      const { meals } = cat;
      mapCard(meals);
    });
  });
});

// displaying meals on the page by default
displayMeals();

mealsRow.addEventListener('click',(evt)=>{
   const elmt=evt.target;
   if(!elmt.classList.contains('comment-btn')) return;
   showPopup(elmt.getAttribute('id'));
});

closeBtn.addEventListener('click',()=>{
  resetData();
  popupBox.classList.toggle('d-none')
});