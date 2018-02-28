const httpOptions = {
    headers: { 'X-Mashape-Key': 'YOUR_API_KEY' }
  };


function getAllDishes() {
    const url = 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/search'
    return fetch(url,httpOptions)
    .then(processResponse)
    .catch(handleError)
}

function processResponse (response) {
    if(response.ok){
        return response.json()
    }
    throw response;
}

function handleError (error){
    if(error.json) {
        error.json().then( error =>{
            console.error('getAllDishes() API Error:', error.message || error)    
        })
    } else {
        console.error('getAllDishes() API Error:', error.message || error )    
    }

}

export { getAllDishes }