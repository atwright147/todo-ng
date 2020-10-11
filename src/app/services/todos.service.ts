import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface Todo {
  name: string;
  description: string;
  complete: boolean;
}

export const initialState: Todo[] = [
  {
    name: 'Todo 1',
    description: 'First todo',
    complete: true,
  },
  {
    name: 'Todo 2',
    description: 'Second todo',
    complete: false,
  },
  {
    name: 'Todo 3',
    description: 'Third todo',
    complete: false,
  },
];

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  private todosState = new BehaviorSubject<Todo[]>(initialState);

  constructor() { }

  get todos(): Observable<Todo[]> {
    return this.todosState.asObservable();
  }

  addTodo(todo: Todo): void {
    const updatedTodoState = [...this.todosState.value, todo];
    this.todosState.next(updatedTodoState);
  }
}
