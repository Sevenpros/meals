import './style.css';
import './modules/views/meal-show.js';
import { form } from './modules/views/comment-dom-elements.js';
import addComment from './modules/comments/add.js';
import comments from './modules/comments/index.js';
import displayComments from './modules/views/comment-show.js';

comments(52772).then((data) => displayComments(data));
form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const author = form.author.value;
  const insight = form.insight.value;
  addComment(52772, author, insight).then(() => {
    // will add code for displaying feedback Message
  });
  const clearFormFields = (form) => {
    Object.keys(form).forEach((key) => {
      form[key].value = '';
    });
  };
  clearFormFields(form);
});
