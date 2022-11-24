import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { CreateTodoModule } from './create-todo/create-todo.module';
import { TodosRoutingModule } from './todos-routing.module';
import { TodosComponent } from './todos.component';
import { NgbDate, NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    TodosComponent,
  ],
  imports: [
    CommonModule,
    TodosRoutingModule,
    FormsModule,
    CreateTodoModule,
    NgbDatepickerModule,
    NgbModule
  ],
})
export class TodosModule {
}
