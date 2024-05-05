import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { DadoComponent } from './dado/dado.component';
import { FatherComponent } from './father/father.component';
import { ArticleComponent } from './article/article.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DadoComponent, FatherComponent, RouterLink, ArticleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Integration';
}
