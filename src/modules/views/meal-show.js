import {
  areaBox, categoryBox, foodImageBox, foodNameBox, ingredientListBox, tagListBox, popupBox, instruction,
} from './meal-dom-elements.js';
import getMeal from '../meals/show.js';
import { setText, toggleBlur } from '../global-value';
import { header, mealsSection } from './meal-dom-elements';


const setIngredients = (meal = []) => {
  let index = 1;
  Object.keys(meal).forEach((props) => {
    if (props.startsWith('strIngredient')) {
      const measure = meal[`strMeasure${index}`];
      ingredientListBox.innerHTML += meal[props] ? `<span class='badge  badge-pill shadow-sm'>${meal[props]}(${measure})</span>` : '';
      index += 1;
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