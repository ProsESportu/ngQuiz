import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ScoreService } from '../score.service';


@Component({
  selector: 'app-score-show',
  templateUrl: './score-show.component.html',
  styleUrls: ['./score-show.component.css']
})
export class ScoreShowComponent implements OnInit {

  constructor(public scoreServ:ScoreService,public router:Router ) { }
  ngOnInit(): void {
  }
  id=this.router.url.slice(7)
  score=this.scoreServ.scores[Number(this.id)]
  class = Number(this.score.score)>=50?"green":"red"
}
