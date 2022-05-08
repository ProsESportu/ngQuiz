import { Injectable } from '@angular/core';
import { IScores } from "./interfaces";
@Injectable({
  providedIn: 'root'
})
export class ScoreService {

  constructor() { }

  scores:IScores[]=[
    {name:"lorem"},
    {name:"example",score:100}
  ]
}
