const getMeal = async () => fetch('https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772', {
  header: {
    'Access-Control-Allow-Origin': '*',
  },
}).then((response) => response.json()).then((data) => data.meals[0]);
export default getMeal;