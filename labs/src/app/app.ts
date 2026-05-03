import { Component, signal } from '@angular/core';
import { Widget } from './widget/widget';

@Component({
  selector: 'app-root',
  imports: [Widget],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('labs');
}
