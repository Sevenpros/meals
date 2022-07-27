export default class Fetch {
     static displayMeals = async (category = 'Beef') => {
       const mealsList = await fetch(`https://themealdb.com/api/json/v1/1/filter.php?c=${category}`);
       const response = await mealsList.json();
       return response;
     }
}