//  Паттерн служит для эффективной передачи данных с помощью класса.
//  Например загрузка изображений браузерами, кэширование

class Car {
	constructor(model, price) {
		this.model = model
		this.price = price
	}
}

class CarFactory {
	constructor() {
		this.cars = []
	}

	create(model, price) {
		const condidate = this.getCar(model)
		if (condidate) {
			return condidate
		} 

		const newCar = new Car(model, price)
		this.cars.push(newCar)
		return newCar
	}
	
	getCar(model) {
		return this.cars.find(car => car.model === model)
	}
}

const factory = new CarFactory()

const bmwX5 = factory.create('bmw', 10000)
const audiQ1 = factory.create('audi', 12000)
const bmwX3 = factory.create('bmw', 8000)

console.log(bmwX5)
console.log(audiQ1)
console.log(bmwX3)