import { Component } from '@angular/core';
import { livros } from '../../model/livros';
import { Livro } from '../livro/livro';

@Component({
  selector: 'app-genero-literario',
  imports: [
    Livro
  ],
  templateUrl: './genero-literario.html',
  styleUrl: './genero-literario.css',
})
export class GeneroLiterario {
  livro = livros[0]
}
