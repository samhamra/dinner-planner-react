const API_KEY = 'YOUR_API_KEY'


function getAllDishes() {
    return fetch('https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/search', {
        headers: {
            'X-Mashape-Key': API_KEY
        }
    })
    .then(processResponse)
    .catch(error => console.log('getAllDishes() API Error:', error.statusText, error))
}

function processResponse (response) {
    if(response.ok){
        return response.json()
    }
    throw response
}

export { getAllDishes }