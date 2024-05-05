import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

 constructor() { }

  retornar () {
    return [
      {
        code: 1,
        description: 'Potate',
        price: 12.33
      },
      {
        code: 2,
        description: 'Apple',
        price: 15.00
      },
      {
        code: 3,
        description: 'Berry',
        price: 20.63
      },
      {
        code: 4,
        description: 'Orange',
        price: 5.25
      },
      {
        code: 5,
        description: 'Banana',
        price: 7.86
      }
    ];
  }
}

