import { header, mealsSection } from './views/meal-dom-elements';

const appID = 'Kw76R2UqPqv86GuooSFn';
export default appID;
export const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appID}/comments`;
export const setText = (element, value = '') => {
  element.innerHTML = value;
};

export function toggleBlur() {
  mealsSection.classList.toggle('blur');
  header.classList.toggle('blur');
}