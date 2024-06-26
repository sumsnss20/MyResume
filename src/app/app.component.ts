import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Resume24Component } from './resume24/resume24.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,Resume24Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'sumanresume24';
}
