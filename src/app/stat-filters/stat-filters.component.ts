import { Component, OnInit , Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-stat-filters',
  templateUrl: './stat-filters.component.html',
  styleUrls: ['./stat-filters.component.css']
})
export class StatFiltersComponent implements OnInit {

  @Output() onSendToParent:EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  emitToParent(){
    console.log("send to parent");
    this.onSendToParent.emit("test message");

  }

}
