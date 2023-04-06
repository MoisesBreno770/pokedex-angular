import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  pokemons = [];

  constructor(private httpClient: HttpClient) { 
    this.carryPokemons();
  }

  async carryPokemons() {
    try {
      await this.httpClient.get<any>('https://pokeapi.co/api/v2/pokemon?limit=151').subscribe(req => this.pokemons = req.results);
    } 
    catch (e) {
      console.log(e);
    }

  }
}
