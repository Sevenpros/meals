export default class Fetch {
    constructor() {

    }

    countItems(){
        let meals = [
            {
                "strMeal": "Nasi lemak",
                "strMealThumb": "https://www.themealdb.com/images/media/meals/wai9bw1619788844.jpg",
                "idMeal": "53051"
            },
            {
                "strMeal": "Portuguese fish stew (Caldeirada de peixe)",
                "strMealThumb": "https://www.themealdb.com/images/media/meals/do7zps1614349775.jpg",
                "idMeal": "53045"
            },
            {
                "strMeal": "Recheado Masala Fish",
                "strMealThumb": "https://www.themealdb.com/images/media/meals/uwxusv1487344500.jpg",
                "idMeal": "52809"
            },
            {
                "strMeal": "Salmon Avocado Salad",
                "strMealThumb": "https://www.themealdb.com/images/media/meals/1549542994.jpg",
                "idMeal": "52960"
            },
            {
                "strMeal": "Salmon Prawn Risotto",
                "strMealThumb": "https://www.themealdb.com/images/media/meals/xxrxux1503070723.jpg",
                "idMeal": "52823"
            }]
            return Promise.resolve(meals);
    }
}