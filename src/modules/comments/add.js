import { url } from '../global-value.js';

const addComment = async (itemID, author, body) => {
  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify({
      item_id: itemID,
      username: author,
      comment: body,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  return (response.ok) ? response : Promise.reject(response);
};

export default addComment;