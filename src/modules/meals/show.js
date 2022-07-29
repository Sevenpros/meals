const getMeal = async (id) => fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`, { header: { 'Access-Control-Allow-Origin': '*' } }).then((response) => response.json()).then((data) => data.meals[0]);

export default getMeal;