import { setText } from '../global-value.js';
import { commentCounterBox, commentListBox } from './comment-dom-elements.js';

const showComment = (item) => ` <div class="comment d-flex-lg justify-center-lg">
                <div class="date">${item.creation_date}</div>
                <div class="comment-author">${item.username}</div>
                <div class="comment-body">
                    ${item.comment}
                </div>
            </div>`;
export const commentCounter = (comments) => comments.length;
const displayComments = (comments) => {
  let content = '';
  comments.forEach((comment) => {
    content += showComment(comment);
  });
  setText(commentCounterBox, ` (${commentCounter(comments)})`);
  setText(commentListBox, content);
};

export default displayComments;