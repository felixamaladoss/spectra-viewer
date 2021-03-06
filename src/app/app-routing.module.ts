import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ViewChartComponent} from './view-chart/view-chart.component';
import {HomeComponent} from "./home/home.component";


const routes: Routes = [
  {
  path: 'chart',
  data: {title: 'Spectrum Chart Viewer'},
  component: ViewChartComponent
  },
  {
    path: '',
    data: {title: 'Chart Viewer Home'},
    component: HomeComponent
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
