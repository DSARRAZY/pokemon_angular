import { Component, OnInit } from '@angular/core';

import {POKEMONS} from "./mock-pokemons";

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent implements OnInit {

  pokemons = POKEMONS;

  constructor() { }

  ngOnInit(): void {
  }

}
