// Базовий клас для всіх осіб
export class Person {
    constructor(name) {
        this.name = name; // [cite: 229, 231]
    }

    // Метод отримання інформації про особу
    getInfo() {
        return `Ім'я: ${this.name}`;
    }
}