import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoreShowComponent } from './score-show.component';

describe('ScoreShowComponent', () => {
  let component: ScoreShowComponent;
  let fixture: ComponentFixture<ScoreShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScoreShowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoreShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
