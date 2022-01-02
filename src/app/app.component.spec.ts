import { HttpClientModule } from '@angular/common/http';
import { DebugElement } from '@angular/core';
import { fakeAsync, flush, TestBed, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { asyncData } from 'async-observable-helpers';

import { AppComponent } from './app.component';
import { PokemonsService } from './pokemons.service';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
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
        declarations: [AppComponent],
      })
      .compileComponents();

    fixture = TestBed.createComponent(AppComponent);
  });

  it('should render pokemons list with <li> as item list', fakeAsync(() => {
    fixture.detectChanges();
    flush();
    fixture.detectChanges();

    const appDe: DebugElement = fixture.debugElement;
    const listItemDe = appDe.query(By.css('li'));

    expect(listItemDe).not.toBeNull();

    const $element: HTMLElement = listItemDe.nativeElement;

    expect($element.textContent).toContain('Pikachu');
  }));
});
