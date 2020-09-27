class Complaints {
	constructor() {
		this.complaints = []
	}
	reply(complaint) {}
	add(complaint) {
		this.complaints.push(complaint)
		return this.reply(complaint)
	}
	// getComplaints() {
	// 	this.complaints.forEach((complaint) => console.log(complaint) )
	// }
}

class ProductComplaints extends Complaints {
	reply({id, customer, details}) {
		return `Product: ${id}: ${customer} (${details})`
	}
}
class ServiceComplaints extends Complaints {
	reply({id, customer, details}) {
		return `Service: ${id}: ${customer} (${details})`
	}
}

class ComplaintRegistry {
	register(customer, type, details) {
		const id = Date.now()
		let complaint
		if (type === 'service') {
			complaint = new ServiceComplaints()
		} else {
			complaint = new ProductComplaints()
		}
		return complaint.add({id, customer, details})
	}
}

const registry = new ComplaintRegistry()
// const checkComplaints = new Complaints()

console.log(registry.register('Konstantin', 'service', 'Не работает регистрация'))
console.log(registry.register('Elena', 'product', 'Сбои в программе'))

// checkComplaints.getComplaints()