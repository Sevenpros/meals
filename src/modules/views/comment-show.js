import { setText } from '../global-value.js';
import { commentCounterBox, commentListBox } from './comment-dom-elements.js';

const showComment = (item) => `<div class="border mx-0 my-1 px-2 py-1 shadow-sm text-start"><div class="comment row">
<div class="date text-dark small col-md-4">
${item.creation_date} <span class="comment-author text-custom-color font-weight-lighter "> ${item.username}</span>
</div> 
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
  setText(commentCounterBox, ` <span class='text-custom-color'>(${commentCounter(comments)})</span>`);
  setText(commentListBox, content);
};

export default setComment;