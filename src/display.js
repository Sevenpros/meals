export default class Fetch {
    static displayCategories = async () => {
        const mealsCategories = await fetch('https://themealdb.com/api/json/v1/1/categories.php');
        const response = await mealsCategories.json();
        const categories = await response.categories;
        return categories;
     }
     
     static displayMeals = async (category = 'Beef') => {
         const mealsList = await fetch(`https://themealdb.com/api/json/v1/1/filter.php?c=${category}`);
         const response = await mealsList.json();
         return response;
     }
}