const Employee = require('../models/Employee');


class SecretSantaService {
    constructor(employees, lastYearMap) {
        this.employees = employees;
        this.lastYearMap = lastYearMap;
    }

    shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    getAssignments() {
        let attempts = 0;
        const maxAttempts = 1000;

        while (attempts < maxAttempts) {
            const shuffled = this.shuffle([...this.employees]);
            const assignments = new Map();
            let valid = true;

            for (let i = 0; i < this.employees.length; i++){
                const giver = this.employees[i];
                const receiver = shuffled[i];

                const key = giver.getIdentifier();
                const lastYearReceiver = this.lastYearMap.get(key);

                if (
                    giver.getIdentifier() === receiver.getIdentifier() ||
                    (lastYearReceiver && lastYearReceiver.name === receiver.name && lastYearReceiver.email === receiver.email)
                ) {
                    valid = false;
                    break;
                }

                assignments.set(giver, receiver)
            }
            if (valid) return assignments;

            attempts ++;
        }
        throw new Error('Unable to generate a valid assignment after multiple attemplts');
    }
}

module.exports = SecretSantaService;