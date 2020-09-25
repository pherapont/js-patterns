// Когда в приложении нужен только один инстанс определенного класа, например для подключения к базе данных

class Database {
	constructor(data) {
		if (Database.exists) {
			return Database.instace
		}
		
		Database.instace = this
		Database.exists = true
		this.data = data
	}

	getData() {
		return this.data
	}
}

const mongo = new Database('MongoDB')
console.log(mongo.getData())

const mysql = new Database('MySQL')
console.log(mysql.getData())

console.log(Database)