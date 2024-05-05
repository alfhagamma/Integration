import { Component } from '@angular/core';
import { SonComponent } from './son/son.component';
import { SimpleformComponent } from './simpleform/simpleform.component';
import { ReactFormComponent } from './react-form/react-form.component';

@Component({
  selector: 'app-father',
  standalone: true,
  imports: [SonComponent, SimpleformComponent, ReactFormComponent],
  templateUrl: './father.component.html',
  styleUrl: './father.component.css'
})
export class FatherComponent {
  nameFather = 'Santiago';
  price = 14;

  names = [
    {
      id: 1,
      name: 'Santiago',
      lastName: 'Munera',
      profession: 'Ingenier',
      age: 34
    },
    {
      id: 2,
      name: 'Marcela',
      lastName: 'Díaz',
      profession: 'Saleswoman',
      age: 28
    },
    {
      id: 3,
      name: 'Federico',
      lastName: 'Perez',
      profession: 'Manager',
      age: 65
    },
    {
      id: 4,
      name: 'Lucrecia',
      lastName: 'Alpujarra',
      profession: 'Arquitect',
      age: 29
    }
  ];
}
