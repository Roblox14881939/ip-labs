import { Person } from "./Person.js";

export class Teacher extends Person {
    constructor(name) {
        super(name); // Виклик конструктора батьківського класу [cite: 208, 286]
        this.courses = []; // Список курсів, які веде викладач [cite: 263]
    }

    // Метод для додавання курсів викладачу
    addCourse(course) {
        this.courses.push(course);
        console.log(`Викладач ${this.name} тепер веде курс: ${course.title}`);
    }

    // Перевизначення методу отримання інформації 
    getInfo() {
        return `Викладач: ${this.name} (Курсів: ${this.courses.length})`;
    }
}