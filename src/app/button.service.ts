import { Injectable } from '@angular/core';
import { Ibutton } from './interfaces';
@Injectable({
  providedIn: 'root',
})
export class ButtonService {
  constructor() {}
  buttons: Ibutton[] = [
    {
      name: 'huj',
      description: '2137',
    },
    {
      name: 'lorem',
      description: 'lorem ipsum',
    },
  ];
  
  
}
