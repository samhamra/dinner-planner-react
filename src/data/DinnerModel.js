//DinnerModel Object constructor
const DinnerModel = function () {

  let numberOfGuests = 2;
  let observers = [];

  this.setNumberOfGuests = function (num) {
    numberOfGuests = num;
    notifyObservers();
  };

  // should return
  this.getNumberOfGuests = function () {
    return numberOfGuests;
  };

  this.addObserver = function (observer) {
    observers.push(observer);
  };

  this.removeObserver = function (observer) {
    observers = observers.filter(o => o !== observer);
  };

  const notifyObservers = function () {
    observers.forEach(o => o.update());
  }
};

export const model = new DinnerModel();