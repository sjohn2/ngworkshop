import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { VideoListComponent } from '../video-list/video-list.component';
import { VideoViewerComponent } from '../video-viewer/video-viewer.component';
import { StatFiltersComponent } from '../stat-filters/stat-filters.component';
import { StatGraphsComponent } from '../stat-graphs/stat-graphs.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  @Output() onSendToParent:EventEmitter<String> = new EventEmitter<String>();


  selected;
  constructor() { }

  ngOnInit() {
  }

  videoSelected(video){
    console.log(video);
    this.selected =  video; 
  }

  dashboardSendToParent(event){
    console.log("dashboard", event);
  }
  dashboardCaptureFilterEvent(str){
    console.log("event click");
  }

}
