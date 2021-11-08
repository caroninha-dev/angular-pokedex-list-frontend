import { Component } from '@angular/core';
import { Pokemon } from './Pokemons';
import { PokemonsService } from './pokemons.service';

@Component({
  selector: 'pokemons-list',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public pokemons: Pokemon[] = [];

  constructor(private pokemonService: PokemonsService) { }

  ngOnInit() {
    this.pokemonService.all().subscribe((response) => {
      this.pokemons = response.results;
    })
  }
}
