import { ApplicationRef, Injectable } from '@angular/core';
import { Ibutton } from './interfaces';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ButtonService {
  constructor(public https: HttpClient, public change: ApplicationRef) {}
  buttons: Ibutton[] = [];

  refresh() {
    this.https.get<Ibutton[]>('http://localhost:8000/').subscribe((data) => {
      this.buttons = data;
      console.log(this.buttons);
      this.change.tick();
    });
  }
 
}
