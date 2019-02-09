const httpOptions = {
  headers: {'X-Mashape-Key': 'EQLTqSWbCEmshK4TXyvRenrtEd7tp1uOcIDjsnTZvRiqqjbLLb'}
};

const DinnerModel = function () {
  let numberOfGuests = 1;
  let selectedDishes = [];
  let observers = [];
  let guestCache = localStorage.getItem('guests');
  let menuCache = localStorage.getItem('menu');
  if(guestCache) {
    numberOfGuests = guestCache
  }
  if(menuCache) {
    selectedDishes = JSON.parse(menuCache);
  }

  this.setNumberOfGuests = function (num) {
    numberOfGuests = num;
    notifyObservers(0);
  };
  
  this.addGuest = function() {
    numberOfGuests++;
    localStorage.setItem('guests', numberOfGuests)
    notifyObservers(0);
  }
  this.removeGuest = function() {
    if(numberOfGuests>1) {
      numberOfGuests--;
      localStorage.setItem('guests', numberOfGuests)
      notifyObservers(0);
    }
  }
  this.getNumberOfGuests = function () {
    return numberOfGuests;
  };
  
  this.getMenu = function() {
    return selectedDishes;
  }
  this.addDishToMenu = function(dish) {
    if(!selectedDishes.find(a => a.id === dish.id)) {
      selectedDishes.push(dish);
      console.log();
      localStorage.setItem('menu', JSON.stringify(selectedDishes))
      notifyObservers(1)
    }
  }
  
  this.getTotalMenuPrice = function() {
    if(selectedDishes.length === 0) {
      return 0;
    }
    return selectedDishes.map(dish => dish.extendedIngredients.length).reduce((a,b) => a+b)*numberOfGuests;
  }


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

  const notifyObservers = function (code) {
    observers.forEach(o => o.update(code));
  };
};

export const modelInstance = new DinnerModel();
