import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QADataService } from '../q-a-data.service';
import { ScoreService } from '../score.service';
@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css'],
})
export class QuizComponent implements OnInit {
  constructor(public router: Router, public score: ScoreService,public qA:QADataService) {}

  ngOnInit(): void {}
  clickHandle(i: number) {
    this.currentQuestion++;
    this.userAnswears.push(i);
    if (this.currentQuestion == this.q_a.length) {
      this.q_a.forEach((e, i) => {
        if (e.correctAnswear == this.userAnswears[i]) {
          this.userCorrectAnswers++;
        }
      });
      this.score.scores[Number(this.id)].score =
        (this.userCorrectAnswers / this.q_a.length) * 100;
      this.router.navigate(['/', 'score', this.id]);
    }
  }
  id = this.router.url.substring(7);
  currentQuestion = 0;
  userCorrectAnswers = 0;
  userAnswears: number[] = [];
  colours = ['red', 'green', 'blue', 'yellow', 'cyan', 'white'];
  q_a=this.qA.q_a
  
}
