import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { TodoEntryFormComponent } from './components/todo-entry-form/todo-entry-form.component';
import { TaskListWrapperComponent } from './components/task-list-wrapper/task-list-wrapper.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule ,RouterOutlet,HeaderComponent,TodoEntryFormComponent,TaskListWrapperComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {}
