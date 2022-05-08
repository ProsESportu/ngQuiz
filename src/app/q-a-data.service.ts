import { Injectable } from '@angular/core';
import { Iq_a } from "./interfaces";
@Injectable({
  providedIn: 'root'
})
export class QADataService {

  constructor() { }
  q_a: Iq_a[] = [
    {
      question:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce imperdiet cursus erat a imperdiet. Etiam vestibulum augue non lorem blandit, non congue urna dictum. Aliquam elementum arcu sit amet libero rhoncus dictum. Donec at lorem a velit auctor blandit at vitae erat.',
      correctAnswear: 0,
      answears: [
        'Lorem ipsum dolor sit amet',
        'consectetur adipiscing elit',
        'sed do eiusmod tempor',
        'incididunt ut labore et dolore magna aliqua',
        'huj ciw',
      ],
    },
    {
      question:
        'Curabitur euismod augue feugiat sollicitudin gravida. Duis in convallis libero. Nullam at condimentum nibh, eu semper leo. Integer suscipit elementum fermentum. Pellentesque scelerisque ullamcorper aliquam. Sed varius mauris velit, id pretium lacus euismod eu. Sed imperdiet feugiat ante.',
      correctAnswear: 1,
      answears: [
        'Auctor augue mauris augue neque gravida',
        'Ut enim blandit volutpat maecenas',
        'volutpat blandit aliquam etiam',
        'Eu feugiat pretium nibh ipsum',
      ],
    },
    {
      question:
        'Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed dolor felis, aliquet in arcu at, commodo elementum dolor. Fusce sed aliquet massa, aliquam commodo purus. Nunc ipsum nisl, commodo nec arcu id, tempor cursus mauris. Curabitur non sagittis sapien, et placerat ligula.',
      correctAnswear: 2,
      answears: [
        'onsequat nisl vel pretium',
        'Cursus vitae congue mauris',
        'rhoncus aenean vel elit scelerisque',
        'Viverra orci sagittis eu volutpat',
      ],
    },
    {
      question:
        'Nullam aliquam magna in nisi tincidunt sollicitudin. Fusce quis ultrices ex, ac congue purus. Nulla pretium vitae massa et tristique. Donec pellentesque arcu nec ipsum rhoncus, in vehicula odio volutpat. Nullam finibus rutrum commodo. Curabitur sed est porttitor, pellentesque massa ut, hendrerit magna. Sed nec auctor lorem.',
      correctAnswear: 3,
      answears: [
        'dio facilisis mauris sit',
        'Mauris cursus mattis molestie a',
        'Neque viverra justo nec ultrices',
        'dui sapien eget mi',
      ],
    },
  ];
}
