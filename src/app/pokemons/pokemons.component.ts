import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from './Pokemons';
import { PokemonsService } from './pokemons.service';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent implements OnInit {
  public pokemons: Pokemon[] = [];

  constructor(private pokemonService: PokemonsService) { }

  ngOnInit() {
    this.pokemonService.all().subscribe((response) => {
      this.pokemons = response.results;
    })
  }
}
