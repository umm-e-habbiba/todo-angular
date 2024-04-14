import { Component } from '@angular/core';
import { Todo } from '../../Todo';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { AddTodoComponent } from '../add-todo/add-todo.component';
@Component({
  selector: 'app-my-todos',
  standalone: true,
  imports: [FormsModule, CommonModule, TodoItemComponent, AddTodoComponent],
  templateUrl: './my-todos.component.html',
  styleUrl: './my-todos.component.css',
})
export class MyTodosComponent {
  localTodos: string | null;
  todos: Todo[];
  constructor() {
    this.localTodos = localStorage.getItem('todos');
    if (this.localTodos == null) {
      this.todos = [];
    } else {
      this.todos = JSON.parse(this.localTodos);
    }
  }
  deleteTodo(todo: Todo) {
    console.log(todo);
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }
  addTodo(todo: Todo) {
    console.log(todo);
    this.todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }
  toggleTodo(todo: Todo) {
    console.log(todo);
    const index = this.todos.indexOf(todo);
    this.todos[index].active = !this.todos[index].active;
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }
}
