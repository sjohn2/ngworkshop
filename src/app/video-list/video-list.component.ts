import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import {IVideo, IVideoDetails} from '../interfaces';

import {VideoService} from '../services/video.service';



@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {

  @Output() onSelectedVideo = new EventEmitter<IVideo>();
  videoData: IVideo[];
  activeIndex: number;
  constructor(private videoService: VideoService) {
    this.videoData = this.videoService.getVideos();
   }

  ngOnInit() {
  }

 setActive(index: number, video:IVideo): void{
  console.log("from list",video);
  this.onSelectedVideo.emit(video);
   this.activeIndex = index;

 }


}
