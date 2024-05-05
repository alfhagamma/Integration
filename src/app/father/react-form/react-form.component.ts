import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-react-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './react-form.component.html',
  styleUrl: './react-form.component.css'
})
export class ReactFormComponent {
  actividad = new FormControl();
  items:any

  constructor() {
    this.items = [];
    let datos = localStorage.getItem("actividades");
    if (datos != null) {
      let arreglo = JSON.parse(datos);
      if (arreglo != null)
        for (let actividad of arreglo)
          this.items.push(actividad);
    }
  }

  add() {
    this.items.push(this.actividad.value);
  }

  deleteAll() {
    localStorage.clear();
    this.items = [];
  }
}
