import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyTodosComponent } from './MyComponents/my-todos/my-todos.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MyTodosComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'todos';
}
