import { setText } from '../global-value.js';
import { commentCounterBox, commentListBox } from './comment-dom-elements.js';

const showComment = (item) => `<div class="border mx-0 my-1 px-2 py-1 shadow-sm"><div class="comment row">
                <div class="date text-dark small col-md-2">${item.creation_date}</div>
                <div class="comment-author text-danger font-weight-lighter col-md-3">${item.username}</div>
                <div class="comment-body col-md-7">
                    ${item.comment}
                </div>
            </div></div> `;
export const commentCounter = (comments) => comments.length;
const setComment = (comments) => {
  let content = '';
  comments.forEach((comment) => {
    content += showComment(comment);
  });
  setText(commentCounterBox, ` <span class='text-danger'>(${commentCounter(comments)})</span>`);
  setText(commentListBox, content);
};

export default setComment;