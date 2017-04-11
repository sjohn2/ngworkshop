import { Component, OnInit } from '@angular/core';
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

  constructor() { }

  ngOnInit() {
  }

}
