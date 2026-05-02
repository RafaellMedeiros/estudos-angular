import { Component } from '@angular/core';
import { Livro } from '../livro/livro';
import { IntLivro } from '../livro/livros';

@Component({
  selector: 'app-lista-livros',
  imports: [],
  templateUrl: './lista-livros.html',
  styleUrl: './lista-livros.css',
})
export class ListaLivros {
    livros: IntLivro[] = [
    {
      titulo: 'As Ondas',
      autor: 'Virginia Woolf',
      imagem: 'https://via.placeholder.com/150',
      genero: { id: 'ficcao', value: 'Ficção' },
      favorito: false
    },
    {
      titulo: 'Dom Casmurro',
      autor: 'Machado de Assis',
      imagem: 'https://via.placeholder.com/150',
      genero: { id: 'classico', value: 'Clássico' },
      favorito: false
    }
  ];


}
