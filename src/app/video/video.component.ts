import { Component, Input,  OnInit } from '@angular/core';
import {IVideo, IVideoDetails} from '../interfaces';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})

export class VideoComponent implements OnInit {
  
  @Input() video:IVideo;


  constructor() { }

  ngOnInit() {
  }

 

}
