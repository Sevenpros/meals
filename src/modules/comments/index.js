import { url } from '../global-value.js';

const comments = async (id) => {
  const response = await fetch(`${url}?item_id=${id}`);
  return (response.ok) ? response.json() : Promise.reject(response);
};

export default comments;