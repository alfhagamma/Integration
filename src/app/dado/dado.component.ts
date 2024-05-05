import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../articles.service';

@Component({
  selector: 'app-dado',
  standalone: true,
  imports: [],
  templateUrl: './dado.component.html',
  styleUrl: './dado.component.css'
})
export class DadoComponent implements OnInit {
  title: string = 'Fruts'
  articles: any;

  arts = [
    {
      code: 1,
      description: 'Potate',
      price: 12.33
    },
    {
      code: 2,
      description: 'Apple',
      price: 15.00
    }
  ];

  constructor(private articlesService:ArticlesService) {

  }
  ngOnInit() {
    this.articles = this.articlesService.retornar();
  }

  createAlert() {
    alert('Hello World');
  }
}
