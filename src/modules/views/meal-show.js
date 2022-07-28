import {
  areaBox, categoryBox, foodImageBox, foodNameBox, ingredientListBox, tagListBox,
} from './meal-dom-elements.js';
import getMeal from '../meals/show.js';
import { setText } from '../global-value.js';
import { instruction } from './meal-dom-elements';

const displayIngredients = (meal) => {
  let index = 1;
  Object.keys(meal).forEach((props) => {
    if (props.startsWith('strIngredient')) {
      const measure = meal[`strMeasure${index}`];
      ingredientListBox.innerHTML += meal[props] ? `<span class='badge  badge-pill shadow-sm'>${meal[props]}(${measure})</span>` : '';
      index += 1;
    }
  });
};
const setImage = (element, value, altText) => {
  element.innerHTML = `<img src='${value}' class="meal-image" alt="${altText}">`;
};
const displayData = (meal) => {
  setImage(foodImageBox, meal.strMealThumb, meal.strMeal);
  setText(foodNameBox, meal.strMeal);
  setText(categoryBox, meal.strCategory);
  setText(areaBox, meal.strArea);
  setText(tagListBox, meal.strTags);
  setText(instruction, meal.strInstructions);
  displayIngredients(meal);
};

getMeal().then((meal) => {
  displayData(meal);
});