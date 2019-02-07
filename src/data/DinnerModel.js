const httpOptions = {
  headers: {'X-Mashape-Key': 'EQLTqSWbCEmshK4TXyvRenrtEd7tp1uOcIDjsnTZvRiqqjbLLb'}
};

const DinnerModel = function () {

  let numberOfGuests = 1;
  let observers = [];

  this.setNumberOfGuests = function (num) {
    numberOfGuests = num;
    notifyObservers();
  };

  this.getNumberOfGuests = function () {
    return numberOfGuests;
  };

  // API Calls

  this.getAllDishes = function (type, filter) {
    const url = `https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/search?query=${filter}&type=${type}`
    return fetch(url, httpOptions)
      .then(processResponse)
      .catch(handleError)
  }
  
  this.getDishSummary = function(id) {
    const url = `https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/${id}/summary`
    return fetch(url, httpOptions)
      .then(processResponse)
      .catch(handleError)
  }

  this.getDish = function(id) {
    const url = `https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/${id}/information`
    return fetch(url, httpOptions)
      .then(processResponse)
      .catch(handleError)
  }
  
  // API Helper methods

  const processResponse = function (response) {
    if (response.ok) {
      return response.json()
    }
    throw response;
  }
  
  const handleError = function (error) {
    if (error.json) {
      error.json().then(error => {
        console.error('getAllDishes() API Error:', error.message || error)
      })
    } else {
      console.error('getAllDishes() API Error:', error.message || error)
    }
  }

  // Observer pattern

  this.addObserver = function (observer) {
    observers.push(observer);
  };

  this.removeObserver = function (observer) {
    observers = observers.filter(o => o !== observer);
  };

  const notifyObservers = function () {
    observers.forEach(o => o.update());
  };
};

export const modelInstance = new DinnerModel();
