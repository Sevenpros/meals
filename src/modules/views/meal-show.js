import {
  areaBox,
  categoryBox,
  foodImageBox,
  foodNameBox,
  ingredientListBox,
  tagListBox,
  popupBox,
  instruction,
} from './meal-dom-elements.js';
import getMeal from '../meals/show.js';
import { setText, toggleBlur } from '../global-value.js';

const setIngredients = (meal = []) => {
  Object.keys(meal).forEach((props, index) => {
    if (props.startsWith('strIngredient')) {
      const measure = meal[`strMeasure${(index + 1)}`];
      ingredientListBox.innerHTML += meal[props] ? `<span class='badge  badge-pill shadow-sm'>${meal[props]}(${measure})</span>` : '';
    }
  });
};

const setImage = (container, value = './', altText = '') => {
  container.innerHTML = `<img src='${value}' class="meal-image" alt="${altText}">`;
};

const setData = (meal) => {
  setImage(foodImageBox, meal.strMealThumb, meal.strMeal);
  setText(foodNameBox, meal.strMeal);
  setText(categoryBox, meal.strCategory);
  setText(areaBox, meal.strArea);
  setText(tagListBox, meal.strTags);
  setText(instruction, meal.strInstructions);
  setIngredients(meal);
};

export const resetData = () => {
  setImage(foodImageBox);
  setText(foodNameBox);
  setText(categoryBox);
  setText(areaBox);
  setText(tagListBox);
  setText(instruction);
  setIngredients();
  toggleBlur();
};

export const showPopup = (id) => {
  getMeal(id).then((meal) => {
    setData(meal);
  });
  toggleBlur();
  popupBox.classList.toggle('d-none');
};