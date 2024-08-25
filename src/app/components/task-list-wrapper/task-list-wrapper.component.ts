import { Component } from '@angular/core';
import { TaskInfoTagComponent } from '../task-info-tag/task-info-tag.component';
import { TaskListComponent } from '../task-list/task-list.component';
import { TaskEmptyListComponent } from '../task-empty-list/task-empty-list.component';

@Component({
  selector: 'app-task-list-wrapper',
  standalone: true,
  imports: [TaskInfoTagComponent,TaskListComponent,TaskEmptyListComponent],
  templateUrl: './task-list-wrapper.component.html',
  styleUrl: './task-list-wrapper.component.scss'
})
export class TaskListWrapperComponent {

}
