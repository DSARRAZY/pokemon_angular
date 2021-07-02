import { Component, OnInit } from '@angular/core';

import { GENERATIONS } from './mock-generations';
import { Generations } from './generations';

@Component({
  selector: 'app-generations',
  templateUrl: './generations.component.html',
  styleUrls: ['./generations.component.css']
})
export class GenerationsComponent implements OnInit {

  generations = GENERATIONS;

  constructor() { }

  ngOnInit(): void {
  }

}
