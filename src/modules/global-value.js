const appID = 'Kw76R2UqPqv86GuooSFn';
export default appID;
export const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appID}/comments/`;
export const setText = ((element, value) => {
  element.innerHTML = value;
});