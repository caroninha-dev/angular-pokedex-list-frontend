import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pokemon, PokemonsResponse } from './Pokemons';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {

  constructor(private httpClient: HttpClient) { }

  all(): Observable<PokemonsResponse> {
    const url = 'https://pokeapi.co/api/v2/pokemon';

    return this.httpClient.get<PokemonsResponse>(url)
  }
}
