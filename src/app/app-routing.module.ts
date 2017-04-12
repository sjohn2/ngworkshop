import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { VideoListComponent } from './video-list/video-list.component';
import { VideoViewerComponent } from './video-viewer/video-viewer.component';
import { StatFiltersComponent } from './stat-filters/stat-filters.component';
import { StatGraphsComponent } from './stat-graphs/stat-graphs.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { VideoComponent } from './video/video.component';
import { VideoService } from './services/video.service';

const routes: Routes = [
  { path: '',redirectTo:'dashboard', pathMatch: 'full'},
  { path: 'dashboard', component: DashboardComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
    ],
  exports: [RouterModule],
  declarations: [
    VideoListComponent,
    VideoViewerComponent,
    StatFiltersComponent,
    StatGraphsComponent,
    DashboardComponent,
    VideoComponent
  ],
  providers: [VideoService],
})
export class AppRoutingModule { }
