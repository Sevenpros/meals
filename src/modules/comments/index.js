import { url } from '../global-value.js';

const comments = async (id) => {
  const response = await fetch(`${url}?item_id=${id}`);
  return response.json();
};

export default comments;