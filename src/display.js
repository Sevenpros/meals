export default class Fetch {
  constructor() {
    this.itemUrl = 'https://themealdb.com/api/json/v1/1/filter.php?c=';
    this.likeUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/Kw76R2UqPqv86GuooSFn/likes/';
  }

  async showMeals(category = 'Breakfast') {
    const allMeals = await fetch(this.itemUrl + category);
    return allMeals.json();
  }

  async addLike(meal) {
    const res = await fetch(this.likeUrl, {
      method: 'POST',
      body: JSON.stringify(meal),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return res;
  }

  async getLikes() {
    const likes = await fetch(this.likeUrl);
    return likes.json();
  }
}