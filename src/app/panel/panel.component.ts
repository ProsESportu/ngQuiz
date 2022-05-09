import { Component, OnInit } from '@angular/core';
import { ButtonService } from '../button.service';
import { ScoreService } from '../score.service';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css'],
})
export class PanelComponent implements OnInit {
  constructor(
    public score: ScoreService,
    public button: ButtonService,

  ) {}
  ngOnInit(): void {
    this.button.refresh();
  }
  buttons = this.button.buttons;

  
}
