import { Component, OnInit } from '@angular/core';
import { initialState, Todo, TodosService } from './services/todos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  todos: Todo[] = initialState;

  constructor(
    private readonly todosService: TodosService,
  ) {}

  ngOnInit(): void {
    this.todosService.todos.subscribe(
      (todos) => this.todos = todos,
      console.info,  // tslint:disable-line:no-console
    );
  }
}
