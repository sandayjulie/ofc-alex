import { NavigationExtras, Router } from '@angular/router';
import { Component } from '@angular/core';
import { IFilme } from '../model/IFilme';
import { AlertController, ToastController } from '@ionic/angular';
import { FilmeDetalhePage } from '../filme-detalhe/filme-detalhe.page';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(public router:Router) {}

  listaFilmes: IFilme[] = [
    {
      nome: 'Mortal Kombat (2021)',
      lancamento: '15/04/2021',
      duracao: '1h50m',
      classificacao: 9,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/w8BVC3qrCWCiTHRz4Rft12dtQF0.jpg',
      generos: ['Ação', 'Fantasia', 'Aventura'],
      pagina: '/mortal-kombat',
      favorito: false
    },
  ];
    exibirFilme (filme: IFilme){
      const navigationExtras : NavigationExtras = {state:{paramFilme:filme}};
      this.router.navigate(['filme-detalhe'], navigationExtras);
    }


/*
    {
      nome: 'Vingadores: Ultimato (2019)',
      lancamento: '25/04/2019 (BR)',
      duracao: '3h01m',
      classificacao: 6,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/q6725aR8Zs4IwGMXzZT8aC8lh41.jpg',
      generos: ['Aventura', 'Ficção científica', 'Ação'],
      pagina: '/avengers',
      favorito: false
    },
    {
      nome: 'Pânico VI (2023)',
      lancamento: '09/03/2023 (BR)',
      duracao: '2h03m',
      classificacao: 18,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/dbd7DQCHZ57SF4tM2puHtwNxDQD.jpg',
      generos: ['Terror', 'Mistério', 'Triller'],
      pagina: '/panico',
      favorito: false
    },
    {
      nome: 'Super Mario Bros. : O Filme (2023)',
      lancamento: '05/04/2023 (BR)',
      duracao: '1h32m',
      classificacao: 10,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/i9XdxHsFrcqLkRWSF1coOHo4R39.jpg',
      generos: ['Animação','Aventura', 'Família', 'Fantasia', 'Comédia'],
      pagina: '/mario',
      favorito: false
    },
    {
      nome: 'Barbie Moda e Magia (2010)',
      lancamento: '14/09/2010 (US)',
      duracao: '1h19m',
      classificacao: 0,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/q6725aR8Zs4IwGMXzZT8aC8lh41.jpg',
      generos: ['Família', 'Animação'],
      pagina: '/barbie',
      favorito: false
    }
  ];

}
*/
}
