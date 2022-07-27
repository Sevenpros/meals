export default class Fetch {
  static async displayMeals(category = 'Breakfast') {
    const mealsList = await fetch(`https://themealdb.com/api/json/v1/1/filter.php?c=${category}`);
    const response = await mealsList.json();
    return response;
  }

  static async addLike(meal) {
    const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/Kw76R2UqPqv86GuooSFn/likes/', {
      method: 'POST',
      body: JSON.stringify(meal),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response;
  }

  static async getLikes() {
    const mealLikes = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/Kw76R2UqPqv86GuooSFn/likes/');
    const response = mealLikes.json();
    return response;
  }
}