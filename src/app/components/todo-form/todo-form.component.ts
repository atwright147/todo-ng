import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { TodosService } from '../../services/todos.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent {
  form: FormGroup = this.fb.group(
    {
      name: ['', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(20),
      ]],
      description: ['', [
        Validators.minLength(2),
        Validators.maxLength(100),
      ]],
      complete: [false],
    }
  );

  constructor(
    private readonly fb: FormBuilder,
    private readonly todosService: TodosService,
  ) { }

  onSubmit(): void {
    this.todosService.addTodo(this.form.value);
  }
}
