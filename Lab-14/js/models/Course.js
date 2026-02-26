export class Course {
    constructor(title) {
        this.title = title;
        this.students = []; // Список студентів 
    }

    // Метод для додавання студентів до курсу
    addStudent(student) {
        this.students.push(student);
        console.log(`Студент ${student.name} зарахований на курс "${this.title}"`);
    }
}