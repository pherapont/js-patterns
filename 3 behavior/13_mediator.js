//  Для тесного взаимодействия объектов друг с другом при помощи централизованной абстракции
//  Хорошо подходит пример чатов соц.сетей

class User {
	constructor(name) {
		this.name = name
		this.room = null
	}

	send(message, to) {
		this.room.send(message, this, to)
	}

	receive(message, from) {
		console.log(`${from.name} => ${this.name}: ${message}`)
	}
}

class chatRoom {
	constructor() {
		this.users = {}
	}

	register(user) {
		this.users[user.name] = user
		user.room = this
	}

	send(message, from, to) {
		if (to) {
			to.receive(message, from)
		} else {
			Object.keys(this.users).forEach(key => {
				if (this.users[key] !== from) {
					this.users[key].receive(message, from)
				}
			})
		}
	}
}
