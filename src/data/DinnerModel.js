class DinnerModel {
  constructor() {
    console.log("constructed")
    this.__numberOfGuests = 4
    this.__observers = []
  }

  /* Public */
  addObserver(observer) {
    this.__observers.push(observer)
  }

  removeObserver(observer) {
    this.__observers = this.__observers.filter(o => o !== observer)
  }

  setNumberOfGuests(num) {
    this.__numberOfGuests = num
    this.__notifyObservers()
  }

  getNumberOfGuests() {
    return this.__numberOfGuests
  }

  /* Private */
  __notifyObservers() {
    this.__observers.forEach(o => o.update())
  }
}

export const model = new DinnerModel()