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
  const mealLikes = new Fetch();
  const meals = await mealLikes.getLikes();
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
    const container = document.createElement('div');
    container.classList.add('p-2', 'col-md-3', 'mb-2');
    const mealCard = document.createElement('div');
    mealCard.classList.add('meal-card', 'card', 'shadow-sm');
    mealCard.innerHTML = `
        <div class="meal-img"><img alt="${meal.strMeal}" src="${meal.strMealThumb}"></div>
          <div class="d-flex flex-column justify-content-between px-3 py-2">
            <div class="meal-desc mb-3">
                <span class="meal-name ">${meal.strMeal}</span>
            </div>
            <div class="meal-action d-flex justify-content-between">
                <div class="icon text-custom-color d-flex align-items-center">
                 <div class="meal-likes" id="${meal.idMeal}">
                </div>
                    <span class="like-number rounded-circle ">${likes < 10 ? `0${likes}` : likes}</span>
                    <button type="button" href="#" class=" btn btn-sm text-custom-color fa fa-thumbs-up like-icon" id="${meal.idMeal}"></button>
                </div>
                <div>
                    <button type="button" class="btn btn-sm comment-btn fa fa-comment" id="${meal.idMeal}"></button>
                    <button type="button" class="btn btn-sm reserv-btn fa fa-book" id="${meal.idMeal}"></button>
                </div>

            </div>
         </div>`;
    // apend meal info to the parent section(declared above)
    container.appendChild(mealCard);
    mealsRow.appendChild(container);
  });
};
// default function to display the cards on the page (called when a page loads)
const displayMeals = async () => {
  const { meals } = await mealsList.showMeals();
  mapCard(meals);
};

// add eventlistnener on categories when a specific category is clicked.
categories.forEach((category) => {
  category.addEventListener('click', (evt) => {
    document.querySelector('.active').classList.remove('active');
    evt.target.closest('.list-item').classList.add('active');
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
      thisLink.textContent = `${meals.length < 10 ? `0${meals.length}` : meals.length}`;
    });
  });
};
mealsRow.addEventListener('click', (e) => {
  e.preventDefault();
  const elmt = e.target;
  const likes = elmt.previousElementSibling;
  if (elmt.classList.contains('like-icon')) {
    const meal = {
      item_id: elmt.id,
    };
    mealsList.addLike(meal).then((m) => m);
    showLikes(elmt.id).then((like) => {
      likes.innerHTML = (like < 10 ? `0${like + 1}` : like + 1);
    });
  } else if (elmt.classList.contains('comment-btn')) {
    const id = elmt.getAttribute('id');
    showPopup(id);
    comments(id).then((data) => setComment(data));
    form.item_id.value = id;
  }
});

// displaying meals on the page by default
itemsCounter();
displayMeals();

closeBtn.addEventListener('click', () => {
  resetData();
  popupBox.classList.toggle('d-none');
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
