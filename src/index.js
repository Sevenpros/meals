import './style.css';
import Fetch from './display.js';
import { resetData, showPopup } from './modules/views/meal-show.js';
import {
  closeBtn, popupBox,
} from './modules/views/meal-dom-elements.js';
import './modules/views/meal-show.js';
import { form } from './modules/views/comment-dom-elements.js';
import addComment from './modules/comments/add.js';
import comments from './modules/comments/index.js';
import setComment from './modules/views/comment-show.js';
import { commentContainer } from './modules/views/comment-dom-elements';
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
                    <button class="btn btn-sm btn-dark comment-btn" id="${meal.idMeal}">Comments</button>
                    <button class="btn btn-sm btn-dark reserv-btn" id="${meal.idMeal}">Reservations</button>
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
      const {meals} = cat;
      mapCard(meals);
    });
  });
});

// displaying meals on the page by default
displayMeals();

closeBtn.addEventListener('click', () => {
  resetData();
  popupBox.classList.toggle('d-none');
});

mealsRow.addEventListener('click', (evt) => {
  const elmt = evt.target;
  if (!elmt.classList.contains('comment-btn')) return;
  const id = elmt.getAttribute('id');
  showPopup(id);
  comments(id).then((data) => setComment(data));
  form.item_id.value = id;

});


form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const author = form.author.value;
  const insight = form.insight.value;
  addComment(form.item_id.value, author, insight).then(() => {
    // will add code for displaying feedback Message
  });
  const clearFormFields = (form) => {
    Object.keys(form).forEach((key, index) => {
      if (index < 2) form[key].value = '';
    });
  };
  clearFormFields(form);
});
