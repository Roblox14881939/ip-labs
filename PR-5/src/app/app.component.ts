import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TodoService } from './services/todo.service';
import { Todo } from './models/todo.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  USER_ID = 7;

  todos: Todo[] = [];
  isLoading = false;
  isEditing = false;
  currentEditId: string | null = null;

  formData: Todo = this.getEmptyForm();

  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.fetchTodos();
  }

  getEmptyForm(): Todo {
    return {
      userId: this.USER_ID,
      title: '',
      description: '',
      tag: 'Робота',
      deadline: '',
      isDone: false
    };
  }

  fetchTodos() {
    this.isLoading = true;
    this.todoService.getAll().subscribe({
      next: (data) => {
        this.todos = data.reverse(); 
        this.isLoading = false;
      },
      error: () => {
        alert("Не вдалося завантажити");
        this.isLoading = false;
      }
    });
  }

  onSubmit() {
    if (this.isEditing && this.currentEditId) {
      this.todoService.update(this.currentEditId, this.formData).subscribe(() => {
        this.fetchTodos();
        this.resetForm();
      });
    } else {
      this.formData.createdAt = Math.floor(Date.now() / 1000);
      this.todoService.add(this.formData).subscribe((newTask) => {
        this.todos.unshift(newTask);
        this.resetForm();
      });
    }
  }

  deleteTask(id: string | undefined) {
    if (!id) return;
    this.todoService.remove(id).subscribe(() => {
      this.todos = this.todos.filter(t => t.id !== id);
    });
  }

  toggleDone(task: Todo) {
    const updatedStatus = !task.isDone;
    if(task.id) {
      this.todoService.update(task.id, { isDone: updatedStatus }).subscribe(() => {
        task.isDone = updatedStatus;
      });
    }
  }

  editTask(task: Todo) {
    this.isEditing = true;
    this.currentEditId = task.id || null;
    this.formData = { ...task };
  }

  resetForm() {
    this.isEditing = false;
    this.currentEditId = null;
    this.formData = this.getEmptyForm();
  }
}