import { Component, OnInit } from '@angular/core';
import { TodosService } from '../../services/todos.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  quantity = 0;

  constructor(
    private readonly todosService: TodosService,
  ) { }

  ngOnInit(): void {
    this.todosService.todos.subscribe(
      (todos) => this.quantity = todos.length,
    );
  }
}
