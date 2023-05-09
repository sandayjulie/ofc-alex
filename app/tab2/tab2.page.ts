import { Component } from '@angular/core';
import { ISeries } from '../model/ISeries';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor() {}

  listaSeries: ISeries[] = [
    {
      nome: 'The Last Of Us (2023)',
      lancamento: '15/01/2023',
      temporadas: "Temporadas: 1",
      classificacao: 16,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/uKvVjHNqB5VmOrdxqAt2F7J78ED.jpg',
      generos: ['Drama', 'Ação', 'Aventura'],
      pagina: '/lastofus',
      favorito: false
    },
    {
      nome: 'Miraculous: As Aventuras de Ladybug (2015)',
      lancamento: '19/10/2015 (BR)',
      temporadas: "Temporadas: 5",
      classificacao: 10,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/jROnM4gMSJlsfZpMighHuWeZt42.jpg',
      generos: ['Aventura', 'Ação', 'Animação', 'Kids'],
      pagina: 'ladybug',
      favorito: false
    },
    {
      nome: 'A Lição (2022)',
      lancamento: '30/12/2022 (BR)',
      temporadas: "Temporadas: 1",
      classificacao: 16,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/bnTXjwOwdUz8MKFyQCNf0hG4fdL.jpg',
      generos: ['Drama'],
      pagina: '/licao',
      favorito: false
    },
    {
      nome: 'Stranger Things (2016)',
      lancamento: '15/07/2016 (BR)',
      temporadas: "Temporadas: 4",
      classificacao: 16,
      cartaz: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/oqkld2D0qcnSNRm15rYV2883JE3.jpg',
      generos: ['Drama','Sci-Fi', 'Mistério', 'Fantasia'],
      pagina: '/st',
      favorito: false
    },
    {
      nome: 'Rilakkuma e Kaoru (2019)',
      lancamento: '19/04/2019 (BR)',
      temporadas: "Temporadas: 1",
      classificacao: 10,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/lzohWj8xtowSXJVN9PsJjZAf1B2.jpg',
      generos: ['Comédia', 'Animação', 'Drama', 'Kids'],
      pagina: '/urso',
      favorito: false
    }
  ];

}
