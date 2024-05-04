import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    ExploreContainerComponent,
  ],
})
export class Tab1Page implements OnInit {

  pokemon: any;

  constructor() {}

  ngOnInit() {
    //genera un número aleatorio entre 1 y 151
    const randomId = Math.floor(Math.random() * 151) + 1;

    fetch('https://pokeapi.co/api/v2/pokemon/' + randomId)
      .then((response) => response.json())
      .then((data) => {
        // Aquí puedes trabajar con los datos del Pokémon, como imprimirlos en la consola
        console.log(data);
        this.pokemon = data;
        console.log('sprite: ', this.pokemon.sprites.front_default);
        
      })
      .catch((error) => {
        // Manejo de errores
        console.error('¡Hubo un error!', error);
      });
  }
}


