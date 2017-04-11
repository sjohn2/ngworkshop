import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-video-viewer',
  templateUrl: './video-viewer.component.html',
  styleUrls: ['./video-viewer.component.css']
})
export class VideoViewerComponent implements OnInit {

  @Input() video; 
  constructor() { }

  ngOnInit() {
  }

}
