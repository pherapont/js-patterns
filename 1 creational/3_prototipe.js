const car = {
	wheels: 4,

	init() {
		console.log(`У меня есть ${this.wheels} колеса, и мой владелец ${this.owner}`)
	}
}

// const carWithOwner = Object.create(car, {
// 	owner: {
// 		value: 'Дмитрий'
// 	}
// })

const carWithOwner = name => Object.create(car, {
	owner: {
		value: name
	}
})


const cars = [
	carWithOwner('Дмитрий'),
	carWithOwner('Иван'),
	carWithOwner('Елена'),
	carWithOwner('Константин'),
]

cars.forEach(car => car.init())

console.log(carWithOwner('Дмитрий').__proto__ === car)