import { Component, signal } from '@angular/core';
import { Widget } from './widget/widget';
import { Header } from "./header/header";
import { Main } from "./main/main";
import { Footer } from "./footer/footer";

@Component({
  selector: 'app-root',
  imports: [Widget, Header, Main, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('labs');
}
