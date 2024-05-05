import { Component } from '@angular/core';
import { ArticlewebService } from '../articleweb.service';

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [],
  templateUrl: './article.component.html',
  styleUrl: './article.component.css'
})
export class ArticleComponent {
  
  articles:any;

  constructor(private articleService: ArticlewebService) {
    this.articleService.retornar()
     .subscribe(data => {
        this.articles = data;
        //console.log(this.articles);
      });
  }


}
