import { HttpClientModule } from '@angular/common/http';
import { fakeAsync, flush, TestBed } from '@angular/core/testing';
import { asyncData } from 'async-observable-helpers';

import { PokemonsComponent } from './pokemons.component';
import { PokemonsService } from './pokemons.service';

describe('PokemonsComponent', () => {
  let allPokemonsSpy: any;
  let testPokemons = {
    results: [{
      name: "Pikachu",
      url: ""
    }]
  };

  beforeEach(async () => {
    const pokemonsService = jasmine.createSpyObj('PokemonsService', ['all'], testPokemons);

    allPokemonsSpy = pokemonsService.all.and.returnValue(testPokemons)
    allPokemonsSpy.and.returnValue(asyncData(testPokemons));

    await TestBed
      .configureTestingModule({
        providers: [
          {
            provide: PokemonsService,
            useValue: pokemonsService
          }
        ],
        imports: [HttpClientModule],
        declarations: [PokemonsComponent],
      })
      .compileComponents();
  });

  it('should render pokemons list', fakeAsync(() => {
    const fixture = TestBed.createComponent(PokemonsComponent);

    fixture.detectChanges();
    flush();
    fixture.detectChanges();

    const $pokemon = fixture.nativeElement.querySelector('li');
    expect($pokemon.textContent).toContain('Pikachu');
  }));
});
