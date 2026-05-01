import { Component } from '@angular/core';

@Component({
  selector: 'app-livro',
  imports: [],
  templateUrl: './livro.html',
  styleUrl: './livro.css',
})
export class Livro {

  title: string = 'O Senhor dos Anéis';
  favorito: boolean = false;
  subtitle: string = 'A Sociedade do Anel';
  image: string = 'https://m.media-amazon.com/images/I/81SWBRKfExL._AC_UF1000,1000_QL80_.jpg'
}
