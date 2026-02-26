// 1. Конструктор Course (назва, список студентів)
function Course(title) {
    this.title = title;
    this.students = []; // [cite: 87]
}

// Метод додавання студентів через прототип
Course.prototype.addStudent = function(student) {
    this.students.push(student.name);
    console.log(`Студента ${student.name} додано до курсу "${this.title}"`);
};

// 2. Базовий об'єкт для прототипного наслідування (спільні методи)
const humanPrototype = {
    greet() {
        console.log(`Привіт, я ${this.name}.`);
    }
};

// 3. Конструктор Teacher (ім'я, список курсів)
function Teacher(name) {
    this.name = name;
    this.courses = []; // [cite: 87]
}

// Наслідування від humanPrototype [cite: 58, 88]
Teacher.prototype = Object.create(humanPrototype);
Teacher.prototype.constructor = Teacher;

// Метод для додавання курсів
Teacher.prototype.addCourse = function(course) {
    this.courses.push(course.title);
    console.log(`Викладач ${this.name} тепер викладає курс: ${course.title}`);
};

// 4. Конструктор Student (ім'я, список курсів)
function Student(name) {
    this.name = name;
    this.courses = []; // [cite: 88]
}

// Наслідування від humanPrototype [cite: 58, 88]
Student.prototype = Object.create(humanPrototype);
Student.prototype.constructor = Student;

// Метод перегляду курсів [cite: 88]
Student.prototype.viewCourses = function() {
    console.log(`Студент ${this.name} навчається на курсах: ${this.courses.join(", ") || "немає курсів"}`);
};

// Метод запису на курс
Student.prototype.enroll = function(course) {
    this.courses.push(course.title);
    course.addStudent(this);
};

// --- ПЕРЕВІРКА РОБОТИ (Тестові об'єкти) --- [cite: 89]

// Створюємо курси
const jsBasics = new Course("JavaScript Basics");
const webDesign = new Course("Web Design");

// Створюємо викладача
const teacher1 = new Teacher("Олександр Петрович");
teacher1.greet();
teacher1.addCourse(jsBasics);

// Створюємо студентів
const student1 = new Student("Іван");
const student2 = new Student("Марія");

student1.greet();
student1.enroll(jsBasics);
student2.enroll(jsBasics);
student2.enroll(webDesign);

// Перегляд результатів
student1.viewCourses();
student2.viewCourses();

console.log("Список студентів на курсі JS:", jsBasics.students);