import { Component, OnInit } from '@angular/core';
import { TodoService } from './todo.service'; // import serivce của chúng ta

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  providers: [TodoService] // Khai báo thêm providers
})
export class TodoComponent implements OnInit {
  public todos;
  public newTodo;
  constructor(private todoService: TodoService) { }
  getTodos(){
    return this.todoService.get().then(todos => {
      this.todos = todos;
    });
  }
  addTodo(){
    this.todoService.add({ title: this.newTodo, isDone: false }).then(() => {
      return this.getTodos();
    }).then(() => {
      this.newTodo = '';
    });
  }
  destroyTodo(todo) {
    this.todoService.delete(todo).then(() => {
      return this.getTodos();
    });
  }
  makeDone(todo) {
    this.todoService.done(todo).then(() => {
      return this.getTodos();
    });
  }
  filterTask(todo) {
    this.todoService.taskFilter(todo).then(() => {
      return this.getTodos();
    });
  }
  ngOnInit(): void {
    this.getTodos()
  }

}
