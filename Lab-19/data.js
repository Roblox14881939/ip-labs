export const todos = [
  {
    id: "1",
    userId: 7,
    title: "Вивчити основи Node.js",
    description: "Розібратися з модулем http та npm",
    tag: "Навчання",
    deadline: "2026-05-01",
    createdAt: Math.floor(Date.now() / 1000),
    isDone: true
  },
  {
    id: "2",
    userId: 7,
    title: "Створити власний API",
    description: "Написати сервер, що віддає JSON",
    tag: "Робота",
    deadline: "2026-05-05",
    createdAt: Math.floor(Date.now() / 1000),
    isDone: false
  }
];