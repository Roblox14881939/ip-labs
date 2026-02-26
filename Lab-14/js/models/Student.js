import { Person } from "./Person.js";

export class Student extends Person {
    constructor(name) {
        super(name); // [cite: 208]
        this.courses = []; // Список курсів студента 
    }

    // Метод для запису на курс
    enrollInCourse(course) {
        this.courses.push(course);
        course.addStudent(this); // Додаємо студента також у об'єкт курсу
    }

    // Метод перегляду курсів 
    viewCourses() {
        const courseNames = this.courses.map(c => c.title).join(", ");
        console.log(`Студент ${this.name} вивчає: ${courseNames || "курсів поки немає"}`);
    }

    getInfo() {
        return `Студент: ${this.name}`;
    }
}