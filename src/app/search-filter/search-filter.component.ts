import { Component, OnInit,Output,EventEmitter,Input } from '@angular/core';

@Component({
  selector: 'app-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.scss']
})
export class SearchFilterComponent implements OnInit {
  @Input() result:string="";
   @Output() onChange = new EventEmitter();
   @Output() clicked=new EventEmitter<string>();

  constructor() { }
    ngOnInit() {
  }
  // onClick(searchTerm:string){
  //   this.clicked.emit(searchTerm);
  // }

  change(searchTerm:string){
    this.onChange.emit(searchTerm);
    console.log(searchTerm)
  }
  onClick(searchTerm:string){
  this.clicked.emit(searchTerm);
  }

}
