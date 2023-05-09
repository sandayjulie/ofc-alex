import { Component } from '@angular/core';
import { IAtores } from '../model/IAtores'

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor() {}

  listaAtores: IAtores[] = [
    {
      nome: 'José Pedro Balmaceda Pascal',
      nascimento: '1975-04-02',
      idade: '48 anos de idade',
      genero: 'Masculino',
      nascenca: 'Santiago, Chile',
      foto: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/dBOrm29cr7NUrjiDQMTtrTyDpfy.jpg',
      pagina: '/PEDRO<3',
      favorito: true
    },
    {
      nome: 'Millie Bobby Brown',
      nascimento: '2004-02-19',
      idade: '19 anos de Idade',
      genero: 'Feminino',
      nascenca: 'Marbella, Málaga, Andalusia, Spain',
      foto: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/v30xviO4bvD9ex6CNdfB2XtVgRb.jpg',
      pagina: '/millie',
      favorito: false
    },
    {
      nome: 'Chris Hemsworth',
      nascimento: '1983-08-11',
      idade: '39 anos de Idade',
      genero: 'Masculino',
      nascenca: 'Melbourne, Victoria, Australia',
      foto: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/jpurJ9jAcLCYjgHHfYF32m3zJYm.jpg',
      pagina: '/chris',
      favorito: false
    },
    {
      nome: 'Zendaya Coleman',
      nascimento: '1996-09-01',
      idade: '26 anos de Idade',
      genero: 'Feminino',
      nascenca: 'Oakland, California, USA',
      foto: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/6TE2AlOUqcrs7CyJiWYgodmee1r.jpg',
      pagina: '/zendaya',
      favorito: false
    },
    {
      nome: 'Angelina Jolie',
      nascimento: '1975-06-04',
      idade: '47 anos de Idade',
      genero: 'Feminino',
      nascenca: 'Los Angeles, California, USA',
      foto: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/k3W1XXddDOH2zibPkNotIh5amHo.jpg',
      pagina: '/angelina',
      favorito: false
    }
  ];
}
