import { url } from '../global-value';

const addComment = async (itemID, author, body) => {
  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify({
      'item_id': itemID,
      'username': author,
      'comment': body,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  console.log(response);
  return (response.ok) ? response : Promise.reject(response);
};

export default addComment;