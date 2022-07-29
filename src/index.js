import './style.css';
import Fetch from './display.js';
import { resetData, showPopup } from './modules/views/meal-show.js';
import {
  closeBtn, popupBox,
} from './modules/views/meal-dom-elements.js';
import { form } from './modules/views/comment-dom-elements.js';
import addComment from './modules/comments/add.js';
import comments from './modules/comments/index.js';
import setComment from './modules/views/comment-show.js';

// declare HTML element to hold the meals display
const mealsRow = document.querySelector('.meals-row');
const mealsList = new Fetch();

// get all categories to add event listeners
const categories = document.querySelectorAll('.category');

const showLikes = async (id) => {
  let likes = 0;
  const meals = await mealsList.getLikes();
  const currentItem = meals.find((meal) => meal.item_id === id);
  if (currentItem) likes = currentItem.likes;
  return likes;
};

// mapping meal cards on the page
const mapCard = (meals) => {
  // empty the meals section first
  mealsRow.innerHTML = '';

  // loop through all given meals
  meals.forEach(async (meal) => {
    const likes = await showLikes(meal.idMeal);
    // creating div element to hold one(1) meal info

    const mealCard = document.createElement('div');
    mealCard.classList.add('meal-card');
    mealCard.innerHTML = `
        <div class="meal-img"><img alt="${meal.strMeal}" src="${meal.strMealThumb}"></div>
                <div class="meal-desc">
                    <span class="meal-name">${meal.strMeal}</span>
                    <div class="meal-likes" id="${meal.idMeal}">
                    <span class="like-number">${likes}</span>
                    <a href="#" class="fa fa-thumbs-up like-icon" id="${meal.idMeal}"></a>
                        
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
  const { meals } = await mealsList.showMeals();
  mapCard(meals);
};

// add eventlistnener on categories when a specific category is clicked.
categories.forEach((category) => {
  category.addEventListener('click', () => {
    mealsList.showMeals(category.textContent).then((cat) => {
      const { meals } = cat;
      mapCard(meals);
    });
  });
});

const itemsCounter = () => {
  categories.forEach((category) => {
    const id = category.textContent;
    const thisLink = document.querySelector(`#${id}`);
    mealsList.showMeals(id).then((cat) => {
      const { meals } = cat;
      thisLink.textContent = `(${meals.length})`;
    });
  });
};
mealsRow.addEventListener('click', (e) => {
  e.preventDefault();
  const icon = e.target;
  const likes = icon.previousElementSibling;
  if (icon.classList.contains('like-icon')) {
    const meal = {
      item_id: icon.id,
    };

    mealsList.addLike(meal).then((m) => m);
    showLikes(icon.id).then((like) => {
      likes.innerHTML = like + 1;
    });
  }
});

// displaying meals on the page by default
itemsCounter();
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
