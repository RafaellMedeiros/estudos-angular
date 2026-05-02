import { Component, input } from '@angular/core';
import { IntLivro } from './livros';

@Component({
  selector: 'app-livro',
  imports: [],
  templateUrl: './livro.html',
  styleUrl: './livro.css',
})
export class Livro {
  livro = input.required<IntLivro>();

  alterarFavorito() {
    this.livro().favorito = !this.livro().favorito;
  }

}
