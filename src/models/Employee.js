class Employee {
    constructor(name, email) {
        this.name = name;
        this.email = email
    }

    getIdentifier() {
        return `${this.name.toLowerCase()} | ${this.email.toLowerCase()}`;
    }
}

module.exports = Employee; 