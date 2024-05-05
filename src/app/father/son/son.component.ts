import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-son',
  standalone: true,
  imports: [],
  templateUrl: './son.component.html',
  styleUrl: './son.component.css'
})
export class SonComponent implements OnInit {

  @Input() name = '';
  @Input() priceInt:number = 0
  @Output() nameChange = new EventEmitter<string>();
  constructor() { }

  @Input() namesInSon:any = [];

  ngOnInit() {
    this.nameChange.emit("Gerardo");
  }
}
