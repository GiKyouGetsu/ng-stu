import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-font-resizer',
  templateUrl: './font-resizer.component.html',
  styleUrls: ['./font-resizer.component.scss']
})
export class FontResizerComponent implements OnInit {

  @Input() size: number | string;
  @Output() sizeChange = new EventEmitter<number>();

  
  constructor() { }


  dec(){
    this.resize(-1)
  }

  
  inc(){
    this.resize(+1)
  }

  resize(size: number) {
    this.size = Math.min(40, Math.max(8, +this.size + size));
    this.sizeChange.emit(this.size);
  }

  ngOnInit() {
  }

}
