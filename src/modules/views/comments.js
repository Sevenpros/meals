import { setText } from '../global-value';
import { commentListBox } from '../comments/dom-elements';

const showComment = (item) => {
  return ` <div class="comment d-flex-lg justify-center-lg">
                <div class="date">${item.creation_date}</div>
                <div class="comment-author">${item.username}</div>
                <div class="comment-body">
                    ${item.comment}
                </div>
            </div>`;
};

const displayComments = (comments) => {
  let content = '';
  comments.forEach((comment) => {
    content += showComment(comment);
  });
  setText(commentListBox, content);
};

export default displayComments;




