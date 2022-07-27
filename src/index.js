import './style.css';
import './modules/views/meal-show.js';
import {form } from './modules/comments/dom-elements';
import addComment from './modules/comments/add';
import comments from './modules/comments/index.js';
import displayComments from './modules/views/comments';

form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const author = form.author.value;
  const insight = form.insight.value;
  const response= addComment(52772,author,insight);
  console.log(response);
});
console.log(comments(52772));
comments(52772).then((data)=>displayComments(data));