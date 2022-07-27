import './style.css';
import Fetch from './display.js';

// declare HTML element to hold the meals displa
const mealsRow = document.querySelector('.meals-row');

// get all categories to add event listeners
const categories = document.querySelectorAll('.category');


const showLikes = async (id) => {
    let likes = 0;
    const mealLikes = await Fetch.getLikes();
    await mealLikes.forEach((meal) => {
      if (meal.item_id === id) {
        likes = meal.likes;
      }
    });
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
  const { meals } = await mealsList;
  mapCard(meals);
};

// add eventlistnener on categories when a specific category is clicked.
categories.forEach((category) => {
  category.addEventListener('click', () => {
    Fetch.displayMeals(category.textContent).then((cat) => {
      const { meals } = cat;
      mapCard(meals);
    });
  });
});

const itemsCounter = () => {
  categories.forEach((category) => {
    const id = category.textContent;
    const thisLink = document.querySelector(`#${id}`);
    Fetch.displayMeals(id).then((cat) => {
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

    Fetch.addLike(meal).then((m) => m);
    showLikes(icon.id).then((like) => {
      likes.innerHTML = like + 1;
    });
  }
});



// displaying meals on the page by default
itemsCounter();
displayMeals();
