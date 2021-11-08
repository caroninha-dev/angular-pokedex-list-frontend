import { Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonsService } from './pokemons.service';
import { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [PokemonsService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private injector: Injector) {
    const customPokemonListElement = createCustomElement(AppComponent, { injector })
    customElements.define('pokemons-list', customPokemonListElement);
  }

  ngDoBootstrap() { }
}
