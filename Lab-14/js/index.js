import { Course } from "./models/Course.js";
import { Teacher } from "./models/Teacher.js";
import { Student } from "./models/Student.js";

// 1. Створення об'єктів (курсів)
const jsCourse = new Course("JavaScript Professional");
const pythonCourse = new Course("Python for Data Science");

// 2. Створення викладача та додавання йому курсів
const mentor = new Teacher("Олексій Резніченко");
mentor.addCourse(jsCourse);
mentor.addCourse(pythonCourse);

// 3. Створення студентів та запис на курси
const student1 = new Student("Дмитро");
const student2 = new Student("Анна");

student1.enrollInCourse(jsCourse);
student2.enrollInCourse(jsCourse);
student2.enrollInCourse(pythonCourse);

// 4. Демонстрація методів та вивід інформації
console.log("--- Звіт системи ---");
console.log(mentor.getInfo()); // 
student1.viewCourses(); // 
student2.viewCourses();

console.log(`Студентів на курсі "${jsCourse.title}":`, jsCourse.students.length);