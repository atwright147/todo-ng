import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { TodosService } from '../../services/todos.service';
import { Notification, NotificationsService, NotificationType } from '../../services/notifications.service';

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
    private readonly notificationsService: NotificationsService,
    private readonly todosService: TodosService,
  ) { }

  onSubmit(): void {
    const notification: Notification = {
      title: 'Success',
      description: 'Todo added',
      type: NotificationType.INFO,
    };

    this.notificationsService.addNotification(notification);
    this.todosService.addTodo(this.form.value);
  }
}
